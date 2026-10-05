"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const skills = [
  {
    title: "Flutter",
    description: "Cross-platform mobile application development.",
    level: "Primary",
  },
  {
    title: "Dart",
    description: "Application logic, state management, and clean architecture.",
    level: "Primary",
  },
  {
    title: "UI / UX",
    description: "Modern interfaces, visual hierarchy, and product experience.",
    level: "Core",
  },
  {
    title: "Figma",
    description: "Interface exploration, layouts, and design systems.",
    level: "Design",
  },
  {
    title: "Supabase",
    description: "Backend services, authentication, database, and storage.",
    level: "Backend",
  },
  {
    title: "Git & GitHub",
    description: "Version control, repositories, and collaborative development.",
    level: "Workflow",
  },
];

const projects = [
  {
    id: "ezzewash",
    number: "01",
    category: "FLAGSHIP SYSTEM",
    title: "EzzeWash",
    subtitle: "Full-Stack Laundry Service & Management Ecosystem",
    description:
      "A multi-platform laundry service ecosystem built as my B.Sc. CSE final-year project, connecting customers, administrators, and delivery riders through dedicated applications and a responsive web experience.",
    technologies: ["Flutter", "Supabase", "PostgreSQL", "BLoC", "GoRouter"],
    github: "https://github.com/ImranHasan13421",
    details: [
      "Customer application",
      "Admin management application",
      "Rider application",
      "Responsive promotional website",
      "Authentication and database services",
      "Order and delivery workflow",
    ],
    featured: true,
  },
  {
    id: "atlanta",
    number: "02",
    category: "AI APPLICATION",
    title: "ATLANTA",
    subtitle: "Personal AI Assistant & Cyber-Tech Command Center",
    description:
      "A Flutter-based personal AI assistant exploring conversational AI, voice interaction, productivity automation, and connected-device capabilities.",
    technologies: ["Flutter", "Gemini", "AI", "Voice"],
    github: "https://github.com/ImranHasan13421/ATLANTA",
    details: [
      "Conversational AI",
      "Voice interaction",
      "Productivity automation",
      "Connected-device concepts",
    ],
  },
  {
    id: "ezzemusic",
    number: "03",
    category: "MOBILE APPLICATION",
    title: "EzzeMusic",
    subtitle: "Premium Offline Music Player",
    description:
      "A premium offline music player focused on local audio, dynamic themes, glassmorphism, background playback, and an immersive Now Playing experience.",
    technologies: ["Flutter", "Dart", "UI/UX", "Offline"],
    github: "https://github.com/ImranHasan13421/EzzeMusic",
    details: [
      "Local audio scanning",
      "Background playback",
      "Dynamic themes",
      "Vinyl-style Now Playing experience",
    ],
  },
  {
    id: "ezzecv",
    number: "04",
    category: "PRODUCTIVITY",
    title: "EzzeCV",
    subtitle: "Offline CV & Resume Builder",
    description:
      "An offline CV builder with multiple templates, live customization, PDF generation, local drafts, backup and restore functionality.",
    technologies: ["Flutter", "Provider", "PDF", "Offline"],
    github: "https://github.com/ImranHasan13421/EzzeCVmaker",
    details: [
      "Five CV templates",
      "PDF generation",
      "Local drafts",
      "JSON backup and restore",
    ],
  },
  {
    id: "ezzeexpense",
    number: "05",
    category: "FINANCE",
    title: "EzzeExpense",
    subtitle: "Personal Expense & Budget Tracker",
    description:
      "An offline expense management application with budgets, analytics, category breakdowns, spending insights, and financial comparisons.",
    technologies: ["Flutter", "Dart", "Analytics", "Offline"],
    github: "https://github.com/ImranHasan13421/EzzeExpense",
    details: [
      "Monthly and category budgets",
      "Spending analytics",
      "Charts and comparisons",
      "Search and filtering",
    ],
  },
  {
    id: "shec-cse",
    number: "06",
    category: "COMMUNITY PLATFORM",
    title: "ShEC CSE",
    subtitle: "Departmental Information & Communication Platform",
    description:
      "A departmental CSE mobile application designed around academic tracking, campus communication, career navigation, messaging, and department resources.",
    technologies: ["Flutter", "Supabase", "Cloud Storage", "Communication"],
    github: "https://github.com/ImranHasan13421/ShEC-CSE",
    details: [
      "Academic information",
      "Department communication",
      "Career navigation",
      "Messaging and resources",
    ],
  },
];

const journey = [
  {
    period: "2020 — 2021",
    title: "Started BSc in CSE",
    description:
      "Started the Computer Science & Engineering journey at Shyamoli Engineering College.",
  },
  {
    period: "During university",
    title: "Moved from learning to building",
    description:
      "Started turning coursework and ideas into practical applications, interfaces, and software projects.",
  },
  {
    period: "Final Year",
    title: "Built EzzeWash",
    description:
      "Worked on a multi-platform laundry service and management ecosystem as the B.Sc. CSE final-year project.",
  },
  {
    period: "Now",
    title: "Software Developer",
    description:
      "Continuing to build Flutter applications, product experiences, and independent software projects.",
  },
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      setDark(false);
    } else if (savedTheme === "dark") {
      setDark(true);
    } else {
      setDark(!window.matchMedia("(prefers-color-scheme: light)").matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        dark
          ? "bg-[#050A12] text-[#F5F9FF]"
          : "bg-[#F7F9FC] text-[#101828]"
      }`}
    >
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute left-[8%] top-[5%] h-[420px] w-[420px] rounded-full blur-[140px] ${
            dark ? "bg-[#1D6FE8]/10" : "bg-[#1D6FE8]/8"
          }`}
        />

        <div
          className={`absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full blur-[160px] ${
            dark ? "bg-[#2F2E98]/10" : "bg-[#2F2E98]/7"
          }`}
        />

        <div
          className={`absolute bottom-[-10%] left-[25%] h-[400px] w-[400px] rounded-full blur-[150px] ${
            dark ? "bg-[#1D6FE8]/6" : "bg-[#1D6FE8]/5"
          }`}
        />

        <div
          className={`absolute inset-0 ${
            dark ? "opacity-[0.035]" : "opacity-[0.025]"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(29,111,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(29,111,232,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 rounded-2xl border backdrop-blur-xl ${
          dark
            ? "border-[#23354D] bg-[#0B1220]/75"
            : "border-slate-200 bg-white/80"
        }`}
      >
        <div className="flex h-[68px] items-center justify-between px-4 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D6FE8] text-sm font-bold text-white shadow-[0_0_25px_rgba(29,111,232,0.35)]">
              IH
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold">MD. Imran Hasan</p>
              <p
                className={`text-[10px] tracking-[0.18em] ${
                  dark ? "text-[#9AAEC4]" : "text-slate-500"
                }`}
              >
                SOFTWARE DEVELOPER
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {["About", "Skills", "Projects", "Journey", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm transition-colors ${
                    dark
                      ? "text-[#9AAEC4] hover:text-white"
                      : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/ImranHasan13421"
              target="_blank"
              rel="noreferrer"
              className={`hidden rounded-xl border px-4 py-2 text-xs font-medium transition-all sm:block ${
                dark
                  ? "border-[#23354D] bg-[#111C2B] text-[#F5F9FF] hover:border-[#1D6FE8]"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[#1D6FE8]"
              }`}
            >
              GitHub
            </a>

            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition-all ${
                dark
                  ? "border-[#23354D] bg-[#111C2B] hover:border-[#1D6FE8]"
                  : "border-slate-200 bg-white hover:border-[#1D6FE8]"
              }`}
            >
              {dark ? "☼" : "☾"}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle mobile menu"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border md:hidden ${
                dark
                  ? "border-[#23354D] bg-[#111C2B]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="space-y-1.5">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-3 bg-current" />
              </div>
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div
            className={`border-t px-5 py-5 md:hidden ${
              dark ? "border-[#23354D]" : "border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-4">
              {["About", "Skills", "Projects", "Journey", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenu(false)}
                    className="text-sm"
                  >
                    {item}
                  </a>
                )
              )}

              <a
                href="https://github.com/ImranHasan13421"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#1D6FE8]"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div
              className={`mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs ${
                dark
                  ? "border-[#23354D] bg-[#111C2B]/70 text-[#9AAEC4]"
                  : "border-slate-200 bg-white/80 text-slate-500"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D6FE8] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1D6FE8]" />
              </span>
              Software Developer • Bangladesh
            </div>

            <p className="mb-3 text-sm font-medium tracking-[0.25em] text-[#1D6FE8]">
              MD. IMRAN HASAN
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Software
              <span className="block bg-gradient-to-r from-[#1D6FE8] to-[#6D6BFF] bg-clip-text text-transparent">
                Developer.
              </span>
            </h1>

            <p
              className={`mt-6 text-lg font-medium sm:text-xl ${
                dark ? "text-[#F5F9FF]" : "text-slate-800"
              }`}
            >
              Flutter <span className="mx-2 text-[#1D6FE8]">•</span> UI/UX{" "}
              <span className="mx-2 text-[#1D6FE8]">•</span> Product
              Development
            </p>

            <p
              className={`mt-5 max-w-2xl text-base leading-7 ${
                dark ? "text-[#9AAEC4]" : "text-slate-500"
              }`}
            >
              Building ideas into practical digital experiences through
              thoughtful interfaces, useful applications, and product-focused
              development.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-[#1D6FE8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(29,111,232,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(29,111,232,0.4)]"
              >
                View Projects →
              </a>

              <a
                href="https://github.com/ImranHasan13421"
                target="_blank"
                rel="noreferrer"
                className={`rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all ${
                  dark
                    ? "border-[#23354D] bg-[#111C2B]/80 hover:border-[#1D6FE8]"
                    : "border-slate-200 bg-white hover:border-[#1D6FE8]"
                }`}
              >
                Explore GitHub ↗
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Flutter", "Dart", "UI/UX", "Supabase", "Git"].map(
                (skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-xs ${
                      dark
                        ? "border-[#23354D] bg-[#0B1220]/70 text-[#9AAEC4]"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto hidden h-[500px] w-full max-w-[500px] lg:block">
            <div
              className={`absolute inset-10 rounded-full border ${
                dark ? "border-[#23354D]/60" : "border-slate-200"
              }`}
            />

            <div
              className={`absolute inset-20 rounded-full border border-dashed ${
                dark ? "border-[#1D6FE8]/20" : "border-[#1D6FE8]/15"
              }`}
            />

            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-[#1D6FE8]/40 bg-[#111C2B]/80 shadow-[0_0_80px_rgba(29,111,232,0.18)] backdrop-blur-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1D6FE8]">IH</div>
                <div
                  className={`mt-1 text-[9px] tracking-[0.25em] ${
                    dark ? "text-[#9AAEC4]" : "text-slate-500"
                  }`}
                >
                  DIGITAL
                </div>
              </div>
            </div>

            {[
              ["FLUTTER", "top-[10%] left-1/2 -translate-x-1/2"],
              ["UI / UX", "right-[4%] top-1/2 -translate-y-1/2"],
              ["PRODUCT", "bottom-[11%] left-1/2 -translate-x-1/2"],
              ["CODE", "left-[4%] top-1/2 -translate-y-1/2"],
            ].map(([label, position]) => (
              <div
                key={label}
                className={`absolute ${position} rounded-xl border px-4 py-2 text-[10px] font-semibold tracking-[0.2em] ${
                  dark
                    ? "border-[#23354D] bg-[#111C2B]/80 text-[#9AAEC4]"
                    : "border-slate-200 bg-white/90 text-slate-500"
                } backdrop-blur-md`}
              >
                {label}
              </div>
            ))}

            <div className="absolute left-[20%] top-[23%] h-2 w-2 rounded-full bg-[#1D6FE8] shadow-[0_0_20px_#1D6FE8]" />
            <div className="absolute right-[20%] top-[29%] h-1.5 w-1.5 rounded-full bg-[#6D6BFF] shadow-[0_0_18px_#6D6BFF]" />
            <div className="absolute bottom-[25%] left-[18%] h-1.5 w-1.5 rounded-full bg-[#1D6FE8] shadow-[0_0_18px_#1D6FE8]" />
            <div className="absolute bottom-[21%] right-[23%] h-2 w-2 rounded-full bg-[#6D6BFF] shadow-[0_0_20px_#6D6BFF]" />

            <svg
              className="absolute inset-0 h-full w-full opacity-40"
              viewBox="0 0 500 500"
              fill="none"
            >
              <path
                d="M125 125 L250 185 L375 145 M125 125 L145 250 L250 315 M375 145 L355 260 L250 315 M145 250 L250 185 L355 260"
                stroke="#1D6FE8"
                strokeWidth="1"
              />
              <circle cx="125" cy="125" r="4" fill="#1D6FE8" />
              <circle cx="375" cy="145" r="4" fill="#6D6BFF" />
              <circle cx="145" cy="250" r="4" fill="#1D6FE8" />
              <circle cx="355" cy="260" r="4" fill="#6D6BFF" />
              <circle cx="250" cy="315" r="4" fill="#1D6FE8" />
            </svg>
          </div>
        </div>

        <a
          href="#about"
          className={`absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] tracking-[0.25em] md:flex ${
            dark ? "text-[#64748B]" : "text-slate-400"
          }`}
        >
          SCROLL
          <span className="h-10 w-px bg-gradient-to-b from-[#1D6FE8] to-transparent" />
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className={`border-t px-6 py-28 sm:px-10 lg:px-16 ${
          dark ? "border-[#23354D]/70" : "border-slate-200"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#1D6FE8]">
                ABOUT ME
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                More than
                <span className="block text-[#1D6FE8]">just code.</span>
              </h2>
            </div>

            <div>
              <p
                className={`text-lg leading-8 ${
                  dark ? "text-[#9AAEC4]" : "text-slate-500"
                }`}
              >
                I&apos;m a software developer focused on building practical
                digital products with Flutter, thoughtful UI/UX, and a
                product-oriented mindset.
              </p>

              <p
                className={`mt-5 text-base leading-7 ${
                  dark ? "text-[#9AAEC4]" : "text-slate-500"
                }`}
              >
                My work sits between development and design — taking an idea,
                understanding the problem behind it, shaping the experience,
                and turning it into a usable product.
              </p>

              <p
                className={`mt-5 text-base leading-7 ${
                  dark ? "text-[#9AAEC4]" : "text-slate-500"
                }`}
              >
                I enjoy working on mobile applications, product interfaces,
                connected systems, and independent software projects where
                functionality and experience need to work together.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Software Developer", "Building useful software"],
              ["02", "Flutter", "Cross-platform applications"],
              ["03", "UI / UX", "Clear digital experiences"],
              ["04", "Product Builder", "From idea to product"],
            ].map(([number, title, subtitle]) => (
              <div
                key={number}
                className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-[#23354D] bg-[#111C2B]/65 hover:border-[#1D6FE8]/50"
                    : "border-slate-200 bg-white hover:border-[#1D6FE8]/40"
                }`}
              >
                <div className="text-xs text-[#1D6FE8]">{number}</div>
                <h3 className="mt-7 font-semibold">{title}</h3>
                <p
                  className={`mt-2 text-xs ${
                    dark ? "text-[#64748B]" : "text-slate-400"
                  }`}
                >
                  {subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div
              className={`rounded-2xl border p-7 ${
                dark
                  ? "border-[#23354D] bg-[#0B1220]/70"
                  : "border-slate-200 bg-white"
              }`}
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1D6FE8]">
                EDUCATION
              </p>

              <h3 className="mt-5 text-xl font-semibold">
                BSc in Computer Science & Engineering
              </h3>

              <p
                className={`mt-2 text-sm ${
                  dark ? "text-[#9AAEC4]" : "text-slate-500"
                }`}
              >
                Shyamoli Engineering College
              </p>

              <div
                className={`mt-6 h-px ${
                  dark ? "bg-[#23354D]" : "bg-slate-200"
                }`}
              />

              <p
                className={`mt-5 text-xs leading-6 ${
                  dark ? "text-[#64748B]" : "text-slate-400"
                }`}
              >
                Computer Science & Engineering background with a focus on
                software development, application building, and practical
                digital products.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-7 ${
                dark
                  ? "border-[#23354D] bg-[#0B1220]/70"
                  : "border-slate-200 bg-white"
              }`}
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1D6FE8]">
                CURRENT FOCUS
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Flutter Development",
                  "UI/UX Design",
                  "Product Development",
                  "Modern Web",
                  "Software Projects",
                ].map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-2 text-xs ${
                      dark
                        ? "border-[#23354D] bg-[#111C2B] text-[#9AAEC4]"
                        : "border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p
                className={`mt-6 text-xs leading-6 ${
                  dark ? "text-[#64748B]" : "text-slate-400"
                }`}
              >
                Continuously improving the connection between engineering,
                interface design, and product thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className={`border-t px-6 py-28 sm:px-10 lg:px-16 ${
          dark ? "border-[#23354D]/70" : "border-slate-200"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#1D6FE8]">
              SKILLS
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tools I use to
              <span className="block text-[#1D6FE8]">build products.</span>
            </h2>

            <p
              className={`mt-5 max-w-2xl text-sm leading-7 ${
                dark ? "text-[#9AAEC4]" : "text-slate-500"
              }`}
            >
              A practical toolkit centered around application development,
              interface design, backend services, and modern development
              workflows.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const active = activeSkill === skill.title;

              return (
                <button
                  key={skill.title}
                  onClick={() =>
                    setActiveSkill(active ? null : skill.title)
                  }
                  className={`group rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                    active
                      ? dark
                        ? "border-[#1D6FE8] bg-[#111C2B]"
                        : "border-[#1D6FE8] bg-white"
                      : dark
                        ? "border-[#23354D] bg-[#111C2B]/55 hover:border-[#1D6FE8]/50"
                        : "border-slate-200 bg-white hover:border-[#1D6FE8]/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{skill.title}</h3>

                      <p
                        className={`mt-2 text-sm leading-6 ${
                          dark ? "text-[#9AAEC4]" : "text-slate-500"
                        }`}
                      >
                        {skill.description}
                      </p>
                    </div>

                    <span className="text-[#1D6FE8] transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] ${
                        dark
                          ? "border-[#23354D] text-[#64748B]"
                          : "border-slate-200 text-slate-400"
                      }`}
                    >
                      {skill.level}
                    </span>

                    <span className="h-1 w-20 overflow-hidden rounded-full bg-[#23354D]">
                      <span
                        className={`block h-full rounded-full ${
                          skill.level === "Primary"
                            ? "w-[90%]"
                            : skill.level === "Core"
                              ? "w-[85%]"
                              : skill.level === "Design"
                                ? "w-[75%]"
                                : skill.level === "Backend"
                                  ? "w-[70%]"
                                  : "w-[80%]"
                        } bg-[#1D6FE8]`}
                      />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`border-t px-6 py-28 sm:px-10 lg:px-16 ${
          dark ? "border-[#23354D]/70" : "border-slate-200"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#1D6FE8]">
                SELECTED WORK
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Projects built with
                <span className="block text-[#1D6FE8]">purpose.</span>
              </h2>

              <p
                className={`mt-5 max-w-2xl text-sm leading-7 ${
                  dark ? "text-[#9AAEC4]" : "text-slate-500"
                }`}
              >
                From a multi-platform service ecosystem to independent mobile
                products and AI experiments.
              </p>
            </div>

            <a
              href="https://github.com/ImranHasan13421?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 text-sm font-medium text-[#1D6FE8]"
            >
              All repositories →
            </a>
          </div>

          {/* Featured Project */}
          <article
            className={`overflow-hidden rounded-3xl border ${
              dark
                ? "border-[#23354D] bg-[#0B1220]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div
                className={`relative min-h-[430px] overflow-hidden ${
                  dark ? "bg-[#080F1B]" : "bg-slate-100"
                }`}
              >
                <div className="absolute inset-0">
                  <div className="absolute left-[10%] top-[10%] h-48 w-48 rounded-full bg-[#1D6FE8]/10 blur-[80px]" />
                  <div className="absolute bottom-[5%] right-[5%] h-56 w-56 rounded-full bg-[#2F2E98]/15 blur-[90px]" />
                </div>

                {/* Browser */}
                <div className="absolute left-[8%] top-[13%] w-[78%] rotate-[-4deg] rounded-2xl border border-[#23354D] bg-[#111C2B] p-3 shadow-2xl">
                  <div className="flex items-center gap-1.5 border-b border-[#23354D] pb-3">
                    <span className="h-2 w-2 rounded-full bg-[#23354D]" />
                    <span className="h-2 w-2 rounded-full bg-[#23354D]" />
                    <span className="h-2 w-2 rounded-full bg-[#23354D]" />
                    <div className="ml-3 h-2 w-32 rounded-full bg-[#23354D]" />
                  </div>

                  <div className="grid grid-cols-[80px_1fr] gap-3 pt-3">
                    <div className="rounded-lg bg-[#0B1220] p-2">
                      <div className="mb-5 h-2 w-10 rounded bg-[#1D6FE8]/70" />

                      {[1, 2, 3, 4, 5].map((item) => (
                        <div
                          key={item}
                          className={`mb-3 h-2 rounded ${
                            item === 1
                              ? "w-12 bg-[#1D6FE8]/30"
                              : "w-9 bg-[#23354D]"
                          }`}
                        />
                      ))}
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <div>
                          <div className="h-3 w-24 rounded bg-white/10" />
                          <div className="mt-2 h-2 w-16 rounded bg-[#23354D]" />
                        </div>

                        <div className="h-6 w-16 rounded-lg bg-[#1D6FE8]/20" />
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-20 rounded-lg bg-[#1D6FE8]/10" />
                        <div className="h-20 rounded-lg bg-white/5" />
                        <div className="h-20 rounded-lg bg-white/5" />
                      </div>

                      <div className="mt-3 h-20 rounded-lg bg-white/5" />
                    </div>
                  </div>
                </div>

                {/* Mobile App */}
                <div className="absolute bottom-[7%] right-[5%] w-[35%] rotate-[7deg] rounded-[22px] border border-[#1D6FE8]/30 bg-[#111C2B] p-2 shadow-2xl">
                  <div className="rounded-[16px] bg-[#0B1220] p-3">
                    <div className="mx-auto h-1 w-10 rounded-full bg-[#23354D]" />
                    <div className="mt-5 h-24 rounded-xl bg-[#1D6FE8]/10" />
                    <div className="mt-3 h-3 w-20 rounded bg-white/10" />
                    <div className="mt-2 h-2 w-14 rounded bg-[#23354D]" />
                    <div className="mt-5 h-8 rounded-lg bg-[#1D6FE8]/30" />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 rounded-xl border border-[#23354D] bg-[#111C2B]/90 px-4 py-3 backdrop-blur-xl">
                  <p className="text-[9px] tracking-[0.2em] text-[#64748B]">
                    B.SC. CSE FINAL-YEAR PROJECT
                  </p>

                  <p className="mt-1 text-xs font-semibold">
                    EzzeWash Ecosystem
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-[#1D6FE8]/20 bg-[#1D6FE8]/5 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-[#1D6FE8]">
                    FLAGSHIP
                  </span>

                  <span className="text-xs text-[#64748B]">01 / 06</span>
                </div>

                <h3 className="mt-6 text-3xl font-bold">
                  EzzeWash System
                </h3>

                <p className="mt-3 text-sm font-medium text-[#1D6FE8]">
                  Full-Stack Laundry Service & Management Ecosystem
                </p>

                <p
                  className={`mt-5 text-sm leading-7 ${
                    dark ? "text-[#9AAEC4]" : "text-slate-500"
                  }`}
                >
                  {projects[0].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full border px-3 py-1.5 text-[10px] ${
                        dark
                          ? "border-[#23354D] bg-[#111C2B] text-[#9AAEC4]"
                          : "border-slate-200 bg-slate-50 text-slate-500"
                      }`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid grid-cols-2 gap-2">
                  {projects[0].details.map((detail) => (
                    <div
                      key={detail}
                      className={`rounded-xl border px-3 py-3 text-xs ${
                        dark
                          ? "border-[#23354D] bg-[#111C2B]/60"
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <span className="mr-2 text-[#1D6FE8]">+</span>
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/projects/ezzewash"
                    className="rounded-xl bg-[#1D6FE8] px-5 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(29,111,232,0.3)]"
                  >
                    Project Details →
                  </Link>

                  <a
                    href="https://github.com/ImranHasan13421"
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-xl border px-5 py-3 text-sm font-semibold ${
                      dark
                        ? "border-[#23354D] bg-[#111C2B] hover:border-[#1D6FE8]"
                        : "border-slate-200 bg-white hover:border-[#1D6FE8]"
                    }`}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Other Projects */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {projects.slice(1).map((project) => (
              <article
                key={project.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  dark
                    ? "border-[#23354D] bg-[#111C2B]/55 hover:border-[#1D6FE8]/40"
                    : "border-slate-200 bg-white hover:border-[#1D6FE8]/40"
                }`}
              >
                <div
                  className={`relative h-36 overflow-hidden border-b ${
                    dark
                      ? "border-[#23354D] bg-[#080F1B]"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="absolute left-6 top-5 text-5xl font-bold text-[#1D6FE8]/10">
                    {project.number}
                  </div>

                  <div className="absolute right-7 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#23354D] bg-[#111C2B]">
                    <span className="text-xl text-[#1D6FE8]">✦</span>
                  </div>

                  <div className="absolute bottom-5 left-6">
                    <p className="text-[9px] font-semibold tracking-[0.2em] text-[#1D6FE8]">
                      {project.category}
                    </p>

                    <p className="mt-1 text-lg font-bold">{project.title}</p>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-semibold">
                    {project.subtitle}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-6 ${
                      dark ? "text-[#9AAEC4]" : "text-slate-500"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-full border px-3 py-1 text-[10px] ${
                          dark
                            ? "border-[#23354D] text-[#9AAEC4]"
                            : "border-slate-200 text-slate-500"
                        }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="rounded-xl bg-[#1D6FE8] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-[0_0_25px_rgba(29,111,232,0.25)]"
                    >
                      View Details →
                    </Link>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-xl border px-4 py-2.5 text-xs font-semibold ${
                        dark
                          ? "border-[#23354D] bg-[#0B1220] hover:border-[#1D6FE8]"
                          : "border-slate-200 bg-white hover:border-[#1D6FE8]"
                      }`}
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            className={`mt-4 flex flex-col justify-between gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center ${
              dark
                ? "border-[#23354D] bg-[#0B1220]/70"
                : "border-slate-200 bg-white"
            }`}
          >
            <div>
              <p className="text-sm font-semibold">
                More work is available on GitHub.
              </p>

              <p
                className={`mt-1 text-xs ${
                  dark ? "text-[#64748B]" : "text-slate-400"
                }`}
              >
                Explore repositories, experiments, and ongoing projects.
              </p>
            </div>

            <a
              href="https://github.com/ImranHasan13421?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className={`rounded-xl border px-5 py-3 text-xs font-semibold ${
                dark
                  ? "border-[#23354D] bg-[#111C2B] hover:border-[#1D6FE8]"
                  : "border-slate-200 bg-white hover:border-[#1D6FE8]"
              }`}
            >
              Browse Repositories ↗
            </a>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section
        id="journey"
        className={`border-t px-6 py-28 sm:px-10 lg:px-16 ${
          dark ? "border-[#23354D]/70" : "border-slate-200"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#1D6FE8]">
              JOURNEY
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              From learning to
              <span className="block text-[#1D6FE8]">building.</span>
            </h2>
          </div>

          <div className="relative ml-2 border-l border-[#23354D]">
            {journey.map((item) => (
              <div key={item.title} className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#1D6FE8] shadow-[0_0_15px_rgba(29,111,232,0.7)]" />

                <p className="text-xs font-semibold tracking-[0.2em] text-[#1D6FE8]">
                  {item.period}
                </p>

                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>

                <p
                  className={`mt-2 max-w-2xl text-sm leading-6 ${
                    dark ? "text-[#9AAEC4]" : "text-slate-500"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`border-t px-6 py-28 sm:px-10 lg:px-16 ${
          dark ? "border-[#23354D]/70" : "border-slate-200"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl overflow-hidden rounded-3xl border p-8 text-center sm:p-14 ${
            dark
              ? "border-[#23354D] bg-[#0B1220]"
              : "border-slate-200 bg-white"
          }`}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-[#1D6FE8]">
            CONTACT
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something
            <span className="block text-[#1D6FE8]">useful together.</span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-xl text-sm leading-7 ${
              dark ? "text-[#9AAEC4]" : "text-slate-500"
            }`}
          >
            Have an idea, project, collaboration, or simply want to connect?
            Feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="rounded-xl bg-[#1D6FE8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(29,111,232,0.2)] transition-all hover:shadow-[0_0_40px_rgba(29,111,232,0.35)]"
            >
              Get in Touch →
            </a>

            <a
              href="https://github.com/ImranHasan13421"
              target="_blank"
              rel="noreferrer"
              className={`rounded-xl border px-6 py-3.5 text-sm font-semibold ${
                dark
                  ? "border-[#23354D] bg-[#111C2B] hover:border-[#1D6FE8]"
                  : "border-slate-200 bg-white hover:border-[#1D6FE8]"
              }`}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t px-6 py-8 sm:px-10 lg:px-16 ${
          dark ? "border-[#23354D]/70" : "border-slate-200"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-xs sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold">MD. Imran Hasan</p>

            <p
              className={`mt-1 ${
                dark ? "text-[#64748B]" : "text-slate-400"
              }`}
            >
              Software Developer • Flutter • UI/UX
            </p>
          </div>

          <p className={dark ? "text-[#64748B]" : "text-slate-400"}>
            © {new Date().getFullYear()} MD. Imran Hasan. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-[#1D6FE8] transition-opacity hover:opacity-70"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}