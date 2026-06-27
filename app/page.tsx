import type { ReactNode } from "react";
import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, Mail, MapPin, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CERTIFICATIONS, EDUCATION, PROFESSIONAL_TOPICS } from "@/lib/data/education";
import { EXPERIENCE } from "@/lib/data/experience";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/data/projects";
import { DOMAIN_EXPERTISE, SKILL_CATEGORIES } from "@/lib/data/skills";
import { PROFILE, SOCIAL } from "@/lib/data/profile";

const featuredSkills = SKILL_CATEGORIES.slice(0, 8);
const projectShowcase = FEATURED_PROJECTS.slice(0, 9);
const otherProjects = OTHER_PROJECTS.slice(0, 6);

function SectionShell({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-24 ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-35" />
      <Hero />

      <SectionShell id="about">
        <SectionHeading
          eyebrow="About"
          title="Production AI builder with a full-stack spine."
          description="I work where data science, agentic systems, and useful product engineering meet: from medical imaging and RAG platforms to multi-agent workflows and polished web apps."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Card className="glass-card h-full border-white/10 bg-white/[0.035]">
              <CardHeader>
                <CardTitle className="text-2xl">What I’m building toward</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {PROFILE.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="glass-card h-full border-white/10 bg-white/[0.035]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Sparkles className="size-5 text-neon-cyan" />
                  Focus areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {PROFILE.focusAreas.map((area) => (
                    <Badge key={area} variant="outline" className="border-white/10 bg-white/[0.04] py-2">
                      {area}
                    </Badge>
                  ))}
                </div>
                <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Goal</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                    {PROFILE.goals.statement}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="skills">
        <SectionHeading
          eyebrow="Skills"
          title="AI, ML, data, and deployment in one toolkit."
          description="A practical stack for moving ideas from notebook to product: models, APIs, vector systems, interfaces, observability, and cloud deployment."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredSkills.map((skill, index) => (
            <Reveal key={skill.id} delay={index * 0.035}>
              <Card className="glass-card h-full border-white/10 bg-white/[0.03]">
                <CardHeader>
                  <CardTitle className="text-base">{skill.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.slice(0, 7).map((item) => (
                      <Badge key={item} variant="secondary" className="bg-white/[0.06] text-muted-foreground">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="glass rounded-2xl p-5">
            <p className="text-sm font-medium text-foreground">Domain expertise</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {DOMAIN_EXPERTISE.map((domain) => (
                <Badge key={domain} variant="outline" className="border-neon-blue/25 bg-neon-blue/5">
                  {domain}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell id="projects">
        <SectionHeading
          eyebrow="Projects"
          title="A lab of applied AI products."
          description="Selected builds across multi-agent systems, healthcare intelligence, decision tools, finance, education, and scientific workflows."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectShowcase.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.035}>
              <Card className="glass-card h-full border-white/10 bg-white/[0.035]">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="mb-4 border-white/10 bg-white/[0.04]">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {project.githubConfirmed ? <FaGithub className="size-4" /> : <ArrowUpRight className="size-4" />}
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm font-medium text-neon-cyan">{project.tagline}</p>
                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.highlights.slice(0, 4).map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="bg-white/[0.06] text-muted-foreground">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {otherProjects.length > 0 ? (
          <Reveal className="mt-8">
            <div className="glass rounded-2xl p-5">
              <p className="text-sm font-medium text-foreground">More builds</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project) => (
                  <a
                    key={project.id}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:bg-white/[0.06]"
                  >
                    <p className="font-medium">{project.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}
      </SectionShell>

      <SectionShell id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Shipping real systems across AI roles."
          description="A timeline of production-minded work spanning medical imaging, multi-agent tooling, analytics, and end-to-end AI product engineering."
        />

        <div className="mt-14 space-y-5">
          {EXPERIENCE.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.05}>
              <Card className="glass-card border-white/10 bg-white/[0.035]">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant={entry.current ? "default" : "outline"}>
                          {entry.current ? "Current" : entry.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{entry.period}</span>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold">{entry.role}</h3>
                      <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <BriefcaseBusiness className="size-4" />
                        {entry.company}
                        <span className="text-white/20">/</span>
                        <MapPin className="size-4" />
                        {entry.location}
                      </p>
                      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        {entry.summary}
                      </p>
                    </div>
                    <div className="grid min-w-72 gap-2">
                      {entry.highlights.slice(0, 4).map((highlight) => (
                        <p key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-neon-cyan" />
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="certifications">
        <SectionHeading
          eyebrow="Education"
          title="Academic base, professional specialization."
          description="Grounded in IIT Madras data science coursework and strengthened through focused AI, ML, NLP, and engineering practice."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {EDUCATION.map((entry) => (
            <Reveal key={entry.id}>
              <Card className="glass-card h-full border-white/10 bg-white/[0.035]">
                <CardHeader>
                  <CardTitle className="text-2xl">{entry.credential}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-neon-cyan">{entry.institution}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {entry.period} · {entry.location}
                  </p>
                  {entry.description ? (
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
                  ) : null}
                </CardContent>
              </Card>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <Card className="glass-card h-full border-white/10 bg-white/[0.035]">
              <CardHeader>
                <CardTitle>Certifications & topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {CERTIFICATIONS.map((certification) => (
                    <div key={certification.id} className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                      <p className="font-medium">{certification.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {certification.issuer}
                        {certification.date ? ` · ${certification.date}` : ""}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {PROFESSIONAL_TOPICS.map((topic) => (
                    <Badge key={topic} variant="outline" className="border-white/10 bg-white/[0.04]">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="contact" className="pb-10">
        <Reveal>
          <div className="glass-card overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-8 text-center sm:p-12">
            <Badge variant="outline" className="border-neon-cyan/30 bg-neon-cyan/5">
              Contact
            </Badge>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Have an AI product, data problem, or agentic workflow worth building?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              I’m open to ambitious AI engineering work, collaborations, and product builds that need both model sense and shipping discipline.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={SOCIAL.email}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
              >
                <Mail className="size-4" />
                Email me
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-5 text-sm font-medium transition-colors hover:bg-white/[0.06]"
              >
                LinkedIn
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </main>
  );
}
