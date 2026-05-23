import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const contactItems = [
  {
    label: "EMAIL",
    value: "ravikumar791042@gmail.com",
    href: "mailto:ravikumar791042@gmail.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "PHONE",
    value: "+91 705335 3475",
    href: "tel:+917053353475",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/ravi-kumar-481b13165",
    href: "https://linkedin.com/in/ravi-kumar-481b13165",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const statusItems = [
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    text: "Noida / Delhi NCR, India",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    text: "Full-Time · Freelance · Contract",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    text: "Response within 24 hours",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });


  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="relative w-full bg-[#141212] border-t border-white/5 py-16 md:py-24  overflow-hidden"
      >
        {/* Glow */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* ── LEFT ── */}
            <div className="flex flex-col gap-8">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-[#00D4FF] text-xs tracking-[0.3em] mb-3 font-mono">
                  GET IN TOUCH
                </p>
                <div className="leading-none font-display  tracking-tight">
                  <h2
                    className="text-white"
                    style={{ fontSize: "clamp(42px, 6vw, 90px)" }}
                  >
                    LET'S WORK
                  </h2>
                  <h2
                    className="text-white/10"
                    style={{ fontSize: "clamp(42px, 6vw, 90px)" }}
                  >
                    TOGETHER
                  </h2>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white/50 text-base leading-relaxed font-body max-w-md"
              >
                I'm actively looking for full-time roles and freelance projects
                in Noida / Delhi NCR. If you have a project, an opportunity, or
                just want to say hi — I'd love to hear from you.
              </motion.p>

              {/* Contact cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-3"
              >
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "LINKEDIN" ? "_blank" : undefined}
                    rel={
                      item.label === "LINKEDIN"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-5 border border-white/8 bg-[#111111] px-5 py-4 hover:border-[#00D4FF]/40 hover:bg-[#111111] transition-all duration-300"
                  >
                    {/* Icon box */}
                    <div className="w-10 h-10 flex items-center justify-center bg-[#00D4FF]/10 text-[#00D4FF] shrink-0 group-hover:bg-[#00D4FF] group-hover:text-black transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/30 text-[10px] tracking-[0.2em] font-mono mb-1">
                        {item.label}
                      </p>
                      <p className="text-white text-sm font-body group-hover:text-[#00D4FF] transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                    {/* Arrow */}
                    <div className="ml-auto text-white/10 group-hover:text-[#00D4FF] transition-colors duration-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — Status card ── */}
           <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-center"
              >
              <div className="border border-white/10 bg-[#111111] p-8 flex flex-col gap-7 relative overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-20 h-px bg-[#00D4FF]" />

                {/* Status badge */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/40 text-[10px] tracking-[0.25em] font-mono">
                    CURRENT STATUS
                  </span>
                </div>

                {/* Available heading */}
                <div>
                  <h3
                    className="text-[#00D4FF] font-display leading-none"
                    style={{ fontSize: "clamp(28px, 3.5vw, 50px)" }}
                  >
                    AVAILABLE FOR HIRE
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed font-body">
                  Looking for full-time Web Designer / Frontend Developer roles
                  in Noida/Delhi NCR. Open to remote and hybrid opportunities.
                </p>

                {/* CTA button */}
                <a
                  href="mailto:ravikunal007@gmail.com"
                  className="inline-flex items-center justify-between gap-4 bg-[#00D4FF] text-black font-bold text-[11px] tracking-[0.2em] px-6 py-4 font-mono hover:bg-white transition-all duration-300 group"
                >
                  SEND ME A MESSAGE
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path d="M5 12h14M14 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Divider */}
                <div className="h-px bg-white/8" />

                {/* Status items */}
                <div className="flex flex-col gap-4">
                  {statusItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-[#00D4FF] shrink-0">
                        {item.icon}
                      </span>
                      <span className="text-white/55 text-sm font-body">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full bg-[#0a0a0a] border-t border-white/5 py-6 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[#00D4FF] font-black text-xl font-display">
            RK.
          </span>
          <p className="text-white/20 text-xs font-mono tracking-[0.15em]">
            © {new Date().getFullYear()} Ravi Kumar. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* ── Floating buttons ── */}

      {/* WhatsApp */}
      <a
        href="https://wa.me/7053353475"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-12 h-12 flex items-center justify-center bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 rounded-full"
        aria-label="Chat on WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-[#00D4FF] text-black shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Back to top"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
