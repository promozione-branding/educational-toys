
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Tag,
  ShieldCheck,
  Headset,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Innovative Designs",
    description:
      "Thoughtfully designed toys that make learning fun and effective.",
    icon: Lightbulb,
    color: "#0875B9",
    light: "#DDF2FF",
  },
  {
    number: "02",
    title: "Expert Team",
    description:
      "A passionate team focused on child development and learning.",
    icon: Users,
    color: "#F47719",
    light: "#FFF0E3",
  },
  {
    number: "03",
    title: "Affordable Price",
    description:
      "Premium educational toys at budget-friendly prices.",
    icon: Tag,
    color: "#85818D",
    light: "#F0EDF3",
  },
  {
    number: "04",
    title: "Quality Assurance",
    description:
      "Durable, safe, and tested products for worry-free play.",
    icon: ShieldCheck,
    color: "#F3B800",
    light: "#FFF7D9",
  },
  {
    number: "05",
    title: "Quick Support",
    description:
      "Friendly and reliable support whenever you need us.",
    icon: Headset,
    color: "#923BCB",
    light: "#F2E4FF",
  },
];

const connectorPaths = [
  "M 640 91 C 760 91, 760 30, 900 50 C 1040 70, 1070 110, 1100 160",
  "M 640 192 C 770 192, 810 90, 940 105 C 1050 115, 1080 155, 1100 205",
  "M 640 293 C 790 293, 820 175, 950 160 C 1070 145, 1080 200, 1100 250",
  "M 640 394 C 770 394, 820 250, 940 225 C 1040 210, 1080 250, 1100 300",
  "M 640 495 C 780 495, 820 340, 950 300 C 1050 275, 1080 320, 1100 350",
];

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative isolate overflow-hidden bg-[#FFFEFC] py-6 sm:py-12">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#EDE3FF]/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#FFF0DC]/60 blur-3xl" />

      {/* Decorative Clouds */}
      <div className="pointer-events-none absolute left-0 top-40 hidden h-20 w-44 rounded-full bg-[#EEE3FF]/70 blur-2xl lg:block" />

      <div className="pointer-events-none absolute right-0 top-56 hidden h-24 w-44 rounded-full bg-[#EDE2FF]/70 blur-2xl lg:block" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mb-14 text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E6D6FF] bg-[#F3EAFF] px-6 py-2.5 text-sm font-extrabold text-[#59228E] shadow-sm">
            <Sparkles size={17} className="text-[#F5B500]" />
            Why Choose Us?
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#321071] sm:text-4xl md:text-5xl lg:text-[54px]">
            What Makes Us the{" "}
            <span className="relative inline-block text-[#F47719]">
              Right Choice?
              <svg
                viewBox="0 0 260 12"
                className="absolute -bottom-2 left-0 w-full"
                fill="none"
              >
                <path
                  d="M2 8 Q65 0 130 7 T258 7"
                  stroke="#FFBD22"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#69647B] sm:text-base md:text-lg">
            Discover why parents, schools, and learners trust us
            for high-quality, engaging, and safe educational toys.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="relative mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5">

          {/* SVG CONNECTING LINES - DESKTOP */}
          <svg
            viewBox="0 0 1250 560"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-1/2 z-0 hidden h-[560px] w-full -translate-y-1/2 overflow-visible lg:block"
          >
            {connectorPaths.map((path, index) => (
              <g key={index}>
                <motion.path
                  d={path}
                  fill="none"
                  stroke={features[index].color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 0.9,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.4,
                    delay: 0.4 + index * 0.15,
                    ease: "easeInOut",
                  }}
                />

                <motion.circle
                  cx="1100"
                  cy={160 + index * 47}
                  r="7"
                  fill={features[index].color}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.2 + index * 0.15,
                    type: "spring",
                  }}
                />
              </g>
            ))}
          </svg>

          {/* LEFT FEATURE CARDS */}
          <div className="relative z-10 flex flex-col gap-4 sm:gap-5 lg:gap-4">

            {features.map((feature, index) => {
              const Icon = feature.icon;
              const active = activeFeature === index;

              return (
                <motion.div
                  key={feature.number}
                  initial={{
                    opacity: 0,
                    x: -55,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.13,
                  }}
                  onMouseEnter={() => setActiveFeature(index)}
                  onFocus={() => setActiveFeature(index)}
                  className="group relative"
                >

                  <motion.div
                    animate={{
                      scale: active ? 1.025 : 1,
                      x: active ? 5 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="relative flex min-h-[94px] cursor-pointer items-center overflow-hidden rounded-r-[45px] rounded-l-[15px] text-white shadow-[0_9px_20px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-xl"
                    style={{
                      backgroundColor: feature.color,
                    }}
                  >

                    {/* Number */}
                    <div className="flex h-full min-h-[94px] w-[80px] shrink-0 items-center justify-center border-r border-white/30 bg-black/10 sm:w-[100px]">
                      <span className="text-3xl font-medium tracking-tight sm:text-4xl">
                        {feature.number}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1 px-4 py-4 sm:px-6">
                      <h3 className="text-base font-black leading-tight sm:text-xl md:text-2xl">
                        {feature.title}
                      </h3>

                      <p className="mt-1 hidden max-w-[310px] text-xs leading-5 text-white/90 sm:block sm:text-sm">
                        {feature.description}
                      </p>
                    </div>

                    {/* Icon Circle */}
                    <motion.div
                      animate={{
                        rotate: active ? [0, -8, 8, 0] : 0,
                        scale: active ? 1.08 : 1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="mr-3 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white/40 bg-white shadow-lg sm:mr-5 sm:h-[70px] sm:w-[70px]"
                    >
                      <Icon
                        size={29}
                        strokeWidth={2.2}
                        style={{
                          color: feature.color,
                        }}
                      />
                    </motion.div>

                    {/* Shine Effect */}
                    <motion.div
                      initial={{ x: "-150%" }}
                      animate={{
                        x: active ? "150%" : "-150%",
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                      className="pointer-events-none absolute inset-y-0 w-20 skew-x-[-20deg] bg-white/15 blur-sm"
                    />
                  </motion.div>

                </motion.div>
              );
            })}

          </div>

          {/* RIGHT CIRCULAR CENTERPIECE */}
          <div className="relative z-10 mx-auto flex w-full max-w-[580px] items-center justify-center py-8 lg:min-h-[560px] lg:py-0">

            {/* Decorative Floating Stars */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-[7%] top-[12%] z-20 text-[#FFB900]"
            >
              <Sparkles size={32} />
            </motion.div>

            <motion.div
              animate={{
                y: [8, -8, 8],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
              className="absolute right-[8%] top-[20%] z-20 text-[#923BCB]"
            >
              <Sparkles size={28} />
            </motion.div>

            {/* Outer Rings */}
            

            {/* Orange Ring */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[84%] w-[84%] rounded-full border-[10px] border-t-[#F47719] border-r-[#F47719] border-b-transparent border-l-transparent sm:border-[13px]"
            />

            {/* Yellow Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[70%] w-[70%] rounded-full border-[10px] border-t-transparent border-r-[#F5B900] border-b-[#F5B900] border-l-transparent sm:border-[13px]"
            />

            {/* Purple Ring */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[56%] w-[56%] rounded-full border-[9px] border-t-[#923BCB] border-r-transparent border-b-[#923BCB] border-l-transparent sm:border-[12px]"
            />

            {/* Inner White Circle */}
            <div className="relative z-10 flex aspect-square w-[45%] items-center justify-center overflow-hidden rounded-full border-[9px] border-[#1681C2] bg-white shadow-[0_12px_35px_rgba(35,90,145,0.18)] sm:border-[12px]">

              {/* Central Image */}
              <motion.img
                src="/whychoose.png"
                alt="Happy children playing with educational toys"
                className="h-full w-full object-cover"
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />

            </div>

            {/* Ring Decorative Dots */}
            {[
              { top: "10%", left: "48%", color: "#F47719" },
              { top: "45%", right: "0%", color: "#0875B9" },
              { bottom: "10%", left: "30%", color: "#923BCB" },
              { top: "65%", left: "1%", color: "#F5B900" },
            ].map((dot, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
                className="absolute z-20 h-5 w-5 rounded-full border-4 border-white shadow-md"
                style={{
                  ...dot,
                  backgroundColor: dot.color,
                }}
              />
            ))}

            {/* Bottom Toy Decoration */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-3 left-0 z-20 text-5xl sm:text-6xl"
            >
              🧸
            </motion.div>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-2 right-2 z-20 text-5xl sm:text-6xl"
            >
              🧩
            </motion.div>

          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="relative z-10 mt-16 flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >

          <p className="text-xl font-bold text-[#777187] sm:text-base">
            Let's make learning a wonderful adventure!
          </p>

          <a
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-full bg-[#7136AD] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-purple-200 transition-all hover:-translate-y-1 hover:bg-[#54218D]"
          >
            Explore Our Toys

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
