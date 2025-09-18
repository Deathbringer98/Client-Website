
import React from 'react'
import { Link } from 'react-router-dom'

const divisions = [
  { name: "Konarr Sports", tag: "Motorsports/E-Sports", blurb: "Konarr Sports specializes in lightweight composites, aero, and telemetry for track & E-Sports domination.", href: "/racing" },
  { name: "Konarr Creations", tag: "CAD-Design/3D Printing", blurb: "Konarr Creations specializes in CAD design and 3D printing services.", href: "/" },
  { name: "Konarr Silicon", tag: "Materials", blurb: "Konarr Silicon is our Software & Hardware division which focuses on Software and Hardware development.", href: "/silicon" },
  { name: "Konarr Labs", tag: "R&D", blurb: "Konarr Labs is dedicated to rapid prototyping and applied research across software & hardware for your personal and corporate 3D printed needs.", href: "/labs" },
]

export default function Divisions(){
  return (
    <section id="divisions" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto container-px">
        <header className="mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold">Divisions</h2>
          <p className="text-white/70 mt-2 max-w-2xl mx-auto">Each branch operates independently while sharing a common design system.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-6 max-w-6xl mx-auto">
          {divisions.map((d) => (
            <article className="card p-5 flex flex-col" key={d.name}>
              <div className="text-xs uppercase tracking-wider text-white/60">{d.tag}</div>
              <h3 className="mt-2 text-lg font-semibold">{d.name}</h3>
              <p className="mt-2 text-white/70 text-sm flex-1">{d.blurb}</p>
              <Link to={d.href} className="mt-4 btn btn-ghost text-sm">Open page →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
