import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  ezzewash: {
    number: "01",
    category: "FLAGSHIP SYSTEM",
    title: "EzzeWash System",
    subtitle: "Full-Stack Laundry Service & Management Ecosystem",
    description:
      "A multi-platform laundry service ecosystem built as my B.Sc. CSE final-year project, connecting customers, administrators, and delivery riders through dedicated applications and a responsive web experience.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "GoRouter",
      "Supabase",
      "PostgreSQL",
      "Authentication",
      "Realtime",
      "Storage",
    ],
    github: "https://github.com/ImranHasan13421",
    sections: [
      {
        title: "The idea",
        text: "EzzeWash was designed as a complete digital laundry service rather than a single mobile application. The system connects customers, administrators, and riders through separate experiences while maintaining a shared service workflow.",
      },
      {
        title: "My approach",
        text: "The project combines application development, backend services, interface design, order management, delivery workflows, and product thinking into one connected ecosystem.",
      },
      {
        title: "System components",
        text: "The ecosystem includes a customer application, admin application, rider application, and a responsive promotional website.",
      },
    ],
    features: [
      "Customer laundry booking",
      "Service and pricing management",
      "Order lifecycle management",
      "Rider delivery workflow",
      "Authentication",
      "Database integration",
      "Realtime functionality",
      "Storage",
      "Payment-related functionality",
      "Push notifications",
      "Rider location tracking",
      "Responsive promotional website",
    ],
    repositories: [
      {
        title: "Admin App",
        description: "Laundry management and administration application.",
        url: "https://github.com/ImranHasan13421/EzzeWash_Laundry_Management-Admin-V1.0.2",
      },
      {
        title: "Rider App",
        description: "Rider-side delivery and task management application.",
        url: "https://github.com/ImranHasan13421/EzeeWash_Laundry_Management-Rider-V1.0.0",
      },
      {
        title: "Website",
        description: "Responsive promotional and service website.",
        url: "https://github.com/ImranHasan13421/EzzeWash-Website",
      },
      {
        title: "Customer App",
        description: "Customer-facing laundry service application.",
        url: "https://github.com/Abdulaowalasif/EzeeWash-App",
      },
    ],
  },

  atlanta: {
    number: "02",
    category: "AI APPLICATION",
    title: "ATLANTA",
    subtitle: "Personal AI Assistant & Cyber-Tech Command Center",
    description:
      "A Flutter-based personal AI assistant exploring conversational AI, voice interaction, productivity automation, and connected-device capabilities.",
    technologies: ["Flutter", "Dart", "Google Gemini", "AI", "Voice"],
    github: "https://github.com/ImranHasan13421/ATLANTA",
    sections: [
      {
        title: "The idea",
        text: "ATLANTA explores what a personal AI assistant could look like when conversational interaction, voice, productivity, and device-oriented functionality are brought together in a single application.",
      },
      {
        title: "Product direction",
        text: "The project focuses on creating an assistant experience rather than simply presenting an AI chat interface.",
      },
    ],
    features: [
      "Conversational AI",
      "Google Gemini integration",
      "Voice interaction",
      "Productivity automation",
      "Connected-device concepts",
      "Flutter-based interface",
    ],
    repositories: [],
  },

  ezzemusic: {
    number: "03",
    category: "MOBILE APPLICATION",
    title: "EzzeMusic",
    subtitle: "Premium Offline Music Player",
    description:
      "A premium offline music player focused on local audio, dynamic themes, glassmorphism, background playback, and an immersive Now Playing experience.",
    technologies: ["Flutter", "Dart", "UI/UX", "Offline", "Motion Design"],
    github: "https://github.com/ImranHasan13421/EzzeMusic",
    sections: [
      {
        title: "The idea",
        text: "EzzeMusic was created around the idea of making an offline music player feel more like a polished modern product than a basic utility application.",
      },
      {
        title: "Design direction",
        text: "The interface combines dark visual treatment, glassmorphism, dynamic themes, animated interactions, and a vinyl-inspired Now Playing experience.",
      },
    ],
    features: [
      "Local audio scanning",
      "Offline music playback",
      "Background playback",
      "Dynamic themes",
      "Glassmorphism",
      "Animated interactions",
      "Vinyl-style Now Playing interface",
    ],
    repositories: [],
  },

  ezzecv: {
    number: "04",
    category: "PRODUCTIVITY",
    title: "EzzeCV",
    subtitle: "Offline CV & Resume Builder",
    description:
      "An offline CV builder with multiple templates, live customization, PDF generation, local drafts, backup and restore functionality.",
    technologies: ["Flutter", "Dart", "Provider", "PDF", "Local Storage"],
    github: "https://github.com/ImranHasan13421/EzzeCVmaker",
    sections: [
      {
        title: "The idea",
        text: "EzzeCV focuses on making CV creation accessible without requiring a constant internet connection or a complicated online editor.",
      },
      {
        title: "Product experience",
        text: "Users can build and customize CVs through multiple templates, keep local drafts, and generate printable PDF documents directly from the application.",
      },
    ],
    features: [
      "Five CV templates",
      "Live customization",
      "PDF generation",
      "Local drafts",
      "JSON backup and restore",
      "Image cropping",
      "Dark and light mode",
      "English and Bengali interface",
    ],
    repositories: [],
  },

  ezzeexpense: {
    number: "05",
    category: "FINANCE",
    title: "EzzeExpense",
    subtitle: "Personal Expense & Budget Tracker",
    description:
      "An offline expense management application with budgets, analytics, category breakdowns, spending insights, and financial comparisons.",
    technologies: ["Flutter", "Dart", "Offline", "Analytics", "Charts"],
    github: "https://github.com/ImranHasan13421/EzzeExpense",
    sections: [
      {
        title: "The idea",
        text: "EzzeExpense was built around a simple goal: make everyday expense tracking practical while still providing useful visual insights.",
      },
      {
        title: "Analytics",
        text: "The application organizes spending into categories and provides weekly, monthly, and yearly views with charts, comparisons, and budget-related insights.",
      },
    ],
    features: [
      "Expense tracking",
      "Monthly budgets",
      "Category budgets",
      "Search and filtering",
      "Weekly analytics",
      "Monthly analytics",
      "Yearly analytics",
      "Pie and bar charts",
      "Monthly comparisons",
      "Budget warnings",
      "Category breakdowns",
      "Spending insights",
    ],
    repositories: [],
  },

  "shec-cse": {
    number: "06",
    category: "COMMUNITY PLATFORM",
    title: "ShEC CSE",
    subtitle: "Departmental Information & Communication Platform",
    description:
      "A departmental CSE mobile application designed around academic tracking, campus communication, career navigation, messaging, and department resources.",
    technologies: [
      "Flutter",
      "Dart",
      "Supabase",
      "Cloud Storage",
      "Communication",
    ],
    github: "https://github.com/ImranHasan13421/ShEC-CSE",
    sections: [
      {
        title: "The idea",
        text: "ShEC CSE was designed as a central digital platform for departmental information, academic resources, communication, and student-oriented services.",
      },
      {
        title: "Platform direction",
        text: "The application brings multiple department-related functions together instead of requiring students to rely on disconnected sources of information.",
      },
    ],
    features: [
      "Academic information",
      "Academic tracking",
      "Campus communication",
      "Career navigation",
      "Messaging",
      "Department procedures",
      "Cloud storage",
      "Local storage synchronization",
      "Image processing",
    ],
    repositories: [],
  },
} as const;

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in projects)) {
    notFound();
  }

  const project = projects[slug as ProjectSlug];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050A12] text-[#F5F9FF]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[5%] h-[450px] w-[450px] rounded-full bg-[#1D6FE8]/10 blur-[150px]" />
        <div className="absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full bg-[#2F2E98]/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(29,111,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(29,111,232,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-[#23354D] bg-[#0B1220]/80 px-4 py-3 backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D6FE8] text-sm font-bold text-white shadow-[0_0_25px_rgba(29,111,232,0.35)]">
            IH
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold">MD. Imran Hasan</p>
            <p className="text-[10px] tracking-[0.18em] text-[#9AAEC4]">
              SOFTWARE DEVELOPER
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/#projects"
            className="text-xs text-[#9AAEC4] transition-colors hover:text-white"
          >
            Projects
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[#23354D] bg-[#111C2B] px-4 py-2 text-xs font-semibold transition-colors hover:border-[#1D6FE8]"
          >
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-20 pt-36 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#9AAEC4] transition-colors hover:text-[#1D6FE8]"
          >
            ← Back to projects
          </Link>

          <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#1D6FE8]">
                  {project.number}
                </span>

                <span className="h-px w-12 bg-[#1D6FE8]" />

                <span className="text-xs font-semibold tracking-[0.2em] text-[#64748B]">
                  {project.category}
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {project.title}
                <span className="block bg-gradient-to-r from-[#1D6FE8] to-[#6D6BFF] bg-clip-text text-transparent">
                  {project.subtitle}
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-[#9AAEC4]">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#23354D] bg-[#111C2B] px-3 py-1.5 text-xs text-[#9AAEC4]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-[#1D6FE8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(29,111,232,0.2)] transition-all hover:shadow-[0_0_40px_rgba(29,111,232,0.4)]"
                >
                  View Repository ↗
                </a>

                <Link
                  href="/#projects"
                  className="rounded-xl border border-[#23354D] bg-[#111C2B] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[#1D6FE8]"
                >
                  All Projects
                </Link>
              </div>
            </div>

            {/* Project visual */}
            <div className="relative hidden h-[330px] lg:block">
              <div className="absolute inset-0 rounded-3xl border border-[#23354D] bg-[#0B1220]/80" />

              <div className="absolute left-[12%] top-[16%] h-48 w-[76%] rotate-[-4deg] rounded-2xl border border-[#23354D] bg-[#111C2B] p-4 shadow-2xl">
                <div className="flex gap-1.5 border-b border-[#23354D] pb-3">
                  <span className="h-2 w-2 rounded-full bg-[#23354D]" />
                  <span className="h-2 w-2 rounded-full bg-[#23354D]" />
                  <span className="h-2 w-2 rounded-full bg-[#23354D]" />
                </div>

                <div className="mt-4 grid grid-cols-[25%_1fr] gap-3">
                  <div className="rounded-lg bg-[#0B1220] p-3">
                    <div className="h-2 w-8 rounded bg-[#1D6FE8]/60" />

                    <div className="mt-5 space-y-3">
                      <div className="h-1.5 w-full rounded bg-[#23354D]" />
                      <div className="h-1.5 w-4/5 rounded bg-[#23354D]" />
                      <div className="h-1.5 w-3/5 rounded bg-[#23354D]" />
                    </div>
                  </div>

                  <div>
                    <div className="h-3 w-24 rounded bg-white/10" />

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg bg-[#1D6FE8]/10" />
                      <div className="h-16 rounded-lg bg-white/5" />
                      <div className="h-16 rounded-lg bg-white/5" />
                    </div>

                    <div className="mt-3 h-12 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[8%] right-[5%] flex h-24 w-20 rotate-[7deg] items-center justify-center rounded-2xl border border-[#1D6FE8]/30 bg-[#111C2B] shadow-2xl">
                <div className="h-16 w-12 rounded-xl bg-[#0B1220] p-2">
                  <div className="h-7 rounded bg-[#1D6FE8]/20" />
                  <div className="mt-2 h-1.5 w-7 rounded bg-[#23354D]" />
                  <div className="mt-2 h-1.5 w-5 rounded bg-[#23354D]" />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 rounded-xl border border-[#23354D] bg-[#111C2B]/90 px-4 py-3">
                <p className="text-[9px] tracking-[0.2em] text-[#64748B]">
                  PROJECT
                </p>
                <p className="mt-1 text-xs font-semibold">
                  {project.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-[#23354D]/70 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#1D6FE8]">
                PROJECT OVERVIEW
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                From concept
                <span className="block text-[#1D6FE8]">to product.</span>
              </h2>
            </div>

            <div className="space-y-10">
              {project.sections.map((section) => (
                <div
                  key={section.title}
                  className="border-l border-[#23354D] pl-6"
                >
                  <h3 className="text-xl font-semibold">{section.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-[#9AAEC4]">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[#23354D]/70 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#1D6FE8]">
            CAPABILITIES
          </p>

          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What&apos;s inside.
            </h2>

            <p className="max-w-md text-sm leading-6 text-[#64748B]">
              Key functionality and product capabilities represented in the
              project.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="group rounded-2xl border border-[#23354D] bg-[#0B1220]/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1D6FE8]/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs text-[#1D6FE8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[#64748B] transition-colors group-hover:text-[#1D6FE8]">
                    ↗
                  </span>
                </div>

                <p className="mt-8 text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories */}
      {project.repositories.length > 0 && (
        <section className="border-t border-[#23354D]/70 px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#1D6FE8]">
              PROJECT REPOSITORIES
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Explore the ecosystem.
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {project.repositories.map((repository) => (
                <a
                  key={repository.title}
                  href={repository.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-[#23354D] bg-[#0B1220]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1D6FE8]/60"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{repository.title}</h3>
                    <span className="text-[#1D6FE8] transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#9AAEC4]">
                    {repository.description}
                  </p>

                  <p className="mt-5 text-xs text-[#64748B]">
                    Open GitHub repository
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="border-t border-[#23354D]/70 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#23354D] bg-[#0B1220] p-8 text-center sm:p-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#1D6FE8]">
            MORE PROJECTS
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
            Want to see what else I&apos;ve been building?
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/#projects"
              className="rounded-xl bg-[#1D6FE8] px-6 py-3.5 text-sm font-semibold text-white"
            >
              View All Projects
            </Link>

            <a
              href="https://github.com/ImranHasan13421?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[#23354D] bg-[#111C2B] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[#1D6FE8]"
            >
              GitHub Repositories ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#23354D]/70 px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold">MD. Imran Hasan</p>
            <p className="mt-1 text-[#64748B]">
              Software Developer • Flutter • UI/UX
            </p>
          </div>

          <p className="text-[#64748B]">
            © {new Date().getFullYear()} MD. Imran Hasan.
          </p>
        </div>
      </footer>
    </main>
  );
}