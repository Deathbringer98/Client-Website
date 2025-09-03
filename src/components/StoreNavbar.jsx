import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/konarr-logotype.png";

export default function StoreNavbar() {
  return (
    <nav className="border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto container-px flex items-center justify-between">
        {/* Logo as back button */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Konarr Logo" className="h-8 w-auto" />
        </Link>

        {/* Store title */}
        <div className="text-white/80 text-sm font-medium">
          Store
        </div>
      </div>
    </nav>
  );
}
