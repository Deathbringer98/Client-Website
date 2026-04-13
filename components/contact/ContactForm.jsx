"use client"

import { useState } from "react"

const initialValues = {
  name: "",
  email: "",
  company: "",
  division: "Konarr Labs",
  message: ""
}

export default function ContactForm() {
  const [form, setForm] = useState(initialValues)
  const [status, setStatus] = useState({ type: "idle", message: "" })
  const [loading, setLoading] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setStatus({ type: "idle", message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })

      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.error || "Unable to send your message right now.")
      }

      setStatus({
        type: "success",
        message: `Thanks, ${form.name}. Your brief has been queued with reference ${payload.reference}.`
      })
      setForm(initialValues)
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong while submitting the form."
      })
    } finally {
      setLoading(false)
    }
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

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-konarr-accent px-6 py-3 text-sm font-semibold text-konarr-base transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-65"
      >
        {loading ? "Submitting Brief..." : "Submit Project Brief"}
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
