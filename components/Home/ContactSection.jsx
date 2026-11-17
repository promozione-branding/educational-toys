
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Package,
  MessageCircle,
  Send,
  Headphones,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const products = [
  "Educational Toys",
  "STEM & Science Kits",
  "Building Blocks",
  "Wooden Toys",
  "Puzzles & Games",
  "Baby & Toddler Toys",
  "Other Products",
];

const benefits = [
  {
    icon: Headphones,
    title: "Quick Support",
    description: "We're here to help you",
    color: "#E9D9FF",
    iconColor: "#7738B5",
  },
  {
    icon: Package,
    title: "Product Guidance",
    description: "Find the right toy for your child",
    color: "#FFF0D0",
    iconColor: "#D58B27",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Trusted",
    description: "Quality toys, happy learning",
    color: "#DFF5DF",
    iconColor: "#399653",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Connect this endpoint to your contact API.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to send your message. Please try again.");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#FCF9FF] py-6 sm:py-12">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#EBD9FF]/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#FFE9D6]/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">

          {/* LEFT SIDE - CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >

            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E4D1FF] bg-[#F0E4FF] px-5 py-2.5">
              <Mail size={17} className="text-[#7136AD]" />

              <span className="text-sm font-extrabold text-[#54218D]">
                Contact Us
              </span>

              <Sparkles size={15} className="text-[#F3B51E]" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black leading-[1.12] tracking-tight text-[#351078] sm:text-5xl lg:text-[58px]">
              Let's
              <span className="ml-3 text-[#763BB5]">
                Connect
              </span>

              <span className="mt-2 block h-1.5 w-36 rounded-full bg-[#FFB923]" />
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#777187] sm:text-base">
              Have a question, need help, or want to know more about
              our educational toys? We'd love to hear from you!
            </p>

            {/* Form Card */}
            <div className="relative mt-8 overflow-hidden rounded-[28px] border border-[#E5D5F6] bg-white p-5 shadow-[0_15px_50px_rgba(83,39,128,0.08)] sm:p-7 lg:p-8">

              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#F5E9FF] blur-2xl" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative flex min-h-[410px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                      }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E3F8E9] text-[#269A54]"
                    >
                      <CheckCircle2 size={42} />
                    </motion.div>

                    <h3 className="mt-6 text-2xl font-black text-[#351078]">
                      Message Received!
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#777187]">
                      Thank you for reaching out! Our team will
                      get back to you soon.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 rounded-full bg-[#7136AD] px-7 py-3 font-bold text-white transition hover:bg-[#54218D]"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative z-10"
                  >

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-2 block text-xs font-bold text-[#514269]"
                        >
                          Your Name *
                        </label>

                        <div className="flex h-[56px] items-center gap-3 rounded-xl border border-[#E4D6F1] bg-[#FCFAFF] px-4 transition-all focus-within:border-[#8C52CB] focus-within:ring-2 focus-within:ring-[#E8D9FA]">
                          <User size={19} className="shrink-0 text-[#8449B8]" />

                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            className="h-full w-full min-w-0 bg-transparent text-sm text-[#351078] outline-none placeholder:text-[#A69AAF]"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-2 block text-xs font-bold text-[#514269]"
                        >
                          Email Address *
                        </label>

                        <div className="flex h-[56px] items-center gap-3 rounded-xl border border-[#E4D6F1] bg-[#FCFAFF] px-4 transition-all focus-within:border-[#8C52CB] focus-within:ring-2 focus-within:ring-[#E8D9FA]">
                          <Mail size={19} className="shrink-0 text-[#8449B8]" />

                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            className="h-full w-full min-w-0 bg-transparent text-sm text-[#351078] outline-none placeholder:text-[#A69AAF]"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="mb-2 block text-xs font-bold text-[#514269]"
                        >
                          Phone Number *
                        </label>

                        <div className="flex h-[56px] items-center gap-3 rounded-xl border border-[#E4D6F1] bg-[#FCFAFF] px-4 transition-all focus-within:border-[#8C52CB] focus-within:ring-2 focus-within:ring-[#E8D9FA]">
                          <Phone size={19} className="shrink-0 text-[#8449B8]" />

                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            autoComplete="tel"
                            className="h-full w-full min-w-0 bg-transparent text-sm text-[#351078] outline-none placeholder:text-[#A69AAF]"
                          />
                        </div>
                      </div>

                      {/* Product */}
                      <div>
                        <label
                          htmlFor="contact-product"
                          className="mb-2 block text-xs font-bold text-[#514269]"
                        >
                          Interested Product *
                        </label>

                        <div className="relative flex h-[56px] items-center gap-3 rounded-xl border border-[#E4D6F1] bg-[#FCFAFF] px-4 transition-all focus-within:border-[#8C52CB] focus-within:ring-2 focus-within:ring-[#E8D9FA]">
                          <Package size={19} className="shrink-0 text-[#8449B8]" />

                          <select
                            id="contact-product"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            required
                            className="h-full w-full min-w-0 cursor-pointer appearance-none bg-transparent pr-5 text-sm text-[#655779] outline-none"
                          >
                            <option value="" disabled>
                              Select Product
                            </option>

                            {products.map((product) => (
                              <option key={product} value={product}>
                                {product}
                              </option>
                            ))}
                          </select>

                          <span className="pointer-events-none absolute right-4 text-[#8449B8]">
                            ▾
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mt-5">
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-xs font-bold text-[#514269]"
                      >
                        Your Message *
                      </label>

                      <div className="flex gap-3 rounded-xl border border-[#E4D6F1] bg-[#FCFAFF] p-4 transition-all focus-within:border-[#8C52CB] focus-within:ring-2 focus-within:ring-[#E8D9FA]">
                        <MessageCircle
                          size={19}
                          className="mt-1 shrink-0 text-[#8449B8]"
                        />

                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          placeholder="Tell us how we can help you..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full resize-none bg-transparent text-sm leading-6 text-[#351078] outline-none placeholder:text-[#A69AAF]"
                        />
                      </div>
                    </div>

                    {/* Error */}
                    {error && (
                      <p
                        role="alert"
                        className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                      >
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <div className="mt-6 flex justify-center sm:justify-start">
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="group flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#A24BE0] to-[#6324A6] px-9 py-4 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(112,48,173,0.25)] transition-all hover:shadow-[0_14px_30px_rgba(112,48,173,0.35)] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                      >
                        {loading ? "Sending..." : "Send Message"}

                        <Send
                          size={19}
                          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </motion.button>
                    </div>

                    <p className="mt-4 text-center text-[11px] text-[#9B91A8] sm:text-left">
                      Your information is safe with us. We'll only
                      use it to respond to your enquiry.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT SIDE - INTERACTIVE PLAYROOM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[550px] flex-col justify-center lg:min-h-[680px]"
          >

            {/* Decorative Cloud */}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#EEE2FF]/70 blur-3xl" />

            {/* Heading */}
            <div className="relative z-20 mb-8 text-center">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="mx-auto inline-flex items-center gap-2 rounded-full border-2 border-[#E7D6F5] bg-white px-7 py-3 shadow-sm"
              >
                <Sparkles size={18} className="text-[#F1B21C]" />

                <span className="text-xl font-black text-[#351078] sm:text-2xl">
                  Get in Touch
                </span>

                <Sparkles size={18} className="text-[#F1B21C]" />
              </motion.div>
            </div>

            {/* Benefits */}
            <div className="relative z-20 mx-auto mb-8 grid w-full max-w-[430px] gap-4 sm:grid-cols-3 lg:mx-0 lg:max-w-none md:grid-cols-3">

              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + index * 0.15,
                    }}
                    whileHover={{ x: 7 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-3 shadow-sm backdrop-blur-sm lg:border-transparent lg:bg-transparent lg:shadow-none"
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: benefit.color,
                        color: benefit.iconColor,
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-sm font-extrabold text-[#351078] sm:text-base">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#81758F] sm:text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Playroom Image */}
            <div className="relative mt-auto overflow-hidden rounded-[32px]">

              {/* Floating Decorations */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute left-[8%] top-[10%] z-20 text-4xl"
              >
                ✨
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute right-[10%] top-[5%] z-20 text-4xl"
              >
                ⭐
              </motion.div>

              <motion.img
                src="/contact.png"
                alt="Children enjoying educational toys, building blocks and learning games"
                className="relative z-10 h-[350px] w-full object-cover object-contain sm:h-[400px] "
                loading="lazy"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.5 }}
              />

              {/* Image Bottom Caption */}
             
            </div>

            {/* Bottom Floating Toy Icons */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 left-5 z-30 hidden items-center gap-3 rounded-full border border-[#E8D8F8] bg-white px-5 py-3 shadow-lg sm:flex"
            >
              <span className="text-xl">🧩</span>
              <span className="text-xl">🌈</span>
              <span className="text-xl">🧸</span>
              <span className="text-xs font-extrabold text-[#7136AD]">
                Happy Learning!
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
