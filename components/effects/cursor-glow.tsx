"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 240}px, ${y - 240}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[480px] w-[480px] rounded-full opacity-50 mix-blend-screen will-change-transform md:block"
      style={{
        background:
          "radial-gradient(circle at center, color-mix(in oklch, var(--neon-blue) 30%, transparent) 0%, color-mix(in oklch, var(--neon-purple) 14%, transparent) 45%, transparent 70%)",
      }}
    />
  );
}
