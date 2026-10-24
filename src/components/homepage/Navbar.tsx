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

      {/* Desktop Nav Links & Download CV */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-8">
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

        {/* Download CV Button */}
        <a
          href="https://drive.google.com/file/d/18GHN2dhm_V5syW6D8qwLsg0EgcXcN-to/view?usp=sharing"
          download="Ravi_Kumar_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black text-[11px] tracking-[0.18em] font-medium px-4 py-2 transition-all duration-300 font-mono active:scale-95 group"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <span>DOWNLOAD CV</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-y-[1px] transition-transform duration-200"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>

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

          {/* Mobile Download CV Button */}
          <a
            href="/assets/ravi_kumar-resume.pdf"
            download="Ravi_Kumar_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 border border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black text-xs tracking-[0.18em] font-medium px-4 py-3 transition-all duration-300 font-mono active:scale-95 mt-2"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            <span>DOWNLOAD CV</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      )}
    </nav>
  );
}
