import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSent(false)

    try {
      const resp = await emailjs.send(
        "service_4ttvr6b",          // Service ID (your working one)
        "template_m90bljm",        // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company,
          message: form.message,
          to_email: "Konarr2025@hotmail.com", // 🔥 Hardcoded recipient
        },
        "5X5zxs1tB2bFsBHEi"        // Public key
      )

      if (resp.status === 200) {
        setSent(true)
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        throw new Error('Unexpected response from EmailJS')
      }
    } catch (err) {
      console.error("EmailJS error:", err)
      setError('Something went wrong — please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto container-px card p-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Start a conversation</h2>
        <p className="mt-2 text-white/70">
          Tell us a bit about your project and which Konarr division it touches. We'll respond quickly.
        </p>

        <form className="mt-6 grid sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 sm:col-span-1"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 sm:col-span-1"
          />
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company (optional)"
            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 sm:col-span-2"
          />
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What's the challenge?"
            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 sm:col-span-2"
          />

          <button
            type="submit"
            className="btn btn-primary sm:col-span-2"
            disabled={loading}
          >
            {loading ? 'Sending…' : 'Send'}
          </button>

          {sent && (
            <div className="sm:col-span-2 text-green-400 text-sm mt-1">
              ✅ Thanks — your message was sent.
            </div>
          )}
          {error && (
            <div className="sm:col-span-2 text-red-400 text-sm mt-1">
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
