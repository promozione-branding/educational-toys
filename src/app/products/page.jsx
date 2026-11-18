
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownUp,
  ArrowRight,
  FlaskConical,
  Heart,
  MessageCircle,
  Phone,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { products } from "./data";

const categories = ["All toys", "STEM", "Science"];

/* -------------------------------------------------------
   FLOATING SVG TOYS
------------------------------------------------------- */

function BuildingBlock({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="13" y="34" width="94" height="72" rx="14" fill="#F47719" />
      <path d="M13 49H107" stroke="#FFB16A" strokeWidth="3" />
      <circle cx="35" cy="34" r="12" fill="#FFB65C" />
      <circle cx="85" cy="34" r="12" fill="#FFB65C" />
      <circle cx="35" cy="106" r="10" fill="#DE620B" />
      <circle cx="85" cy="106" r="10" fill="#DE620B" />
      <rect x="28" y="51" width="64" height="42" rx="8" fill="#FF963B" />
    </svg>
  );
}

function ToyBall({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="49" fill="#54B9E9" />
      <path
        d="M20 43C38 14 76 5 99 30"
        stroke="#A8E7FF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M17 76C36 101 79 112 102 82"
        stroke="#2E94CF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M42 15C61 39 61 81 42 105"
        stroke="#A8E7FF"
        strokeWidth="7"
      />
    </svg>
  );
}

function ToyRocket({ className = "" }) {
  return (
    <svg
      viewBox="0 0 110 140"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M55 8C78 30 84 61 73 99H37C26 61 32 30 55 8Z"
        fill="#8960C4"
      />
      <path
        d="M55 8C65 25 69 38 69 50H41C41 38 45 25 55 8Z"
        fill="#B998EB"
      />
      <circle cx="55" cy="65" r="12" fill="#FFF2D9" />
      <path d="M37 76L17 104L37 98" fill="#F47719" />
      <path d="M73 76L93 104L73 98" fill="#F47719" />
      <path d="M43 99L35 128L55 115L75 128L67 99" fill="#FFB15A" />
    </svg>
  );
}

function ToyStar({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 4L62 35L96 38L70 59L78 94L50 74L22 94L30 59L4 38L38 35L50 4Z"
        fill="#E9A7D1"
      />
      <path
        d="M50 19L58 42L81 43L63 57L69 80L50 66L31 80L37 57L19 43L42 42L50 19Z"
        fill="#F7C8E5"
      />
    </svg>
  );
}

/* -------------------------------------------------------
   FLOATING TOY COMPONENT
------------------------------------------------------- */

function FloatingToy({
  children,
  className,
  duration = 4,
  delay = 0,
  rotate = 8,
}) {
  return (
    <motion.div
      className={`pointer-events-auto absolute z-10 cursor-pointer ${className}`}
      animate={{
        y: [0, -17, 0],
        rotate: [-rotate, rotate, -rotate],
      }}
      whileHover={{
        scale: 1.18,
        rotate: 15,
        transition: { duration: 0.25 },
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   HERO SECTION
------------------------------------------------------- */

function ProductsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F7F0FF]">

      {/* Background gradients */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#E3D0FF]/70 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FFE1C9]/80 blur-[100px]" />

      {/* Background SVG pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1440 650"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-dots"
            x="0"
            y="0"
            width="35"
            height="35"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="2" fill="#7541B5" />
          </pattern>
        </defs>

        <rect width="1440" height="650" fill="url(#hero-dots)" />
      </svg>

      {/* Floating toys */}
      <FloatingToy
        className="left-[5%] top-16 hidden w-24 sm:block lg:left-[10%] lg:w-32"
        duration={4}
      >
        <BuildingBlock className="w-full drop-shadow-xl" />
      </FloatingToy>

      <FloatingToy
        className="right-[7%] top-20 hidden w-24 sm:block lg:right-[12%] lg:w-32"
        duration={5}
        delay={0.5}
        rotate={10}
      >
        <ToyBall className="w-full drop-shadow-xl" />
      </FloatingToy>

      <FloatingToy
        className="bottom-12 left-[16%] hidden w-20 md:block lg:w-24"
        duration={4.5}
        delay={0.7}
        rotate={12}
      >
        <ToyStar className="w-full drop-shadow-lg" />
      </FloatingToy>

      <FloatingToy
        className="bottom-10 right-[16%] hidden w-20 md:block lg:w-24"
        duration={5}
        delay={1}
      >
        <ToyRocket className="w-full drop-shadow-xl" />
      </FloatingToy>

      {/* Additional decorative stars */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[23%] top-[25%] text-3xl text-[#F47719]"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 0.7, 1],
          rotate: [0, -35, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[23%] bottom-[25%] text-4xl text-[#E99A24]"
      >
        ✧
      </motion.div>

      {/* Hero content */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/90 px-5 py-2.5 text-xs font-extrabold uppercase tracking-[1.5px] text-[#7027A5] shadow-sm sm:text-sm">
            <Sparkles size={17} className="text-[#F47719]" />
            Play a little. Learn a lot.
          </span>

          <h1 className="mt-7 text-4xl font-black leading-[1.12] tracking-tight text-[#351078] sm:text-5xl md:text-7xl">
            Find their next
            <span className="block text-[#F47719]">
              big idea.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#77738F] sm:text-base sm:leading-8">
            Explore a world of educational toys where little
            hands build big ideas, curious minds discover more,
            and every moment becomes an adventure.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

            <motion.a
              href="#all-products"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 rounded-full bg-[#F47719] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition-shadow hover:shadow-xl"
            >
              Explore All Toys
              <ArrowRight size={18} />
            </motion.a>

            <div className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-5 py-4 text-sm font-bold text-[#542780]">
              <FlaskConical size={18} className="text-[#F47719]" />
              Made for curious minds
            </div>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs font-bold text-[#877797]">
            <span>✦ Learn Through Play</span>
            <span>✦ Explore New Ideas</span>
            <span>✦ Build Creative Minds</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   BOTTOM CTA
------------------------------------------------------- */

function ProductsCTA() {
  return (
    <section className="relative mx-auto mt-20 max-w-[1400px] overflow-hidden px-5 sm:px-8 lg:px-12">

      <div className="relative overflow-hidden rounded-[35px] bg-[#54218C] px-6 py-14 sm:px-12 sm:py-10">

        {/* Decorative background */}
        <svg
          className="pointer-events-none absolute -right-10 -top-24 w-80 opacity-20"
          viewBox="0 0 300 300"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="150"
            cy="150"
            r="120"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="8 9"
          />
          <circle cx="150" cy="150" r="85" stroke="white" strokeWidth="2" />
          <circle cx="150" cy="150" r="50" fill="white" />
        </svg>

        <svg
          className="pointer-events-none absolute -bottom-24 -left-10 w-64 opacity-10"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M100 5L122 75L195 100L122 125L100 195L78 125L5 100L78 75Z"
            fill="white"
          />
        </svg>

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-[1.5px] text-[#FFD58C]">
              <Sparkles size={15} />
              Let the fun begin
            </span>

            <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Small Toys.
              <span className="block text-[#FFB65C]">
                Big Discoveries.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-purple-100 sm:text-base">
              Every great idea starts with curiosity. Find the
              perfect toys to inspire creativity, encourage
              exploration and make learning an exciting
              everyday adventure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF9A32] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-purple-950/20 transition-colors hover:bg-[#FF8517]"
              >
                Get a Quote
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-white/20"
              >
                <Phone size={17} />
                Call Us
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-purple-950/20 transition-colors hover:bg-[#1FB85A]"
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Animated illustration */}
        
{/* Boy Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.85, x: 25 }}
  whileInView={{ opacity: 1, scale: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative mx-auto flex h-[280px] w-full max-w-sm items-center justify-center sm:h-[320px] lg:h-[350px]"
>
  {/* Soft decorative circle */}
  <div className="absolute h-64 w-64 rounded-full bg-[#FFB65C]/20 blur-2xl sm:h-80 sm:w-80" />

  <div className="absolute h-56 w-56 rounded-full border border-dashed border-white/30 sm:h-72 sm:w-72" />

  <motion.img
    src="/boy.png"
    alt="Child enjoying educational toys"
    draggable="false"
    className="relative z-10 h-full w-full object-cover drop-shadow-[0_20px_25px_rgba(0,0,0,0.2)]"
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>

        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   MAIN PRODUCTS PAGE
------------------------------------------------------- */

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All toys");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All toys" ||
        product.category === activeCategory;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sort === "price-low") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      return [...filtered].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return filtered;
  }, [activeCategory, search, sort]);

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((productId) => productId !== id)
        : [...current, id]
    );
  };

  const addToCart = (id) => {
    setCart((current) =>
      current.includes(id) ? current : [...current, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#FFF9F7] pb-16">

      {/* HERO */}
      <ProductsHero />

      {/* ALL PRODUCTS */}
      <section
        id="all-products"
        className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pt-12 sm:px-8 sm:pt-16 lg:px-12"
      >

        {/* Heading */}
        <div className="mb-7 flex flex-col gap-5">

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[1.8px] text-[#A18BAF]">
                The toy shelf
              </p>

              <h2 className="mt-1 text-3xl font-black text-[#351078] sm:text-4xl">
                Shop all toys
              </h2>

              <p className="mt-2 text-sm text-[#77738F]">
                Discover toys that make every day a learning adventure.
              </p>
            </div>

            <p
              className="text-sm font-semibold text-[#77738F]"
              aria-live="polite"
            >
              Showing {visibleProducts.length} of {products.length} toys
            </p>
          </div>

          {/* Filter toolbar */}
          <div className="flex flex-col gap-4 rounded-[24px] border border-[#F0EAF2] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">

            {/* Categories */}
            <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={active}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-extrabold transition-colors ${
                      active
                        ? "border-[#7027A5] bg-[#7027A5] text-white shadow-md shadow-purple-100"
                        : "border-[#F0EAF2] bg-white text-[#4C3D59] hover:border-[#7027A5] hover:text-[#7027A5]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Search and sorting */}
            <div className="flex flex-col gap-3 sm:flex-row">

              <label className="flex h-11 min-w-0 items-center gap-2 rounded-full border border-[#EEEAF2] bg-[#FAF9FC] px-4 focus-within:border-[#7027A5] sm:w-56">
                <Search size={18} className="shrink-0 text-[#7027A5]" />

                <span className="sr-only">Search products</span>

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search toys..."
                  className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-[#9991A0]"
                />
              </label>

              <label className="flex h-11 items-center gap-2 rounded-full border border-[#EEEAF2] bg-white px-4 text-sm font-semibold text-[#4C3D59]">
                <ArrowDownUp size={17} className="shrink-0 text-[#7027A5]" />

                <span className="sr-only">Sort products</span>

                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="w-full bg-transparent outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {visibleProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleProducts.map((product) => {
                const wished = wishlist.includes(product.id);
                const added = cart.includes(product.id);

                return (
                  <motion.article
                    layout="position"
                    key={product.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="group flex min-w-0 flex-col rounded-[28px] bg-white p-4 shadow-[0_12px_35px_rgba(63,40,86,0.07)] transition-shadow hover:shadow-[0_18px_40px_rgba(63,40,86,0.14)] sm:p-[18px]"
                  >

                    {/* Product image */}
                    <div
                      className={`relative flex h-64 shrink-0 items-center justify-center overflow-hidden rounded-[22px] p-4 sm:h-72 ${product.imageBg}`}
                    >
                      <span
                        className={`absolute left-3 top-3 z-10 rounded-full px-3 py-2 text-xs font-extrabold ${product.badgeColor}`}
                      >
                        {product.badge}
                      </span>

                      {/* Wishlist */}
                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        aria-label={
                          wished
                            ? "Remove from wishlist"
                            : `Add ${product.name} to wishlist`
                        }
                        aria-pressed={wished}
                        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
                      >
                        <Heart
                          size={20}
                          fill={wished ? "#EC4770" : "none"}
                          color={wished ? "#EC4770" : "#53264E"}
                        />
                      </button>

                      <a
                        href={`/products/${product.slug}`}
                        aria-label={`View ${product.name}`}
                        className="flex h-full w-full items-center justify-center"
                      >
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          draggable="false"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.35 }}
                          className="h-full w-full object-cover drop-shadow-[0_10px_12px_rgba(0,0,0,0.10)]"
                        />
                      </a>
                    </div>

                    {/* Product details */}
                    <div className="flex flex-1 flex-col px-1 pt-4">

                      <div className="flex items-center justify-between gap-2">
                        <span className="w-fit rounded-full bg-[#F0E3FF] px-3 py-1 text-[11px] font-extrabold text-[#63279A]">
                          AGES 8+
                        </span>

                        <span className="text-xs font-bold text-[#77738F]">
                          {product.category}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-black leading-tight text-[#091B30] sm:text-xl">
                        <a
                          href={`/products/${product.slug}`}
                          className="transition-colors hover:text-[#7027A5]"
                        >
                          {product.name}
                        </a>
                      </h3>

                      <div className="mt-2 flex items-center gap-1.5">
                        <span
                          className="flex items-center gap-0.5 text-[#FF9B00]"
                          aria-label="5 out of 5 stars"
                        >
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              fill="currentColor"
                              strokeWidth={0}
                            />
                          ))}
                        </span>

                        <span className="text-xs font-medium text-[#65718A]">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* Price and cart */}
                      <div className="mt-auto flex items-center justify-between gap-2 pt-5">

                        <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                          <span className="text-sm font-extrabold text-[#ED174C]">
                            -{product.discount}%
                          </span>

                          <span className="text-xl font-black text-[#101D31]">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>

                          <span className="text-xs text-[#6B7280] line-through">
                            ₹{product.oldPrice.toLocaleString("en-IN")}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => addToCart(product.id)}
                          aria-label={
                            added
                              ? `${product.name} added to cart`
                              : `Add ${product.name} to cart`
                          }
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-colors ${
                            added
                              ? "bg-[#16A36A]"
                              : "bg-[#FF790F] hover:bg-[#EB6500]"
                          }`}
                        >
                          {added ? (
                            <span className="text-lg font-bold" aria-hidden="true">
                              ✓
                            </span>
                          ) : (
                            <ShoppingBag size={19} aria-hidden="true" />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty state */
          <div className="flex min-h-64 flex-col items-center justify-center rounded-[28px] bg-white px-5 text-center shadow-sm">
            <span className="mb-3 text-5xl" aria-hidden="true">
              🧸
            </span>

            <h3 className="text-xl font-black text-[#351078]">
              No toys found
            </h3>

            <p className="mt-2 text-sm text-[#77738F]">
              Try another search or browse all of our toys.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All toys");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#7027A5] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#542080]"
            >
              See all toys
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <ProductsCTA />

    </main>
  );
}
