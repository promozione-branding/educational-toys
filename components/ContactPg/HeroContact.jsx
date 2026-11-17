
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    title: "Call Us",
    detail: "+00 (0) 123 456 789",
    subtext: "We're just a call away",
    icon: Phone,
    color: "#783BC0",
    bg: "#F3E9FF",
    href: "tel:+00123456789",
  },
  {
    title: "Visit Us",
    detail: "East Madison Street",
    subtext: "Baltimore, MD, USA",
    icon: MapPin,
    color: "#E99A12",
    bg: "#FFF5DB",
    href: "https://maps.google.com/?q=East+Madison+Street+Baltimore",
  },
  {
    title: "Email Us",
    detail: "info@example.com",
    subtext: "We'd love to hear from you",
    icon: Mail,
    color: "#CE39A7",
    bg: "#FCE9F7",
    href: "mailto:info@example.com",
  },
];

export default function HeroContact() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-6 sm:py-12">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FCF9FF] to-[#F8F0FF]" />

      {/* Decorative Blobs */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#EBD9FF]/50 blur-[90px]" />
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#FFE9D6]/50 blur-[100px]" />

      {/* Decorative Clouds */}
      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="pointer-events-none absolute left-[8%] top-[15%] hidden opacity-50 lg:block"
      >
        <svg width="125" height="65" viewBox="0 0 125 65" fill="none">
          <path
            d="M20 54C8 54 2 46 2 36C2 26 11 19 21 20C24 6 36 0 49 4C57 -3 76 1 79 17C94 12 107 22 107 34C121 35 124 44 120 52C116 58 108 59 98 59H20V54Z"
            fill="#E5D5FF"
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{ x: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute right-[10%] top-[18%] hidden opacity-50 lg:block"
      >
        <svg width="105" height="60" viewBox="0 0 105 60" fill="none">
          <path
            d="M16 49C7 49 2 42 2 34C2 26 10 19 19 20C22 7 34 1 45 5C55 -2 72 4 75 18C89 14 102 22 102 34C102 43 95 49 85 49H16Z"
            fill="#E5D5FF"
          />
        </svg>
      </motion.div>

      {/* Paper Plane */}
      <motion.div
        animate={{
          x: [0, 18, 0],
          y: [0, -12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="pointer-events-none absolute right-[8%] top-[12%] hidden lg:block"
      >
        <svg width="110" height="100" viewBox="0 0 110 100" fill="none">
          <path
            d="M5 80C40 80 23 20 55 30C78 36 80 10 104 4"
            stroke="#A76BD4"
            strokeWidth="2"
            strokeDasharray="5 6"
          />
          <path
            d="M60 27L108 2L87 49L76 34L60 27Z"
            fill="#FFB800"
          />
          <path
            d="M76 34L108 2L87 49Z"
            fill="#E99A00"
          />
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E6D5FF] bg-[#F2E8FF] px-7 py-3 shadow-sm">
            <Mail size={19} className="text-[#7136B0]" />

            <span className="text-sm font-extrabold text-[#46177C] sm:text-base">
              Contact Us
            </span>

            <Sparkles size={17} className="text-[#F3B21A]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl font-black tracking-tight text-[#351078] sm:text-6xl md:text-7xl ">
            Let's{" "}
            <span className="relative inline-block text-[#F47719]">
              Chat!
              <svg
                viewBox="0 0 180 14"
                className="absolute -bottom-2 left-0 w-full"
                fill="none"
              >
                <path
                  d="M3 9 Q45 0 90 8 T177 7"
                  stroke="#FFBD25"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#000] sm:text-lg ">
            We'd love to hear from you! Whether you have a question,
            need support, or want to know more about our educational
            toys, we're here to help.
          </p>

        </motion.div>

        {/* Animated Decorative Stars */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="pointer-events-none absolute left-[13%] top-[
          30%] hidden text-[#FFBE23] lg:block"
        >
          <Sparkles size={35} />
        </motion.div>

        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="pointer-events-none absolute right-[13%] top-[43%] hidden text-[#A66BDA] lg:block"
        >
          <Sparkles size={30} />
        </motion.div>

        {/* Contact Cards */}
        <div className="relative mx-auto mt-8 grid max-w-[1100px] grid-cols-1 gap-7 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-7">

          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Visit Us" ? "_blank" : undefined}
                rel={item.title === "Visit Us" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.16,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.025,
                }}
                className="group relative flex min-h-[245px] flex-col items-center justify-center overflow-visible rounded-[30px] border border-white p-7 text-center shadow-[0_15px_40px_rgba(67,39,95,0.07)] transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(67,39,95,0.13)]"
                style={{
                  backgroundColor: item.bg,
                }}
              >

                {/* Decorative Corner */}
                <div
                  className="absolute right-0 top-0 h-20 w-20 rounded-bl-[80px] opacity-30"
                  style={{ backgroundColor: item.color }}
                />

                {/* Icon Circle */}
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.12,
                  }}
                  className="relative z-10 -mt-2 mb-5 flex h-[76px] w-[76px] items-center justify-center rounded-full border-[7px] border-white shadow-lg"
                  style={{
                    backgroundColor: item.bg,
                    color: item.color,
                  }}
                >
                  <Icon size={31} strokeWidth={2.3} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-black text-[#351078]">
                  {item.title}
                </h3>

                {/* Detail */}
                <p className="mt-4 break-words text-base font-bold text-[#4C3A66]">
                  {item.detail}
                </p>

                <p className="mt-2 text-sm text-[#8A7B98]">
                  {item.subtext}
                </p>

                {/* Hover Link */}
                <span
                  className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{ color: item.color }}
                >
                  Connect with us
                  <ArrowUpRight size={17} />
                </span>

              </motion.a>
            );
          })}

        </div>

        {/* Bottom Decorative Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 flex max-w-[950px] flex-wrap items-center justify-center gap-4 rounded-full border border-[#E9D9F8] bg-white/80 px-6 py-5 shadow-sm backdrop-blur-md sm:gap-7"
        >

          <span className="text-2xl">🧩</span>

          <p className="text-center text-sm font-bold text-[#4F3273] sm:text-base">
            Have a question? Let's make learning more fun together!
          </p>

          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#F47719]"
          >
            <Send size={21} />
          </motion.span>

        </motion.div>

      </div>

      {/* Bottom Wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="h-12 w-full sm:h-16"
        >
          <path
            d="M0 50 Q180 5 360 50 T720 50 T1080 50 T1440 50 V90 H0Z"
            fill="#F0E4FF"
            fillOpacity="0.6"
          />
        </svg>
      </div>

    </section>
  );
}
