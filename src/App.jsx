
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Silicon from './pages/Silicon.jsx'
import Racing from './pages/Racing.jsx'
import Labs from './pages/Labs.jsx'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/silicon" element={<Silicon />} />
      <Route path="/racing" element={<Racing />} />
      <Route path="/labs" element={<Labs />} />
    </Routes>
  )
}
