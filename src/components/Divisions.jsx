
import React from 'react'

const divisions = [
  { name: "Konarr Silicon", tag: "Materials", blurb: "High‑performance silicones and elastomers for extreme environments."},
  { name: "Konarr Racing", tag: "Motorsport", blurb: "Lightweight composites, aero, and telemetry for track domination."},
  { name: "Konarr Labs", tag: "R&D", blurb: "Rapid prototyping and applied research across software & hardware."},
  { name: "Konarr Systems", tag: "Software", blurb: "Cloud services and edge apps powering Konarr operations."},
]

export default function Divisions(){
  return (
    <section id="divisions" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto container-px">
        <header className="mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold">Divisions</h2>
          <p className="text-white/70 mt-2 max-w-2xl">Each branch operates independently while sharing a common design system, infrastructure, and manufacturing philosophy.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((d) => (
            <article className="card p-5 flex flex-col" key={d.name}>
              <div className="text-xs uppercase tracking-wider text-white/60">{d.tag}</div>
              <h3 className="mt-2 text-lg font-semibold">{d.name}</h3>
              <p className="mt-2 text-white/70 text-sm flex-1">{d.blurb}</p>
              <a href="#" className="mt-4 btn btn-ghost text-sm">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
