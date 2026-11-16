
"use client";

import { motion } from "framer-motion";
import {
  UsersRound,
  ShieldCheck,
  Leaf,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe",
    subtitle: "& Durable",
    color: "#F9D77A",
    iconColor: "#D58B00",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    subtitle: "Materials",
    color: "#D8F4B6",
    iconColor: "#54A62C",
  },
  {
    icon: Heart,
    title: "Loved by",
    subtitle: "Kids & Parents",
    color: "#FFD5D9",
    iconColor: "#E74663",
  },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">

      <div className="mx-auto max-w-[1700px] px-3 sm:px-6 lg:px-8">

        {/* Main Layout */}
        <div className="relative flex flex-col items-center lg:min-h-[700px] lg:flex-row">

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[380px] w-full overflow-hidden rounded-[28px] sm:h-[500px] lg:ml-auto lg:h-[700px] lg:w-[76%] lg:rounded-[35px]"
          >
            <img
              src="/about.webp"
              alt="Children's educational toys and playful learning environment"
              className="h-full w-full object-cover object-center"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-transparent" />
          </motion.div>

          {/* Left Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative z-10 -mt-10 w-[96%] rounded-[28px] border-[7px] border-white bg-gradient-to-br from-[#F7F0FF] via-[#F4EAFF] to-[#EDE1FF] px-6 py-8 shadow-[0_15px_45px_rgba(75,38,120,0.08)] sm:px-10 sm:py-10 lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:w-[47%] lg:-translate-y-1/2 lg:rounded-[35px] lg:px-12 lg:py-12  "
          >

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />

            {/* Small Label */}
            <div className="relative mb-7 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 rounded-full border-2 border-[#D9B9FF] bg-white px-5 py-2.5 shadow-sm">
                <UsersRound
                  size={24}
                  className="text-[#6828A3]"
                />

                <span className="text-sm font-extrabold text-[#54218E] sm:text-base">
                  About Our Company
                </span>
              </div>

              <Sparkles
                size={22}
                className="absolute -right-2 top-0 hidden text-[#F2AE19] sm:block"
              />
            </div>

            {/* Heading */}
            <h2 className="relative text-center text-[32px] font-black leading-[1.16] tracking-tight text-[#48158D] sm:text-4xl lg:text-left lg:text-[42px] xl:text-[48px]">
              Making Learning
              <br />
              Fun for Every Child

              {/* Underline */}
              <span className="absolute bottom-[-13px] left-1/2 h-[5px] w-32 -translate-x-1/2 rotate-[-3deg] rounded-full bg-[#F5B900] lg:left-[35%] lg:translate-x-0" />
            </h2>

            {/* Description */}
            <p className="relative mt-9 text-center text-[15px] font-medium leading-[1.65] text-[#656175] sm:text-base lg:text-left xl:text-[18px]">
            We create high-quality, safe, and engaging educational toys designed to make learning fun and meaningful. Our thoughtfully crafted toys encourage children to explore, imagine, experiment.
            </p>

            {/* CTA */}
            <div className="mt-7 flex justify-center lg:justify-start">
              <motion.a
                href="/about"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 25px rgba(82,24,145,0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7025A8] to-[#4B0D8F] px-8 py-4 text-base font-extrabold text-white shadow-lg transition-all"
              >
                Our Story

                <ArrowRight
                  size={21}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>
            </div>

            {/* Feature List */}
            <div className="mt-9 grid grid-cols-3 divide-x divide-[#D6C3E9]">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.12,
                    }}
                    className="flex flex-col items-center px-1 text-center"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.12,
                        rotate: -8,
                      }}
                      className="mb-3 flex h-14 w-14 items-center justify-center rounded-full sm:h-[66px] sm:w-[66px]"
                      style={{
                        backgroundColor: feature.color,
                      }}
                    >
                      <Icon
                        size={30}
                        strokeWidth={2.2}
                        style={{
                          color: feature.iconColor,
                        }}
                      />
                    </motion.div>

                    <h3 className="text-xs font-black leading-snug text-[#211343] sm:text-sm lg:text-base">
                      {feature.title}
                      <br />
                      {feature.subtitle}
                    </h3>
                  </motion.div>
                );
              })}

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
