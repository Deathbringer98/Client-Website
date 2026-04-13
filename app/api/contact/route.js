import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const inboxEmail = process.env.CONTACT_TO_EMAIL || "Konarr2025@hotmail.com"
const senderEmail = process.env.CONTACT_FROM_EMAIL || "Konarr Website <onboarding@resend.dev>"
const RATE_WINDOW_MS = Number(process.env.CONTACT_RATE_WINDOW_MS || 10 * 60 * 1000)
const RATE_MAX_ATTEMPTS = Number(process.env.CONTACT_RATE_MAX_ATTEMPTS || 5)
const HONEYPOT_FIELD = "website"

const limiter = globalThis.__konarrContactLimiter ?? new Map()
if (!globalThis.__konarrContactLimiter) {
  globalThis.__konarrContactLimiter = limiter
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim()
  }

  const realIp = request.headers.get("x-real-ip")
  if (realIp) {
    return realIp.trim()
  }

  return "unknown"
}

function enforceRateLimit(clientKey) {
  const now = Date.now()
  const bucket = limiter.get(clientKey)

  if (!bucket || now > bucket.resetAt) {
    limiter.set(clientKey, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return { allowed: true }
  }

  if (bucket.count >= RATE_MAX_ATTEMPTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) }
  }

  bucket.count += 1
  limiter.set(clientKey, bucket)
  return { allowed: true }
}

export async function POST(request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: "Server email is not configured. Add RESEND_API_KEY in your deployment environment." },
        { status: 500 }
      )
    }

    const body = await request.json()
    const honeypotValue = body?.[HONEYPOT_FIELD]

    if (typeof honeypotValue === "string" && honeypotValue.trim()) {
      return NextResponse.json({ ok: true, accepted: true }, { status: 200 })
    }

    const clientIp = getClientIp(request)
    const limit = enforceRateLimit(clientIp)
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a few minutes and try again." },
        { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds || 60) } }
      )
    }

    const name = body?.name?.trim()
    const email = body?.email?.trim()
    const company = body?.company?.trim() || "Not provided"
    const division = body?.division?.trim()
    const message = body?.message?.trim()

    if (!name || !email || !division || !message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please use a valid email address." }, { status: 400 })
    }

    const reference = `KNR-${Date.now().toString().slice(-6)}`

    const textContent = [
      `Reference: ${reference}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Division: ${division}`,
      "",
      "Message:",
      message
    ].join("\n")

    const safeReference = escapeHtml(reference)
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeCompany = escapeHtml(company)
    const safeDivision = escapeHtml(division)
    const safeMessage = escapeHtml(message)

    const htmlContent = `
      <div style="font-family:Arial,sans-serif;color:#0b1215;line-height:1.5;max-width:680px">
        <h2 style="margin:0 0 16px">New Konarr Website Inquiry</h2>
        <p style="margin:0 0 12px"><strong>Reference:</strong> ${safeReference}</p>
        <p style="margin:0 0 8px"><strong>Name:</strong> ${safeName}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> ${safeEmail}</p>
        <p style="margin:0 0 8px"><strong>Company:</strong> ${safeCompany}</p>
        <p style="margin:0 0 16px"><strong>Division:</strong> ${safeDivision}</p>
        <p style="margin:0 0 6px"><strong>Message</strong></p>
        <div style="white-space:pre-wrap;border:1px solid #d5dee3;border-radius:8px;padding:12px">${safeMessage}</div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [inboxEmail],
      replyTo: email,
      subject: `Konarr inquiry ${reference} | ${division}`,
      text: textContent,
      html: htmlContent
    })

    if (error) {
      console.error("Resend send failure", error)
      return NextResponse.json({ error: "Unable to send your message right now. Please try again shortly." }, { status: 502 })
    }

    return NextResponse.json({
      ok: true,
      reference,
      message: "Your inquiry was received successfully."
    })
  } catch (error) {
    console.error("Contact API error", error)
    return NextResponse.json({ error: "Unable to process your request right now." }, { status: 500 })
  }
}
