"use client";

import { motion } from "framer-motion";
import { Download, FolderGit2, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/effects/magnetic";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { NeuralFieldLazy } from "@/components/three/neural-field-lazy";
import { RotatingRoles } from "@/components/rotating-roles";
import { PROFILE, SOCIAL } from "@/lib/data/profile";

const NAME_WORDS = PROFILE.name.split(" ");
const smoothEase = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const word = {
  hidden: { y: 60, opacity: 0, filter: "blur(10px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <AuroraBackground />
      <div className="absolute inset-0 -z-[1] opacity-70">
        <NeuralFieldLazy />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
          </span>
          {PROFILE.location} · Data Scientist @ Trackleo Technologies
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-x-4 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl"
        >
          {NAME_WORDS.map((w) => (
            <motion.span key={w} variants={word} className="text-gradient text-glow">
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-5"
        >
          <RotatingRoles roles={PROFILE.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I turn data into insights — and insights into AI systems that actually ship. Building
          across LLMs, agentic AI, computer vision, and full-stack web development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <Button asChild size="lg" className="group rounded-full px-6 glow-blue">
              <a href="#projects">
                <FolderGit2 className="size-4 transition-transform group-hover:scale-110" />
                View Projects
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 px-6">
              <a href={PROFILE.resumeUrl} download>
                <Download className="size-4" />
                Resume
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="ghost" className="rounded-full px-5">
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="size-4" />
                GitHub
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="ghost" className="rounded-full px-5">
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="size-4" />
      </motion.a>
    </section>
  );
}
