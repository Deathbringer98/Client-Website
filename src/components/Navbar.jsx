import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/konarr-logotype.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on home page, just scroll to contact
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto container-px flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Konarr Logo" className="h-8 w-auto" />
          <span className="font-semibold"></span>
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/silicon" className="hover:text-white/80">Silicon</Link>
          <Link to="/racing" className="hover:text-white/80">Racing</Link>
          <Link to="/labs" className="hover:text-white/80">Labs</Link>
          <Link to="/store" className="hover:text-white/80">Store</Link>
          <a href="#contact" onClick={handleContactClick} className="hover:text-white/80 cursor-pointer">Contact</a>
        </div>
      </div>
    </nav>
  );
}
