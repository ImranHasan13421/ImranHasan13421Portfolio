import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectSlugs, projectsData } from "../../data/projects";
import ProjectHeaderNav from "./ProjectHeaderNav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — MD. Imran Hasan`,
    description: project.description,
    openGraph: {
      title: `${project.title} — MD. Imran Hasan`,
      description: project.description,
      url: `https://imranhasan.vercel.app/projects/${slug}`,
      images: [
        {
          url: `/assets/projects/${slug}/overview.png`,
          width: 960,
          height: 540,
          alt: `${project.title} — MD. Imran Hasan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — MD. Imran Hasan`,
      description: project.description,
      images: [`/assets/projects/${slug}/overview.png`],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const currentIndex = projectSlugs.indexOf(slug);
  const nextSlug = projectSlugs[(currentIndex + 1) % projectSlugs.length];
  const nextProject = projectsData[nextSlug];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[5%] h-[450px] w-[450px] rounded-full bg-[#1D6FE8]/10 blur-[150px]" />
        <div className="absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full bg-[#2F2E98]/10 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(29,111,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(29,111,232,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Top Navbar */}
      <ProjectHeaderNav githubUrl={project.github} />

      {/* Hero Header */}
      <section className="px-6 pb-16 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-blue)]"
          >
            ← BACK TO ALL PROJECTS
          </Link>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
                  {project.number}
                </span>
                <span className="h-px w-10 bg-[var(--primary-blue)]/50" />
                <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[var(--text-secondary)]">
                  {project.category}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
                {project.title}
                <span className="block text-2xl sm:text-3xl font-bold text-[var(--primary-blue)] mt-2">
                  {project.subtitle}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary-blue)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(29,111,232,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(29,111,232,0.45)]"
                >
                  View on GitHub ↗
                </a>

                <Link
                  href="/#projects"
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--primary-blue)]"
                >
                  Portfolio Home
                </Link>
              </div>
            </div>

            {/* Project Technical Visual Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 shadow-2xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                <Image
                  src={`/assets/projects/${project.id}/overview.svg`}
                  alt={`${project.title} Architecture Overview`}
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <p className="mt-2 text-center text-[11px] font-medium text-[var(--text-secondary)]">
                Technical Architecture &amp; System Flow Mockup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Disclaimer Banner (Essential for EzzeWash) */}
      {project.disclaimer && (
        <section className="px-6 pb-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-2xl border border-[var(--primary-blue)]/30 bg-[var(--primary-blue)]/5 p-6 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-blue)] text-xs font-bold text-white">
                ℹ
              </span>
              <div>
                <h2 className="text-sm font-bold text-[var(--primary-blue)] tracking-wide uppercase">
                  Project Context &amp; Contribution Scope
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* In-depth Overview Sections */}
      <section className="border-t border-[var(--border-color)] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
                DEEP DIVE
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Engineering
                <span className="block text-[var(--primary-blue)]">&amp; Implementation.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.longOverview}
              </p>
            </div>

            <div className="space-y-8">
              {project.sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--primary-blue)]/50"
                >
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Breakdown (For EzzeWash multi-platform architecture) */}
      {project.ecosystemComponents && project.ecosystemComponents.length > 0 && (
        <section className="border-t border-[var(--border-color)] px-6 py-20 sm:px-10 lg:px-16 bg-[var(--bg-secondary)]/50">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
              MULTI-PLATFORM ECOSYSTEM
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[var(--text-primary)]">
              Connected Touchpoints &amp; Roles.
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              How the individual applications collaborate to deliver an end-to-end laundry service.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {project.ecosystemComponents.map((comp) => (
                <div
                  key={comp.name}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-7 transition-all hover:-translate-y-1 hover:border-[var(--primary-blue)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {comp.name}
                    </h3>
                    <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-elevated)] px-3 py-1 text-[10px] font-semibold text-[var(--primary-blue)]">
                      {comp.role}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {comp.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-[var(--border-color)] pt-4">
                    {comp.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <span className="text-[var(--primary-blue)] font-bold">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Capabilities & Features Grid */}
      <section className="border-t border-[var(--border-color)] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
                CAPABILITIES
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[var(--text-primary)]">
                Core Features &amp; Modules.
              </h2>
            </div>
            <p className="text-xs font-medium text-[var(--text-secondary)]">
              {project.features.length} key capabilities implemented
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, idx) => (
              <div
                key={feature}
                className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-blue)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-[var(--primary-blue)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--primary-blue)]">
                    ↗
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold text-[var(--text-primary)]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories Section */}
      {project.repositories && project.repositories.length > 0 && (
        <section className="border-t border-[var(--border-color)] px-6 py-20 sm:px-10 lg:px-16 bg-[var(--bg-secondary)]/40">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary-blue)]">
              CODE &amp; REPOSITORIES
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[var(--text-primary)]">
              Inspect the Codebase.
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Transparent repository links verifying technical implementation and contributions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.repositories.map((repo) => (
                <a
                  key={repo.title}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--primary-blue)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[var(--text-primary)]">
                        {repo.title}
                      </h3>
                      {repo.badge && (
                        <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[9px] font-semibold text-[var(--primary-blue)]">
                          {repo.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-[var(--primary-blue)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                    {repo.description}
                  </p>
                  <p className="mt-4 text-[11px] font-semibold text-[var(--primary-blue)]">
                    Open GitHub Repository →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project Switcher */}
      <section className="border-t border-[var(--border-color)] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 sm:p-12 shadow-xl">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--primary-blue)]">
                CONTINUE EXPLORING
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Next: {nextProject.title}
              </h2>
              <p className="mt-2 max-w-md text-xs sm:text-sm text-[var(--text-secondary)]">
                {nextProject.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href={`/projects/${nextSlug}`}
                className="rounded-xl bg-[var(--primary-blue)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(29,111,232,0.3)] transition-all hover:-translate-y-0.5"
              >
                View Case Study →
              </Link>
              <Link
                href="/#projects"
                className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-5 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--primary-blue)]"
              >
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-xs sm:flex-row sm:items-center">
          <div>
            <p className="font-bold text-[var(--text-primary)]">MD. Imran Hasan</p>
            <p className="mt-1 text-[var(--text-secondary)]">
              Software Developer • Flutter • UI/UX • Product Development
            </p>
          </div>
          <p className="text-[var(--text-secondary)]">
            © {new Date().getFullYear()} MD. Imran Hasan. All rights reserved.
          </p>
          <Link
            href="/#home"
            className="font-medium text-[var(--primary-blue)] transition-opacity hover:opacity-75"
          >
            Back to top ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}