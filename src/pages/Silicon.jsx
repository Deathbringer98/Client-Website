
import React from 'react'
import Layout from '../components/Layout.jsx'
import wafer from '../assets/silicon-wafer.png'
export default function Silicon(){
  return (
    <Layout>
      <section className="relative">
        <div className="max-w-5xl mx-auto container-px pt-20 pb-16">
          <h1 className="text-3xl md:text-5xl font-semibold">Konarr Silicon</h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            Konarr Silicon is our Software & Hardware division which focuses on Software and Hardware development.
          </p>
          <div className="mt-8 card overflow-hidden">
            <img src={wafer} alt="Silicon wafer with KONARR logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
