
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full  h-[800px] overflow-hidden bg-[#FFF7E8]">

      {/* HERO BANNER */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src="/banner2.webp"
          alt="Educational Toys - Learn, Play and Grow"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* SUBTLE IMAGE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none bg-black/[0.02]" />

      {/* DECORATIVE ANIMATION */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[12%] right-[8%] hidden lg:block pointer-events-none"
      >
        <span className="text-4xl opacity-60">✦</span>
      </motion.div>

    </section>
  );
}
