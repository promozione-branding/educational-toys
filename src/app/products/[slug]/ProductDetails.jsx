"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
  BookOpen,
  Brain,
  FlaskConical,
  GraduationCap,
  Heart,
  Home,
  Lightbulb,
  Minus,
  Microscope,
  Plus,
  RotateCcw,
  School,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  Trophy,
  Truck,
  Users,
} from "lucide-react";
import { products } from "../data";

const featureIcons = [FlaskConical, Lightbulb, Brain, BookOpen, Star];
const applicationIcons = [Home, GraduationCap, School, Users];
const reasonIcons = [Heart, ShieldCheck, Brain, Award];

function ProductOverview({ product }) {
  return (
    <section className="bg-[#F2E8FF] py-6 sm:py-12">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-[30px] p-8 sm:min-h-90"
        >
          <div className={`absolute inset-0 rounded-[30px] ${product.imageBg}`} />
          <div className="absolute inset-8 rounded-full bg-white/70 blur-2xl" />
          <motion.img
            src={product.image}
            alt={product.name}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 max-h-full w-full object-cover drop-shadow-xl"
          />
        </motion.div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#7539B8]">
            <BookOpen size={15} />
            Get to know the product
          </span>
          <h2 className="mt-5 text-3xl font-black text-[#351078] sm:text-4xl">
            Product Overview
          </h2>
          <p className="mt-4 text-sm leading-8 text-[#655579] sm:text-base">
            {product.overview}
          </p>

          <h3 className="mb-4 mt-8 text-lg font-black text-[#351078]">
            Product Specifications
          </h3>
          <dl className="grid grid-cols-2 gap-3 rounded-3xl border border-white bg-white/80 p-4 sm:grid-cols-4 sm:gap-0 sm:p-5">
            {product.specifications.map((specification, index) => (
              <div
                key={specification.label}
                className={`px-2 py-3 text-center ${
                  index > 0 ? "sm:border-l sm:border-[#E6D9F0]" : ""
                }`}
              >
                <dt className="text-xs font-semibold text-[#82738F]">
                  {specification.label}
                </dt>
                <dd className="mt-2 text-sm font-extrabold text-[#351078]">
                  {specification.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function KeyFeatures({ product }) {
  return (
    <section className="bg-[#FFF7F0] py-6 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0D9] px-4 py-2 text-xs font-extrabold uppercase tracking-[1.5px] text-[#C66B12]">
            <Sparkles size={14} />
            Made for curious minds
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#351078] sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#81758E] sm:text-base">
            Discover what makes {product.name} a fun way to learn through play.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {product.features.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="rounded-[24px] border border-white bg-white p-5 text-center shadow-[0_10px_30px_rgba(100,60,80,0.06)] sm:p-6"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#F0E5FF] text-[#7D35D0]">
                  <Icon size={30} />
                </span>
                <h3 className="mt-5 text-base font-black text-[#351078]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#82758E]">
                  {feature.description}
                </p>
                <span className="mx-auto mt-5 block h-1 w-10 rounded-full bg-[#E99A24]" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Applications({ product }) {
  return (
    <section className="bg-[#ECF9ED] py-6 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#2E9550]">
            <Target size={14} />
            Learn anywhere
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#351078] sm:text-4xl">
            Applications
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#81758E] sm:text-base">
            Bring {product.name} into playtime, learning and shared discovery.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.applications.map((application, index) => {
            const Icon = applicationIcons[index % applicationIcons.length];
            return (
              <motion.article
                key={application.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-[24px] border border-white bg-white p-6 shadow-[0_10px_30px_rgba(40,90,50,0.06)]"
              >
                <span className="absolute right-5 top-5 text-xs font-black text-[#D7D0DE]">
                  0{index + 1}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7F8E9] text-[#338F4D]">
                  <Icon size={28} />
                </span>
                <h3 className="mt-5 text-lg font-black text-[#351078]">
                  {application.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#81758E]">
                  {application.description}
                </p>
                <span className="mt-5 block h-1 w-10 rounded-full bg-[#58B36D]" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs({ product }) {
  return (
    <section className="bg-[#FFF9F5] py-6 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F0E3FF] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#7539B8]">
            <Trophy size={14} />
            Play with purpose
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#351078] sm:text-4xl">
            Why Choose {product.name}?
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#81758E] sm:text-base">
            A playful way to support curiosity, creativity and meaningful discovery.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.reasons.map((reason, index) => {
            const Icon = reasonIcons[index % reasonIcons.length];
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.07 }}
                className="rounded-[24px] border border-[#F0EAF2] bg-white p-6 shadow-[0_10px_30px_rgba(63,40,86,0.05)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0D9] text-[#D8891C]">
                  <Icon size={28} />
                </span>
                <h3 className="mt-5 text-lg font-black text-[#351078]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#81758E]">
                  {reason.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductCTA({ product }) {
  return (
    <section className="bg-[#FFF9F5] pb-14 sm:pb-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#872DA6] via-[#6926A2] to-[#42158B] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -right-4 -top-12 h-40 w-40 rounded-full border border-white/20" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#FFD78D]">
                <Sparkles size={14} />
                Let the adventure begin
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                {product.ctaTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 text-purple-100 sm:text-base">
                {product.ctaDescription}
              </p>
            </div>
            <motion.a
              href="#product-details"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-[#FFB13B] to-[#FF790C] px-7 py-4 text-sm font-black text-white shadow-xl shadow-purple-950/30 sm:text-base"
            >
              Get Yours Now
              <ArrowRight size={19} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const relatedProducts = products.filter((item) => item.id !== product.id);

  const addToCart = () => {
    setAdded(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F6]">
      <section
        id="product-details"
        className="bg-gradient-to-br from-[#FFF8F5] via-white to-[#F9F0FF] py-8 sm:py-14"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#8B7B98]"
          >
            <a href="/" className="hover:text-[#7539B8]">Home</a>
            <ArrowRight size={13} aria-hidden="true" />
            <a href="/products" className="hover:text-[#7539B8]">All Toys</a>
            <ArrowRight size={13} aria-hidden="true" />
            <span className="font-extrabold text-[#351078]">{product.name}</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className={`relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-[30px] p-8 sm:min-h-[480px] sm:p-12 ${product.imageBg}`}
            >
              <span className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-extrabold ${product.badgeColor}`}>
                {product.badgeIcon} {product.badge}
              </span>
              <motion.img
                src={product.image}
                alt={product.name}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-h-[420px] w-full object-contain drop-shadow-[0_20px_25px_rgba(47,24,76,0.15)]"
              />
              <span className="absolute bottom-4 right-5 rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-[#5B4770] backdrop-blur">
                Made for curious minds
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex flex-col"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F0E3FF] px-4 py-2 text-xs font-extrabold uppercase tracking-[1.5px] text-[#7027A5]">
                <Sparkles size={14} />
                {product.category} Collection
              </span>

              <h1 className="mt-4 text-3xl font-black leading-tight text-[#351078] sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-sm leading-7 text-[#776C86] sm:text-base">
                {product.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="flex gap-0.5 text-[#FFA500]" aria-label={`${product.rating} out of 5 stars`}>
                  {Array.from({ length: product.rating }, (_, index) => (
                    <Star key={index} size={17} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <span className="text-sm font-bold text-[#514365]">
                  ({product.reviews} Reviews)
                </span>
                <span className="h-4 w-px bg-[#DED3E8]" aria-hidden="true" />
                <span className="rounded-full bg-[#E5F5E9] px-3 py-1 text-xs font-bold text-[#367B4D]">
                  {product.age}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-4xl font-black text-[#ED2457]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-lg font-bold text-[#998FA5] line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
                <span className="rounded-full bg-[#FFE8B6] px-4 py-2 text-xs font-extrabold text-[#AD5700]">
                  {product.discount}% OFF
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#514765]">
                {product.description}
              </p>

              <div className="mt-7">
                <p className="mb-3 text-sm font-extrabold text-[#351078]">
                  Quantity
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex h-12 items-center gap-5 rounded-full border border-[#E3D8ED] bg-white px-4">
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      aria-label="Decrease quantity"
                      className="text-[#57219B] hover:text-[#F47719]"
                    >
                      <Minus size={17} />
                    </button>
                    <span className="min-w-5 text-center text-sm font-bold">
                      {String(quantity).padStart(2, "0")}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => current + 1)}
                      aria-label="Increase quantity"
                      className="text-[#57219B] hover:text-[#F47719]"
                    >
                      <Plus size={17} />
                    </button>
                  </div>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.97 }}
                    onClick={addToCart}
                    className="flex h-12 min-w-40 flex-1 items-center justify-center gap-2 rounded-full bg-[#FF850F] px-5 text-sm font-extrabold text-white shadow-lg shadow-orange-100 transition hover:bg-[#ED7000]"
                  >
                    <ShoppingCart size={18} />
                    {added ? `Added ${quantity} to Cart` : "Add to Cart"}
                  </motion.button>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setWishlisted((current) => !current)}
                    aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    aria-pressed={wishlisted}
                    className={`flex h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-extrabold transition ${
                      wishlisted
                        ? "border-[#F04475] bg-[#FFF0F4] text-[#F04475]"
                        : "border-[#7539B8] bg-white text-[#57219B]"
                    }`}
                  >
                    <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />
                    <span className="hidden sm:inline">
                      {wishlisted ? "Wishlisted" : "Wishlist"}
                    </span>
                  </motion.button>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#E9E0EF] pt-5 text-xs font-semibold text-[#766B85]">
                <span className="flex items-center gap-2">
                  <Truck size={17} className="text-[#7539B8]" />
                  Delivery available
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-[#7539B8]" />
                  Quality assured
                </span>
                <span className="flex items-center gap-2">
                  <RotateCcw size={17} className="text-[#7539B8]" />
                  Support available
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProductOverview product={product} />
      <KeyFeatures product={product} />
      <Applications product={product} />
      <WhyChooseUs product={product} />
      <ProductCTA product={product} />

                    
    </main>
  );
}
