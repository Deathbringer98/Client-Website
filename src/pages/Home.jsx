
import React from 'react'
import Layout from '../components/Layout.jsx'
import Hero from '../components/Hero.jsx'
import Divisions from '../components/Divisions.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
export default function Home(){
  return (
    <Layout>
      <Hero />
      <Divisions />
      <About />
      <Contact />
    </Layout>
  )
}
