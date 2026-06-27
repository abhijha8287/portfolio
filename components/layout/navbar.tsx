"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/data/nav";
import { PROFILE } from "@/lib/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 flex justify-center transition-all duration-300 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-4 flex w-full max-w-4xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : "border border-transparent"
        }`}
      >
        <Link
          href="#home"
          className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan text-[11px] font-bold text-black">
            {PROFILE.initials}
          </span>
          <span className="hidden sm:inline">{PROFILE.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm" className="rounded-full">
            <a href={PROFILE.resumeUrl} download>
              <Download className="size-3.5" />
              Resume
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="rounded-full md:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass border-l border-white/10 bg-background/95">
            <SheetHeader>
              <SheetTitle>{PROFILE.name}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              <AnimatePresence>
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </AnimatePresence>
              <Button asChild className="mt-3 rounded-full">
                <a href={PROFILE.resumeUrl} download>
                  <Download className="size-3.5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </motion.nav>
    </header>
  );
}
