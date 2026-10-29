import { EDUCATION } from "@/lib/data/education";
import { EXPERIENCE } from "@/lib/data/experience";
import { PROFILE, SOCIAL } from "@/lib/data/profile";
import { CASE_STUDIES, COMPETITIONS, HERO, PROJECT_CARDS, SKILL_GROUPS } from "@/lib/data/site";

const NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// Links that leave the page open in a new tab; in-page section links (#...) stay in place.
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const linkClass = "underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-14 sm:py-16">
      <h2 className="mb-8 font-mono text-sm text-muted">{title}</h2>
      {children}
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="font-mono text-sm font-medium">
          ~/abhishek
        </a>
        <nav className="flex gap-3.5 text-[13px] text-muted sm:gap-6 sm:text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap transition-colors hover:text-fg ${item.href === "#skills" ? "hidden sm:inline" : ""}`}
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

function Hero() {
  return (
    <section id="top" className="pb-14 pt-16 sm:pb-16 sm:pt-24">
      <p className="font-mono text-sm text-muted">{HERO.role}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{HERO.greeting}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed">{HERO.intro}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">{HERO.context}</p>
      <p className="mt-6 inline-flex items-center gap-2 text-sm">
        <span className="size-2 rounded-full bg-accent" aria-hidden />
        {HERO.availability}
      </p>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
        {HERO.stats.map((stat) => (
          <div key={stat.label} className="bg-bg p-4">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-xl font-semibold">{stat.value}</dd>
            <dd className="mt-1 text-xs leading-snug text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        <a href="#projects" className="rounded-md bg-fg px-4 py-2 font-medium text-bg transition-opacity hover:opacity-85">
          View projects
        </a>
        <a href="#contact" className="rounded-md border border-line px-4 py-2 font-medium transition-colors hover:border-fg">
          Get in touch
        </a>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {EXPERIENCE.map((job) => (
          <li key={job.id} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
            <p className="font-mono text-xs leading-6 text-muted">{job.period}</p>
            <div>
              <h3 className="font-medium">
                {job.role} <span className="text-muted">·</span>{" "}
                {job.companyUrl ? (
                  <a href={job.companyUrl} {...external} className={linkClass}>
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {job.highlights.slice(0, 3).map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden>–</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-xs text-muted">{job.skills.slice(0, 6).join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Selected work">
      <div className="space-y-6">
        {CASE_STUDIES.map((study) => (
          <article key={study.title} className="rounded-lg border border-line p-5 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">{study.title}</h3>
              <a href={study.href} {...external} className={`text-sm ${linkClass}`}>
                {study.linkLabel} ↗
              </a>
            </div>
            <p className="mt-2 font-mono text-xs text-muted">{study.metrics.join(" · ")}</p>
            <dl className="mt-6 grid gap-5 text-sm leading-relaxed sm:grid-cols-3">
              {[
                ["The challenge", study.challenge],
                ["What I built", study.built],
                ["The impact", study.impact],
              ].map(([label, text]) => (
                <div key={label}>
                  <dt className="font-medium">{label}</dt>
                  <dd className="mt-1.5 text-muted">{text}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <li key={tech} className="rounded bg-surface px-2 py-1 font-mono text-xs text-muted">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {PROJECT_CARDS.map((project) => (
          <a
            key={project.title}
            href={project.href}
            {...external}
            className="group rounded-lg border border-line p-5 transition-colors hover:border-muted"
          >
            <h3 className="font-medium">
              {project.title} <span className="text-muted transition-colors group-hover:text-accent">↗</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
            <p className="mt-3 font-mono text-xs text-muted">{project.stack}</p>
          </a>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted">
        More on{" "}
        <a href={SOCIAL.github} {...external} className={linkClass}>
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}

function Competitions() {
  return (
    <Section id="competitions" title="Competitions">
      <ul className="space-y-6">
        {COMPETITIONS.map((item) => (
          <li key={item.title} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
            <p className="font-mono text-sm font-medium text-accent">{item.result}</p>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Skills() {
  const school = EDUCATION[0];
  return (
    <Section id="skills" title="Skills & education">
      <dl className="space-y-5">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
            <dt className="text-sm font-medium">{group.label}</dt>
            <dd className="text-sm leading-relaxed text-muted">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
        <p className="font-mono text-xs leading-6 text-muted">{school.period}</p>
        <div>
          <h3 className="font-medium">
            {school.credential} <span className="text-muted">·</span> {school.institution}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{school.description}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            S grade (highest) in Machine Learning Practice and Modern Application Development I &amp; II. Diplomas in
            Programming and in Data Science.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const links = [
    { href: SOCIAL.email, label: PROFILE.email },
    { href: SOCIAL.linkedin, label: "LinkedIn" },
    { href: SOCIAL.github, label: "GitHub" },
    { href: PROFILE.resumeUrl, label: "Resume (PDF)" },
  ];
  return (
    <Section id="contact" title="Contact">
      <h3 className="text-2xl font-semibold tracking-tight">Let&apos;s build something.</h3>
      <p className="mt-3 max-w-xl leading-relaxed text-muted">
        I&apos;m looking for ML and AI engineering roles. The fastest way to reach me is email.
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} {...(link.href.startsWith("mailto:") ? {} : external)} className={linkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5">
        <Hero />
        <Experience />
        <Projects />
        <Competitions />
        <Skills />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-3xl justify-between border-t border-line px-5 py-8 font-mono text-xs text-muted">
        <span>~/abhishek</span>
        <span>© {new Date().getFullYear()} Abhishek Jha</span>
      </footer>
    </>
  );
}
