
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Plus,
  Minus,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "Are your educational toys safe for kids?",
    answer:
      "Yes! Our educational toys are carefully selected and made using quality materials. We prioritize child-friendly designs, durability and age-appropriate play. Please check individual product descriptions for specific safety and age information.",
    category: "Products",
  },
  {
    id: 2,
    question: "What age groups are your toys suitable for?",
    answer:
      "We offer educational toys for different developmental stages, from babies and toddlers to children aged 3–5, 6–8 and 8+ years. Every product includes an age recommendation to help you choose the right toy.",
    category: "Products",
  },
  {
    id: 3,
    question: "Do you offer cash on delivery (COD)?",
    answer:
      "Cash on Delivery may be available for eligible delivery locations and orders. You can check COD availability during checkout by entering your delivery PIN code.",
    category: "Payments",
  },
  {
    id: 4,
    question: "What is your return or exchange policy?",
    answer:
      "If your product arrives damaged, defective or incorrect, please contact our support team within the return window mentioned in our return policy. Our team will guide you through the return or replacement process.",
    category: "Orders",
  },
  {
    id: 5,
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive tracking details. You can use those details on our order tracking page to follow your delivery.",
    category: "Orders",
  },
  {
    id: 6,
    question: "How long does delivery usually take?",
    answer:
      "Delivery timelines depend on your location and product availability. The estimated delivery date will be shown during checkout or shared in your shipping confirmation.",
    category: "Shipping",
  },
  {
    id: 7,
    question: "Can I cancel my order after placing it?",
    answer:
      "You can contact our customer support team as soon as possible to request cancellation. Cancellation depends on whether your order has already been processed or shipped.",
    category: "Orders",
  },
  {
    id: 8,
    question: "How do I choose the right educational toy?",
    answer:
      "Choose toys based on your child's age, interests and learning stage. Product descriptions include recommended ages and information about the skills each toy can help develop.",
    category: "Products",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function FAQSection() {
  const [search, setSearch] = useState("");
  const [activeFAQ, setActiveFAQ] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const filteredFAQs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return faqData;

    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [search]);

  const visibleFAQs = showAll
    ? filteredFAQs
    : filteredFAQs.slice(0, 4);

  const toggleFAQ = (id) => {
    setActiveFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section relative isolate overflow-clip bg-white py-6 md:py-12">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 bottom-[-100px] h-80 w-80 rounded-full bg-[#F0E4FF]/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#FFF0DF]/60 blur-3xl" />

      {/* Decorative Bottom Shapes */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-52 rounded-tr-[100%] bg-[#F4E9FF]/70" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-52 rounded-tl-[100%] bg-[#FFF0E0]/70" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="relative z-10 lg:order-2"
          >

            {/* Small Label */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E7D5FF] bg-[#F2E8FF] px-5 py-2.5 text-sm font-extrabold text-[#55218D]">
                <MessageCircle size={18} />
                Got Questions?
                <Sparkles
                  size={15}
                  className="text-[#F5A900]"
                />
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="mt-6 text-[36px] font-black leading-[1.12] tracking-tight text-[#351078] sm:text-5xl lg:text-[52px] xl:text-[58px]"
            >
              Frequently Asked
              <span className="relative mt-1 block text-[#7136AD]">
                Questions
                <svg
                  viewBox="0 0 220 13"
                  className="absolute -bottom-2 left-0 w-40 sm:w-52"
                  fill="none"
                >
                  <path
                    d="M3 9 Q50 0 100 8 T217 6"
                    stroke="#FFB629"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-sm leading-7 text-[#777187] sm:text-base"
            >
              Have questions about our educational toys, orders
              or delivery? We've got answers! Find everything
              you need to know right here.
            </motion.p>

            {/* Search Box */}
            <motion.div
              variants={itemVariants}
              className="relative mt-7 flex h-[58px] w-full max-w-[600px] items-center overflow-hidden rounded-full border border-[#E5D5F6] bg-[#FBF9FE] pl-5 pr-2 shadow-sm transition-all focus-within:border-[#8C52CB] focus-within:shadow-md"
            >
              <Search
                size={21}
                className="shrink-0 text-[#8C819C]"
              />

              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowAll(false);
                  setActiveFAQ(null);
                }}
                placeholder="Search your question here..."
                className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-[#351078] outline-none placeholder:text-[#A59BAC]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveFAQ(1);
                    setShowAll(false);
                  }}
                  className="mr-2 text-xs font-bold text-[#7136AD]"
                >
                  Clear
                </button>
              )}

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#7738B5] text-white shadow-md">
                <Search size={21} />
              </div>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              variants={containerVariants}
              className="mt-8 flex max-w-[650px] flex-col gap-3"
            >

              <AnimatePresence mode="popLayout">
                {visibleFAQs.map((item) => {
                  const isOpen = activeFAQ === item.id;

                  return (
                    <motion.div
                      layout
                      key={item.id}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      className={`overflow-hidden rounded-[17px] border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#D9C1F4] bg-[#F7F0FF] shadow-[0_5px_20px_rgba(100,50,150,0.06)]"
                          : "border-[#E8DDF4] bg-white hover:border-[#B990E0]"
                      }`}
                    >

                      {/* Question */}
                      <button
                        type="button"
                        onClick={() => toggleFAQ(item.id)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                      >
                        <span className="text-sm font-bold leading-6 text-[#351078] sm:text-base">
                          {item.question}
                        </span>

                        <motion.span
                          animate={{
                            rotate: isOpen ? 180 : 0,
                            backgroundColor: isOpen
                              ? "#7136AD"
                              : "#F2E8FF",
                          }}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#7136AD]"
                        >
                          {isOpen ? (
                            <Minus
                              size={18}
                              className="text-white"
                            />
                          ) : (
                            <Plus size={18} />
                          )}
                        </motion.span>
                      </button>

                      {/* Answer */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-[#E6D7F5] px-5 pb-5 pt-4 sm:px-6">
                              <p className="text-sm leading-7 text-[#716783]">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* No Results */}
              {filteredFAQs.length === 0 && (
                <div className="rounded-2xl border border-dashed border-[#D8C3ED] bg-[#FBF8FF] px-5 py-10 text-center">
                  <span className="text-4xl">🔍</span>

                  <h3 className="mt-3 font-extrabold text-[#351078]">
                    No questions found
                  </h3>

                  <p className="mt-2 text-sm text-[#81758F]">
                    Try searching with different keywords.
                  </p>
                </div>
              )}

            </motion.div>

            {/* View More */}
            {filteredFAQs.length > 4 && (
              <motion.button
                variants={itemVariants}
                type="button"
                onClick={() => {
                  setShowAll((prev) => !prev);
                  setActiveFAQ(null);
                }}
                className="mt-6 inline-flex items-center gap-2 text-base font-extrabold text-[#7136AD] transition-colors hover:text-[#E87817]"
              >
                {showAll ? "Show Less" : "View All Questions"}

                <motion.span
                  animate={{
                    rotate: showAll ? -90 : 90,
                  }}
                >
                  <ArrowRight size={17} />
                </motion.span>
              </motion.button>
            )}

          </motion.div>

          {/* RIGHT ILLUSTRATION */}
          <motion.div
            initial={{
              opacity: 0,
              x: 55,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative mx-auto flex w-full max-w-[700px] items-center justify-center lg:order-1 lg:sticky lg:top-24 lg:self-start lg:max-w-none"
          >

            {/* Decorative Circle */}
            <div className="absolute left-1/2 top-1/2 h-[95%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2E7FF]/70 blur-3xl" />

            {/* Floating Sparkles */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,             }}
              className="absolute left-[9%] top-[12%] z-10 text-[#FFB800]"
            >
              <Sparkles size={36} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-[8%] top-[20%] z-10 text-[#823BC1]"
            >
              <Sparkles size={30} />
            </motion.div>

            {/* Main Illustration */}
            <motion.img
              src="/faq.png"
              alt="Children discovering educational toys and learning together"
              loading="lazy"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[550px] max-h-[calc(100vh-7rem)] w-full object-cover"
            />

          </motion.div>

        </div>

        {/* Bottom Help CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="relative z-10 mt-14 flex flex-col items-center justify-between gap-5 rounded-[24px] border border-[#E9D9F8] bg-[#F8F2FF] px-6 py-7 sm:flex-row sm:px-9"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7136AD] text-white">
              <MessageCircle size={23} />
            </div>

            <div>
              <h3 className="text-base font-extrabold text-[#351078] sm:text-lg">
                Still have questions?
              </h3>

              <p className="mt-1 text-xs text-[#81758F] sm:text-sm">
                Our friendly team is happy to help you.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#7136AD] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-[#55218D]"
          >
            Contact Us

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
