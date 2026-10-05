"use client";

import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * Full-screen welcome hero with SVG stroke-draw animation.
 * Shows "MD. IMRAN HASAN" drawn letter-by-letter via stroke-dashoffset,
 * with "Software Developer" underneath in theme-aware color.
 * After viewing, user scrolls down to reveal the rest of the portfolio.
 */

/* ────────────────────────────── helpers ────────────────────────────── */

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

/* ─────────────────────── SVG stroke-draw text ─────────────────────── */

interface StrokeDrawTextProps {
  text: string;
  gradientFrom?: string;
  gradientTo?: string;
  strokeWidth?: number;
  durationMs?: number;
  loop?: boolean;
  fontSize?: number;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
}

function StrokeDrawText({
  text,
  gradientFrom = "#1D6FE8",
  gradientTo = "#60A5FA",
  strokeWidth = 2,
  durationMs = 4500,
  loop = true,
  fontSize = 120,
  viewBoxWidth = 1200,
  viewBoxHeight = 160,
}: StrokeDrawTextProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const [dashLen, setDashLen] = useState(0);
  const reducedMotion = useReducedMotion();

  /* Measure how long the stroke dash needs to be to cover all glyphs */
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const measure = () => {
      const len = el.getComputedTextLength();
      // Generous multiplier to guarantee full coverage on complex glyphs
      setDashLen(Math.ceil(len * 2.5));
    };

    // Wait for fonts, then measure
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure);
    } else {
      measure();
    }
  }, [text, fontSize]);

  /* Animate stroke-dashoffset via rAF for buttery 60 fps */
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el || dashLen <= 0 || reducedMotion) {
      if (el) {
        el.style.strokeDasharray = "none";
        el.style.strokeDashoffset = "0";
      }
      return;
    }

    el.style.strokeDasharray = `${dashLen} ${dashLen}`;
    el.style.strokeDashoffset = String(dashLen);

    const speed = dashLen / durationMs; // units per ms
    let offset = dashLen;
    let prev = performance.now();
    let raf = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const tick = (now: number) => {
      const dt = Math.min(now - prev, 50); // cap at 50ms
      prev = now;
      offset -= speed * dt;

      if (offset <= 0) {
        if (loop) {
          // Pause briefly so user can read the completed name before restart
          el.style.strokeDashoffset = "0";
          offset = dashLen;
          timeoutId = setTimeout(() => {
            el.style.strokeDashoffset = String(dashLen);
            prev = performance.now();
            raf = requestAnimationFrame(tick);
          }, 1800);
          return;
        }
        el.style.strokeDashoffset = "0";
        return;
      }

      el.style.strokeDashoffset = String(offset);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [dashLen, durationMs, loop, reducedMotion]);

  const gradientId = "welcome-stroke-gradient";

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className="h-auto w-full max-w-5xl select-none"
      role="img"
      aria-label={text}
      style={{ visibility: dashLen > 0 || reducedMotion ? "visible" : "hidden" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientFrom} />
          <stop offset="100%" stopColor={gradientTo} />
        </linearGradient>
      </defs>
      <text
        ref={textRef}
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
        fontSize={fontSize}
        fontWeight="800"
        fontFamily="var(--font-geist-sans), system-ui, -apple-system, sans-serif"
        letterSpacing="-0.02em"
      >
        {text}
      </text>
    </svg>
  );
}

/* ──────────────────────── Scroll-down indicator ───────────────────── */

function ScrollCue() {
  return (
    <a
      href="#home"
      aria-label="Scroll to main content"
      className="welcome-scroll-cue absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 transition-colors"
    >
      <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
        Scroll
      </span>
      <span className="welcome-scroll-line block h-8 w-px origin-top bg-gradient-to-b from-[var(--primary-blue)] to-transparent" />
    </a>
  );
}

/* ────────────────────────── WelcomeHero main ──────────────────────── */

export default function WelcomeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay so the initial paint settles
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="welcome"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Subtle radial gradient backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D6FE8]/[0.06] blur-[160px]" />
        <div className="absolute right-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#2F2E98]/[0.05] blur-[120px]" />
        <div className="absolute bottom-[15%] left-[15%] h-[300px] w-[300px] rounded-full bg-[#1D6FE8]/[0.04] blur-[100px]" />
      </div>

      <div
        className={`relative z-10 flex w-full flex-col items-center px-6 text-center transition-all duration-700 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Eyebrow label */}
        <p
          className={`mb-6 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-[var(--text-secondary)] transition-all delay-200 duration-700 sm:mb-8 sm:text-xs ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Portfolio
        </p>

        {/* Accessible h1 for SEO */}
        <h1 className="sr-only">MD. IMRAN HASAN — Software Developer</h1>

        {/* SVG path-drawing name animation */}
        <StrokeDrawText
          text="MD. IMRAN HASAN"
          fontSize={108}
          viewBoxWidth={1320}
          viewBoxHeight={140}
          strokeWidth={2.2}
          durationMs={4500}
          loop
          gradientFrom="#1D6FE8"
          gradientTo="#60A5FA"
        />

        {/* Tagline — blue in dark, black in light theme */}
        <p
          className={`mt-4 text-sm font-semibold tracking-[0.25em] uppercase sm:text-base transition-all delay-500 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span
            className="transition-colors duration-300"
            style={{ color: "var(--welcome-tagline)" }}
          >
            Software Developer
          </span>
        </p>
      </div>

      <ScrollCue />
    </section>
  );
}
