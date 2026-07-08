"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// 1. THE NEW FONT: Syne gives us that wide, artistic, architectural look!
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

// --- ICONS ---
const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

// --- DATA ---
const initialSlides = [
  { id: 1, title: "LUMINA PENTHOUSE", location: "Nagpur, India", description: "Warm minimalist textures bathed in natural light, blending serene Wabi-Sabi aesthetics with modern luxury.", imageDay: "/images/pair1day.png", imageNight: "/images/pair1night.png" },
  { id: 2, title: "OBSIDIAN STUDIO", location: "Pune, India", description: "Matte black cabinetry paired with dramatic vein-cut marble and warm, cinematic ambient under-lighting.", imageDay: "/images/pair2day.png", imageNight: "/images/pair2night.png" },
  { id: 3, title: "TERRA VILLA", location: "Goa, India", description: "Organic earth tones, raw stone walls, and soft linen fabrics create a breathable, coastal sanctuary.", imageDay: "/images/pair3day.png", imageNight: "/images/pair3night.png" },
  { id: 4, title: "ZENITH LOUNGE", location: "Mumbai, India", description: "Double-height ceilings and panoramic glass, grounded by deep charcoal leathers and brushed brass.", imageDay: "/images/pair4day.png", imageNight: "/images/pair4night.png" },
  { id: 5, title: "NOIR SANCTUARY", location: "Delhi, India", description: "A dimly lit, moody master suite wrapped in dark wood panels and soft, intimate backlighting.", imageDay: "/images/pair5day.png", imageNight: "/images/pair5night.png" }
];

const categories = ["All", "Residential", "Commercial"];
const portfolioItems = [
  { id: 1, title: "The Onyx Penthouse", category: "Residential", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop", height: "h-[22rem] md:h-[28rem]" },
  { id: 2, title: "Minimalist Studio", category: "Commercial", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1000&auto=format&fit=crop", height: "h-[28rem] md:h-[36rem]" },
  { id: 3, title: "Noir Bathroom", category: "Residential", image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1000&auto=format&fit=crop", height: "h-[20rem] md:h-[24rem]" },
  { id: 4, title: "Smoked Glass Dining", category: "Residential", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop", height: "h-[24rem] md:h-[32rem]" },
  { id: 5, title: "Brutalist Lobby", category: "Commercial", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", height: "h-[22rem] md:h-[28rem]" },
  { id: 6, title: "Shadow Suite", category: "Residential", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop", height: "h-[28rem] md:h-[38rem]" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNightMode, setIsNightMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const activeSlide = initialSlides[activeIndex];
  const handleNext = () => setActiveIndex((prev) => (prev === initialSlides.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? initialSlides.length - 1 : prev - 1));

  const filteredPortfolio = portfolioItems.filter(item => 
    activeCategory === "All" ? true : item.category === activeCategory
  );

  return (
    // Applied Syne Font globally here!
    <main className={`relative min-h-screen text-white selection:bg-white selection:text-black ${syne.className}`}>
      
      {/* SEAMLESS AMBIENT BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#030303]"></div>
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>
      </div>

      {/* ========================================= */}
      {/* SECTION 1: THE HERO                       */}
      {/* ========================================= */}
      <section className="relative flex h-[100dvh] w-full overflow-hidden">
        {initialSlides.map((slide, index) => (
          <div key={slide.id}>
            <motion.div initial={false} animate={{ opacity: activeIndex === index && !isNightMode ? 1 : 0, scale: activeIndex === index ? 1 : 1.05 }} transition={{ duration: 1.2, ease: "easeInOut" }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.imageDay})` }} />
            <motion.div initial={false} animate={{ opacity: activeIndex === index && isNightMode ? 1 : 0, scale: activeIndex === index ? 1 : 1.05 }} transition={{ duration: 1.2, ease: "easeInOut" }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.imageNight})` }} />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* LIQUID NAVBAR */}
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[90%] max-w-6xl z-50 flex justify-center md:justify-between items-center px-6 md:px-8 py-3 md:py-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
        >
          <div className="text-white text-xs md:text-sm lg:text-base tracking-[0.15em] md:tracking-[0.3em] font-normal uppercase text-center w-full md:w-auto">
            AUTOMATES INTERIORS
          </div>
          <div className="hidden md:flex gap-8 lg:gap-10 text-white/80 text-[10px] lg:text-xs tracking-widest uppercase font-medium">
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">Studio</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </motion.nav>

        {/* RESPONSIVE HERO LAYOUT */}
        <div className="relative z-10 flex flex-col lg:flex-row h-full w-full items-end justify-between px-4 md:px-10 lg:px-20 pb-6 md:pb-10 lg:pb-16 pt-24 md:pt-32">
          
          <div className="flex flex-col items-start w-full lg:w-[45%] mb-4 md:mb-6 lg:mb-10">
            <p className="text-stone-300 tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] lg:text-xs uppercase mb-2 md:mb-4 border-l-2 border-stone-500 pl-3 md:pl-4 drop-shadow-md">
              {activeSlide.location}
            </p>
            {/* STRETCHED TEXT EFFECT: tracking-wide to tracking-[0.1em] makes the Syne font look even more expansive */}
            <motion.h1 key={`title-${activeSlide.id}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-3xl md:text-5xl lg:text-[5.5rem] font-bold text-white tracking-wide md:tracking-[0.05em] mb-3 md:mb-6 uppercase drop-shadow-xl leading-[1.1]">
              {activeSlide.title}
            </motion.h1>
            <motion.p key={`desc-${activeSlide.id}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="text-stone-200 tracking-wide text-xs md:text-sm lg:text-lg mb-6 md:mb-8 drop-shadow-xl line-clamp-2 md:line-clamp-3 font-normal max-w-md">
              {activeSlide.description}
            </motion.p>
            
            <div className="flex flex-row flex-wrap items-center gap-3 md:gap-4 lg:gap-6">
              <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="px-5 py-2.5 md:px-8 md:py-3.5 border border-white/50 text-white text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors rounded-full shadow-lg backdrop-blur-sm">
                Explore Design
              </motion.button>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="flex bg-black/40 backdrop-blur-md border border-white/20 rounded-full p-1 shadow-lg">
                <button onClick={() => setIsNightMode(false)} className={`relative flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-colors z-10 ${!isNightMode ? 'text-black' : 'text-white/60 hover:text-white'}`}>
                  {!isNightMode && <motion.div layoutId="pill" className="absolute inset-0 bg-white rounded-full -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                  <SunIcon /> Day
                </button>
                <button onClick={() => setIsNightMode(true)} className={`relative flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-colors z-10 ${isNightMode ? 'text-black' : 'text-white/60 hover:text-white'}`}>
                  {isNightMode && <motion.div layoutId="pill" className="absolute inset-0 bg-white rounded-full -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                  <MoonIcon /> Night
                </button>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-[55%] lg:pl-10 items-center lg:items-end">
            <div className="flex gap-1.5 md:gap-3 h-32 md:h-48 lg:h-[20rem] w-full lg:max-w-2xl justify-center lg:justify-end">
              {initialSlides.map((slide, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div layout key={slide.id} onClick={() => setActiveIndex(index)} className={`relative shrink-0 rounded-lg md:rounded-xl lg:rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/80 border border-white/20 transition-all duration-700 ease-in-out ${isActive ? "w-32 md:w-40 lg:w-56" : "w-8 md:w-10 lg:w-14 opacity-50 hover:opacity-100"}`}>
                    <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${!isNightMode ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${slide.imageDay})` }} />
                    <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isNightMode ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${slide.imageNight})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} transition={{ delay: 0.3, duration: 0.5 }} className="absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3 lg:bottom-5 lg:left-5 lg:right-5">
                          <p className="text-white text-[8px] md:text-[10px] lg:text-xs font-bold uppercase tracking-widest leading-tight drop-shadow-md">{slide.title}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="relative flex items-center justify-center mt-4 md:mt-6 lg:mt-10 w-full lg:max-w-2xl">
              <div className="flex gap-3 md:gap-4">
                <button onClick={handlePrev} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-lg backdrop-blur-sm">←</button>
                <button onClick={handleNext} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-lg backdrop-blur-sm">→</button>
              </div>
              <div className="absolute right-0 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter drop-shadow-lg opacity-80">
                0{activeSlide.id}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 2: THE PHILOSOPHY                 */}
      {/* ========================================= */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 px-6 lg:px-20 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="text-stone-400 tracking-[0.3em] text-xs uppercase mb-6 md:mb-8 border-l-2 border-stone-500 pl-4">The Vision</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-[1.2] lg:leading-[1.1] mb-6 md:mb-10">
              WE DON'T JUST DECORATE ROOMS. <br className="hidden md:block"/>
              <span className="text-stone-500 font-normal">WE SCORE THE SOUNDTRACK</span> <br className="hidden md:block"/> 
              TO YOUR LIFE.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, delay: 0.4 }} className="text-stone-400 text-sm md:text-lg leading-relaxed max-w-md mb-8 md:mb-12 font-normal">
              From sprawling penthouses to intimate studio spaces, we believe luxury isn't about how much you spend—it's about how the space makes you feel when the lights go down. We blend brutalist architecture with warm, organic textures to create environments that breathe.
            </motion.p>
            <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} className="border-b border-white pb-1 text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:text-stone-400 hover:border-stone-400 transition-colors">Meet The Studio</motion.button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.5, ease: "easeOut" }} className="relative w-full md:w-[80%] lg:w-[80%] aspect-[4/5] md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10">
              <img src="/images/pair2day.png" alt="Studio Philosophy" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 3: THE MASONRY PORTFOLIO          */}
      {/* ========================================= */}
      <section className="relative w-full py-16 md:py-20 lg:py-32 px-6 lg:px-20 bg-transparent">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
            <div className="flex flex-col items-start">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-stone-400 tracking-[0.3em] text-[10px] md:text-xs uppercase mb-3 md:mb-4 border-l-2 border-stone-500 pl-3 md:pl-4">Selected Works</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-[0.05em]">
                OUR PORTFOLIO
              </motion.h2>
            </div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-hide w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${activeCategory === cat ? "text-white border-b border-white pb-1" : "text-stone-500 hover:text-stone-300"}`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            <AnimatePresence>
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-full rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid border border-white/10 ${item.height}`}
                >
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 md:opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 md:opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-stone-300 md:text-stone-400 text-[9px] md:text-[10px] uppercase tracking-widest mb-1 font-bold">{item.category}</p>
                    <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-wider">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 4: CONTACT & FOOTER               */}
      {/* ========================================= */}
      <section className="relative w-full pt-24 md:pt-32 lg:pt-48 pb-10 px-6 lg:px-20 bg-transparent overflow-hidden border-t border-white/5">
        
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
          <h1 className="text-[15vw] font-bold text-white whitespace-nowrap leading-none tracking-tighter">
            LET'S TALK LET'S TALK
          </h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
            
            <div className="flex flex-col items-start">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-[0.05em] mb-8 md:mb-12"
              >
                START A <br className="hidden md:block"/> PROJECT
              </motion.h2>

              <div className="space-y-6 md:space-y-8 text-stone-400">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 border-l-2 border-stone-600 pl-3">HQ Studio</p>
                  <p className="text-base md:text-lg text-white font-normal">Nagpur, Maharashtra<br/>India</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 border-l-2 border-stone-600 pl-3">Inquiries</p>
                  <a href="mailto:hello@automates.com" className="text-base md:text-lg text-white hover:text-stone-300 transition-colors font-normal">hello@automates.com</a>
                </motion.div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <form className="flex flex-col gap-8 md:gap-12 font-normal" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/20 pb-3 md:pb-4 text-white text-base md:text-lg placeholder:text-stone-600 focus:outline-none focus:border-white transition-colors" />
                </div>
                <div className="relative">
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 pb-3 md:pb-4 text-white text-base md:text-lg placeholder:text-stone-600 focus:outline-none focus:border-white transition-colors" />
                </div>
                <div className="relative">
                  <textarea placeholder="Tell us about your space..." rows={3} className="w-full bg-transparent border-b border-white/20 pb-3 md:pb-4 text-white text-base md:text-lg placeholder:text-stone-600 focus:outline-none focus:border-white transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="self-start px-8 md:px-10 py-3 md:py-4 border border-white text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors rounded-full">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

          </div>

          <div className="w-full border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 text-center md:text-left">
            <p>© 2026 AUTOMATES INTERIORS. ALL RIGHTS RESERVED.</p>
            
            <div className="flex gap-4 md:gap-8">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            
            <div className="flex gap-4 md:gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}