
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Brain,
  Puzzle,
  Heart,
  Lightbulb,
} from "lucide-react";

const ageGroups = [
  {
    id: 1,
    age: "0–12 Months",
    title: "Little Explorers",
    subtitle: "Discovering the world",
    description:
      "Help little ones explore their senses with soft, colorful and engaging toys designed for their earliest discoveries.",
    toys: ["Sensory Toys", "Rattles", "Soft Toys", "Activity Gyms"],
    benefit: "Sensory Development",
    image: "/0-12.png",
    color: "#F8D3B9",
    light: "#FFF4EC",
    accent: "#EA9869",
    icon: Heart,
  },
  {
    id: 2,
    age: "1–2 Years",
    title: "Curious Minds",
    subtitle: "Learning through play",
    description:
      "Encourage curiosity, movement and coordination with colorful stacking, sorting and hands-on learning toys.",
    toys: ["Shape Sorters", "Stacking Toys", "Building Blocks", "Pull-Along Toys"],
    benefit: "Motor Skills",
    image: "/1-2.png",
    color: "#F5D78F",
    light: "#FFF9E9",
    accent: "#D8A32C",
    icon: Puzzle,
  },
  {
    id: 3,
    age: "2–3 Years",
    title: "Creative Thinkers",
    subtitle: "Big ideas begin here",
    description:
      "Build imagination and problem-solving abilities through creative construction, puzzles and interactive games.",
    toys: ["Rainbow Stackers", "Puzzles", "Pretend Play", "Creative Blocks"],
    benefit: "Creative Thinking",
    image: "/2-3.png",
    color: "#D8BDF4",
    light: "#F8F2FF",
    accent: "#9663CB",
    icon: Lightbulb,
  },
  {
    id: 4,
    age: "3–5 Years",
    title: "Smart Builders",
    subtitle: "Think, build and explore",
    description:
      "Introduce early learning concepts, logical thinking and imaginative play with exciting educational activities.",
    toys: ["Learning Games", "Toy Vehicles", "STEM Toys", "Building Sets"],
    benefit: "Logic & Learning",
    image: "/3-5.png",
    color: "#F1BBC6",
    light: "#FFF2F4",
    accent: "#D86F89",
    icon: Brain,
  },
  {
    id: 5,
    age: "6–8 Years",
    title: "Young Innovators",
    subtitle: "Ready for new challenges",
    description:
      "Inspire independent thinking, creativity and advanced problem-solving through exciting hands-on experiences.",
    toys: ["STEM Kits", "Science Toys", "Doll Houses", "Advanced Puzzles"],
    benefit: "Critical Thinking",
    image: "/6-8.png",
    color: "#B8E6D5",
    light: "#EEFBF5",
    accent: "#43A889",
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AgeWiseToys() {
  const [activeAge, setActiveAge] = useState(null);

  const activeItem = ageGroups.find(
    (item) => item.id === activeAge
  );

  return (
    <section className="relative overflow-hidden bg-[#FFFCF8] py-6 md:py-12">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FCE9DB]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E9E0FF]/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center md:mb-20"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#EBDDFB] bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8655B5] shadow-sm">
            <Sparkles size={15} />
            Learning Through Every Stage
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#32105C] sm:text-4xl md:text-5xl">
            Toys for Every Age:
            <span className="relative ml-2 inline-block text-[#E99A45]">
              Sorted!
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#71677C] md:text-base">
            Find the perfect playmate for your child's stage of
            development. Because every little milestone deserves
            a little magic!
          </p>
        </motion.div>

        {/* Age Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4"
        >
          {ageGroups.map((item) => {
            const Icon = item.icon;
            const isActive = activeAge === item.id;

            return (
              <motion.button
                key={item.id}
                variants={cardVariants}
                type="button"
                onClick={() =>
                  setActiveAge(isActive ? null : item.id)
                }
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.97 }}
                aria-pressed={isActive}
                className={`group relative flex w-full flex-col overflow-hidden rounded-[28px] border p-4 text-left transition-all duration-300 sm:p-3 xl:p-4 ${
                  isActive
                    ? "border-[#8655B5] shadow-xl shadow-purple-100"
                    : "border-white shadow-[0_8px_35px_rgba(50,16,92,0.06)] hover:shadow-xl"
                }`}
                style={{ backgroundColor: item.light }}
              >
                {/* Decorative circle */}
                <div
                  className="absolute -right-9 -top-9 h-32 w-32 rounded-full opacity-70 transition-transform duration-700 group-hover:scale-150"
                  style={{ backgroundColor: item.color }}
                />

                {/* Card Top */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-bold tracking-wide"
                    style={{ color: item.accent }}
                  >
                    AGE {item.age}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#32105C] transition-transform duration-300 group-hover:rotate-12">
                    <Icon size={18} />
                  </span>
                </div>

                {/* Illustration */}
                <div className="relative my-5 flex h-48 items-center justify-center sm:h-40 lg:h-44 xl:h-48">
                  <motion.div
                    className="absolute h-36 w-36 rounded-full"
                    
                    animate={{
                      scale: isActive ? [1, 1.08, 1] : [1, 1.035, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.img
                    src={item.image}
                    alt={`${item.title} educational toys for ${item.age}`}
                    className="relative z-10 h-70 w-full object-cover rounded-full drop-shadow-sm"
                    whileHover={{ scale: 1.12, rotate: -3 }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className="absolute right-4 top-3 text-white"
                    animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles size={20} color={item.accent} />
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 mt-auto">
                  <h3 className="text-xl font-extrabold text-[#32105C]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-[#81768A]">
                    {item.subtitle}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                    <span className="text-xs font-bold text-[#49375B]">
                      Explore Toys
                    </span>

                    <motion.span
                      animate={{
                        x: isActive ? 4 : 0,
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#32105C] shadow-sm"
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="active-border"
                    className="pointer-events-none absolute inset-0 rounded-[28px] border-2 border-[#8655B5]"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Expanded Age Details */}
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div
                className="mt-10 grid gap-7 rounded-[30px] border border-white p-7 shadow-lg md:grid-cols-[1fr_1fr] md:p-10"
                style={{ backgroundColor: activeItem.light }}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: activeItem.accent }}>
                    Discover this stage
                  </span>

                  <h3 className="mt-3 text-2xl font-extrabold text-[#32105C] md:text-3xl">
                    {activeItem.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#71677C]">
                    {activeItem.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-[#32105C]">
                    <Sparkles size={17} style={{ color: activeItem.accent }} />
                    {activeItem.benefit}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-[#32105C]">
                    Recommended Toys
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {activeItem.toys.map((toy) => (
                      <span
                        key={toy}
                        className="rounded-full border border-white bg-white px-4 py-3 text-xs font-semibold text-[#5D4C70] shadow-sm"
                      >
                        {toy}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/shop?age=${activeItem.id}`}
                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#32105C] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#66369B] hover:shadow-lg"
                  >
                    Shop This Age Group
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 text-center md:mt-16"
        >
          <p className="text-sm font-medium text-[#81768A]">
            Not sure where to start?
          </p>

          <a
            href="/shop"
            className="group inline-flex items-center gap-3 rounded-full bg-[#F5B942] px-8 py-4 text-sm font-extrabold text-[#32105C] shadow-lg shadow-yellow-100 transition-all hover:-translate-y-1 hover:bg-[#FFCA5D]"
          >
            Explore All Educational Toys
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
