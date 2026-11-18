
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Quote,
  Users,
  GraduationCap,
  Heart,
  Sparkles,
  MessageCircle,
} from "lucide-react";

/* -----------------------------------------
   TESTIMONIAL DATA
----------------------------------------- */

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of a 7-year-old",
    title: "My Child Loves Learning!",
    review:
      "The STEM kit is fantastic! It keeps my son curious, engaged and excited to learn new things every day. He loves experimenting and discovering something new.",
    image: "/testi.webp",
    rating: 5,
    initials: "PS",
    color: "#8B4CCB",
  },
  {
    name: "Rahul Mehta",
    role: "Parent of a 9-year-old",
    title: "Learning Has Never Been This Fun!",
    review:
      "These educational toys have made learning at home so much more exciting. My daughter enjoys every activity and has become more confident in exploring new ideas.",
    image: "/testi.webp",
    rating: 5,
    initials: "RM",
    color: "#E68A25",
  },
  {
    name: "Ananya Verma",
    role: "Primary School Teacher",
    title: "Perfect for Classroom Learning!",
    review:
      "The activity kits are a wonderful addition to our classroom. Children participate enthusiastically, ask more questions and enjoy learning through practical activities.",
    image: "/testi.webp",
    rating: 5,
    initials: "AV",
    color: "#299B76",
  },
  {
    name: "Amit Kapoor",
    role: "Parent of a 10-year-old",
    title: "A Wonderful Learning Experience!",
    review:
      "I wanted something that would make screen-free learning interesting. These toys are creative, engaging and a great way to spend quality time with my child.",
    image: "/testi.webp",
    rating: 5,
    initials: "AK",
    color: "#3D86C8",
  },
  {
    name: "Neha Gupta",
    role: "Parent of a 6-year-old",
    title: "Creative, Fun and Educational!",
    review:
      "My little one enjoys building, exploring and trying new activities. I love how these toys combine entertainment with meaningful learning.",
     image: "/testi.webp",
    rating: 5,
    initials: "NG",
    color: "#DF6397",
  },
];

/* -----------------------------------------
   ANIMATION VARIANTS
----------------------------------------- */

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 70 : -70,
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -70 : 70,
    scale: 0.97,
  }),
};

/* -----------------------------------------
   DECORATIVE DOODLES
----------------------------------------- */

function Doodle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 30L34 16M40 22L58 7M64 28L84 12M8 52L27 40M38 48L55 33M67 51L89 34M20 74L38 62M53 72L73 56"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -----------------------------------------
   TESTIMONIAL CARD
----------------------------------------- */

function TestimonialCard({ testimonial, direction }) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={testimonial.name}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="grid min-h-[420px] overflow-hidden rounded-[30px] bg-white shadow-[0_15px_50px_rgba(73,35,100,0.07)] md:grid-cols-[1.05fr_0.95fr]"
      >
        {/* Image and review */}
        <div className="flex flex-col">

          <div className="relative h-[230px] overflow-hidden bg-[#F2E6FF] sm:h-[270px] md:h-[260px]">
            <img
              src={testimonial.image}
              alt={`${testimonial.name} testimonial`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="h-full w-full object-cover"
            />

            {/* Image fallback */}
            <div
              className="absolute inset-0 -z-10 flex items-center justify-center text-5xl font-black text-white"
              style={{ backgroundColor: testimonial.color }}
            >
              {testimonial.initials}
            </div>

            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold text-[#54218C] backdrop-blur">
              <Sparkles size={13} className="mr-1 inline" />
              Verified Experience
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center p-6 sm:p-5">
            <div className="mb-3 flex gap-1 text-[#FFB000]">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={19}
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>

            <h3 className="text-xl font-black text-[#461582] sm:text-2xl">
              {testimonial.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6F637D] sm:text-base">
              “{testimonial.review}”
            </p>
          </div>
        </div>

        {/* Reviewer information */}
        <div className="relative flex flex-col items-center justify-center border-t border-[#EEE6F2] bg-[#FFFCF8] p-7 text-center md:border-l md:border-t-0 md:p-5">

          <div
            className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-black text-white shadow-lg"
            style={{ backgroundColor: testimonial.color }}
          >
            {testimonial.initials}
          </div>

          <h3 className="mt-6 text-2xl font-black text-[#45147E]">
            {testimonial.name}
          </h3>

          <p className="mt-2 text-sm font-medium text-[#8B7D96]">
            {testimonial.role}
          </p>

          <div className="mt-7 flex gap-1 text-[#FFB000]">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                size={22}
                fill="currentColor"
                strokeWidth={0}
              />
            ))}
          </div>

          <div className="my-8 h-px w-full max-w-[200px] bg-[#E8DDEB]" />

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E9D4FF] text-[#7938B6]">
            <Quote size={39} fill="currentColor" />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[1.5px] text-[#9C8AA8]">
            A Happy Learning Journey
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* -----------------------------------------
   STATISTICS
----------------------------------------- */

function TestimonialStats() {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Happy Schools",
    },
    {
      icon: GraduationCap,
      number: "100+",
      label: "Educational Products",
    },
    {
      icon: Heart,
      number: "1 Million+",
      label: "Smiling Learners",
    },
  ];

  return (
    <div className="grid grid-cols-1 divide-y divide-[#E8D6A8] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="flex items-center justify-center gap-5 px-4 py-7 sm:py-5"
          >
            <Icon
              size={45}
              strokeWidth={1.7}
              className="shrink-0 text-[#6423A4]"
            />

            <div>
              <h3 className="text-3xl font-black text-[#48147F]">
                {stat.number}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#746581]">
                {stat.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* -----------------------------------------
   MAIN TESTIMONIAL SECTION
----------------------------------------- */

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = testimonials[activeIndex];

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousSlide = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Automatic slider
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative w-full overflow-hidden bg-[#FCF8FF] py-6 sm:py-7">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#EBD9FF]/50 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#FFE4B9]/50 blur-[100px]" />

      <Doodle className="pointer-events-none absolute left-4 top-5 z-10 w-20 rotate-[-10deg] text-black sm:left-8 sm:top-8 sm:w-28" />

      <Doodle className="pointer-events-none absolute bottom-5 right-4 z-10 w-20 rotate-180 text-black sm:right-8 sm:bottom-8 sm:w-28" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* Main card */}
        <div
          className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-[#FFF1C5] via-[#FFF4D5] to-[#FFE9AD] shadow-[0_25px_80px_rgba(130,90,40,0.08)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >

          {/* Main content */}
          <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.5fr] ">

            {/* Left heading */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-bold text-[#51218A] sm:text-base">
                What Parents Say
              </span>

              <h2 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight text-[#46147F] sm:text-6xl lg:text-7xl">
                Our
                <span className="block text-[#F47719]">
                  Testimonials
                </span>
              </h2>

              <div className="mt-4 h-2 w-48 rounded-full bg-[#C7A0F1]" />

              <p className="mt-8 max-w-md text-sm leading-7 text-[#5D4C70] sm:text-base sm:leading-8">
                Real stories from parents, teachers and educators
                who trust our educational toys to make learning
                more meaningful, fun and engaging for children.
              </p>

              <motion.a
                href="#all-reviews"
                whileHover={{ scale: 1.04, x: 4 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-[#6420AE] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-purple-200 transition-colors hover:bg-[#4F148F]"
              >
                Read More Reviews
                <ArrowRight size={21} />
              </motion.a>

              {/* Slider progress */}
              <div className="mt-8">
                <p className="text-xs font-bold text-[#8C779E]">
                  TESTIMONIAL {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </p>

                <div className="mt-3 flex gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-pressed={activeIndex === index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-10 bg-[#6420AE]"
                          : "w-4 bg-[#D7BDEB] hover:bg-[#A77BCB]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right testimonial slider */}
            <div className="min-w-0">

              <TestimonialCard
                testimonial={activeTestimonial}
                direction={direction}
              />

              {/* Navigation */}
              <div className="mt-3 flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#8A759B]">
                    {activeIndex + 1} of {testimonials.length}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9B65CE]" />
                  <span className="text-xs font-semibold text-[#8A759B]">
                    Parent experiences
                  </span>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    type="button"
                    onClick={previousSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCC9EB] bg-white text-[#6420AE] transition-colors hover:bg-[#6420AE] hover:text-white"
                  >
                    <ArrowLeft size={19} />
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={nextSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6420AE] text-white shadow-lg transition-colors hover:bg-[#4F148F]"
                  >
                    <ArrowRight size={19} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics strip */}
          <div className="border-t border-[#EBD9A8] bg-white/30 px-5 py-2 sm:px-10 lg:px-14">
            <TestimonialStats />
          </div>
        </div>
      </div>
    </section>
  );
}
