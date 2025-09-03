import React from 'react'

export default function CartDrawer({ open, items, onClose, onRemove }) {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0)
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/70 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-konarr-card border-l border-white/10 p-6 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Cart</h3>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
        <div className="mt-4 space-y-4 max-h-[70vh] overflow-auto pr-2">
          {items.length === 0 && <div className="text-white/60">Your cart is empty.</div>}
          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-3">
              <img src={it.image} alt={it.name} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="font-medium">{it.name}</div>
                <div className="text-white/60 text-sm">${it.price} × {it.qty}</div>
              </div>
              <button className="text-white/60 hover:text-white" onClick={() => onRemove(it.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
          <div className="text-white/70">Subtotal</div>
          <div className="font-semibold">${total.toFixed(2)}</div>
        </div>
        <button className="btn btn-primary w-full mt-4" disabled={items.length === 0}>Checkout (mock)</button>
      </aside>
    </div>
  )
}
