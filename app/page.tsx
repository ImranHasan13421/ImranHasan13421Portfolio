"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LiveTechVisual from "./components/LiveTechVisual";
import PlexusBackground from "./components/PlexusBackground";
import ThemeToggle from "./components/ThemeToggle";
import { projectsData } from "./data/projects";

const heroChips = [
  { name: "Flutter", icon: "/assets/icons/flutter.svg" },
  { name: "Dart", icon: "/assets/icons/dart.svg" },
  { name: "UI/UX", icon: "/assets/icons/figma.svg" },
  { name: "Supabase", icon: "/assets/icons/supabase.svg" },
  { name: "Git", icon: "/assets/icons/github.svg" },
  { name: "Android", icon: "/assets/icons/android.svg" },
];

const skills = [
  {
    title: "Flutter",
    category: "Primary Framework",
    icon: "/assets/icons/flutter.svg",
    description: "Cross-platform mobile application development with responsive widgets, custom animations, and clean state.",
    level: "Primary",
  },
  {
    title: "Dart",
    category: "Language & Architecture",
    icon: "/assets/icons/dart.svg",
    description: "Application logic, state management with BLoC/Provider, reactive streams, and clean layered architecture.",
    level: "Primary",
  },
  {
    title: "UI / UX",
    category: "Product Experience",
    icon: "/assets/icons/figma.svg",
    description: "Modern interfaces, visual hierarchy, user journey mapping, tactile micro-interactions, and accessible layouts.",
    level: "Core Focus",
  },
  {
    title: "Figma",
    category: "Design Systems",
    icon: "/assets/icons/figma.svg",
    description: "Interface exploration, design systems, vector assets, layout wireframing, and interactive prototypes.",
    level: "Design",
  },
  {
    title: "Supabase",
    category: "Backend & Cloud",
    icon: "/assets/icons/supabase.svg",
    description: "Relational PostgreSQL database schemas, Row Level Security, Realtime subscriptions, Auth, and Storage.",
    level: "Backend",
  },
  {
    title: "Git & GitHub",
    category: "Version Control",
    icon: "/assets/icons/github.svg",
    description: "Collaborative workflows, branching strategies, code versioning, commit hygiene, and repository documentation.",
    level: "Workflow",
  },
  {
    title: "Android & Studio",
    category: "Platform & Tooling",
    icon: "/assets/icons/androidstudio.svg",
    description: "Android SDK tooling, Gradle build configurations, physical device debugging, and APK deployment.",
    level: "Platform",
  },
];

const aboutCards = [
  {
    number: "01",
    title: "Development",
    focus: "Flutter • Dart • Application Development",
    description:
      "Crafting multi-platform mobile applications with clean architecture, robust state management, and reliable offline-first capabilities.",
  },
  {
    number: "02",
    title: "Design",
    focus: "UI/UX • Figma • Design Systems",
    description:
      "Translating product ideas into intuitive user flows, polished tactile micro-interactions, and coherent design systems.",
  },
  {
    number: "03",
    title: "Backend",
    focus: "Supabase • PostgreSQL • Realtime",
    description:
      "Structuring relational database schemas, secure authentication, file storage, and live real-time synchronization.",
  },
  {
    number: "04",
    title: "Workflow",
    focus: "Git • GitHub • Product Thinking",
    description:
      "Applying disciplined version control, technical problem-solving, and a product-focused approach from idea to deployment.",
  },
];

const journey = [
  {
    period: "2020 — 2021",
    title: "Started BSc in CSE",
    description:
      "Began Bachelor of Science in Computer Science & Engineering at Shyamoli Engineering College, establishing strong computational fundamentals and object-oriented programming principles.",
  },
  {
    period: "During university",
    title: "Moved from learning to building",
    description:
      "Transitioned theoretical knowledge into practical software products. Focused deeply on the Flutter framework, UI/UX prototyping, state management, and developer tooling.",
  },
  {
    period: "Final Year",
    title: "Built EzzeWash",
    description:
      "Engineered EzzeWash, a full-scale multi-platform laundry management ecosystem (Customer App, Admin Center, Rider Logistics, Web Portal, Supabase) as the collaborative final-year project.",
  },
  {
    period: "Now",
    title: "Software Developer",
    description:
      "Actively building practical digital products, refining Flutter and UI/UX expertise, and creating dependable software with product-oriented ownership.",
  },
];

const projectList = Object.values(projectsData);
const featuredProject = projectList.find((p) => p.featured) || projectList[0];
const otherProjects = projectList.filter((p) => p.id !== featuredProject.id);

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Interactive Plexus Canvas Background */}
      <PlexusBackground />

      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[5%] h-[450px] w-[450px] rounded-full bg-[#1D6FE8]/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[35%] h-[520px] w-[520px] rounded-full bg-[#2F2E98]/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[25%] h-[400px] w-[400px] rounded-full bg-[#1D6FE8]/8 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(29,111,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(29,111,232,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "border-[var(--border-color)] bg-[var(--bg-secondary)]/90 shadow-xl backdrop-blur-xl"
              : "border-[var(--border-color)]/80 bg-[var(--bg-secondary)]/75 backdrop-blur-md"
          }`}
        >
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary-blue)] text-sm font-bold text-white shadow-[0_0_20px_rgba(29,111,232,0.35)] transition-transform group-hover:scale-105">
              IH
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
                MD. Imran Hasan
              </p>
              <p className="text-[10px] tracking-[0.2em] text-[var(--text-secondary)]">
                SOFTWARE DEVELOPER
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {["About", "Skills", "Projects", "Journey", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/ImranHasan13421"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--primary-blue)] sm:inline-flex items-center gap-1.5"
            >
              <Image
                src="/assets/icons/github.svg"
                alt="GitHub"
                width={14}
                height={14}
                className="h-3.5 w-3.5 rounded-sm object-contain"
              />
              <span>GitHub</span>
              <span className="text-[11px] text-[var(--primary-blue)]">↗</span>
            </a>

            <ThemeToggle />

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenu}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] md:hidden"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-4 bg-current transition-transform ${
                    mobileMenu ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-current transition-opacity ${
                    mobileMenu ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-current transition-transform ${
                    mobileMenu ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {mobileMenu && (
          <>
            <div
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <div className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-2xl md:hidden">
              <div className="flex flex-col gap-4">
                {["About", "Skills", "Projects", "Journey", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenu(false)}
                    className="text-base font-semibold text-[var(--text-primary)] hover:text-[var(--primary-blue)]"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-2 border-t border-[var(--border-color)] flex justify-between items-center">
                  <a
                    href="https://github.com/ImranHasan13421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary-blue)]"
                  >
                    <Image
                      src="/assets/icons/github.svg"
                      alt="GitHub"
                      width={16}
                      height={16}
                      className="h-4 w-4 rounded-sm object-contain"
                    />
                    <span>GitHub Profile ↗</span>
                  </a>
                  <span className="text-xs text-[var(--text-secondary)]">MD. Imran Hasan</span>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-[92vh] items-center px-6 pb-20 pt-36 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="hero-fade">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D6FE8] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1D6FE8]" />
              </span>
              <span>Software Developer • Bangladesh</span>
            </div>

            <p className="mb-2 text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)] uppercase">
              MD. IMRAN HASAN
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Software
              <span className="block text-[var(--primary-blue)]">
                Developer.
              </span>
            </h1>

            <p className="mt-5 text-lg font-semibold sm:text-xl text-[var(--text-primary)]">
              Flutter <span className="mx-2 text-[var(--primary-blue)]">•</span> UI/UX{" "}
              <span className="mx-2 text-[var(--primary-blue)]">•</span> Product Development
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
              Building ideas into practical digital experiences through thoughtful
              interfaces, well-structured Flutter applications, and a product-focused
              engineering mindset.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-[var(--primary-blue)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(29,111,232,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(29,111,232,0.45)]"
              >
                View Projects →
              </a>

              <a
                href="https://github.com/ImranHasan13421"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--primary-blue)] hover:-translate-y-0.5"
              >
                <Image
                  src="/assets/icons/github.svg"
                  alt="GitHub"
                  width={18}
                  height={18}
                  className="h-4.5 w-4.5 rounded-sm object-contain"
                />
                <span>GitHub Profile ↗</span>
              </a>
            </div>

            {/* Hero Tech Chips with Official Rounded Icons */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {heroChips.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] shadow-sm transition-all hover:border-[var(--primary-blue)] hover:text-[var(--text-primary)]"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[var(--bg-card)] p-0.5 shadow-xs">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={16}
                      height={16}
                      className="h-3.5 w-3.5 rounded-xs object-contain"
                    />
                  </div>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Live Dynamic Technical Visual (Interactive with moving connected lines) */}
          <LiveTechVisual />
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[var(--text-secondary)] md:flex"
        >
          <span>SCROLL</span>
          <span className="h-8 w-px bg-gradient-to-b from-[var(--primary-blue)] to-transparent" />
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="border-t border-[var(--border-color)] px-6 py-28 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
                ABOUT ME
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-[var(--text-primary)]">
                More than
                <span className="block text-[var(--primary-blue)]">just code.</span>
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              <p>
                I enjoy turning ideas into practical software products, combining
                development with thoughtful interface design.
              </p>
              <p>
                My work focuses primarily on Flutter application development, UI/UX,
                and building complete product experiences.
              </p>
              <p>
                Rather than focusing only on writing code, I enjoy understanding how a
                product should work, how users interact with it, and how the different
                pieces connect.
              </p>
            </div>
          </div>

          {/* 4 Compact Info Cards */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutCards.map((card) => (
              <div
                key={card.number}
                className="group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-blue)] shadow-sm"
              >
                <div className="text-xs font-bold text-[var(--primary-blue)]">
                  {card.number}
                </div>
                <h3 className="mt-6 text-lg font-bold text-[var(--text-primary)]">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[var(--primary-blue)]">
                  {card.focus}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education & Current Focus */}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--primary-blue)]">
                ACADEMIC FOUNDATION
              </p>
              <h3 className="mt-4 text-xl font-bold text-[var(--text-primary)]">
                BSc in Computer Science &amp; Engineering
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
                Shyamoli Engineering College • Session: 2020–2021
              </p>
              <div className="my-5 h-px bg-[var(--border-color)]" />
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                Solid academic grounding in software development, data structures, algorithms,
                and computer science principles, with a strong emphasis on practical product
                implementation.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--primary-blue)]">
                DEVELOPMENT FOCUS
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Flutter Development",
                  "UI/UX Design Systems",
                  "Product Engineering",
                  "Cross-Platform Apps",
                  "Offline-First Architecture",
                  "Supabase & Realtime",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[var(--text-secondary)]">
                Continuously bridging engineering discipline with user interface craft,
                turning complex product ideas into practical software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Official Rounded Icons */}
      <section
        id="skills"
        className="border-t border-[var(--border-color)] px-6 py-28 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
              SKILLS &amp; TOOLKIT
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-[var(--text-primary)]">
              Tools I build with.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
              A curated technical toolkit centered around Flutter application development,
              interface design, backend integration, and dependable development workflows.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const active = activeSkill === skill.title;

              return (
                <div
                  key={skill.title}
                  onClick={() => setActiveSkill(active ? null : skill.title)}
                  className={`group cursor-pointer rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                    active
                      ? "border-[var(--primary-blue)] bg-[var(--bg-elevated)] shadow-md"
                      : "border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--primary-blue)]/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-2.5 shadow-sm transition-transform group-hover:scale-105">
                        <Image
                          src={skill.icon}
                          alt={skill.title}
                          width={28}
                          height={28}
                          className="h-7 w-7 rounded-sm object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">
                          {skill.title}
                        </h3>
                        <p className="text-xs font-semibold text-[var(--primary-blue)]">
                          {skill.category}
                        </p>
                      </div>
                    </div>

                    <span className="text-[var(--primary-blue)] transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-[var(--text-secondary)]">
                    {skill.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[var(--border-color)] pt-4">
                    <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--text-secondary)]">
                      {skill.level}
                    </span>
                    <span className="text-[11px] font-medium text-[var(--primary-blue)]">
                      Verified Skill
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section with Official Rounded Logos */}
      <section
        id="projects"
        className="border-t border-[var(--border-color)] px-6 py-28 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
                SELECTED WORK
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-[var(--text-primary)]">
                Projects built with purpose.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                A collection of products, applications, and systems built while exploring
                software development, mobile architecture, and product design.
              </p>
            </div>

            <a
              href="https://github.com/ImranHasan13421?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary-blue)] hover:underline"
            >
              <span>All repositories on GitHub</span>
              <span>↗</span>
            </a>
          </div>

          {/* Featured Project: EzzeWash */}
          <article className="overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xl transition-all hover:border-[var(--primary-blue)]/50">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* Visual preview */}
              <div className="relative min-h-[360px] overflow-hidden bg-[var(--bg-secondary)] p-6 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[var(--border-color)]">
                <div className="relative aspect-[16/9] w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl">
                  <Image
                    src="/assets/projects/ezzewash/overview.svg"
                    alt="EzzeWash Laundry Ecosystem Architecture Mockup"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Information */}
              <div className="flex flex-col justify-between p-8 sm:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[var(--primary-blue)]/30 bg-[var(--primary-blue)]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[var(--primary-blue)]">
                      FEATURED PROJECT
                    </span>
                    <span className="text-xs font-semibold text-[var(--text-secondary)]">
                      01 / 07
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    {featuredProject.logoUrl && (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-1.5 shadow-md">
                        <Image
                          src={featuredProject.logoUrl}
                          alt="EzzeWash Logo"
                          width={44}
                          height={44}
                          className="h-11 w-11 rounded-xl object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-3xl font-extrabold text-[var(--text-primary)]">
                        {featuredProject.title}
                      </h3>
                      <p className="text-xs font-semibold text-[var(--primary-blue)]">
                        {featuredProject.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {featuredProject.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {featuredProject.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-2.5 py-1 text-[10px] font-medium text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3 text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--primary-blue)]">
                      Scope:{" "}
                    </span>
                    Customer App • Admin Control Center • Rider Logistics • Web Portal • Supabase Cloud
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="rounded-xl bg-[var(--primary-blue)] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(29,111,232,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(29,111,232,0.45)]"
                  >
                    Project Case Study →
                  </Link>

                  <a
                    href="https://github.com/ImranHasan13421/EzzeWash_Laundry_Management-Admin-V1.0.2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--primary-blue)]"
                  >
                    <Image
                      src="/assets/icons/github.svg"
                      alt="GitHub"
                      width={14}
                      height={14}
                      className="h-3.5 w-3.5 rounded-sm object-contain"
                    />
                    <span>Admin Code ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* All Other Projects Grid (ATLANTA, EzzeMusic, EzzeCV, EzzeExpense, ShEC CSE, EzzeWatchList) */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-blue)]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
                  <Image
                    src={`/assets/projects/${project.id}/overview.svg`}
                    alt={`${project.title} Mockup`}
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/90 px-3 py-1 text-[10px] font-bold tracking-wider text-[var(--primary-blue)] backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {project.logoUrl && (
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-1.5 shadow-sm transition-transform group-hover:scale-105">
                            <Image
                              src={project.logoUrl}
                              alt={`${project.title} Logo`}
                              width={36}
                              height={36}
                              className="h-9 w-9 rounded-lg object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-[var(--text-primary)]">
                            {project.title}
                          </h3>
                          <p className="text-xs font-semibold text-[var(--primary-blue)]">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[var(--primary-blue)] shrink-0">
                        {project.number}
                      </span>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                    <Link
                      href={`/projects/${project.id}`}
                      className="rounded-xl bg-[var(--primary-blue)] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(29,111,232,0.3)]"
                    >
                      View Details →
                    </Link>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--primary-blue)]"
                    >
                      <Image
                        src="/assets/icons/github.svg"
                        alt="GitHub"
                        width={13}
                        height={13}
                        className="h-3 w-3 rounded-xs object-contain"
                      />
                      <span>GitHub ↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section
        id="journey"
        className="border-t border-[var(--border-color)] px-6 py-28 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
              JOURNEY &amp; MILESTONES
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-[var(--text-primary)]">
              From learning to building.
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              The path from university fundamentals to building production software.
            </p>
          </div>

          <div className="relative ml-2 border-l-2 border-[var(--border-color)]">
            {journey.map((item) => (
              <div key={item.title} className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[var(--primary-blue)] shadow-[0_0_15px_rgba(29,111,232,0.8)]" />

                <p className="text-xs font-bold tracking-[0.2em] text-[var(--primary-blue)]">
                  {item.period}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-[var(--border-color)] px-6 py-28 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 text-center sm:p-14 shadow-xl">
          <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
            CONTACT &amp; COLLABORATION
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl text-[var(--text-primary)]">
            Let&apos;s build something
            <span className="block text-[var(--primary-blue)]">practical together.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)]">
            Have an idea, project, or opportunity? Let&apos;s talk about it.
            You can inspect my work, contribute, or reach out through GitHub.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
            <a
              href="https://github.com/ImranHasan13421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary-blue)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(29,111,232,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(29,111,232,0.4)]"
            >
              <Image
                src="/assets/icons/github.svg"
                alt="GitHub"
                width={18}
                height={18}
                className="h-4.5 w-4.5 rounded-sm object-contain invert dark:invert-0"
              />
              <span>Connect on GitHub</span>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/ImranHasan13421?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--primary-blue)]"
            >
              Browse Repositories
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 text-xs sm:flex-row sm:items-center">
          <div>
            <p className="font-bold text-sm text-[var(--text-primary)]">MD. Imran Hasan</p>
            <p className="mt-1 text-[var(--text-secondary)]">
              Software Developer • Flutter • UI/UX • Product Development
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 font-medium text-[var(--text-secondary)]">
            <a
              href="https://github.com/ImranHasan13421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)]"
            >
              <Image
                src="/assets/icons/github.svg"
                alt="GitHub"
                width={14}
                height={14}
                className="h-3.5 w-3.5 rounded-sm object-contain"
              />
              <span>GitHub</span>
            </a>
            <a href="#projects" className="hover:text-[var(--text-primary)]">
              Projects
            </a>
            <a href="#contact" className="hover:text-[var(--text-primary)]">
              Contact
            </a>
            <a
              href="#home"
              className="font-semibold text-[var(--primary-blue)] hover:underline"
            >
              Back to top ↑
            </a>
          </div>

          <p className="text-[var(--text-secondary)]">
            © {new Date().getFullYear()} MD. Imran Hasan. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}