
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const OFFER_END_DATE = "2026-12-01T23:59:59";

export default function ToyOfferBanner() {
  const [time, setTime] = useState({
    days: "04",
    hours: "12",
    minutes: "10",
  });

  useEffect(() => {
    const updateTimer = () => {
      const difference = Math.max(
        0,
        new Date(OFFER_END_DATE).getTime() - Date.now()
      );

      const days = Math.floor(difference / 86400000);
      const hours = Math.floor((difference / 3600000) % 24);
      const minutes = Math.floor((difference / 60000) % 60);

      setTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const timer = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Mins" },
  ];

  return (
    <section className="w-full bg-[#FFF2CC] px-3 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-[1500px]">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[18px] border border-[#d9dc86] bg-gradient-to-r from-[#E5E99D] via-[#E2E88F] to-[#DDE78A] px-5 py-7 sm:px-8 md:px-10 md:py-8"
        >
          {/* Background Patterns */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-10 -top-20 h-64 w-64 rounded-full bg-white/20" />
            <div className="absolute left-[24%] top-[-60%] h-[220%] w-20 rotate-[25deg] bg-white/10" />
            <div className="absolute left-[48%] top-[-60%] h-[220%] w-20 rotate-[25deg] bg-white/10" />
            <div className="absolute right-[15%] top-[-60%] h-[220%] w-20 rotate-[25deg] bg-white/10" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#F9F9CF]/30 blur-2xl" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 grid grid-cols-1 items-center gap-7 lg:grid-cols-[1.5fr_1fr_1.1fr] lg:gap-8">

            {/* Left Toy Illustration */}
            <div className="relative flex items-center gap-5">

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="hidden shrink-0 items-end gap-1 sm:flex"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-1 h-7 w-7 rounded-full bg-gradient-to-br from-[#FFD29B] to-[#D98C45] shadow-md" />
                  {[
                    ["#D84BC6", "w-20"],
                    ["#259BE8", "w-24"],
                    ["#20C878", "w-28"],
                    ["#F7C936", "w-32"],
                    ["#F34E56", "w-36"],
                  ].map(([color, width], i) => (
                    <div
                      key={i}
                      style={{ backgroundColor: color }}
                      className={`${width} h-3.5 rounded-full border-b-2 border-black/10 shadow-sm`}
                    />
                  ))}
                </div>

                <div className="mb-1 flex flex-col gap-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F6B925] text-xl text-white shadow-md">
                    ★
                  </div>
                  <div className="flex gap-1">
                    <div className="h-9 w-9 rounded-md bg-[#249DEB] shadow-md" />
                    <div className="h-9 w-9 rounded-md bg-[#F04E52] shadow-md" />
                  </div>
                </div>
              </motion.div>

              <div className="flex-1 text-center sm:text-left">

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-black uppercase leading-[1.25] tracking-tight text-[#32105C] sm:text-3xl xl:text-[38px]"
                >
                  Get Up To{" "}
                  <span className="inline-block rounded-xl bg-[#F24C60] px-2 py-1 text-white">
                    30% OFF
                  </span>

                  <span className="mt-1 block">
                    On Selected Toys!
                  </span>
                </motion.h2>

                <p className="mt-2 text-xs font-semibold text-[#65577C] sm:text-sm">
                  Make playtime extra special!
                </p>
              </div>

              <Sparkles
                className="absolute right-2 top-0 text-[#F6B900] sm:right-0"
                size={23}
              />
            </div>

            {/* Countdown */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">

              {timer.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="flex min-w-[65px] flex-1 flex-col overflow-hidden rounded-xl bg-white/90 text-center shadow-sm sm:min-w-[75px]"
                >
                  <motion.span
                    key={item.value}
                    initial={{ opacity: 0.5, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-2.5 text-2xl font-black tabular-nums text-[#432078] sm:text-3xl"
                  >
                    {item.value}
                  </motion.span>

                  <span className="bg-[#FFF6D8] py-2 text-[10px] font-semibold text-[#654F82] sm:text-xs">
                    {item.label}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* Shop Button and Right Illustration */}
            <div className="flex flex-col items-center justify-center gap-5">

              <motion.a
                href="/shop"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#079B65] px-6 py-4 text-xs font-extrabold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-[#087E55] sm:px-8 sm:text-sm"
              >
                Shop Now

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="hidden items-end gap-1 xl:flex"
              >
                <span className="text-6xl">🧸</span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                   
                  </div>
                  <span className="text-6xl">🚂</span>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
