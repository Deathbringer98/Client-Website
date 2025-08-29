
import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto container-px card p-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Start a conversation</h2>
        <p className="mt-2 text-white/70">Tell us a bit about your project and which Konarr division it touches. We'll respond quickly.</p>
        <form className="mt-6 grid sm:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
          <input className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring focus:ring-white/20 sm:col-span-1" placeholder="Name" />
          <input className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring focus:ring-white/20 sm:col-span-1" placeholder="Email" type="email" />
          <input className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring focus:ring-white/20 sm:col-span-2" placeholder="Company (optional)" />
          <textarea rows="5" className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring focus:ring-white/20 sm:col-span-2" placeholder="What's the challenge?" />
          <button className="btn btn-primary sm:col-span-2">Send</button>
        </form>
      </div>
    </section>
  )
}
