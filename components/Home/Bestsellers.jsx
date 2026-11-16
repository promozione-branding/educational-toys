
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Heart,
  FlaskConical,
  Box,
  Puzzle,
  Trophy,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Robotic Mechanical Hand",
    age: "AGES 8+",
    category: "8+",
    price: 999,
    oldPrice: 1249,
    discount: 20,
    reviews: 243,
    image: "/products/1.png",
    badge: "Bestseller",
    badgeIcon: "🔥",
    badgeColor: "bg-[#FFE0E6] text-[#D92842]",
    imageBg: "bg-[#F4EAFE]",
  },
  {
    id: 2,
    name: "Microscope",
    age: "AGES 8+",
    category: "8+",
    price: 995,
    oldPrice: 1259,
    discount: 21,
    reviews: 153,
    image: "/products/2.png",
    badge: "Top Rated",
    badgeIcon: "⭐",
    badgeColor: "bg-[#FFF0C5] text-[#9C5A00]",
    imageBg: "bg-[#F0F9E9]",
  },
  {
    id: 3,
    name: "Telescope",
    age: "AGES 8+",
    category: "8+",
    price: 679,
    oldPrice: 849,
    discount: 20,
    reviews: 128,
    image: "/products/3.png",
    badge: "Popular",
    badgeIcon: "ϟ",
    badgeColor: "bg-[#EADFFF] text-[#5427A0]",
    imageBg: "bg-[#E9F5FF]",
  },
  {
    id: 4,
    name: "My First Science Kit",
    age: "AGES 8+",
    category: "8+",
    price: 532,
    oldPrice: 649,
    discount: 18,
    reviews: 43,
    image: "/products/4.png",
    badge: "Great Value",
    badgeIcon: "◆",
    badgeColor: "bg-[#E3F6D8] text-[#34732B]",
    imageBg: "bg-[#FCE6F4]",
  },
];

const filters = [
  { label: "All", value: "All" },
  { label: "Ages 8+", value: "8+", icon: FlaskConical },
  { label: "Ages 6+", value: "6+", icon: Box },
  { label: "Ages 3–6", value: "3-6", icon: Puzzle },
];

export default function Bestsellers() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter(
          (product) => product.category === activeFilter
        );

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const addToCart = (id) => {
    setCart((prev) =>
      prev.includes(id)
        ? prev
        : [...prev, id]
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#FFF9F7] py-6 md:py-12">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-20 h-[350px] w-[350px] rounded-full bg-[#EEE3FF] opacity-70 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#F3DFFF] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-11">

        {/* Header */}
        <div className="relative mb-9 text-center">

          {/* Trophy Label */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#EBDDFE] px-6 py-2.5 shadow-md shadow-purple-100"
          >
            <Trophy
              size={20}
              fill="#FFB800"
              color="#B56A00"
            />

            <span className="text-sm font-black uppercase tracking-wide text-[#57218C]">
              Our Bestsellers
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#612A91] sm:text-4xl md:text-5xl lg:text-[54px]"
          >
            Kids' Favorite{" "}
            <span className="relative inline-block text-[#F47717]">
              Learning Toys

              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8 Q20 0 38 8 T74 8 T110 8 T146 8 T198 8"
                  stroke="#F47717"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-sm font-semibold text-[#77738F] sm:text-base md:text-lg"
          >
            <span className="mr-2">🎈</span>
            Top-rated educational toys loved by kids and parents alike.
          </motion.p>

          {/* Decorative Crown */}
          <motion.div
            animate={{
              rotate: [-8, 8, -8],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-[7%] top-10 hidden text-[#F4B900] lg:block"
          >
            <svg
              width="85"
              height="75"
              viewBox="0 0 85 75"
              fill="none"
            >
              <path
                d="M12 20 L29 43 L42 10 L55 43 L73 20 L64 59 L21 59 Z"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="18" r="5" fill="currentColor" />
              <circle cx="42" cy="9" r="5" fill="currentColor" />
              <circle cx="73" cy="18" r="5" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Decorative Rocket */}
          <motion.div
            animate={{
              y: [-5, 8, -5],
              rotate: [-8, 5, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute right-[7%] top-0 hidden text-6xl lg:block"
          >
            🚀
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-5">

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const active = activeFilter === filter.value;

              return (
                <motion.button
                  type="button"
                  key={filter.value}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={active}
                  className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-extrabold transition-all duration-300 sm:px-7 sm:text-base ${
                    active
                      ? "border-[#7027A5] bg-[#7027A5] text-white shadow-lg shadow-purple-200"
                      : "border-[#F0EAF2] bg-white text-[#17152F] shadow-sm hover:border-[#7027A5] hover:text-[#7027A5]"
                  }`}
                >
                  {Icon && (
                    <Icon
                      size={19}
                      className={
                        active
                          ? "text-white"
                          : "text-[#7027A5]"
                      }
                    />
                  )}

                  {filter.label}
                </motion.button>
              );
            })}
          </div>

          <a
            href="/shop"
            className="group flex items-center gap-2 rounded-full border border-[#7027A5] bg-white px-6 py-3 text-sm font-extrabold text-[#7027A5] transition-all hover:bg-[#7027A5] hover:text-white sm:text-base"
          >
            View All Toys

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          <AnimatePresence mode="popLayout" initial={false}>

            {filteredProducts.map((product, index) => (
              <motion.article
                layout="position"
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group flex h-full min-w-0 flex-col rounded-[30px] bg-white p-4 shadow-[0_12px_35px_rgba(63,40,86,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(63,40,86,0.14)] sm:p-[18px]"
              >

                {/* Product Image */}
                <div
                  className={`relative flex h-[280px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] p-4 sm:h-[300px] md:h-[330px] ${product.imageBg}`}
                >

                  {/* Product Badge */}
                  <span
                    className={`absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-extrabold sm:text-sm ${product.badgeColor}`}
                  >
                    <span>{product.badgeIcon}</span>
                    {product.badge}
                  </span>

                  {/* Wishlist */}
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={
                      wishlist.includes(product.id)
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                    aria-pressed={wishlist.includes(product.id)}
                    className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md"
                  >
                    <Heart
                      size={22}
                      strokeWidth={2}
                      fill={
                        wishlist.includes(product.id)
                          ? "#EC4770"
                          : "none"
                      }
                      color={
                        wishlist.includes(product.id)
                          ? "#EC4770"
                          : "#53264E"
                      }
                    />
                  </motion.button>

                  {/* Image */}
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    draggable="false"
                    whileHover={{ scale: 1.06 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                    className="h-full w-full object-cover drop-shadow-[0_10px_12px_rgba(0,0,0,0.10)]"
                  />
                </div>

                {/* Product Information */}
                <div className="flex flex-1 flex-col px-1 pt-4">

                  {/* Age */}
                  <span className="mb-2 w-fit rounded-full bg-[#F0E3FF] px-3 py-1 text-[11px] font-extrabold text-[#63279A]">
                    {product.age}
                  </span>

                  {/* Name */}
                  <h3 className=" text-lg font-black leading-tight text-[#091B30] sm:text-xl">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-1.5">
                    <div
                      className="flex items-center gap-[1px] text-[19px] leading-none text-[#FF9B00]"
                      aria-label="5 out of 5 stars"
                    >
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>

                    <span className="text-xs font-medium text-[#65718A]">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price and Cart */}
                  <div className="mt-auto flex items-center justify-between gap-2 pt-0">

                    <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">

                      <span className="text-xl font-medium text-[#ED174C] sm:text-2xl">
                        -{product.discount}%
                      </span>

                      <span className="text-xl font-black text-[#101D31] sm:text-2xl">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>

                      <span className="text-xs font-medium text-[#6B7280] line-through">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* Add To Cart */}
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => addToCart(product.id)}
                      aria-label={`Add ${product.name} to cart`}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-colors ${
                        cart.includes(product.id)
                          ? "bg-[#16A36A]"
                          : "bg-[#FF790F] hover:bg-[#EB6500]"
                      }`}
                    >
                      {cart.includes(product.id) ? (
                        <span className="text-xl font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-[29px] font-light leading-none">
                          +
                        </span>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Filter State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[260px] flex-col items-center justify-center rounded-[25px] bg-white px-5 text-center shadow-sm"
          >
            <span className="mb-4 text-5xl">🧸</span>

            <h3 className="text-xl font-black text-[#32105C]">
              More Toys Coming Soon!
            </h3>

            <p className="mt-2 text-sm text-[#77738F]">
              We're adding more educational toys for this age group.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="mt-5 rounded-full bg-[#7027A5] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#542080]"
            >
              View All Products
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
