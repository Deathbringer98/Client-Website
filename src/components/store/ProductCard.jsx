import React from 'react'

export default function ProductCard({ item, onAdd }) {
  return (
    <div className="bg-konarr-card border border-white/10 rounded-2xl p-4 flex flex-col">
      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/60">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold">{item.name}</h3>
          <span className="text-white/80">${item.price}</span>
        </div>
        <p className="mt-1 text-sm text-white/60">{item.blurb}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-white/50">{item.tag}</span>
        <button onClick={() => onAdd(item)} className="btn btn-primary" aria-label={`Add ${item.name} to cart`}>Add</button>
      </div>
    </div>
  )
}
