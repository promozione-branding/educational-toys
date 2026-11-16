
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Stars } from "lucide-react";

const toys = [
  {
    name: "Building Blocks",
    image: "/suprise/1.png",
    left: "12%",
    top: "27%",
    rotate: -12,
    width: "w-24 md:w-36",
  },
  {
    name: "Rainbow Stacker",
    image: "/suprise/2.png",
    left: "29%",
    top: "12%",
    rotate: 10,
    width: "w-24 md:w-36",
  },
  {
    name: "Abacus",
    image: "/suprise/3.png",
    left: "50%",
    top: "9%",
    rotate: -7,
    width: "w-24 md:w-36",
  },
  {
    name: "Shape Sorter",
   image: "/suprise/4.png",
    left: "72%",
    top: "15%",
    rotate: 12,
    width: "w-24 md:w-36",
  },
  {
    name: "Toy Train",
    image: "/suprise/5.png",
    left: "89%",
    top: "32%",
    rotate: -10,
    width: "w-24 md:w-36",
  },
  {
    name: "Educational Puzzle",
   image: "/suprise/6.png",
    left: "12%",
    top: "65%",
    rotate: 12,
    width: "w-24 md:w-36",
  },
  {
    name: "Wooden Toys",
    image: "/suprise/7.png",
    left: "87%",
    top: "68%",
    rotate: -12,
    width: "w-24 md:w-36",
  },
  {
    name: "Creative Learning",
    image: "/suprise/8.png",
    left: "30%",
    top: "83%",
    rotate: -8,
    width: "w-24 md:w-36",
  },
  {
    name: "Colorful Stacking Toys",
    image: "/suprise/9.png",
    left: "70%",
    top: "84%",
    rotate: 10,
    width: "w-24 md:w-36",
  },
];

const sparkles = [
  { left: "18%", top: "18%" },
  { left: "80%", top: "25%" },
  { left: "9%", top: "48%" },
  { left: "92%", top: "48%" },
  { left: "45%", top: "5%" },
  { left: "58%", top: "90%" },
];

export default function SurpriseToyBox() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const isOpen = hovered || clicked;

  return (
    <section className="relative overflow-hidden bg-[#FFFAF0] py-6 md:py-12">

      {/* Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#FFE6B5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#E8D9FF]/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-20 mb-5 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F3DCA9] bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#A46D27] shadow-sm">
            <Sparkles size={15} />
            A Little Surprise Awaits
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#32105C] sm:text-4xl md:text-5xl">
            What's Inside The
            <span className="ml-2 text-[#F0A72D]">
              Toy Box?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#81758A] md:text-base">
            Every box holds a little magic! Open it and discover
            exciting toys that make learning fun.
          </p>
        </motion.div>

        {/* Interactive Stage */}
        <div
          className="relative mx-auto h-[480px] max-w-[1150px] sm:h-[540px] md:h-[540px]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >

          {/* Ground Shadow */}
          <motion.div
            animate={{
              scale: isOpen ? 1.35 : 1,
              opacity: isOpen ? 0.18 : 0.1,
            }}
            className="absolute left-1/2 top-[62%] h-24 w-64 -translate-x-1/2 rounded-full bg-[#7D4A20] blur-3xl"
          />

          {/* Floating Sparkles */}
          <AnimatePresence>
            {isOpen &&
              sparkles.map((sparkle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0.5],
                    scale: [0, 1.2, 1],
                    rotate: [0, 90, 180],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 1.8,
                    delay: i * 0.12,
                    repeat: Infinity,
                  }}
                  style={{
                    left: sparkle.left,
                    top: sparkle.top,
                  }}
                  className="pointer-events-none absolute z-10 text-[#F4B52E]"
                >
                  <Stars size={25} fill="currentColor" />
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Toys Coming Out */}
          {toys.map((toy, index) => (
            <motion.div
              key={toy.name}
              initial={{
                left: "50%",
                top: "59%",
                x: "-50%",
                y: "-50%",
                opacity: 0,
                scale: 0.15,
                rotate: 0,
              }}
              animate={
                isOpen
                  ? {
                      left: toy.left,
                      top: toy.top,
                      x: "-50%",
                      y: "-50%",
                      opacity: 1,
                      scale: 1,
                      rotate: toy.rotate,
                    }
                  : {
                      left: "50%",
                      top: "59%",
                      x: "-50%",
                      y: "-50%",
                      opacity: 0,
                      scale: 0.15,
                      rotate: 0,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 12,
                mass: 0.8,
                delay: isOpen ? index * 0.09 : (toys.length - index) * 0.025,
              }}
              className="pointer-events-none absolute z-20"
            >
              <motion.img
                src={toy.image}
                alt={toy.name}
                draggable="false"
                whileHover={{ scale: 1.16, rotate: 0 }}
                className={`${toy.width} h-auto max-h-28 select-none object-contain drop-shadow-[0_12px_12px_rgba(50,30,20,0.12)] sm:max-h-36 md:max-h-44`}
              />
            </motion.div>
          ))}

          {/* Central Toy Box */}
          <div className="absolute left-1/2 top-[59%] z-30 -translate-x-1/2 -translate-y-1/2">

            <motion.button
              type="button"
              onClick={() => setClicked((prev) => !prev)}
              aria-label={isOpen ? "Close toy box" : "Open toy box"}
              aria-expanded={isOpen}
              animate={{
                y: isOpen ? 18 : 0,
                scale: isOpen ? 0.94 : 1,
              }}
              whileHover={{ scale: isOpen ? 0.97 : 1.04 }}
              whileTap={{ scale: 0.94 }}
              className="relative flex h-44 w-56 cursor-pointer flex-col items-center justify-end outline-none sm:h-52 sm:w-64 md:h-60 md:w-72"
            >

              {/* Light from Inside */}
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  scale: isOpen ? 1.5 : 0.5,
                }}
                transition={{ duration: 0.4 }}
                className="absolute -top-24 h-64 w-64 rounded-full bg-[#FFF0A8]/80 blur-3xl"
              />

              {/* Box Interior */}
              <div className="absolute bottom-2 z-10 h-[68%] w-[92%] overflow-hidden rounded-b-[24px] border-x-[8px] border-b-[10px] border-[#B66C28] bg-gradient-to-b from-[#F3B95E] to-[#C77A30] shadow-[0_25px_35px_rgba(115,64,21,0.2)]">

                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-70">
                  <div className="h-full w-2 bg-[#FFD17D]/60" />
                  <div className="h-full w-2 bg-[#FFD17D]/60" />
                  <div className="h-full w-2 bg-[#FFD17D]/60" />
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#FFE3A1] bg-[#F4B83E] text-2xl shadow-lg">
                  ★
                </div>
              </div>

              {/* Box Front Panel */}
              <div className="absolute bottom-0 z-20 flex h-[48%] w-full items-center justify-center rounded-b-[22px] border-[5px] border-[#B76A25] bg-gradient-to-br from-[#F6BD63] via-[#E99C42] to-[#CB752E] shadow-[0_18px_25px_rgba(130,73,28,0.2)]">

                <div className="absolute left-0 top-0 h-full w-3 bg-white/10" />

                <div className="relative flex h-12 w-19 items-center justify-center rounded-lg border-[4px] border-[#FCE1A0] bg-[#9C5B27] shadow-inner">
                  <span className="text-2xl font-black text-[#FFE7A8]">
                    TOYS
                  </span>
                </div>

                <div className="absolute bottom-2 left-3 h-2 w-2 rounded-full bg-[#FFE4AC]" />
                <div className="absolute bottom-2 right-3 h-2 w-2 rounded-full bg-[#FFE4AC]" />
              </div>

              {/* Left Side Panel */}
              <div className="absolute bottom-0 left-0 z-20 h-[47%] w-[13%] rounded-bl-[20px] border-l-[5px] border-b-[5px] border-[#AC6429] bg-[#D98635]" />

              {/* Right Side Panel */}
              <div className="absolute bottom-0 right-0 z-20 h-[47%] w-[13%] rounded-br-[20px] border-r-[5px] border-b-[5px] border-[#AC6429] bg-[#D98635]" />

              {/* Opening Lid */}
              <motion.div
                animate={{
                  rotateX: isOpen ? 68 : 0,
                  y: isOpen ? -4 : 0,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: "bottom center",
                  transformStyle: "preserve-3d",
                }}
                className="absolute bottom-[62%] z-40 flex h-9 w-[104%] items-center justify-center rounded-xl border-[5px] border-[#AE6729] bg-gradient-to-b from-[#FFD68C] to-[#E99A42] shadow-[0_-8px_15px_rgba(120,65,20,0.12)] sm:h-11"
              >
                <div className="h-2 w-16 rounded-full bg-[#FFE5B0]/70" />
              </motion.div>

              {/* Front Lid Rim */}
              <motion.div
                animate={{
                  y: isOpen ? -5 : 0,
                }}
                className="absolute bottom-[61%] z-30 h-3 w-[104%] rounded-full bg-[#C77A30]"
              />

            </motion.button>

            {/* Instruction */}
            <motion.div
              animate={{
                opacity: isOpen ? 0 : 1,
                y: isOpen ? 10 : 0,
              }}
              className="mt-7 flex flex-col items-center gap-2 text-center"
            >
              <span className="flex items-center gap-2 rounded-full border border-[#F0DDB9] bg-white/90 px-5 py-2.5 text-xs font-bold text-[#6E4C27] shadow-sm sm:text-sm">
                <Sparkles size={16} className="text-[#EBAA35]" />
                {hovered ? "Look What's Inside!" : "Hover or Tap to Open"}
              </span>
            </motion.div>
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-40 mt-1 text-center"
        >
          <p className="mb-5 text-sm text-[#81758A]">
            Little discoveries. Big imaginations. Endless possibilities.
          </p>

          <a
            href="/shop"
            className="group inline-flex items-center gap-3 rounded-full bg-[#32105C] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all hover:-translate-y-1 hover:bg-[#57308A]"
          >
            Explore All Toys

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
