"use client"

import { useState } from "react"

const initialValues = {
  name: "",
  email: "",
  company: "",
  division: "Konarr Labs",
  message: "",
  website: ""
}

export default function ContactForm() {
  const [form, setForm] = useState(initialValues)
  const [status, setStatus] = useState({ type: "idle", message: "" })
  const [loading, setLoading] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (form.website.trim()) {
      setStatus({
        type: "success",
        message: "Thanks, your message has been received."
      })
      return
    }

    setLoading(true)
    setStatus({ type: "idle", message: "" })

    const subject = encodeURIComponent(`Konarr project inquiry | ${form.division}`)
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Organization: ${form.company || "Not provided"}`,
        `Division: ${form.division}`,
        "",
        "Project Brief:",
        form.message
      ].join("\n")
    )

    window.location.href = `mailto:Konarr2025@hotmail.com?subject=${subject}&body=${body}`

    setStatus({
      type: "success",
      message: "Your email app has opened with your pre-filled project brief."
    })
    setLoading(false)
    setForm(initialValues)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-konarr-line bg-konarr-panel p-7 shadow-panel">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-konarr-muted">
          Full Name
          <input
            className="w-full rounded-xl border border-konarr-line bg-konarr-base px-4 py-3 text-konarr-text outline-none transition focus:border-konarr-accent"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="space-y-2 text-sm text-konarr-muted">
          Work Email
          <input
            className="w-full rounded-xl border border-konarr-line bg-konarr-base px-4 py-3 text-konarr-text outline-none transition focus:border-konarr-accent"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="space-y-2 text-sm text-konarr-muted">
          Organization
          <input
            className="w-full rounded-xl border border-konarr-line bg-konarr-base px-4 py-3 text-konarr-text outline-none transition focus:border-konarr-accent"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
          />
        </label>

        <label className="space-y-2 text-sm text-konarr-muted">
          Project Division
          <select
            className="w-full rounded-xl border border-konarr-line bg-konarr-base px-4 py-3 text-konarr-text outline-none transition focus:border-konarr-accent"
            name="division"
            value={form.division}
            onChange={handleChange}
          >
            <option>Konarr Sports</option>
            <option>Konarr Creations</option>
            <option>Konarr Silicon</option>
            <option>Konarr Labs</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block space-y-2 text-sm text-konarr-muted">
        Project Brief
        <textarea
          className="min-h-36 w-full rounded-xl border border-konarr-line bg-konarr-base px-4 py-3 text-konarr-text outline-none transition focus:border-konarr-accent"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Website
        <input
          tabIndex={-1}
          autoComplete="off"
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-konarr-accent px-6 py-3 text-sm font-semibold text-konarr-base transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-65"
      >
        {loading ? "Preparing Email..." : "Submit Project Brief"}
      </button>

      {status.type !== "idle" && (
        <p
          className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-300/40 bg-emerald-400/10 text-emerald-200"
              : "border-red-300/40 bg-red-400/10 text-red-200"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  )
}
