
import React from 'react'
import board from '../assets/konarr-stencil-board.jpg'

export default function About(){
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto container-px grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-4xl font-semibold">Built in Canada. Operates globally.</h2>
          <p className="mt-4 text-white/70">
            Konarr unifies product design, engineering, and operations under one brand. Our teams ship quickly, document rigorously,
            and iterate with customers in the loop.
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• Modular brand architecture for spin‑off ventures</li>
            <li>• Shared component library and asset pipeline</li>
            <li>• Supply‑chain and QA baked into development</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="card overflow-hidden">
            <img src={board} alt="Konarr stencil" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
