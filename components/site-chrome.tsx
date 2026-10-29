import { withBasePath } from "@/lib/base-path";
import { SOCIAL } from "@/lib/data/profile";

// Shared header, footer and section wrapper for every page.
// Nav links carry the base path so they work from any page on GitHub Pages.
const NAV = [
  { href: "/#experience", label: "Experience", mobile: false },
  { href: "/#projects", label: "Projects", mobile: true },
  { href: "/#skills", label: "Skills", mobile: false },
  { href: "/certificates/", label: "Certificates", mobile: true },
  { href: "/#contact", label: "Contact", mobile: true },
];

// Links that leave the site open in a new tab; links within the site stay in place.
export const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export const linkClass =
  "underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-14 sm:py-16">
      <h2 className="mb-8 font-mono text-sm text-muted">{title}</h2>
      {children}
    </section>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4">
        <a href={withBasePath("/")} className="font-mono text-sm font-medium">
          ~/abhishek
        </a>
        <nav className="flex gap-3.5 text-[13px] text-muted sm:gap-6 sm:text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={withBasePath(item.href)}
              className={`whitespace-nowrap transition-colors hover:text-fg ${item.mobile ? "" : "hidden sm:inline"}`}
            >
              {item.label}
            </a>
          ))}
          <a href={SOCIAL.github} {...external} className="hidden whitespace-nowrap transition-colors hover:text-fg sm:inline">
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-3xl justify-between border-t border-line px-5 py-8 font-mono text-xs text-muted">
      <span>~/abhishek</span>
      <span>© {new Date().getFullYear()} Abhishek Jha</span>
    </footer>
  );
}
