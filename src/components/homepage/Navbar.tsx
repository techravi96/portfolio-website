"use client";

import { useState } from "react";

const navLinks = ["ABOUT", "SKILLS", "PORTFOLIO", "EXPERIENCE", "CONTACT"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0a0a0a] border-b border-white/5 px-6 md:px-10 py-5 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo */}
      <a
        href="#"
        className="text-[#00D4FF] font-black text-2xl tracking-tight leading-none"
        style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif", letterSpacing: "0.02em" }}
      >
        RK.
      </a>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-white/60 hover:text-white text-[11px] tracking-[0.18em] font-medium transition-colors duration-200"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0d0d0d] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-[#00D4FF] text-sm tracking-[0.18em] font-medium transition-colors duration-200"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}