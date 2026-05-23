import { useRef } from "react";
import { motion, useInView } from "motion/react";
import about from '../../assets/about_ravi.png';
import type { Variants } from "motion/react";
import { FaMapPin, FaMobileAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

const tags = [  
  { label: "Noida/Delhi NCR", icon: <FaMapPin className="text-[#00D4FF]" /> },
  { label: " 5+ Years Exp.", icon: <FaBriefcase className="text-[#00D4FF]" /> },
  { label: "Responsive Design", icon: <FaMobileAlt className="text-[#00D4FF]" /> },
];

const stats = [
  { value: "50+", label: "Projects Done" },
  { value: "5+", label: "Years Exp." },
  { value: "3", label: "Companies" },
];

// Reusable fade-up animation variant
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-16 md:py-24 overflow-hidden bg-[#141212] border-t border-white/5"
    >

      {/* Subtle glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT — Image ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >

            <div className="relative z-10 overflow-hidden rounded-sm aspect-[4/5]">
              <img
                src={about}
                alt="Ravi Kumar"
                className="w-full h-full object-cover object-top transition-all duration-700"
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
              className="absolute -bottom-5 -right-5 bg-[#00D4FF] text-black px-6 py-4 z-20"
            >
              <div className="text-4xl font-black leading-none font-display">50+</div>
              <div className="text-[10px] tracking-[0.2em] font-semibold mt-1 opacity-60 font-mono">
                PROJECTS DONE
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Content ── */}
          <div className="flex flex-col gap-7">

            {/* Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.15}
            >
              <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-[#00D4FF] text-xs tracking-[0.3em] font-semibold mb-4 font-mono"
        >
          ABOUT ME
        </motion.p>
             <h2 className="text-white leading-none font-display tracking-[2px]"
              style={{ fontSize: "clamp(40px, 6vw, 90px)" }}
            >
              THE DESIGNER
              <br />
              <span className="text-white/20">
                WHO CODES
              </span>
            </h2>
            </motion.div>

            {/* Bio */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.25}
              className="flex flex-col gap-4"
            >
              <p className="text-white/60 text-base leading-relaxed font-body">
                  I'm a{" "}
                  <span className="text-white font-semibold">
                    Web Designer & UI Developer
                  </span>{" "}
                  with 5+ years of experience in Angular, React, Next.js and modern UI development.
                </p>
                <p className="text-white/60 text-base leading-relaxed font-body">
                  I build pixel-perfect, responsive interfaces from Figma designs, optimize performance{" "}
                  <span className="text-white font-semibold">
                    (Lighthouse & SEO),
                  </span>{" "}
                  and work across the full frontend lifecycle — including WordPress, deployments,
                  email templates, and React Native UI screens.
                </p>
                <p className="text-white/60 text-base leading-relaxed font-body">
                  Focused on{" "}
                  <span className="text-white font-semibold">
                    clean code, performance,
                  </span>{" "}
                  and real-world product delivery.
                </p>
         </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.35}
              className="grid grid-cols-3 gap-4 py-6 border-y border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-[#00D4FF] font-black text-3xl leading-none font-display">
                    {stat.value}
                  </span>
                  <span className="text-white/40 text-[11px] tracking-[0.15em] font-mono">
                    {stat.label.toUpperCase()}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.45}
              className="flex flex-wrap gap-3"
            >
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="flex items-center gap-1 border border-white/10 text-white/60 text-xs tracking-[0.12em] px-2 py-2 hover:border-[#00D4FF]/40 hover:text-white/80 transition-colors duration-300 font-mono"
                >
                  <span>{tag.icon}</span>
                  {tag.label.toUpperCase()}
                </span>
              ))}
            </motion.div>

            {/* <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.55}
            >
              <a
                href="/assets/ravi_kumar-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border border-[#00D4FF] text-[#00D4FF] text-xs tracking-[0.2em] px-7 py-4 hover:bg-[#00D4FF] hover:text-black transition-all duration-300 font-mono font-bold"
              >
                DOWNLOAD RESUME
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M3 6l4 4 4-4M1 11h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div> */}

          </div>
        </div>
      </div>
    </section>
  );
}