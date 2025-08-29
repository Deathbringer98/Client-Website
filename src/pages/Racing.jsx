
import React from 'react'
import Layout from '../components/Layout.jsx'
import car from '../assets/racing-konarr.png'
export default function Racing(){
  return (
    <Layout>
      <section className="relative">
        <div className="max-w-5xl mx-auto container-px pt-20 pb-16">
          <h1 className="text-3xl md:text-5xl font-semibold">Konarr Racing</h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            Konarr Racing specializes in lightweight composites, aero, and telemetry for track domination.
          </p>
          <div className="mt-8 card overflow-hidden">
            <img src={car} alt="KONARR racecar" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
