
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Lightbulb,
  Rocket,
  Star,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const floating = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 4, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const cards = [
  {
    title: "OUR MISSION",
    description:
      "Making learning exciting through creative and meaningful play.",
    image: "/mission.webp",
    href: "#our-mission",
    bg: "bg-gradient-to-br from-[#FF65AD] to-[#ED3690]",
    text: "text-white",
    button: "bg-white text-[#76218C]",
    icon: Heart,
  },
  {
    title: "OUR VALUES",
    description:
      "Building a world where curiosity, creativity and imagination grow.",
    image: "/value.webp",
    href: "#our-values",
    bg: "bg-gradient-to-br from-[#FFE95C] to-[#FFCE32]",
    text: "text-[#40127B]",
    button: "bg-white text-[#40127B]",
    icon: Lightbulb,
  },
];

export default function AboutHero() {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO SECTION ================= */}

      <section className="relative isolate flex min-h-[780px] flex-col justify-start overflow-hidden bg-[#63B9F2] md:min-h-[750px]">

        {/* Sky Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/aboutbanner.webp"
            alt="Children enjoying outdoor play together"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#46A9EC]/90 via-transparent to-[#00A9BD]/30" />
        </div>

        {/* Heading */}
        <div className="relative z-20 mx-auto w-full max-w-5xl px-5 pt-12 text-center sm:pt-16 lg:pt-20">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 rounded-full border-4 border-white bg-white px-7 py-3 shadow-xl"
          >
            <Sparkles className="text-[#FFB800]" size={20} />

            <span className="text-sm font-black tracking-wider text-[#54138C] sm:text-base">
              WELCOME TO OUR WORLD
            </span>

            <Sparkles className="text-[#FFB800]" size={20} />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="mt-7 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            <span className="block text-white drop-shadow-[0_5px_2px_rgba(0,0,0,0.18)]">
              THE STORY
            </span>

            <span className="mt-2 block">
              <span className="text-[#6321A0] [text-shadow:2px_4px_0_white,-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white]">
                BEHIND OUR
              </span>{" "}
              <span className="text-[#FF811E] [text-shadow:2px_4px_0_white,-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white]">
                TOYS!
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-sm font-bold leading-7 text-[#34116E] sm:text-base md:text-lg"
          >
            A passionate team on a mission to make learning
            fun, creative, and meaningful for every child.
          </motion.p>

          <motion.a
            href="#who-we-are"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#9B24D6] to-[#6414A4] px-9 py-4 text-sm font-black text-white shadow-[0_8px_0_#421078] transition-all hover:shadow-[0_5px_0_#421078] hover:translate-y-[3px]"
          >
            OUR JOURNEY
            <ArrowRight size={20} />
          </motion.a>
        </div>

        {/* Floating Decorations */}
        <motion.div
          variants={floating}
          animate="animate"
          className="absolute left-[7%] top-[23%] z-10 hidden text-[#FFDE36] lg:block"
        >
          <Sparkles size={45} />
        </motion.div>

        <motion.div
          variants={floating}
          animate="animate"
          className="absolute right-[8%] top-[24%] z-10 hidden text-white lg:block"
        >
          <Star size={42} fill="white" />
        </motion.div>

        {/* Bottom Curved Teal Transition */}
        <div className="absolute -bottom-1 left-0 z-10 w-full">
          <svg
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            className="h-[90px] w-full sm:h-[125px]"
          >
            <path
              d="M0 55 C180 110 260 25 450 55 C650 90 780 115 960 65 C1150 10 1280 40 1440 60 L1440 150 L0 150Z"
              fill="#079EB1"
            />
          </svg>
        </div>
      </section>

      {/* ================= MISSION & VALUES ================= */}

      <section className="relative z-20 -mt-12 bg-[#079EB1] px-5 pb-16 sm:-mt-9 sm:px-8 ">

        <div className="mx-auto grid max-w-[1050px] gap-5 sm:grid-cols-2">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 65 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -10 }}
                className={`group relative flex min-h-[220px] items-center overflow-hidden rounded-[32px] border-[7px] border-white p-6 shadow-[0_15px_30px_rgba(0,0,0,0.15)] sm:min-h-[240px] sm:p-8 ${card.bg}`}
              >

                {/* Decorative Shape */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[20px] border-white/15" />

                {/* Text */}
                <div className="relative z-10 max-w-[58%]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/25">
                    <Icon size={22} className={card.text} />
                  </div>

                  <h2 className={`text-2xl font-black leading-tight sm:text-3xl ${card.text}`}>
                    {card.title}
                  </h2>

                  <p className={`mt-2 text-xs font-semibold leading-5 opacity-90 sm:text-sm ${card.text}`}>
                    {card.description}
                  </p>

                  <a
                    href={card.href}
                    className={`mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-black transition-all hover:scale-105 ${card.button}`}
                  >
                    DISCOVER MORE
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Toy Image */}
                <motion.img
                  src={card.image}
                  alt={card.title}
                  whileHover={{
                    scale: 1.12,
                    rotate: index === 0 ? 5 : -5,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-3 right-2 h-[75%] w-[43%] object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] sm:right-4"
                />

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}

      <section
        id="who-we-are"
        className="relative isolate overflow-hidden bg-[#079EB1] px-5 pb-24 pt-8 sm:px-8 sm:pt-12 lg:pb-32"
      >

        {/* Background Decorations */}
        <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-[#00D1CF]/30 blur-3xl" />
        <div className="absolute right-[-100px] bottom-20 h-80 w-80 rounded-full bg-[#00C8CB]/30 blur-3xl" />

        {/* Left Rocket */}
        <motion.div
          variants={floating}
          animate="animate"
          className="absolute left-[3%] top-[22%] hidden w-36 lg:block xl:w-48"
        >
          <img
            src="/rocket.webp"
            alt=""
            className="w-full object-contain"
          />
        </motion.div>

        {/* Right ABC Blocks */}
        <motion.div
          variants={floating}
          animate="animate"
          className="absolute right-[4%] top-[20%] hidden w-40 lg:block xl:w-48"
        >
          <img
            src="/dice.webp"
            alt=""
            className="w-full object-contain"
          />
        </motion.div>

        {/* Floating Stars */}
        <motion.div
          variants={floating}
          animate="animate"
          className="absolute left-[10%] top-[8%] hidden text-[#FFDE39] lg:block"
        >
          <Star size={38} fill="#FFDE39" />
        </motion.div>

        <motion.div
          variants={floating}
          animate="animate"
          className="absolute right-[11%] top-[5%] hidden text-[#FFDE39] lg:block"
        >
          <Star size={34} fill="#FFDE39" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >

          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-3"
          >
            <Sparkles className="text-[#FFE44F]" size={27} />

            <span className="text-3xl font-black tracking-wide text-white sm:text-4xl md:text-5xl">
              WHO WE ARE
            </span>

            <Sparkles className="text-[#FFE44F]" size={27} />
          </motion.div>

          {/* Yellow Underline */}
          <motion.div
            variants={fadeUp}
            className="mx-auto h-[6px] w-48 rounded-full bg-[#C8F348]"
          />

          <motion.p
            variants={fadeUp}
            className="mt-7 text-sm font-semibold leading-7 text-white sm:text-base md:text-lg md:leading-8"
          >
            We are an educational toy brand dedicated to sparking
            curiosity, creativity, and a love for learning in children.
            Our carefully designed toys combine fun with skill
            development, helping kids grow, explore, and reach
            their full potential.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm leading-7 text-white/85 sm:text-base"
          >
            From little discoveries to big achievements, we believe
            every child deserves the joy of learning through play.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="/about"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C8F348] px-8 py-4 text-sm font-black text-[#4B168A] shadow-lg transition-all sm:text-base"
          >
            LEARN MORE ABOUT US
            <ArrowRight size={21} />
          </motion.a>

        </motion.div>

        {/* Bottom Cloud Decorations */}
        <div className="pointer-events-none absolute -bottom-1 left-0 w-full">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="h-16 w-full sm:h-24"
          >
            <path
              d="M0 60 C50 0 100 0 145 55 C190 5 250 5 290 60 C350 15 405 20 450 65 L450 100 L0 100Z"
              fill="#FFFFFF"
              fillOpacity="0.95"
            />

            <path
              d="M1440 60 C1390 0 1340 0 1295 55 C1250 5 1190 5 1150 60 C1090 15 1035 20 990 65 L990 100 L1440 100Z"
              fill="#FFFFFF"
              fillOpacity="0.95"
            />
          </svg>
        </div>

      </section>
    </main>
  );
}
