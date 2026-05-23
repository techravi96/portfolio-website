import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import channelier from "../../assets/channelier.webp";
import awards from "../../assets/awards.webp";
import arachnomesh from "../../assets/arachnomesh.webp";
import rudra from "../../assets/rudra.webp";
import fabrication from "../../assets/fabrication.webp";
import seller from "../../assets/seller.webp";
import emergent from "../../assets/emergent.webp";
import sumitra from "../../assets/sumitra.webp";
import stepcable from "../../assets/stepcable.webp";
import goldclass from "../../assets/goldclass.webp";
import swiss from "../../assets/swiss.webp";
import logihealth from "../../assets/logihealth.webp";
import genius from "../../assets/genius.webp";
import chinaCasting from "../../assets/chinacasting.webp";
import explicit from "../../assets/explicit.webp";
import upsc from "../../assets/upsc.webp";


import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

interface Project {
  id: number;
  name: string;
  tags: string[];
  image: string;
  liveUrl?: string;
}

const projects: Project[] = [
  { id: 1, name: "Channelier", tags: ["HTML", "CSS", "Bootstrap", "JS"], image: channelier, liveUrl: "https://channelier.com/" },
  { id: 2, name: "Awards Channelier", tags: ["HTML", "CSS", "Bootstrap", "JS", "React.JS" ], image: awards, liveUrl: "https://awards.channelier.com/" },
  { id: 3, name: "Arachnomesh Technologies Pvt Ltd", tags: ["HTML", "CSS", "JS", "Next.JS"], image: arachnomesh, liveUrl: "https://www.arachnomesh.com/" },
  { id: 4, name: "Rudra Creations", tags: ["HTML", "CSS", "Bootstrap"], image: rudra, liveUrl: "https://www.rudracreations.in/" },
  { id: 5, name: "Fabrication Bazaar", tags: ["HTML", "CSS", "JS", "React-Bootstrap", "React.JS"], image: fabrication, liveUrl: "https://fb.arachnomesh.com/" },
  { id: 6, name: "Seller Channelier", tags: ["HTML", "CSS", "JS" ,"React-Bootstrap", "MUI", "React.JS"], image: seller, liveUrl: "https://sellers.channelier.com/" },
  { id: 7, name: "Emergent Solutions", tags: ["HTML", "CSS", "Bootstrap", "JS", "Next.JS"], image: emergent, liveUrl: "#" },
  { id: 8, name: "Sumitra Institute", tags: ["HTML", "CSS", "JS"], image: sumitra, liveUrl: "http://sumitrainstitute.com/" },
  { id: 9, name: "Genius Presentation", tags: ["HTML", "CSS", "JS", "Bootstrap"], image: genius, liveUrl: "http://geniuspresentation.in/" },
  { id: 10, name: "China Casting", tags: ["HTML", "CSS", "JS", "Bootstrap", "Wordpress"], image: chinaCasting, liveUrl: "https://www.china-casting.biz/" },
  { id: 11, name: "Explicit Leathers", tags: ["HTML", "CSS", "JS", "Bootstrap"], image: explicit, liveUrl: "http://explicitleathergroup.com/" },
  { id: 12, name: "UPSC Akhada", tags: ["HTML", "CSS", "Next.JS", "React-Bootstrap"], image: upsc, liveUrl: "#" },
  { id: 13, name: "Step Cable", tags: ["HTML", "CSS", "JS", "Wordpress"], image: stepcable, liveUrl: "https://www.stepcable.com/" },
  { id: 14, name: "The Gold Class", tags: ["HTML", "CSS", "JS", "Wordpress"], image: goldclass, liveUrl: "https://thegoldclass.com/" },
  { id: 15, name: "Swiss Kombucha Company", tags: ["HTML", "CSS", "JS", "Bootstrap"], image: swiss, liveUrl: "https://swisskombuchacompany.ch/" },
  { id: 16, name: "Logihealth", tags: ["HTML", "CSS", "JS", "Bootstrap"], image: logihealth, liveUrl: "https://logihealth.de/" },
];

const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M5 12l7 7M5 12l7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M14 5l7 7-7 7" />
  </svg>
);

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Main slider
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [mainActiveIndex, setMainActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSwiper, setModalSwiper] = useState<SwiperType | null>(null);
  const [modalActiveIndex, setModalActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setModalActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const modalPrev = () => {
    if (!modalSwiper) return;
    modalSwiper.slidePrev();
  };

  const modalNext = () => {
    if (!modalSwiper) return;
    modalSwiper.slideNext();
  };

  const modalGoTo = (index: number) => {
    if (!modalSwiper) return;
    modalSwiper.slideTo(index);
  };

  // When modal opens, jump swiper to correct slide
  useEffect(() => {
    if (modalOpen && modalSwiper) {
      modalSwiper.slideTo(modalActiveIndex, 0);
    }
  }, [modalOpen, modalSwiper, modalActiveIndex]);

  // Keyboard
  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const currentProject = projects[modalActiveIndex];

  return (
    <>
      <section
        ref={sectionRef}
        id="portfolio"
        className="relative w-full bg-[#141212] border-t border-white/5 py-16 md:py-24 overflow-hidden"
      >
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 md:mb-20"
          >
            <p className="text-[#00D4FF] text-xs tracking-[0.3em] font-semibold mb-3 font-mono">
              SELECTED WORK
            </p>
            <div className="leading-none font-display tracking-[2px]">
              <h2 className="text-white" style={{ fontSize: "clamp(40px, 6vw, 90px" }}>
                PORTFOLIO
              </h2>
              <h2 className="text-white/10" style={{ fontSize: "clamp(40px, 6vw, 90px" }}>
                GALLERY
              </h2>
            </div>
          </motion.div>

          {/* Main Swiper */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Swiper
              modules={[Keyboard]}
              slidesPerView={1}
              spaceBetween={24}
              keyboard={{ enabled: true }}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              onSwiper={(swiper) => {
                setMainSwiper(swiper);
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setMainActiveIndex(swiper.activeIndex);
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <div
                    className="group relative border border-white/8 overflow-hidden bg-[#111111] cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white text-[11px] tracking-[0.2em] font-mono font-bold hover:bg-white hover:text-black transition-all duration-200">
                          VIEW
                        </div>
                      </div>
                      <div className="absolute inset-0 border border-[#00D4FF]/0 group-hover:border-[#00D4FF]/40 transition-all duration-300 pointer-events-none" />
                    </div>

                    <div className="px-5 py-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-white text-sm tracking-widest font-display mb-2">
                          {project.name.toUpperCase()}
                        </h3>
                        <div className="flex flex-wrap gap-x-1 gap-y-1">
                          {project.tags.map((tag, i) => (
                            <span key={tag} className="text-[#00D4FF] text-[10px] tracking-[0.15em] font-mono">
                              {tag}{i < project.tags.length - 1 && <span className="mx-2 text-white/20">·</span>}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-white/20 group-hover:text-[#00D4FF] transition-colors duration-300 shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Controls */}
            <div className="flex items-center gap-5 mt-10">
              <button
                onClick={() => mainSwiper?.slidePrev()}
                disabled={isBeginning}
                className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/50 hover:border-[#00D4FF] hover:text-[#00D4FF] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={() => mainSwiper?.slideNext()}
                disabled={isEnd}
                className="w-12 h-12 flex items-center justify-center bg-[#00D4FF] text-black hover:bg-white disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ArrowRight />
              </button>
              <span className="text-white/30 text-xs font-mono tracking-[0.2em]">
                {String(mainActiveIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2 ml-auto">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => mainSwiper?.slideTo(i)}
                    className={`h-px transition-all duration-300 ${i === mainActiveIndex ? "w-8 bg-[#00D4FF]" : "w-4 bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-4xl max-h-[88vh] bg-[#111111] border border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 shrink-0">
                <div>
                  <h3 className="text-white font-display tracking-widest text-sm">
                    {currentProject.name.toUpperCase()}
                  </h3>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {currentProject.tags.map((tag, i) => (
                      <span key={tag} className="text-[#00D4FF] text-[10px] font-mono tracking-widest">
                        {tag}{i < currentProject.tags.length - 1 && <span className="mx-2 text-white/20">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/30 text-xs font-mono tracking-widest hidden sm:block">
                    {String(modalActiveIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] tracking-[0.2em] font-mono border border-[#00D4FF] text-[#00D4FF] px-4 py-2 hover:bg-[#00D4FF] hover:text-black transition-all duration-200 hidden sm:block"
                  >
                    LIVE SITE ↗
                  </a>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/50 hover:border-white hover:text-white transition-all duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Swiper */}
              <div className="flex-1 overflow-hidden">
                <Swiper
                  modules={[Keyboard]}
                  slidesPerView={1}
                  keyboard={{ enabled: true }}
                  onSwiper={(swiper) => setModalSwiper(swiper)}
                  onSlideChange={(swiper) => setModalActiveIndex(swiper.activeIndex)}
                  style={{ height: "100%" }}
                >
                  {projects.map((project) => (
                    <SwiperSlide key={project.id} style={{ overflowY: "auto", height: "100%", maxHeight: "calc(100vh - 300px)" }}>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto object-cover object-top"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Footer nav */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-white/8 shrink-0">
                <button
                  onClick={modalPrev}
                  className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 flex items-center justify-center border border-white/20 group-hover:border-[#00D4FF] group-hover:text-[#00D4FF] transition-all duration-200">
                    <ArrowLeft />
                  </div>
                  <span className="text-[11px] tracking-[0.15em] font-mono hidden sm:block">PREV PROJECT</span>
                </button>

                <div className="flex gap-1.5 items-center">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => modalGoTo(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === modalActiveIndex ? "w-4 h-1.5 bg-[#00D4FF]" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={modalNext}
                  className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-200 group"
                >
                  <span className="text-[11px] tracking-[0.15em] font-mono hidden sm:block">NEXT PROJECT</span>
                  <div className="w-9 h-9 flex items-center justify-center bg-[#00D4FF] text-black group-hover:bg-white transition-all duration-200">
                    <ArrowRight />
                  </div>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}