
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Truck,
  Globe2,
  Sprout,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    text: "Designed by IIT Engineers",
    color: "bg-[#DCEAFF]",
  },
  {
    icon: Truck,
    text: "Free Delivery",
    color: "bg-[#F0E5FF]",
  },
  {
    icon: Globe2,
    text: "Loved in 20+ Countries",
    color: "bg-[#FFF0D5]",
  },
  {
    icon: Sprout,
    text: "Made with Wood",
    color: "bg-[#EAF4DD]",
  },
];

const ageGroups = [
  {
    age: "8+",
    title: "Young Engineers",
    description:
      "Complex builds with hydraulics, gears and circuits.",
    link: "Shop 8+",
    href: "/shop?age=8-plus",
    bg: "bg-[#FCE9CA]",
    circle: "bg-[#F9D39C]",
  },
  {
    age: "6+",
    title: "Curious Makers",
    description:
      "Launchers, cars and games powered by real mechanics.",
    link: "Shop 6+",
    href: "/shop?age=6-plus",
    bg: "bg-[#EEE1FC]",
    circle: "bg-[#D4B9FA]",
  },
  {
    age: "3–6",
    title: "Ready to play",
    description:
      "Brain puzzles and games for early learning. Ready to play, no building needed.",
    link: "Shop 3–6",
    href: "/shop?age=3-6",
    bg: "bg-[#FBE3F9]",
    circle: "bg-[#F6C9F2]",
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
    y: 35,
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

export default function ShopByAge() {
  return (
    <section className="w-full overflow-hidden bg-white">

      {/* PURPLE DECORATIVE TOP BORDER */}
      <div className="relative h-[75px] overflow-hidden bg-[#6041B5]">

        {/* Background dots */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Bottom scalloped edge */}
        <div
          className="absolute -bottom-[1px] left-0 h-[17px] w-full"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 25%, transparent 25%) -12px 0 / 26px 26px, linear-gradient(225deg, #ffffff 25%, transparent 25%) -12px 0 / 26px 26px",
          }}
        />

        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#E9C77B]" />
      </div>

      {/* TRUST HIGHLIGHTS */}
      <div className="border-b border-[#ECECEC] bg-white">
        <div className="mx-auto grid max-w-[1350px] grid-cols-2 gap-y-5 px-5 py-7 md:grid-cols-4 md:gap-5 md:px-8 md:py-6">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group flex items-center justify-center gap-3"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                >
                  <Icon
                    size={21}
                    strokeWidth={2}
                    className="text-[#37205F]"
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] font-extrabold text-[#17202D] sm:text-sm lg:text-[15px]">
                    {item.text}
                  </span>

                  <ArrowRight
                    size={15}
                    className="shrink-0 text-[#6041B5] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SHOP BY AGE */}
      <div className="mx-auto max-w-[1350px] px-5 pb-12 pt-11 md:px-8 md:pb-16 md:pt-12">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-[21px] font-extrabold uppercase tracking-[2px] text-[#B85C2A] md:text-[24px]">
            Shop By Age
          </h2>
        </motion.div>

        {/* AGE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
        >
          {ageGroups.map((item, index) => (
            <motion.a
              key={item.age}
              href={item.href}
              variants={cardVariants}
              whileHover={{
                y: -7,
                transition: { duration: 0.25 },
              }}
              className={`group relative flex min-h-[182px] overflow-hidden rounded-[22px] ${item.bg} p-6 transition-shadow duration-300 hover:shadow-xl md:min-h-[182px] md:px-6 md:py-6`}
            >
              {/* Decorative circle */}
              <div
                className={`absolute -bottom-10 -right-8 h-32 w-32 rounded-full ${item.circle} transition-transform duration-500 group-hover:scale-125`}
              />

              <div className="relative z-10 flex w-full items-start gap-4">

                {/* AGE NUMBER */}
                <div className="flex shrink-0 items-center">
                  <span className="text-[55px] font-black leading-none tracking-[-3px] text-[#101B2C] md:text-[59px]">
                    {item.age}
                  </span>
                </div>

                {/* CARD CONTENT */}
                <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">

                  <div>
                    <h3 className="mb-1 text-[19px] font-extrabold leading-tight tracking-tight text-[#101B2C] md:text-[20px]">
                      {item.title}
                    </h3>

                    <p className="max-w-[245px] text-[13px] font-medium leading-[1.65] text-[#424252] md:text-[13px]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-[14px] font-extrabold text-[#101B2C]">
                    {item.link}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>

                </div>
              </div>

            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
