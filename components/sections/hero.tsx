"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, FolderGit2, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/effects/magnetic";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { NeuralFieldLazy } from "@/components/three/neural-field-lazy";
import { RotatingRoles } from "@/components/rotating-roles";
import { PROFILE, SOCIAL } from "@/lib/data/profile";

const smoothEase = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = {
  hidden: { y: 28, opacity: 0, filter: "blur(8px)" },
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
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pt-28 pb-16 sm:px-6"
    >
      <AuroraBackground />
      <div className="absolute inset-0 -z-[1] opacity-60">
        <NeuralFieldLazy />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(96,165,250,0.18),transparent_34%),linear-gradient(to_bottom,transparent,transparent_58%,var(--background))]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={false}
          animate="show"
          className="min-w-0"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp} className="flex min-w-0 flex-wrap items-center gap-3">
            <Badge variant="outline" className="border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1.5 text-neon-cyan">
              Available for AI engineering work
            </Badge>
            <span className="inline-flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-neon-blue" />
              <span className="min-w-0 break-words">{PROFILE.location} / {PROFILE.secondaryLocation}</span>
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-7 max-w-full break-words text-xs font-medium uppercase leading-6 tracking-[0.12em] text-neon-cyan sm:text-sm sm:tracking-[0.28em]">
            {PROFILE.headline}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-full break-words text-4xl font-semibold leading-[1.03] tracking-tight text-foreground sm:max-w-3xl sm:text-6xl lg:text-7xl"
          >
            Building AI products that move from demo to deployment.
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6">
            <RotatingRoles roles={PROFILE.roles} />
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-full break-words text-sm leading-7 text-muted-foreground sm:max-w-2xl sm:text-lg">
            {PROFILE.shortPitch}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 grid w-full max-w-sm gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:items-center">
            <Magnetic className="w-full sm:w-auto">
              <Button asChild size="lg" className="w-full rounded-full px-6 glow-blue sm:w-auto">
                <a href="#projects">
                  <FolderGit2 className="size-4" />
                  View AI Projects
                </a>
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button asChild size="lg" variant="outline" className="w-full rounded-full border-white/15 px-6 sm:w-auto">
                <a href={PROFILE.resumeUrl} download>
                  <Download className="size-4" />
                  Download Resume
                </a>
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button asChild size="lg" variant="ghost" className="w-full rounded-full px-5 sm:w-auto">
                <a href={SOCIAL.email}>
                  <Mail className="size-4" />
                  Contact
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="size-4" />
              GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="size-4" />
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
              <Phone className="size-4" />
              {PROFILE.phone}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase, delay: 0.25 }}
          className="relative mx-auto min-w-0 w-full max-w-sm lg:ml-auto xl:max-w-md"
        >
          <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(circle,rgba(103,232,249,0.2),transparent_62%)] blur-2xl" />
          <div className="glass-card overflow-hidden rounded-3xl border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <Image
                src={PROFILE.avatar}
                alt={`${PROFILE.name} profile photo`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5">
                <p className="text-sm text-white/70">Currently</p>
                <p className="mt-1 text-xl font-semibold text-white">Data Scientist @ Trackleo Technologies</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {PROFILE.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-3 xl:p-4">
                  <p className="text-xl font-semibold text-gradient xl:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground xl:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href={SOCIAL.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Portfolio ready for GitHub Pages
              <ExternalLink className="size-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={false}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Explore</span>
        <ArrowDown className="size-4" />
      </motion.a>
    </section>
  );
}
