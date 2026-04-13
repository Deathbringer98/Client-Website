import { NextResponse } from "next/server"

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request) {
  try {
    const body = await request.json()
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

    console.info("[Konarr Inquiry]", {
      reference,
      receivedAt: new Date().toISOString(),
      name,
      email,
      company,
      division,
      message
    })

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
