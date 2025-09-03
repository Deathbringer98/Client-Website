// Simple mocked catalog for the Racing store.
// Swap images later; for now we point to existing placeholders.
import hero from '../../assets/racing-konarr.png'

export const racingProducts = [
  { id: 'rs-suit-01', name: 'Konarr Race Suit (Pro)', price: 499, tag: 'Apparel', image: hero, blurb: 'FIA-inspired lightweight suit with breathable panels and subtle KONARR wordmark.' },
  { id: 'rs-suit-02', name: 'Konarr Race Suit (Club)', price: 299, tag: 'Apparel', image: hero, blurb: 'Durable club-level suit—great starter gear for track days.' },
  { id: 'rs-tee-01', name: 'Mono Tee', price: 35, tag: 'Lifestyle', image: hero, blurb: 'Soft black tee with stencil KONARR logo.' },
  { id: 'rs-cap-01', name: 'Team Cap', price: 28, tag: 'Lifestyle', image: hero, blurb: 'Low-profile cap with embroidered mark.' },
  { id: 'rs-wing-01', name: 'Aero Endplates (Pair)', price: 175, tag: 'Custom Parts', image: hero, blurb: 'Lightweight composite endplates—track use only.' },
  { id: 'rs-mount-01', name: 'Camera Mount (Billet)', price: 75, tag: 'Custom Parts', image: hero, blurb: 'Rigid, low-vibe billet aluminum universal mount.' },
]
