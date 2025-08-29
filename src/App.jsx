
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Divisions from './components/Divisions.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Divisions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
