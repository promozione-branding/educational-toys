
"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Truck,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const TopBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full overflow-hidden bg-[#F5CF62] text-[#25251F]"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-[35%] h-36 w-36 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-16 right-[20%] h-36 w-36 rounded-full bg-orange-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">

        <div className="flex min-h-[85px] items-center justify-between gap-6">

          {/* BRAND */}
          <div className="shrink-0">
            <div className="hidden sm:flex items-center gap-5 text-[10px] font-semibold uppercase tracking-wide text-[#54451E]">
              <span className="flex items-center gap-1.5">
                <Phone size={12} />
                +91 98765 43210
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={12} />
                hello@yourbrand.com
              </span>
            </div>

            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="mt-1 text-2xl md:text-[30px] font-black tracking-tight"
            >
              PLAY<span className="text-[#E76B43]">FULL.</span>
            </motion.h2>
          </div>

          {/* CENTER ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:flex flex-1 justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl" />

              <div className="relative flex items-center gap-[-5px]">
                <span className="text-[48px]">🧸</span>
                <span className="text-[55px] -ml-3">🧩</span>
                <span className="text-[48px] -ml-3">🚀</span>
              </div>
            </motion.div>
          </motion.div>

          {/* DELIVERY INFO */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <Truck size={23} className="text-[#25251F]" />
            </div>

            <div>
              <p className="text-sm font-extrabold">
                FREE SHIPPING
              </p>
              <p className="text-xs text-[#62552F] mt-1">
                On orders above ₹999
              </p>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href="/shop"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-[#08B7AD] px-5 md:px-7 py-3.5 text-xs md:text-sm font-bold text-white shadow-md transition-colors hover:bg-[#079D95]"
          >
            SHOP NOW
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>

        </div>

        {/* MOBILE INFORMATION */}
        <div className="flex lg:hidden items-center justify-center gap-5 border-t border-[#9E7E2D]/20 py-2.5 text-[10px] font-semibold text-[#54451E]">
          <span className="flex items-center gap-1">
            <Truck size={13} />
            Free Shipping
          </span>

          <span className="flex items-center gap-1">
            <ShieldCheck size={13} />
            Safe & Educational Toys
          </span>

          <span className="hidden sm:flex items-center gap-1">
            <Sparkles size={13} />
            Learn Through Play
          </span>
        </div>

      </div>
    </motion.div>
  );
};

export default TopBar;
