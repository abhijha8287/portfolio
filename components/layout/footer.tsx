import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE, SOCIAL } from "@/lib/data/profile";
import { NAV_LINKS } from "@/lib/data/nav";

const SOCIALS = [
  { href: SOCIAL.github, label: "GitHub", icon: FaGithub },
  { href: SOCIAL.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: SOCIAL.email, label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <a href="#home" className="flex items-center gap-2 text-base font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan text-xs font-bold text-black">
                {PROFILE.initials}
              </span>
              {PROFILE.name}
            </a>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Building production AI systems across LLMs, agentic AI, computer vision, and full-stack web development.
              Currently shipping at Trackleo Technologies.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-neon-blue/50 hover:text-foreground hover:shadow-[0_0_20px_-4px_var(--neon-blue)]"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Navigate
              </p>
              <ul className="mt-3 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Connect
              </p>
              <ul className="mt-3 space-y-2.5">
                {SOCIALS.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Resume
              </p>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <a
                    href={PROFILE.resumeUrl}
                    download
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Download PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {PROFILE.name}. Built with Next.js, TypeScript &amp; Tailwind.
          </p>
          <p className="italic">&ldquo;The best way to predict the future is to build it.&rdquo;</p>
        </div>
      </div>
    </footer>
  );
}
