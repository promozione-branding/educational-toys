
"use client";

import { motion } from "framer-motion";
import { ArrowUp, CalendarDays, Headset, Mail, MapPin, MessageCircle, Package, Phone, ShoppingBag, Truck, UserRound } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const usefulLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Shipping Info", href: "/shipping" },
  { name: "FAQ", href: "/faq" },
];

const customerLinks = [
  { name: "Orders", href: "/orders", icon: ShoppingBag },
  { name: "Address", href: "/address", icon: MapPin },
  { name: "Account", href: "/account", icon: UserRound },
  { name: "24 × 7 Support", href: "/contact", icon: Headset },
];

const deliveryLinks = [
  { name: "Free Delivery", href: "/shipping", icon: Truck },
  { name: "Order Status", href: "/orders", icon: Package },
];

const socialLinks = [
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "Facebook", href: "#", icon: FaFacebook },
  { name: "YouTube", href: "#", icon: FaYoutube },
];

const payments = [
  { name: "VISA", className: "bg-[#17449B] italic" },
  { name: "●●", className: "bg-[#171717] text-[#F44336] tracking-[-5px]" },
  { name: "AMEX", className: "bg-[#1677BD] text-[11px]" },
  { name: "Pay", className: "bg-white text-[#174A9A]" },
  { name: "D", className: "bg-white text-[#1687C7]" },
  { name: "DISCOVER", className: "bg-white text-[#222] text-[9px]" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#6246A1] text-white">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#885FC0]/30 blur-[100px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#8259BC]/30 blur-[100px]" />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-[#8D65C3]/20 blur-[100px]" />
      </div>

      {/* Footer Main Content */}
      <div className="relative mx-auto max-w-[1800px] px-6 pb-48 pt-12 sm:px-10 md:pb-42 ">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1.15fr_1fr] lg:gap-12">

          {/* Column 1 - Company */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >

            {/* Logo */}
            <a href="/" className="flex flex-col justify-center items-center">
             <span className="text-[23px] sm:text-[27px] font-black tracking-tight leading-none">
              <span className="text-[#E99C28]">TOYS</span>
              <span className="text-[#35116D]">HUB</span>
              <span className="text-[#E76D55]">.</span>
               
            </span>
            <span className="mt-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-[3px] text-[#8b8195]">
              Play • Learn • Grow
            </span>
            </a>

            {/* Address */}
            <div className="mt-12 flex gap-4">
              <MapPin
                size={26}
                className="mt-1 shrink-0 text-[#FFE36C]"
              />

              <p className="max-w-[330px] text-[15px] leading-8 text-white/90 sm:text-base">
                No: 58 A, East Madison Street,
                Baltimore, MD, USA 4508
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:info@kidlearn.com"
              className="mt-7 flex items-center gap-4 text-[15px] text-white/90 transition-colors hover:text-[#FFE36C] sm:text-base"
            >
              <Mail size={25} className="shrink-0" />
              info@kidlearn.com
            </a>

            {/* Phone */}
            <a
              href="tel:+00123456789"
              className="mt-7 flex items-center gap-4 text-[15px] text-white/90 transition-colors hover:text-[#FFE36C] sm:text-base"
            >
              <Phone size={25} className="shrink-0" />
              +00 (0) 123 456 789
            </a>

            {/* Decorative Sun */}
            <motion.img
              src="/sun.png"
              alt=""
              aria-hidden="true"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="pointer-events-none absolute -right-4 top-24 hidden w-28 object-contain xl:block"
            />

            {/* Rainbow */}
            <motion.img
              src="/images/footer/rainbow.png"
              alt=""
              aria-hidden="true"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pointer-events-none absolute -bottom-44 left-[72%] hidden w-64 max-w-none object-contain lg:block"
            />
          </motion.div>

          {/* Column 2 - Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10"
          >
            <FooterHeading>Useful Links</FooterHeading>

            <ul className="mt-6 space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between gap-3 text-[15px] text-white/90 transition-colors hover:text-[#FFE36C] sm:text-base"
                  >
                    {link.name}
                    <span className="translate-x-0 text-xl opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                      ›
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Delivery */}
            <div className="mt-12">
              <FooterHeading>Delivery</FooterHeading>

              <ul className="mt-6 space-y-5">
                {deliveryLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-4 text-[15px] text-white/90 transition-colors hover:text-[#FFE36C] sm:text-base"
                      >
                        <Icon size={25} className="shrink-0" />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* Column 3 - Customer Services */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <FooterHeading>Customer Services</FooterHeading>

            <ul className="mt-6 space-y-5">
              {customerLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-4 text-[15px] text-white/90 transition-colors hover:text-[#FFE36C] sm:text-base"
                    >
                      <Icon size={25} className="shrink-0" />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Social Media */}
            <div className="mt-12">
              <FooterHeading>Social Media</FooterHeading>

              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -5, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:border-[#FFE36C] hover:bg-[#FFE36C] hover:text-[#6246A1]"
                    >
                      <Icon size={21} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Decorative Flower */}
            <motion.img
              src="/images/footer/flower.png"
              alt=""
              aria-hidden="true"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="pointer-events-none absolute -right-6 top-[250px] hidden w-20 object-contain xl:block"
            />
          </motion.div>

          {/* Column 4 - Need Help */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10"
          >
            <FooterHeading>Need Help</FooterHeading>

            {/* Phone */}
            <a
              href="tel:000123456789"
              className="mt-6 flex items-center gap-4 text-[15px] text-white/90 transition-colors hover:text-[#FFE36C] sm:text-base"
            >
              <Phone size={24} className="shrink-0" />
              000 - 123 - 456789
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/00001234567"
              className="mt-5 flex items-center gap-4 text-[15px] text-white/90 transition-colors hover:text-[#FFE36C] sm:text-base"
            >
              <MessageCircle size={25} className="shrink-0" />
              000 - 00-123 - 4567
            </a>

            {/* Timings */}
            <div className="mt-7 space-y-5">

              <div className="flex gap-4">
                <CalendarDays size={25} className="shrink-0" />

                <div>
                  <p className="text-[15px] text-white/95 sm:text-base">
                    Monday - Friday
                  </p>
                  <p className="mt-2 text-sm text-white/85 sm:text-base">
                    9am - 6pm
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CalendarDays size={25} className="shrink-0" />

                <div>
                  <p className="text-[15px] text-white/95 sm:text-base">
                    Saturday
                  </p>
                  <p className="mt-2 text-sm text-white/85 sm:text-base">
                    10am - 2pm
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CalendarDays size={25} className="shrink-0" />

                <p className="text-[15px] text-white/95 sm:text-base">
                  Sunday - Closed
                </p>
              </div>
            </div>

            {/* Decorative Cloud */}
            <motion.img
              src="/cloud.png"
              alt=""
              aria-hidden="true"
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="pointer-events-none absolute right-1 top-[210px] hidden w-48 object-contain xl:block"
            />
          </motion.div>
        </div>

        {/* Child Image */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute bottom-10 right-5 z-20 hidden w-[290px] lg:block xl:right-12 xl:w-[340px]"
        >
          <img
            src="/boy.png"
            alt="Child enjoying educational toys"
            className="h-auto w-full object-contain object-bottom"
          />
        </motion.div>

        {/* Rainbow for mobile */}
        <img
          src="/rainbow.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 left-4 w-28 object-contain opacity-70 lg:hidden"
        />
      </div>

      {/* Bottom Yellow Wave */}
      <div className="absolute bottom-0 left-0 z-10 w-full">

        <svg
          viewBox="0 0 1440 115"
          preserveAspectRatio="none"
          className="block h-[85px] w-full sm:h-[105px] lg:h-[120px]"
          aria-hidden="true"
        >
          <path
            d="M0 15 C60 55 85 0 140 20 C190 40 180 65 260 68 C340 70 335 100 430 90 C520 80 550 100 640 85 C760 62 820 95 910 75 C1020 48 1100 90 1190 75 C1280 55 1340 85 1440 60 L1440 115 L0 115 Z"
            fill="#FFE56B"
          />
        </svg>

        <div className="flex min-h-[75px] flex-col items-center justify-between gap-4 bg-[#FFE56B] px-5 pb-5 pt-2 sm:flex-row sm:px-10 lg:min-h-[65px] lg:px-16 lg:pb-4">

          {/* Copyright */}
          <p className="text-center text-sm font-medium text-[#33205D] sm:text-left sm:text-base">
            All Right Reserved © {new Date().getFullYear()}{" "}
            <span className="font-extrabold">TOYSHUB</span>
          </p>

          {/* Payment Methods */}
         

          {/* Back To Top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#211B55] text-white shadow-xl transition-colors hover:bg-[#7B48B9] sm:static sm:h-14 sm:w-14"
          >
            <ArrowUp size={23} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }) {
  return (
    <div>
      <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
        {children}
      </h3>

      <div className="mt-2 h-[4px] w-[90px] rounded-full bg-[#FFE36C]" />
      <div className="mt-1 h-[3px] w-[65px] rounded-full bg-[#FFE36C]" />
    </div>
  );
}
