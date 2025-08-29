
import React from 'react'
import wordmark from '../assets/konarr-logotype.png'
import maple from '../assets/canada-flag-bw.png'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <img src={maple} alt="" className="opacity-[0.06] w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto container-px pt-24 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={wordmark} alt="Konarr" className="w-[320px] md:w-[420px]" />
            <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight">
              An umbrella for bold ventures.
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Konarr is a parent brand powering specialized divisions—from advanced materials to motorsport engineering.
              We build, test, and ship products that feel inevitable.
            </p>
            <div className="mt-8 flex gap-3">
              <a className="btn btn-primary" href="#divisions">Explore divisions</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-white/70 text-sm">Spotlight</div>
            <div className="mt-2 text-xl font-medium">Design language</div>
            <p className="mt-3 text-white/70">
              A dark, industrial UI system inspired by precision manufacturing. Reusable, accessible components across every Konarr property.
            </p>
            <div className="mt-6 aspect-video overflow-hidden rounded-xl border border-white/10">
              <img src={maple} alt="Design motif" className="w-full h-full object-cover opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
