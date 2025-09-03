import React, { useMemo, useState } from 'react'
import { racingProducts } from '../../data/products/racing'
import ProductCard from '../../components/store/ProductCard'
import CartDrawer from '../../components/store/CartDrawer'
import StoreNavbar from '../../components/StoreNavbar'

export default function RacingStore() {
  const [query, setQuery] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return racingProducts
    return racingProducts.filter(p => p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q))
  }, [query])

  const addToCart = (item) => {
    setCart((prev) => {
      const ix = prev.findIndex((p) => p.id === item.id)
      if (ix >= 0) {
        const next = [...prev]
        next[ix] = { ...next[ix], qty: next[ix].qty + 1 }
        return next
      }
      return [...prev, { ...item, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id))

  return (
    <div>
      <StoreNavbar />
      <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto container-px">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Konarr Racing — Store</h1>
            <p className="text-white/70 mt-1">Suits, team gear, and custom parts.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 w-full md:w-72" placeholder="Search gear or parts…" />
            <button className="btn" onClick={() => setCartOpen(true)}>Cart ({cart.reduce((n, it) => n + it.qty, 0)})</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.map((item) => (<ProductCard key={item.id} item={item} onAdd={addToCart} />))}
        </div>
      </div>
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
    </section>
    </div>
  )
}
