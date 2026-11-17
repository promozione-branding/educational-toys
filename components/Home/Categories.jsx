
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import BounceCards from "../BounceCards";

const categories = [
  {
    title: "STEM & Science",
    subtitle: "Explore. Experiment. Discover.",
    description:
      "Make learning exciting with hands-on science kits, STEM activities, microscopes and educational experiments that develop curiosity and logical thinking.",
    image: "/category/1.webp",
    color: "#7845B5",
    tag: "Learning & Discovery",
    number: "01",
  },
  {
    title: "Building & Construction",
    subtitle: "Build big dreams, one block at a time.",
    description:
      "Explore construction sets, building blocks and creative assembly toys that develop spatial awareness, creativity and problem-solving skills.",
    image: "/category/2.webp",
    color: "#E99A24",
    tag: "Creative Play",
    number: "02",
  },
  {
    title: "Puzzles & Brain Games",
    subtitle: "Challenge little minds.",
    description:
      "Discover engaging puzzles, brain games and problem-solving activities that encourage concentration, memory and logical reasoning.",
    image: "/category/3.webp",
    color: "#E34B91",
    tag: "Brain Development",
    number: "03",
  },
  {
    title: "Arts & Creativity",
    subtitle: "Imagine. Create. Express.",
    description:
      "Bring imagination to life with art supplies, drawing kits, painting sets and creative activities that encourage self-expression.",
    image: "/category/4.webp",
    color: "#239C76",
    tag: "Creative Learning",
    number: "04",
  },
  {
    title: "Early Learning Toys",
    subtitle: "Little toys, big milestones.",
    description:
      "Explore playful educational toys designed to support early development, sensory exploration, recognition and coordination.",
    image: "/category/5.webp",
    color: "#398AC8",
    tag: "Early Development",
    number: "05",
  },
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);
  const active = categories[activeCategory];

  const images = categories.map((item) => ({
    src: item.image,
    alt: item.title,
  }));

  return (
    <section className="relative isolate overflow-hidden bg-[#FBF8FF] py-6 sm:py-12">

      {/* Background SVG decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Left organic shape */}
        <svg
          className="absolute -left-36 top-32 w-[420px] opacity-60"
          viewBox="0 0 420 500"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M210 20C330 30 410 150 370 270C340 370 230 480 110 440C-10 400 0 270 30 160C60 60 110 10 210 20Z"
            fill="#E9DDFB"
          />
          <path
            d="M170 75C260 80 335 165 310 260C285 355 190 405 105 365C20 325 45 215 70 145C95 90 120 70 170 75Z"
            stroke="#C8ACEF"
            strokeWidth="2"
            strokeDasharray="7 10"
          />
        </svg>

        {/* Right organic shape */}
        <svg
          className="absolute -right-36 top-44 w-[430px] opacity-60"
          viewBox="0 0 430 500"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M220 15C350 35 420 140 390 270C360 390 250 475 130 435C10 395 0 280 35 160C70 50 120 0 220 15Z"
            fill="#FFE9D5"
          />
          <path
            d="M235 75C330 95 365 180 340 270C315 360 225 415 145 380C65 345 55 250 85 170C115 90 155 60 235 75Z"
            stroke="#F7C48D"
            strokeWidth="2"
            strokeDasharray="7 10"
          />
        </svg>

        {/* Top decorative stars */}
        <svg
          className="absolute right-[13%] top-16 h-16 w-16 text-[#F5A623]"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M32 3L38 25L61 32L38 39L32 61L25 39L3 32L25 25L32 3Z"
            fill="currentColor"
          />
        </svg>

        <svg
          className="absolute left-[12%] top-[42%] h-10 w-10 text-[#E99A24]"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M32 3L38 25L61 32L38 39L32 61L25 39L3 32L25 25L32 3Z"
            fill="currentColor"
          />
        </svg>

        {/* Small floating circles */}
        <svg
          className="absolute right-[10%] bottom-36 h-24 w-24"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="38" stroke="#E7B5D5" strokeWidth="2" strokeDasharray="4 7" />
          <circle cx="50" cy="50" r="5" fill="#E34B91" />
        </svg>

        {/* Dotted pattern */}
        <svg
          className="absolute bottom-20 left-[8%] h-24 w-32 opacity-60"
          viewBox="0 0 130 90"
          fill="#B99AE6"
          aria-hidden="true"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <circle
              key={i}
              cx={10 + (i % 6) * 21}
              cy={10 + Math.floor(i / 6) * 21}
              r="3"
            />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-[2px] text-[#7541B5] shadow-sm">
            <TrendingUp size={15} className="text-orange-400" />
            Most Loved Collections
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#351078] sm:text-5xl md:text-6xl">
            Our Top
            <span className="block text-[#F47719]">
              Categories!
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#81758E] sm:text-base">
            From exciting experiments to creative adventures,
            discover educational toys that turn every moment
            into an opportunity to learn and grow.
          </p>
        </motion.div>

        {/* Cards area */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 sm:mt-20"
        >
          {/* Decorative connecting SVG */}
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[420px] w-full max-w-[1050px] -translate-x-1/2 -translate-y-1/2 lg:block"
            viewBox="0 0 1050 420"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M40 245C160 50 250 55 350 180C450 305 550 320 650 190C750 60 860 60 1010 245"
              stroke="#D9C5F2"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 12"
            />
            <circle cx="40" cy="245" r="7" fill="#E99A24" />
            <circle cx="350" cy="180" r="7" fill="#7845B5" />
            <circle cx="650" cy="190" r="7" fill="#E34B91" />
            <circle cx="1010" cy="245" r="7" fill="#239C76" />
          </svg>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-[7%] top-0 z-10 hidden text-4xl md:block"
          >
            ✦
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[8%] top-12 z-10 hidden text-3xl text-[#F47719] md:block"
          >
            ✧
          </motion.div>

          <div className="relative z-10 flex justify-center">
            <div className="bounce-cards-mobile">
              <BounceCards
                images={images}
                containerWidth={500}
                containerHeight={320}
                cardSize={300}
                spread={105}
                rotation={10}
                arc={0}
                pushDistance={190}
                hoverScale={1.06}
                bounciness={0.6}
                animationDelay={0.5}
                animationStagger={0.06}
                borderWidth={5}
                borderColor="#ffffff"
                radius={25}
                shadow
                enableHover
                onCardClick={(index) => setActiveCategory(index)}
              />
            </div>
          </div>
        </motion.div>

        {/* Selected category information */}
        <div className="relative z-20 mx-auto mt-8 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[30px] border border-white bg-white/90 p-6 shadow-[0_20px_70px_rgba(75,42,120,0.10)] backdrop-blur-xl sm:p-9"
            >
              {/* Colored side accent */}
              <div
                className="absolute left-0 top-0 h-full w-1.5"
                style={{ backgroundColor: active.color }}
              />

              <div className="flex flex-col items-center gap-7 text-center sm:flex-row sm:text-left">

                <div className="min-w-0 flex-1">
                  <div
                    className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-extrabold uppercase tracking-[1.5px]"
                    style={{
                      backgroundColor: `${active.color}14`,
                      color: active.color,
                    }}
                  >
                    <Sparkles size={13} />
                    {active.tag}
                  </div>

                  <h3 className="text-2xl font-black text-[#351078] sm:text-3xl">
                    {active.title}
                  </h3>

                  <p
                    className="mt-2 text-sm font-bold sm:text-base"
                    style={{ color: active.color }}
                  >
                    {active.subtitle}
                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#81758E]">
                    {active.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href={`/categories/${active.title
                      .toLowerCase()
                      .replaceAll("&", "and")
                      .replaceAll(" ", "-")}`}
                    className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ backgroundColor: active.color }}
                  >
                    Explore Collection
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Category navigation indicators */}
        

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-sm font-bold text-[#78658D]">
            <span className="mr-2">🧸</span>
            Explore more. Learn more. Play more!
            <span className="ml-2">✨</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
