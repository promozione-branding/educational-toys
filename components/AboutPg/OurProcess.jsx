
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Leaf,
  ShieldCheck,
  PackageCheck,
  Sparkles,
  ArrowRight,
  Cog,
} from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Idea & Research",
    subtitle: "Every great toy starts with an idea.",
    description:
      "We explore children's interests, learning needs and developmental stages to create toys that make learning fun and meaningful.",
    icon: Lightbulb,
    emoji: "💡",
    color: "#FFE0ED",
    accent: "#F05B91",
    tag: "The Beginning",
  },
  {
    no: "02",
    title: "Toy Design",
    subtitle: "Turning imagination into reality.",
    description:
      "Our creative team transforms innovative ideas into engaging designs that encourage imagination, creativity and hands-on learning.",
    icon: Palette,
    emoji: "🎨",
    color: "#FFF0C9",
    accent: "#E9A51D",
    tag: "Made with Creativity",
  },
  {
    no: "03",
    title: "Material Selection",
    subtitle: "Choosing the right materials.",
    description:
      "We carefully select appropriate materials, keeping durability, quality and child-friendly play experiences in mind.",
    icon: Leaf,
    emoji: "🌱",
    color: "#EDE2FF",
    accent: "#9663D4",
    tag: "Quality Materials",
  },
  {
    no: "04",
    title: "Quality Testing",
    subtitle: "Quality is never compromised.",
    description:
      "Every product goes through quality inspections and appropriate safety and performance checks before moving forward.",
    icon: ShieldCheck,
    emoji: "🛡️",
    color: "#DDF8F1",
    accent: "#26AA8C",
    tag: "Quality First",
  },
  {
    no: "05",
    title: "Packaging & Delivery",
    subtitle: "Ready for little adventures.",
    description:
      "Our finished educational toys are carefully packed and prepared for delivery, ready to bring smiles and learning adventures.",
    icon: PackageCheck,
    emoji: "🎁",
    color: "#FFE5D7",
    accent: "#ED824B",
    tag: "Ready for Play",
  },
];

function FactoryIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[850px]">

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-[4%] top-[18%] z-20 text-3xl sm:text-4xl"
      >
        ✈️
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-[5%] top-[8%] z-20 text-4xl"
      >
        🎈
      </motion.div>

      <svg
        viewBox="0 0 850 440"
        className="relative z-10 w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Colorful educational toy factory"
      >
        <defs>
          <linearGradient id="factoryWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E9DDFC" />
          </linearGradient>

          <linearGradient id="factoryRoof" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B68AEF" />
            <stop offset="100%" stopColor="#7541B5" />
          </linearGradient>

          <linearGradient id="factoryDoor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD96B" />
            <stop offset="100%" stopColor="#FF9D28" />
          </linearGradient>

          <linearGradient id="conveyor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B68BEA" />
            <stop offset="100%" stopColor="#7540B4" />
          </linearGradient>

          <filter id="factoryShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="8"
              floodColor="#56328A"
              floodOpacity="0.17"
            />
          </filter>
        </defs>

        {/* Clouds */}
        <g fill="#FFFFFF" opacity=".9">
          <ellipse cx="115" cy="77" rx="48" ry="19" />
          <circle cx="93" cy="69" r="20" />
          <circle cx="126" cy="58" r="26" />

          <ellipse cx="730" cy="70" rx="48" ry="17" />
          <circle cx="710" cy="58" r="20" />
          <circle cx="743" cy="51" r="24" />
        </g>

        {/* Smoke chimney left */}
        <rect x="172" y="105" width="52" height="145" rx="9" fill="#9A65D4" />
        <rect x="160" y="98" width="76" height="15" rx="5" fill="#7541B5" />

        {/* Smoke animation */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={185 + i * 13}
            cy={80 - i * 8}
            r={13 + i * 2}
            fill="#FFFFFF"
            animate={{
              y: [-5, -32, -5],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 3,
              delay: i * 0.8,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Right chimney */}
        <rect x="660" y="104" width="45" height="140" rx="8" fill="#FF9D46" />
        <rect x="651" y="96" width="63" height="17" rx="5" fill="#E96C36" />

        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={673 + i * 12}
            cy={75 - i * 7}
            r="12"
            fill="#FFFFFF"
            animate={{
              y: [-5, -35, -5],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3.5,
              delay: i * 0.9,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Side building */}
        <g filter="url(#factoryShadow)">
          <rect x="65" y="205" width="720" height="195" rx="15" fill="url(#factoryWall)" stroke="#7541B5" strokeWidth="6" />

          {/* Side roof */}
          <path d="M50 207 L425 135 L800 207 Z" fill="url(#factoryRoof)" stroke="#7541B5" strokeWidth="5" />
          <path d="M65 207 L425 147 L785 207" fill="none" stroke="#D6B8FF" strokeWidth="8" />

          {/* Roof yellow line */}
          <path d="M65 207 H785" stroke="#FFBD3E" strokeWidth="14" />

          {/* Left windows */}
          <g stroke="#7541B5" strokeWidth="6">
            <rect x="95" y="248" width="90" height="73" rx="12" fill="#A8DDF5" />
            <path d="M140 248 V321 M95 284 H185" />

            <rect x="205" y="248" width="90" height="73" rx="12" fill="#A8DDF5" />
            <path d="M250 248 V321 M205 284 H295" />
          </g>

          {/* Right windows */}
          <g stroke="#7541B5" strokeWidth="6">
            <rect x="555" y="248" width="90" height="73" rx="12" fill="#A8DDF5" />
            <path d="M600 248 V321 M555 284 H645" />

            <rect x="665" y="248" width="90" height="73" rx="12" fill="#A8DDF5" />
            <path d="M710 248 V321 M665 284 H755" />
          </g>

          {/* Side toy decorations */}
          <text x="195" y="299" fontSize="32" textAnchor="middle">🚀</text>
          <text x="710" y="299" fontSize="32" textAnchor="middle">🧩</text>

          {/* Central factory */}
          <path
            d="M295 205 L425 95 L555 205 V400 H295 Z"
            fill="#FFF9F0"
            stroke="#7541B5"
            strokeWidth="7"
          />

          {/* Central roof */}
          <path
            d="M275 205 L425 83 L575 205"
            fill="url(#factoryRoof)"
            stroke="#7541B5"
            strokeWidth="7"
            strokeLinejoin="round"
          />

          <path d="M300 204 L425 105 L550 204" fill="none" stroke="#D8B9FF" strokeWidth="8" />


          {/* Gears */}
          <g fill="#20A9C8">
            <circle cx="337" cy="170" r="17" />
            <circle cx="337" cy="170" r="7" fill="#FFF" />
          </g>

          <g fill="#F4AC22">
            <circle cx="513" cy="170" r="17" />
            <circle cx="513" cy="170" r="7" fill="#FFF" />
          </g>

          {/* Factory door */}
          <path
            d="M350 400 V280 Q350 222 425 222 Q500 222 500 280 V400 Z"
            fill="#FFB93D"
            stroke="#F08B20"
            strokeWidth="8"
          />

          <path
            d="M370 400 V282 Q370 244 425 244 Q480 244 480 282 V400 Z"
            fill="#7043AA"
          />

          {/* Door lights */}
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={367 + i * 19}
              cy="229"
              r="5"
              fill="#FFF4A5"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, delay: i * 0.15, repeat: Infinity }}
            />
          ))}

          {/* Door toy */}
          <motion.text
            x="425"
            y="342"
            textAnchor="middle"
            fontSize="57"
            animate={{ y: [342, 330, 342], rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🧸
          </motion.text>
        </g>

        {/* Side pipes */}
        <path d="M65 365 H30 V300 H70" fill="none" stroke="#F5B735" strokeWidth="13" strokeLinecap="round" />
        <path d="M785 365 H820 V300 H780" fill="none" stroke="#36B8CC" strokeWidth="13" strokeLinecap="round" />

        {/* Conveyor emerging from factory */}
        <path
          d="M370 395 L370 420 H480 L480 395"
          fill="none"
          stroke="#7541B5"
          strokeWidth="18"
          strokeLinejoin="round"
        />

        {/* Ground */}
        <path d="M0 400 H850" stroke="#9CCB7D" strokeWidth="15" strokeLinecap="round" />

        {/* Decorative plants */}
        <g fill="#71B66B">
          <circle cx="32" cy="385" r="18" />
          <circle cx="54" cy="390" r="16" />
          <circle cx="812" cy="385" r="18" />
          <circle cx="790" cy="390" r="16" />
        </g>
      </svg>

      {/* Floating stars */}
      <motion.div
        className="absolute left-[13%] top-[40%] text-2xl text-yellow-400"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ✦
      </motion.div>

      <motion.div
        className="absolute right-[13%] top-[40%] text-2xl text-orange-400"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        ✦
      </motion.div>
    </div>
  );
}

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];

  return (
    <section className="relative isolate overflow-hidden bg-[#F5F9FF] py-20 sm:py-12">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#E5D8FF] opacity-50 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#FFE8C8] opacity-60 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-2 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5D8F6] bg-white px-5 py-2 text-xs font-extrabold uppercase tracking-[2px] text-[#7946B6]">
            <Sparkles size={15} className="text-orange-400" />
            Behind Every Little Wonder
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#351078] sm:text-5xl md:text-6xl">
            Our Process
            <span className="text-[#F47719]"> Factory!</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#777187] sm:text-base">
            From a little spark of imagination to a wonderful learning
            experience, discover how we bring educational toys to life.
          </p>
        </motion.div>

        {/* Factory */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FactoryIllustration />
        </motion.div>

        {/* Conveyor */}
        <div className="relative z-20 -mt-2">

          {/* Belt body */}
          <div className="absolute inset-x-[-2%] bottom-3 h-8 rounded-full border-4 border-[#693A9E] bg-gradient-to-b from-[#B58AE9] to-[#7949B9] shadow-[0_8px_0_#532C86] sm:h-12" />

          {/* Moving belt marks */}
          <motion.div
            animate={{ backgroundPositionX: ["0px", "64px"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-[-1%] bottom-[13px] z-10 h-4 rounded-full opacity-70"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0px, transparent 25px, #FFE17A 26px, #FFE17A 32px, transparent 33px, transparent 64px)",
              backgroundSize: "64px 100%",
            }}
          />

          {/* Process cards */}
          <div className="relative grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.button
                  key={step.no}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, y: 110, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    type: "spring",
                    stiffness: 95,
                    damping: 13,
                    delay: index * 0.14,
                  }}
                  whileHover={{ y: -12, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  aria-pressed={isActive}
                  className={`group relative flex min-h-[290px] flex-col items-center rounded-[26px] border-[4px] p-5 pb-7 text-center transition-all duration-300 sm:min-h-[320px] ${
                    isActive
                      ? "border-[#7541B5] shadow-[0_12px_30px_rgba(117,65,181,0.16)]"
                      : "border-white shadow-[0_8px_22px_rgba(54,36,85,0.08)] hover:border-[#DCC7F5]"
                  }`}
                  style={{ backgroundColor: step.color }}
                >

                  {/* Number badge */}
                  <div
                    className="absolute -top-5 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-[4px] border-white text-sm font-black text-white shadow-md"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.no}
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={
                      isActive
                        ? { y: [0, -7, 0], rotate: [0, -7, 7, 0] }
                        : { y: 0 }
                    }
                    transition={{ duration: 1.4, repeat: isActive ? Infinity : 0 }}
                    className="mt-7 flex h-[85px] w-[85px] items-center justify-center rounded-[24px] bg-white shadow-sm"
                  >
                    <Icon size={42} strokeWidth={2.2} style={{ color: step.accent }} />
                  </motion.div>

                  <span className="mt-3 text-3xl">{step.emoji}</span>

                  <h3 className="mt-3 text-lg font-black leading-tight text-[#351078]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#756B84]">
                    {step.subtitle}
                  </p>

                  <div
                    className="mt-auto pt-5 text-xs font-extrabold uppercase tracking-wider"
                    style={{ color: step.accent }}
                  >
                    {isActive ? "Currently Selected" : "Explore Step →"}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

       

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#E7D8F7] bg-white px-6 py-3 shadow-sm">
            <span className="text-xl">🧸</span>
            <span className="text-sm font-extrabold text-[#63399C]">
              Thoughtfully Made. Playfully Designed. Happily Delivered.
            </span>
            <Sparkles size={17} className="text-[#F5B900]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
