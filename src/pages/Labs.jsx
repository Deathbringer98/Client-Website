
import React from 'react'
import Layout from '../components/Layout.jsx'
import printer from '../assets/labs-3dprint.png'
export default function Labs(){
  return (
    <Layout>
      <section className="relative">
        <div className="max-w-5xl mx-auto container-px pt-20 pb-16">
          <h1 className="text-3xl md:text-5xl font-semibold">Konarr Labs</h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            Konarr Labs is dedicated to rapid prototyping and applied research across software & hardware for your personal and corporate 3D printed needs.
          </p>
          <div className="mt-8 card overflow-hidden">
            <img src={printer} alt="3D printer building KONARR logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
