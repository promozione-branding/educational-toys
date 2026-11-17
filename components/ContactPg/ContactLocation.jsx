
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Package,
  MessageCircle,
  Send,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const products = [
  "Educational Toys",
  "STEM & Science Kits",
  "Building Blocks",
  "Wooden Toys",
  "Puzzles & Games",
  "Baby & Toddler Toys",
  "Other",
];

const MAP_QUERY = "Your Company Address, India";

export default function ContactLocation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to send your enquiry.");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FCF9FF] py-6 sm:py-12">

      {/* Background Decoration */}
      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-purple-200/40 blur-[100px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-200/30 blur-[100px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-5 py-2 text-sm font-bold text-purple-800">
            <Sparkles size={17} />
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#351078] sm:text-5xl lg:text-6xl">
            Let's Start a{" "}
            <span className="text-[#F47719]">
              Conversation!
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#777187] sm:text-base">
            Have questions about our products? Need help choosing
            the right educational toy? We're always happy to help.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">

          {/* LEFT: MAP & DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col overflow-hidden rounded-[28px] border border-purple-100 bg-white p-3 shadow-[0_15px_50px_rgba(70,30,110,0.07)] sm:p-5"
          >

            {/* Map Header */}
            <div className="flex items-center justify-between gap-3 px-2 pb-5 pt-2">
              <div>
                <h3 className="text-xl font-black text-[#351078] sm:text-2xl">
                  Find Our Location
                </h3>
                <p className="mt-1 text-sm text-[#8A8096]">
                  We'd love to welcome you!
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E5FF] text-[#7738B5]">
                <MapPin size={24} />
              </div>
            </div>

            {/* Google Map */}
            <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-[22px] bg-[#F0EAF7] sm:min-h-[390px]">

              <iframe
                title="Our Company Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 grayscale-[15%] transition-all duration-500 hover:grayscale-0"
              />

            </div>

            {/* Contact Information */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <a
                href="tel:+00123456789"
                className="group flex items-center gap-3 rounded-2xl bg-[#F6F0FF] p-4 transition hover:bg-[#EDE0FF]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#7738B5]">
                  <Phone size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#9385A3]">
                    Call Us
                  </p>
                  <p className="mt-1 truncate text-sm font-extrabold text-[#351078]">
                    +00 123 456 789
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@example.com"
                className="group flex items-center gap-3 rounded-2xl bg-[#FFF4E8] p-4 transition hover:bg-[#FFE9D4]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#F47719]">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#9385A3]">
                    Email Us
                  </p>
                  <p className="mt-1 truncate text-sm font-extrabold text-[#351078]">
                    info@example.com
                  </p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-white p-5 shadow-[0_15px_50px_rgba(70,30,110,0.07)] sm:p-8 lg:p-10"
          >

            {/* Card Decoration */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F0E4FF]/70 blur-3xl" />

            <div className="relative z-10">

              {/* Form Heading */}
              <div className="mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1E5FF] text-[#7738B5]">
                  <MessageCircle size={24} />
                </div>

                <h3 className="text-2xl font-black text-[#351078] sm:text-3xl">
                  Send Us a Message
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#8A8096]">
                  Fill in your details and our team will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-[#514269]">
                    Full Name *
                  </label>

                  <div className="flex h-[54px] items-center gap-3 rounded-xl border border-[#E9DDF2] bg-[#FCFAFF] px-4 transition focus-within:border-[#8144BC] focus-within:ring-2 focus-within:ring-purple-100">
                    <User size={19} className="text-[#9255C1]" />

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                      className="w-full bg-transparent text-sm text-[#351078] outline-none placeholder:text-[#B0A5BA]"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-bold text-[#514269]">
                      Email Address *
                    </label>

                    <div className="flex h-[54px] items-center gap-3 rounded-xl border border-[#E9DDF2] bg-[#FCFAFF] px-4 transition focus-within:border-[#8144BC] focus-within:ring-2 focus-within:ring-purple-100">
                      <Mail size={19} className="shrink-0 text-[#9255C1]" />

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        className="w-full min-w-0 bg-transparent text-sm text-[#351078] outline-none placeholder:text-[#B0A5BA]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block text-sm font-bold text-[#514269]">
                      Phone Number *
                    </label>

                    <div className="flex h-[54px] items-center gap-3 rounded-xl border border-[#E9DDF2] bg-[#FCFAFF] px-4 transition focus-within:border-[#8144BC] focus-within:ring-2 focus-within:ring-purple-100">
                      <Phone size={19} className="shrink-0 text-[#9255C1]" />

                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="Your phone"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                        className="w-full min-w-0 bg-transparent text-sm text-[#351078] outline-none placeholder:text-[#B0A5BA]"
                      />
                    </div>
                  </div>

                </div>

                {/* Product */}
                <div>
                  <label htmlFor="contact-product" className="mb-2 block text-sm font-bold text-[#514269]">
                    Interested Product *
                  </label>

                  <div className="flex h-[54px] items-center gap-3 rounded-xl border border-[#E9DDF2] bg-[#FCFAFF] px-4 transition focus-within:border-[#8144BC] focus-within:ring-2 focus-within:ring-purple-100">
                    <Package size={19} className="shrink-0 text-[#9255C1]" />

                    <select
                      id="contact-product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      required
                      className="w-full cursor-pointer bg-transparent text-sm text-[#786A89] outline-none"
                    >
                      <option value="" disabled>
                        Select a product
                      </option>

                      {products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-[#514269]">
                    Your Message *
                  </label>

                  <div className="flex gap-3 rounded-xl border border-[#E9DDF2] bg-[#FCFAFF] px-4 py-3 transition focus-within:border-[#8144BC] focus-within:ring-2 focus-within:ring-purple-100">
                    <MessageCircle size={19} className="mt-1 shrink-0 text-[#9255C1]" />

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us what you're looking for..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-none bg-transparent text-sm leading-6 text-[#351078] outline-none placeholder:text-[#B0A5BA]"
                    />
                  </div>
                </div>

                {/* Status */}
                {status === "success" && (
                  <p role="status" className="rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700">
                    Thank you! Your enquiry has been submitted successfully.
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex h-[58px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#7738B5] to-[#54218D] text-sm font-extrabold text-white shadow-lg shadow-purple-200 transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                >
                  {loading ? "Sending Enquiry..." : "Submit Your Enquiry"}

                  <Send
                    size={19}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </motion.button>

                <p className="text-center text-xs text-[#A39AAE]">
                  <Clock size={13} className="mr-1 inline" />
                  Our team will get back to you as soon as possible.
                </p>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
