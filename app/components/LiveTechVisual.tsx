"use client";

import { useEffect, useRef, useState } from "react";

interface NodePoint {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  speed: number;
  radius: number;
  color: string;
}

export default function LiveTechVisual() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [lines, setLines] = useState<string[]>([]);
  const [nodePositions, setNodePositions] = useState<{ x: number; y: number; color: string }[]>([]);

  useEffect(() => {
    // 6 constellation nodes matching the exact geometric structure from the image
    const initialNodes: NodePoint[] = [
      { baseX: 135, baseY: 140, x: 135, y: 140, vx: 0, vy: 0, phase: 0, speed: 0.8, radius: 4, color: "#1D6FE8" },
      { baseX: 320, baseY: 155, x: 320, y: 155, vx: 0, vy: 0, phase: 1.2, speed: 0.9, radius: 4, color: "#8B5CF6" },
      { baseX: 345, baseY: 265, x: 345, y: 265, vx: 0, vy: 0, phase: 2.4, speed: 0.75, radius: 4, color: "#8B5CF6" },
      { baseX: 230, baseY: 310, x: 230, y: 310, vx: 0, vy: 0, phase: 3.5, speed: 0.85, radius: 4.5, color: "#1D6FE8" },
      { baseX: 150, baseY: 255, x: 150, y: 255, vx: 0, vy: 0, phase: 4.6, speed: 0.7, radius: 4, color: "#1D6FE8" },
      { baseX: 230, baseY: 185, x: 230, y: 185, vx: 0, vy: 0, phase: 5.2, speed: 1.0, radius: 4, color: "#3B82F6" },
    ];

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.02;

      const current = initialNodes.map((node) => {
        // Organic floating motion around home anchor
        const driftX = Math.sin(time * node.speed + node.phase) * 12;
        const driftY = Math.cos(time * node.speed * 0.9 + node.phase) * 10;

        return {
          x: node.baseX + driftX + mouseOffset.x * 0.1,
          y: node.baseY + driftY + mouseOffset.y * 0.1,
          color: node.color,
        };
      });

      setNodePositions(current);

      // Connecting lines matching the mesh:
      // (0)-(1), (1)-(2), (2)-(3), (3)-(4), (4)-(0), plus internal cross-braces: (0)-(5), (1)-(5), (3)-(5), (4)-(5)
      const p = current;
      const paths = [
        `M ${p[0].x} ${p[0].y} L ${p[1].x} ${p[1].y}`,
        `M ${p[1].x} ${p[1].y} L ${p[2].x} ${p[2].y}`,
        `M ${p[2].x} ${p[2].y} L ${p[3].x} ${p[3].y}`,
        `M ${p[3].x} ${p[3].y} L ${p[4].x} ${p[4].y}`,
        `M ${p[4].x} ${p[4].y} L ${p[0].x} ${p[0].y}`,
        // Cross connections
        `M ${p[0].x} ${p[0].y} L ${p[5].x} ${p[5].y}`,
        `M ${p[1].x} ${p[1].y} L ${p[5].x} ${p[5].y}`,
        `M ${p[3].x} ${p[3].y} L ${p[5].x} ${p[5].y}`,
        `M ${p[4].x} ${p[4].y} L ${p[2].x} ${p[2].y}`,
      ];

      setLines(paths);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [mouseOffset]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setMouseOffset({
      x: (e.clientX - centerX) * 0.18,
      y: (e.clientY - centerY) * 0.18,
    });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto hidden h-[460px] w-full max-w-[460px] select-none items-center justify-center lg:flex"
      aria-label="Live Developer Technical System Diagram"
    >
      {/* Outer subtle glow */}
      <div className="absolute inset-0 rounded-full bg-[var(--primary-blue)]/5 blur-3xl" />

      {/* Concentric Circle 1: Outer boundary */}
      <div className="absolute inset-4 rounded-full border border-[var(--border-color)]/80 tech-orbit" />

      {/* Concentric Circle 2: Middle Dashed Orbit */}
      <div className="absolute inset-16 rounded-full border border-dashed border-[var(--primary-blue)]/35 tech-orbit-reverse" />

      {/* Concentric Circle 3: Inner guide */}
      <div className="absolute inset-28 rounded-full border border-[var(--border-color)]/50" />

      {/* Four Orbiting Glowing colored dots from the original image */}
      <div className="absolute left-[16%] top-[20%] h-3 w-3 rounded-full bg-[#1D6FE8] shadow-[0_0_20px_#1D6FE8] tech-node" />
      <div className="absolute right-[18%] top-[24%] h-2.5 w-2.5 rounded-full bg-[#8B5CF6] shadow-[0_0_18px_#8B5CF6] tech-node" />
      <div className="absolute bottom-[22%] left-[16%] h-2.5 w-2.5 rounded-full bg-[#1D6FE8] shadow-[0_0_18px_#1D6FE8] tech-node" />
      <div className="absolute bottom-[19%] right-[20%] h-3 w-3 rounded-full bg-[#8B5CF6] shadow-[0_0_20px_#8B5CF6] tech-node" />

      {/* Live Constellation SVG: Moving Lines & Nodes */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 460 460"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1D6FE8" stop-opacity="0.7" />
            <stop offset="50%" stop-color="#3B82F6" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0.7" />
          </linearGradient>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic Connected Lines */}
        {lines.map((d, index) => (
          <path
            key={index}
            d={d}
            stroke="url(#lineGrad)"
            strokeWidth="1.25"
            strokeLinecap="round"
            className="transition-all duration-75"
          />
        ))}

        {/* Dynamic Nodes */}
        {nodePositions.map((pos, idx) => (
          <g key={idx}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r={6}
              fill={pos.color}
              fillOpacity={0.25}
            />
            <circle
              cx={pos.x}
              cy={pos.y}
              r={3.5}
              fill={pos.color}
              filter="url(#nodeGlow)"
            />
          </g>
        ))}
      </svg>

      {/* Central Glassmorphic Squircle with Monogram */}
      <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-[32px] border border-[var(--primary-blue)]/50 bg-[var(--bg-card)]/90 shadow-[0_0_60px_rgba(29,111,232,0.28)] backdrop-blur-xl transition-transform duration-300 hover:scale-105">
        <div className="text-center">
          <div className="text-3xl font-extrabold text-[var(--primary-blue)] tracking-wider">
            IH
          </div>
          <div className="mt-1 text-[9px] font-bold tracking-[0.25em] text-[var(--text-secondary)]">
            PRODUCT
          </div>
        </div>
      </div>

      {/* 4 Cardinal Tags (FLUTTER, UI/UX, PRODUCT, CODE) */}
      {[
        { label: "FLUTTER", pos: "top-[4%] left-1/2 -translate-x-1/2" },
        { label: "UI / UX", pos: "right-[1%] top-1/2 -translate-y-1/2" },
        { label: "PRODUCT", pos: "bottom-[4%] left-1/2 -translate-x-1/2" },
        { label: "CODE", pos: "left-[1%] top-1/2 -translate-y-1/2" },
      ].map(({ label, pos }) => (
        <div
          key={label}
          className={`absolute ${pos} rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]/95 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[var(--text-primary)] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)]`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
