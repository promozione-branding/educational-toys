
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Search,
  BookOpen,
  CalendarDays,
  Clock3,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

/* ---------------------------------------
   BLOG DATA
--------------------------------------- */

const blogs = [
  {
    id: 1,
    title: "10 Creative Play Ideas with Building Blocks",
    description:
      "Fun and easy activities to boost creativity, problem-solving and motor skills.",
    image: "/testi.webp",
    date: "Apr 18, 2025",
    slug: "creative-play-ideas-building-blocks",
  },
  {
    id: 2,
    title: "How STEM Toys Build Real-World Skills",
    description:
      "Discover how hands-on STEM toys help children develop critical thinking and a love for learning.",
   image: "/testi.webp",
    date: "Apr 12, 2025",
    slug: "how-stem-toys-build-real-world-skills",
  },
  {
    id: 3,
    title: "A Parent's Guide to Choosing the Right Educational Toys",
    description:
      "Simple tips to pick safe, age-appropriate and skill-building toys for your child.",
  image: "/testi.webp",
    date: "Apr 08, 2025",
    slug: "parents-guide-educational-toys",
  },
  {
    id: 4,
    title: "Play-Based Learning: Why It Works for Every Child",
    description:
      "Learn how play helps children build confidence, focus and lifelong learning skills.",
    image: "/testi.webp",
    date: "Mar 28, 2025",
    slug: "play-based-learning",
  },
  {
    id: 5,
    title: "5 Easy Science Activities You Can Do at Home",
    description:
      "Engaging and safe science experiments that turn your home into a mini discovery lab.",
   image: "/testi.webp",
    date: "Mar 20, 2025",
    slug: "easy-science-activities-at-home",
  },
  {
    id: 6,
    title: "Top Educational Toys to Build Early Learning Skills",
    description:
      "A curated list of toys that support cognitive, social and emotional development.",
    image: "/testi.webp",
    date: "Mar 15, 2025",
    slug: "educational-toys-early-learning",
  },
 
];

/* ---------------------------------------
   ANIMATION VARIANTS
--------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ---------------------------------------
   DECORATIVE BOOK ILLUSTRATION
--------------------------------------- */

function BookIllustration() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative hidden h-36 w-48 sm:block"
    >
      {/* Lightbulb */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute left-16 top-0 z-20"
      >
        <Lightbulb
          size={48}
          strokeWidth={1.8}
          className="text-[#F7A500]"
        />
      </motion.div>

      {/* Books */}
      <div className="absolute bottom-3 left-2 h-7 w-36 rounded-lg bg-[#7634B4] shadow-md" />
      <div className="absolute bottom-10 left-0 h-7 w-40 rounded-lg bg-[#F47719] shadow-md" />
      <div className="absolute bottom-[68px] left-5 h-6 w-32 rounded-lg bg-[#FFB83E] shadow-md" />
    </motion.div>
  );
}

/* ---------------------------------------
   DECORATIVE PAPER PLANE
--------------------------------------- */

function PaperPlane() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        x: [0, 8, 0],
        rotate: [-4, 4, -4],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="hidden sm:block"
    >
      <svg
        width="110"
        height="100"
        viewBox="0 0 110 100"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 18C30 50 55 65 79 35C95 15 80 3 68 15"
          stroke="#7435B1"
          strokeWidth="2"
          strokeDasharray="5 5"
          strokeLinecap="round"
        />
        <path d="M20 5L105 25L62 65L20 5Z" fill="#FF951C" />
        <path d="M20 5L62 65L58 27L105 25L20 5Z" fill="#FFB83E" />
      </svg>
    </motion.div>
  );
}

/* ---------------------------------------
   HERO SECTION
--------------------------------------- */

function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#FFF7F1] to-[#FFF9FC]">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#EAD7FF]/70 blur-[70px]" />

      <div className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[#FFE5C9]/70 blur-[70px]" />

      {/* Decorative clouds */}
      <svg
        className="pointer-events-none absolute -bottom-1 left-0 w-[min(68vw,440px)] sm:w-[440px]"
        viewBox="0 0 440 160"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="blog-cloud-left" x1="72" y1="20" x2="300" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8F0FF" />
            <stop offset="1" stopColor="#E4D0FA" />
          </linearGradient>
          <filter id="blog-cloud-left-shadow" filterUnits="userSpaceOnUse" x="-20" y="0" width="480" height="180" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#7541B5" floodOpacity=".08" />
          </filter>
        </defs>
        <g filter="url(#blog-cloud-left-shadow)" fill="url(#blog-cloud-left)">
          <ellipse cx="220" cy="145" rx="220" ry="45" />
          <circle cx="58" cy="114" r="47" />
          <circle cx="157" cy="84" r="68" />
          <circle cx="267" cy="105" r="57" />
          <circle cx="370" cy="116" r="48" />
        </g>
        <path
          d="M112 73C120 59 136 51 152 51M224 48C234 39 246 35 259 36M315 79C324 72 335 70 346 73"
          stroke="white"
          strokeLinecap="round"
          strokeOpacity=".58"
          strokeWidth="3"
        />
      </svg>

      <svg
        className="pointer-events-none absolute -bottom-1 right-0 w-[min(60vw,390px)] sm:w-[390px]"
        viewBox="0 0 390 150"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="blog-cloud-right" x1="48" y1="12" x2="290" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF6E9" />
            <stop offset="1" stopColor="#F8DFC2" />
          </linearGradient>
          <filter id="blog-cloud-right-shadow" filterUnits="userSpaceOnUse" x="-20" y="-5" width="430" height="170" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#C27937" floodOpacity=".08" />
          </filter>
        </defs>
        <g filter="url(#blog-cloud-right-shadow)" fill="url(#blog-cloud-right)">
          <ellipse cx="196" cy="139" rx="194" ry="43" />
          <circle cx="39" cy="113" r="38" />
          <circle cx="137" cy="82" r="61" />
          <circle cx="246" cy="93" r="66" />
          <circle cx="346" cy="114" r="40" />
        </g>
        <path
          d="M113 72C120 60 132 53 146 52M234 42C243 34 254 30 266 30M349 91C355 89 361 90 366 93"
          stroke="white"
          strokeLinecap="round"
          strokeOpacity=".6"
          strokeWidth="3"
        />
      </svg>

      <div className="relative mx-auto flex max-w-[1500px] flex-col items-center px-5 pb-10 pt-14 text-center sm:px-8 sm:pb-14 sm:pt-16">

        {/* Left illustration */}
        <div className="absolute bottom-0 left-5 hidden lg:block">
          <BookIllustration />
        </div>

        {/* Right illustration */}
        <div className="absolute right-8 top-10 hidden lg:block">
          <PaperPlane />
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#EEDCFF] px-5 py-2.5 text-sm font-extrabold text-[#6420A4]"
        >
          <BookOpen size={17} />
          Our Blog
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-5xl font-black tracking-tight text-[#351078] sm:text-6xl md:text-7xl"
        >
          All <span className="text-[#F47719]">Blogs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-sm leading-7 text-[#71627E] sm:text-base"
        >
          Tips, ideas and inspiration to make learning more fun
          and meaningful with educational toys.
        </motion.p>

      </div>
    </section>
  );
}

/* ---------------------------------------
   BLOG CARD
--------------------------------------- */

function BlogCard({ blog, index }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#F4E5D5] bg-[#FFFCF7] p-3 shadow-[0_8px_24px_rgba(80,50,80,0.07)] hover:shadow-[0_18px_35px_rgba(80,50,80,0.12)]"
    >

      {/* Image */}
      <Link
        href={`/blogs/${blog.slug}`}
        className="relative block aspect-[2/1] overflow-hidden rounded-[15px] bg-[#F1E5FF]"
      >
        <motion.img
          src={blog.image}
          alt={blog.title}
          loading={index < 3 ? "eager" : "lazy"}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col px-3 pb-2 pt-4">

        <h2 className="line-clamp-2 min-h-[52px] text-lg font-black leading-snug text-[#351078] transition-colors group-hover:text-[#F47719] sm:text-xl">
          {blog.title}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#74677F]">
          {blog.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">

          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#6F617D]">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={15} className="text-[#6726A6]" />
              {blog.date}
            </span>

            

          </div>

          <Link
            href={`/blogs/${blog.slug}`}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-extrabold text-[#6815B6] transition-all hover:gap-3 hover:text-[#F47719]"
          >
            Read More
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------------------------------
   PAGINATION
--------------------------------------- */

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2">

      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8D8F0] bg-white text-[#6420A4] shadow-sm transition hover:bg-[#6420A4] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowLeft size={18} />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        const active = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={active ? "page" : undefined}
            className={`flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-extrabold transition-all ${
              active
                ? "bg-[#7B2CB3] text-white shadow-lg shadow-purple-200"
                : "border border-[#E8D8F0] bg-white text-[#51227C] hover:border-[#7B2CB3] hover:bg-[#F3E6FF]"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8D8F0] bg-white text-[#6420A4] shadow-sm transition hover:bg-[#6420A4] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

/* ---------------------------------------
   MAIN ALL BLOGS PAGE
--------------------------------------- */

export default function AllBlogs() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

  // Search blogs
  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return blogs;

    return blogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query)
      );
    });
  }, [search]);

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: document.getElementById("blogs-grid")?.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9FC]">

      {/* HERO */}
      <BlogHero />

      {/* BLOG CONTENT */}
      <section className="relative mx-auto max-w-[1500px] px-5 pb-20 pt-8 sm:px-8 sm:pt-10 lg:px-12">

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-9 max-w-[540px]"
        >
          <label className="flex h-14 items-center gap-3 rounded-full border border-[#9C56D0] bg-white px-5 shadow-[0_5px_20px_rgba(100,40,150,0.06)] transition-all focus-within:shadow-[0_5px_25px_rgba(100,40,150,0.16)]">

            <Search size={22} className="shrink-0 text-[#7425B6]" />

            <span className="sr-only">Search blogs</span>

            <input
              type="search"
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
              placeholder="Search blogs..."
              className="h-full w-full bg-transparent text-sm font-medium text-[#351078] outline-none placeholder:text-[#91859B]"
            />

            {search && (
              <button
                type="button"
                onClick={() => handleSearch("")}
                className="shrink-0 text-xs font-bold text-[#7B2CB3] hover:text-[#F47719]"
              >
                Clear
              </button>
            )}
          </label>
        </motion.div>

        {/* Results heading */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-bold text-[#806E90]" aria-live="polite">
            {search
              ? `${filteredBlogs.length} results found`
              : "Explore our latest articles"}
          </p>

          <span className="hidden items-center gap-2 text-xs font-bold text-[#9B87AC] sm:flex">
            <Sparkles size={15} className="text-[#F47719]" />
            Ideas for curious minds
          </span>
        </div>

        {/* Blog Grid */}
        <div id="blogs-grid">
          {currentBlogs.length > 0 ? (
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {currentBlogs.map((blog, index) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-[#F0E3F8] bg-white px-5 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F1E4FF] text-[#7535B4]">
                <BookOpen size={35} />
              </div>

              <h3 className="mt-5 text-2xl font-black text-[#351078]">
                No blogs found!
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-[#82758E]">
                We couldn't find any articles matching your search.
                Try another keyword.
              </p>

              <button
                type="button"
                onClick={() => handleSearch("")}
                className="mt-5 rounded-full bg-[#7027A5] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#542080]"
              >
                View All Blogs
              </button>
            </motion.div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

      </section>
    </main>
  );
}
