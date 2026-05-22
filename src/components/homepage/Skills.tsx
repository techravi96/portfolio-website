import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import { FaHtml5, FaCss3Alt , FaBootstrap , FaReact, FaAngular ,FaWordpress } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BsJavascript  } from "react-icons/bs";
import { DiPhotoshop } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { SiMui } from "react-icons/si";
const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 size={44} color="#E34F26" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={44} color="#264DE4" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={44} color="#563D7C" />,
  },
  {
  name : "Tailwind",
  icon: <RiTailwindCssFill size={44} color="#38B2AC" />,
  },
  {
    name: "Material UI",
    icon: <SiMui size={44} color="#007FFF" />,
  },
  {
    name: "JavaScript",
    icon: <BsJavascript size={44} color="#F7DF1E" />,
  },
    {
    name: "Photoshop",
    icon: <DiPhotoshop size={44} color="#31A8FF" />,
  },
  {
    name: "React",
    icon: <FaReact size={44} color="#61DAFB" />,
  },
  {
    name: "Next",
    icon: <RiNextjsFill size={44} color="#aaa" />,
  },
  {
    name: "Angular",
    icon: <FaAngular size={44} color="#DD0031" />,
  },
  {
    name: "Wordpress",
    icon: <FaWordpress size={44} color="#21759B" />,
  },
   {
    name: "Vs Code",
    icon: <VscVscode  size={44} color="#F24E1E" />,
  },
  { name: "Responsive", icon: null },
  { name: "PSD to HTML", icon: null },
  { name: "Figma to HTML", icon: null },
  {
    name: "ChatGPT",
    icon: "null",
  },
  { name: "Claude AI", icon: null },
  { name: "SEO Basics", icon: null },
  { name: "CRM Dashboard", icon: null },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const customIcons: Record<string, React.ReactElement> = {
  Responsive: (
    <svg viewBox="0 0 24 24" fill="none" width="44" height="44">
      <rect x="7" y="4" width="10" height="16" rx="2" stroke="#00D4FF" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="0.8" fill="#00D4FF" />
      <rect x="2" y="7" width="6" height="10" rx="1.5" stroke="#00D4FF" strokeWidth="1.2" opacity="0.5" />
    </svg>
  ),
  "ChatGPT": (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" fill="none">
  <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.13-3.865 10.079 10.079 0 0 0-11.784 4.937 9.964 9.964 0 0 0-6.675 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.13 3.864 10.079 10.079 0 0 0 11.784-4.938 9.965 9.965 0 0 0 6.675-4.833 10.079 10.079 0 0 0-1.24-11.817zm-17.739 9.057a3.74 3.74 0 0 1-2.4-.87l.083-.047 3.984-2.302a.648.648 0 0 0 .33-.568v-5.621l1.685.972a.06.06 0 0 1 .033.048v4.653a3.75 3.75 0 0 1-3.715 3.735zm-7.985-3.448a3.741 3.741 0 0 1-.447-2.511l.083.05 3.984 2.301a.647.647 0 0 0 .654 0l4.863-2.81v1.944a.062.062 0 0 1-.025.053l-4.026 2.326a3.75 3.75 0 0 1-5.086-1.353zm-1.04-8.406a3.739 3.739 0 0 1 1.951-1.648v4.739a.647.647 0 0 0 .327.566l4.834 2.793-1.684.972a.063.063 0 0 1-.06.006L11.13 18.53a3.75 3.75 0 0 1-.362-4.457zm13.854 3.22-4.863-2.81 1.684-.97a.062.062 0 0 1 .06-.006l4.05 2.339a3.748 3.748 0 0 1-.58 6.76v-4.739a.647.647 0 0 0-.351-.574zm1.676-2.52-.083-.05-3.984-2.3a.648.648 0 0 0-.654 0l-4.863 2.81v-1.944a.062.062 0 0 1 .025-.053l4.026-2.325a3.749 3.749 0 0 1 5.533 3.862zm-10.521 3.463-1.685-.972a.062.062 0 0 1-.033-.048v-4.653a3.749 3.749 0 0 1 6.149-2.873l-.083.047-3.984 2.302a.648.648 0 0 0-.33.568l-.034 5.629zm.915-1.972 2.164-1.25 2.165 1.248v2.498l-2.164 1.25-2.165-1.248V16.264z" fill="currentColor"/>
</svg>
  ),
  "PSD to HTML": (
    <svg viewBox="0 0 24 24" fill="none" width="44" height="44">
      <path d="M4 8h16M4 12h10M4 16h7" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 13l3 3-3 3" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Figma to HTML": (
    <svg viewBox="0 0 24 24" fill="none" width="44" height="44">
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#00D4FF" strokeWidth="1.5" />
      <path d="M14 7h7M14 12h7M14 17h7" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "Claude AI": (
    <svg viewBox="0 0 24 24" fill="none" width="44" height="44">
      <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#00D4FF" strokeWidth="1.5" />
      <path d="M9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "SEO Basics": (
    <svg viewBox="0 0 24 24" fill="none" width="44" height="44">
      <circle cx="11" cy="11" r="7" stroke="#00D4FF" strokeWidth="1.5" />
      <path d="M16.5 16.5l4 4" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 11h6M11 8v6" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "CRM Dashboard": (
    <svg viewBox="0 0 24 24" fill="none" width="44" height="44">
      <rect x="3" y="3" width="7" height="9" rx="1" stroke="#00D4FF" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1" stroke="#00D4FF" strokeWidth="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1" stroke="#00D4FF" strokeWidth="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1" stroke="#00D4FF" strokeWidth="1.5" />
    </svg>
  ),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full bg-[#0a0a0a] py-16 md:py-24 overflow-hidden border-t border-white/5"
    >

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-[#00D4FF] text-xs tracking-[0.3em] font-semibold text-center mb-3 font-mono"
        >
          WHAT I WORK WITH
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.1}
          className="text-center leading-none font-display tracking-[2px] mb-16 md:mb-20"
          style={{ fontSize: "clamp(40px, 6vw, 90px)" }}
        >
          <span className="text-white">SKILLS &amp; </span>
          <span className="text-white/20">TOOLS</span>
        </motion.h2>

        {/* Skills grid — outer border wrapper */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
          className="border border-white/10"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.25 + i * 0.04, duration: 0.4 }}
                className="skill-card group bg-[#141212] relative flex flex-col items-center justify-center gap-4 py-10 px-4 border border-[#252525] cursor-default transition-all duration-300 hover:bg-white/3"
              >
                {/* Hover accent border overlay */}
                <div className="absolute inset-0 border border-[#141212] group-hover:border-[#00D4FF]/50 transition-all duration-300 pointer-events-none" />

                {/* Icon */}
                <div className="w-11 h-11 flex items-center justify-center">
                  {customIcons[skill.name] ? (
                    customIcons[skill.name]
                  ) : React.isValidElement(skill.icon) ? (
                    skill.icon
                  ) : typeof skill.icon === "string" ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={44}
                      height={44}
                      loading="lazy"
                      className="object-contain"
                    />
                  ) : null}
                </div>

                {/* Name */}
                <span className="text-white/50 text-[10px] tracking-[0.2em] font-mono font-semibold text-center group-hover:text-white/90 transition-colors duration-300">
                  {skill.name.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}