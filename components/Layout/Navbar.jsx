
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  UserRound,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
  Heart,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import TopBar from "../Topbar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop All", href: "/products" },
  {
    name: "Shop By Age",
    href: "/shop-by-age",
    children: [
      { name: "Baby (0–2 Years)", href: "/age/baby" },
      { name: "Toddlers (2–3 Years)", href: "/age/toddlers" },
      { name: "Preschool (3–5 Years)", href: "/age/preschool" },
      { name: "Kids (6–8 Years)", href: "/age/kids" },
      { name: "Big Kids (9–12 Years)", href: "/age/big-kids" },
    ],
  },
  {
    name: "Learning Toys",
    href: "/learning-toys",
    children: [
      { name: "STEM Toys", href: "/learning-toys/stem" },
      { name: "Montessori Toys", href: "/learning-toys/montessori" },
      { name: "Puzzles & Games", href: "/learning-toys/puzzles" },
      { name: "Building Blocks", href: "/learning-toys/blocks" },
    ],
  },
 

  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
    <TopBar/>
    <header className="relative z-50 w-full bg-white">

      {/* TOP HEADER */}
      <div className="border-b border-[#eeeaf2]">
        <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between px-5 md:px-10 lg:px-14">

          {/* SEARCH */}
          <div className="hidden md:flex w-[280px] lg:w-[340px]">
            <form
              action="/search"
              className="group flex w-full items-center gap-3 rounded-full border border-[#eeeaf2] bg-[#faf9fc] px-4 py-3 transition-all duration-300 focus-within:border-[#37146d] focus-within:bg-white focus-within:shadow-md"
            >
              <Search
                size={20}
                className="text-[#37146d] transition-transform group-focus-within:scale-110"
              />
              <input
                type="search"
                name="q"
                placeholder="Search your store..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#88818f]"
              />
            </form>
          </div>

          {/* MOBILE SEARCH */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden text-[#30105e]"
            aria-label="Search"
          >
            <Search size={24} />
          </button>

          {/* LOGO */}
          <motion.a
            href="/"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            {/* Replace with your actual logo */}
            <span className="text-[23px] sm:text-[27px] font-black tracking-tight leading-none">
              <span className="text-[#E99C28]">TOYS</span>
              <span className="text-[#35116D]">HUB</span>
              <span className="text-[#E76D55]">.</span>
            </span>
            <span className="mt-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-[3px] text-[#8b8195]">
              Play • Learn • Grow
            </span>
          </motion.a>

          {/* ACTIONS */}
          <div className="ml-auto flex items-center gap-3 sm:gap-5">

            <motion.a
              href="/wishlist"
              whileHover={{ y: -3 }}
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-[#30105e] transition-colors hover:bg-[#f5f0fa]"
              aria-label="Wishlist"
            >
              <Heart size={22} strokeWidth={1.8} />
            </motion.a>

            <motion.a
              href="/account"
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#30105e] transition-colors hover:bg-[#f5f0fa]"
              aria-label="Account"
            >
              <UserRound size={23} strokeWidth={1.8} />
            </motion.a>

            <motion.a
              href="/cart"
              whileHover={{ y: -3 }}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f1fb] text-[#30105e] transition-colors hover:bg-[#eee4f8]"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={22} strokeWidth={1.8} />
              <span className="absolute -right-1 -top-1 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#F5BD4F] px-1 text-[10px] font-bold text-[#30105e]">
                0
              </span>
            </motion.a>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#35116D] text-white md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <AnimatePresence>
        {searchOpen && (
          <motion.form
            action="/search"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-5 md:hidden"
          >
            <div className="flex items-center gap-3 rounded-xl border border-[#eeeaf2] bg-[#faf9fc] px-4 py-3">
              <Search size={19} className="text-[#35116D]" />
              <input
                name="q"
                placeholder="Search toys, games..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden md:block border-b border-[#eeeaf2] bg-white">
        <nav className="mx-auto flex max-w-[1600px] items-center justify-center gap-1 px-5 lg:px-10">

          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className="group relative"
              onMouseEnter={() => setActiveMenu(link.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a
                href={link.href}
                className={`relative flex items-center gap-2 whitespace-nowrap px-3 lg:px-4 py-[21px] text-[13px] lg:text-[15px] font-semibold transition-colors ${
                  index === 0
                    ? "text-[#35116D]"
                    : "text-[#332345] hover:text-[#35116D]"
                }`}
              >
                {link.name}

                {link.children && (
                  <ChevronDown
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}

                <span className="absolute bottom-0 left-3 right-3 h-[3px] origin-left scale-x-0 rounded-full bg-[#F2B943] transition-transform duration-300 group-hover:scale-x-100" />

                {index === 0 && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] rounded-full bg-[#35116D]" />
                )}
              </a>

              {/* DROPDOWN */}
              {link.children && (
                <AnimatePresence>
                  {activeMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 w-[250px] overflow-hidden rounded-b-2xl border border-[#eeeaf2] bg-white p-3 shadow-[0_15px_45px_rgba(40,20,70,0.12)]"
                    >
                      <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[2px] text-[#A18BAF]">
                        Explore {link.name}
                      </p>

                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="flex items-center justify-between rounded-lg px-3 py-3 text-[13px] font-medium text-[#332345] transition-all hover:bg-[#f8f4fb] hover:pl-5 hover:text-[#35116D]"
                        >
                          {child.name}
                          <ArrowUpRight
                            size={14}
                            className="opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

        </nav>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-full z-50 overflow-hidden border-t border-[#eeeaf2] bg-white shadow-xl md:hidden"
          >
            <nav className="max-h-[75vh] overflow-y-auto p-5">

              <div className="mb-4 rounded-xl bg-[#fff7e7] p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#35116D]">
                  <Sparkles size={17} className="text-[#EBAE32]" />
                  Discover the joy of learning!
                </div>
              </div>

              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-[#f0edf3]">

                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-4 text-[15px] font-semibold text-[#332345]"
                    >
                      {link.name}
                    </a>

                    {link.children && (
                      <button
                        onClick={() =>
                          setActiveMenu(
                            activeMenu === link.name ? null : link.name
                          )
                        }
                        className="p-3 text-[#35116D]"
                        aria-label={`Toggle ${link.name}`}
                      >
                        <ChevronDown
                          size={19}
                          className={`transition-transform ${
                            activeMenu === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {link.children && activeMenu === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 text-sm text-[#81758D] hover:text-[#35116D]"
                          >
                            {child.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
