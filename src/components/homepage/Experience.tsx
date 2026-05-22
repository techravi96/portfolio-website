import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    period: "JANUARY 2020 — PRESENT",
    role: "SENIOR UI DEVELOPER",
    company: "Arachnomesh Technologies Pvt. Ltd",
    location: "Noida Sec 62, India",
    points: [
     "Built scalable and responsive user interfaces using React, Angular, Next.js, and React Native.",
      "Converted PSD and Figma designs into pixel-perfect, production-ready UI with strong focus on responsiveness.",
      "Developed reusable UI components using Material UI, Bootstrap, and Tailwind CSS.",
      "Improved website performance by optimizing Lighthouse scores (Performance, SEO, Accessibility, Best Practices).",
      "Implemented basic SEO practices including semantic HTML, meta tags, and performance optimizations.",
      "Ensured cross-browser compatibility and consistent UI across devices and screen sizes.",
      "Developed HTML email templates using table-based layouts and inline CSS for cross-client compatibility.",
      "Implemented mobile UI screens in React Native based on Figma mockup screens designs.", 
      "Collaborated with developers, project managers, and clients to deliver projects on time and within scope.",
      "Increased user engagement by up to 40% through improved UI/UX and optimized page performance.",
      "Built CRM dashboards, reducing task completion time by 30% and follow-up time by 25%."
    ],
  },
  {
    period: "JANUARY 2019 — DECEMBER 2020",
    role: "WEB DESIGNER",
    company: "Leanport Software Pvt. Ltd.",
    location: "Noida, Sec-15",
    points: [
      "Designed and developed responsive web pages using HTML5, CSS3, and Bootstrap.",
      "Collaborated with international clients to understand requirements and deliver customized UI solutions.",
      "Converted wireframes and mockups into functional, user-friendly interfaces.",
      "Created basic design mockups and UI concepts during planning and low workload periods.",
      "Managed product/content uploads in WordPress CMS with proper formatting, image handling, and basic SEO.",
      "Handled live website updates and deployments using cPanel and FileZilla (FTP).",
      "Used Photoshop for UI design tasks, including layout creation and asset preparation.",
      "Maintained and optimized websites for cross-browser compatibility and mobile responsiveness.",
      "Assisted in building UI components and layouts for internal tools and dashboards."
    ],
  },
  {
    period: "JANUARY 2018 — DECEMBER 2018",
    role: "WEB DESIGNER",
    company: "Egainz",
    location: "Nehru Place, New Delhi",
    points: [
      "Customized and optimized existing HTML and CSS templates to meet project requirements.",
      "Focused on responsive layouts, visual consistency, and improved user experience across multiple devices.",
      "Explored UI/UX principles and applied them to real-world landing page designs.",
      "Edited and enhanced client product images using Photoshop for use in web projects.",
      "Practiced converting design mockups into responsive web layouts.",
      "Handled product/content uploads in WordPress CMS, ensuring proper formatting, image optimization, and SEO-friendly structure.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full border-t border-white/5 py-16 md:py-24 overflow-hidden"
    >

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-15 md:mb-20"
        >
          <p className="text-[#00D4FF] text-xs tracking-[0.3em] font-semibold mb-3 font-mono">
            CAREER JOURNEY
          </p>
          <div className="leading-none font-display">
            <h2 className="text-white" style={{ fontSize: "clamp(60px, 6vw, 90px)" }}>
              PROFESSIONAL
            </h2>
            <h2 className="text-white/10" style={{ fontSize: "clamp(60px, 6vw, 90px)" }}>
              EXPERIENCE
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute left-0 md:left-[10px] top-0 bottom-0 w-px bg-white/10 origin-top"
          />

          {/* Experience items */}
          <div className="flex flex-col gap-14 md:gap-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-0"
              >
                {/* Dot on timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15, ease: "backOut" }}
                  className="absolute left-[-4.5px] md:left-[5px] top-1 w-3 h-3 rounded-full bg-[#00D4FF] border-2 border-[#0a0a0a] z-10 shrink-0"
                  style={{ boxShadow: "0 0 10px rgba(0, 212, 255, 0.6)" }}
                />


                {/* Right — content */}
                <div className="pl-6 md:pl-12 flex-1">
                  {/* Period — mobile only */}
                  <p className="text-[#00D4FF] text-[10px] tracking-[0.18em] font-mono font-semibold mb-3">
                    {exp.period}
                  </p>

                  {/* Role */}
                  <h3
                    className="text-white font-display leading-tight mb-3"
                    style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
                  >
                    {exp.role}
                  </h3>

                  {/* Company + location */}
                  <div className="flex items-center gap-3 mb-10">
                    <span className="text-white/50 text-sm font-body">{exp.company}</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-white/40 text-sm font-body">{exp.location}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-4">
                    {exp.points.map((point, pi) => (
                      <motion.li
                        key={pi}
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + i * 0.15 + pi * 0.06,
                          ease: "easeOut",
                        }}
                        className="flex items-start gap-4 group"
                      >
                        {/* Arrow icon */}
                        <span className="text-[#00D4FF] mt-0.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M14 5l7 7-7 7" />
                          </svg>
                        </span>
                        <span className="text-white/55 text-sm md:text-base font-body leading-relaxed group-hover:text-white/80 transition-colors duration-200">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}