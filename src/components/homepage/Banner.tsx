"use client";

import { useEffect, useRef } from "react";
import ravi from '../../assets/ravi_kumar.png';

export default function Banner() {
  const headlineRef = useRef<HTMLDivElement>(null);

  // Subtle entrance animation via class toggle
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const timeout = setTimeout(() => {
      el.classList.remove("opacity-0", "translate-y-6");
    }, 100);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <section
      className="relative w-full min-h-screen bg-[#0a0a0a] pt-[80px] overflow-hidden flex items-center"
      id="about"
    >
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16 py-2 md:py-2 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">

        {/* ── LEFT COLUMN ── */}
        <div
          ref={headlineRef}
          className="opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col gap-6"
        >
          {/* Open-to-work badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-sm px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span
              className="text-[#00D4FF] text-[10px] md:text-xs tracking-[0.2em] font-display font-medium"
            >
              OPEN TO WORK — NOIDA / DELHI NCR
            </span>
          </div>

          {/* Name */}
          <div className="flex flex-col leading-none">
            <h1
              className="text-[#00D4FF] text-[clamp(72px,12vw,9rem)] font-display leading-none tracking-tight"
            >
              RAVI
            </h1>
            <h1
              className="text-white text-[clamp(72px,12vw,9rem)] font-display leading-none tracking-tight"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.6)",
                WebkitTextFillColor: "transparent",
              }}
            >
              KUMAR
            </h1>
          </div>

          {/* Role */}
          <p
            className="text-white/40 text-[clamp(12px,1.6vw,25px)] font-display tracking-[0.35em]"
          >
            UI DEVELOPER · FRONTEND DEV
          </p>

          {/* Bio */}
          <p
            className="text-white/55 text-[15px] font-body md:text-base leading-relaxed max-w-[460px]"
          >
        Crafting pixel-perfect, responsive UIs for 5+ years — from designs, mockups & wireframes to
         production-ready React, Next.js & Angular apps. I build fast, accessible, cross-browser 
         interfaces that look great and perform even better.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a href="#portfolio">
                <button
              className="bg-[#00D4FF] text-black font-thin font-mono text-[11px]  tracking-[0.3em] px-7 py-4 hover:bg-[#ffffff] active:scale-95 transition-all duration-200"
            >
              VIEW PORTFOLIO
            </button>
            </a>
            <a href="#contact">
            <button
              className="border border-white/30 text-white font-mono font-thin text-[11px] tracking-[0.3em] px-7 py-4 hover:bg-[#ffffff] hover:text-[#000000] active:scale-95 transition-all duration-200 bg-transparent"
            >
              LET&apos;S CONNECT
            </button>
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Photo + stat cards ── */}
        <div className="relative justify-center lg:justify-end hidden md:flex lg:flex">
          {/* Corner bracket decoration */}
          <div
            className="absolute top-0 left-4 lg:left-10 w-8 h-8 border-t-2 border-l-2 border-[#00D4FF] pointer-events-none mt-[-12px] "
          />

          {/* Photo */}
          <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
            <div
              className="w-full aspect-[3/4] overflow-hidden"
              style={{ borderRadius: "2px" }}
            >
              <img
                src={ravi}
                alt="Ravi Kumar — Web Designer & Developer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Graceful fallback: show a placeholder
                  const t = e.currentTarget;
                  t.style.display = "none";
                  const parent = t.parentElement;
                  if (parent && !parent.querySelector(".ph")) {
                    const ph = document.createElement("div");
                    ph.className = "ph w-full h-full flex items-center justify-center";
                    ph.innerHTML = `<span style="color:rgba(255,255,255,0.15);font-size:14px;font-family:monospace;letter-spacing:0.1em">PHOTO</span>`;
                    parent.appendChild(ph);
                  }
                }}
              />
              {/* Label overlay */}
              <div className="absolute bottom-3 left-2 px-4 py-1 bg-[#141212]">
                <span
                  className="text-white/60 text-[15px] font-display tracking-[0.2em] font-semibold"
                >
                   UI DEVELOPER
                </span>
              </div>
            </div>

            {/* Stat card — Projects */}
            <div
              className="absolute -right-4 md:-right-8 bottom-[100px] bg-[#00D4FF] text-black px-5 py-4 min-w-[120px] shadow-xl"
              style={{ borderRadius: "1px" }}
            >
              <div
                className="text-3xl font-semibold tracking-[0.18em] leading-none font-display"
              >
                50+
              </div>
              <div
                className="text-[10px] tracking-[0.18em] font-mono mt-1 opacity-70"
              >
                PROJECTS
              </div>
            </div>

            {/* Stat card — Years */}
            <div
              className="absolute -right-4 md:-right-8 bottom-1 text-white bg-[#141212] px-5 py-4 min-w-[120px] shadow-xl border border-white/10"
              style={{ borderRadius: "1px" }}
            >
              <div
                className="text-3xl font-semibold tracking-[0.18em] leading-none font-display"
              >
                5+
              </div>
              <div
                className="text-[10px] tracking-[0.18em] font-mono mt-1 opacity-40"
              >
                YEARS EXP.
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}