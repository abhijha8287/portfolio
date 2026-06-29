import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
const otherProjects = OTHER_PROJECTS.slice(0, 12);

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

function AccentPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`glass-card rounded-2xl border-white/10 bg-white/[0.035] ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-30" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.16),transparent_58%)]" />
      <Hero />

      <SectionShell id="about">
        <SectionHeading
          eyebrow="About"
          title="I build AI systems with product taste and deployment discipline."
          description="My work sits at the intersection of data science, AI engineering, web development, and production operations: models, APIs, interfaces, automation, and shipping."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <AccentPanel className="h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-neon-blue/10 text-neon-cyan">
                  <BrainCircuit className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Professional summary</p>
                  <h3 className="text-2xl font-semibold">IIT Madras AI engineer building real products.</h3>
                </div>
              </div>
              <div className="mt-7 space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {PROFILE.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {PROFILE.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-3xl font-semibold text-gradient">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AccentPanel>
          </Reveal>

          <Reveal delay={0.1}>
            <AccentPanel className="h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-neon-cyan/10 text-neon-cyan">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="text-2xl font-semibold">Currently building in</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {PROFILE.focusAreas.map((area) => (
                  <Badge key={area} variant="outline" className="border-white/10 bg-white/[0.04] px-3 py-2">
                    {area}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-neon-blue/20 bg-neon-blue/5 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-neon-cyan">North star</p>
                <p className="mt-3 text-sm leading-7 text-foreground/85">{PROFILE.goals.statement}</p>
              </div>
            </AccentPanel>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="skills">
        <SectionHeading
          eyebrow="Capabilities"
          title="A complete toolkit for AI products."
          description="From model development and RAG orchestration to backend APIs, interactive dashboards, MLOps, and GitHub Pages-ready frontends."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredSkills.map((skill, index) => (
            <Reveal key={skill.id} delay={index * 0.035}>
              <Card className="glass-card h-full border-white/10 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-base">{skill.label}</CardTitle>
                    <span className="rounded-full border border-white/10 px-2 py-1 text-xs text-neon-cyan">{skill.level}%</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.slice(0, 8).map((item) => (
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

        <Reveal className="mt-8">
          <AccentPanel className="p-5">
            <p className="text-sm font-medium text-foreground">Domain expertise</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {DOMAIN_EXPERTISE.map((domain) => (
                <Badge key={domain} variant="outline" className="border-neon-blue/25 bg-neon-blue/5">
                  {domain}
                </Badge>
              ))}
            </div>
          </AccentPanel>
        </Reveal>
      </SectionShell>

      <SectionShell id="projects">
        <SectionHeading
          eyebrow="Featured Projects"
          title="AI-first products across healthcare, agents, vision, and decision intelligence."
          description="Selected builds that show the range: multi-agent production workflows, explainable healthcare AI, browser-native decision support, computer vision, and full-stack automation."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectShowcase.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.035}>
              <Card className="glass-card group h-full border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/35">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="mb-4 border-white/10 bg-white/[0.04]">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.period ? <p className="mt-1 text-xs text-muted-foreground">{project.period}</p> : null}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} link`}
                      className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors group-hover:border-neon-cyan/40 group-hover:text-foreground"
                    >
                      {project.githubConfirmed ? <FaGithub className="size-4" /> : <ArrowUpRight className="size-4" />}
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-neon-cyan">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                  {project.outcome ? (
                    <div className="mt-5 rounded-2xl border border-neon-cyan/20 bg-neon-cyan/5 p-4">
                      <p className="flex items-start gap-2 text-sm leading-6 text-foreground/85">
                        <Rocket className="mt-0.5 size-4 shrink-0 text-neon-cyan" />
                        {project.outcome}
                      </p>
                    </div>
                  ) : null}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.highlights.slice(0, 5).map((highlight) => (
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

        <Reveal className="mt-8">
          <AccentPanel className="p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">More builds</p>
                <p className="mt-1 text-sm text-muted-foreground">Additional projects across MLOps, civic tech, education, finance, and web systems.</p>
              </div>
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-neon-cyan">
                See GitHub
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-neon-blue/35 hover:bg-white/[0.06]"
                >
                  <p className="font-medium">{project.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{project.tagline}</p>
                </a>
              ))}
            </div>
          </AccentPanel>
        </Reveal>
      </SectionShell>

      <SectionShell id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of shipped AI systems."
          description="Hands-on work across healthcare AI, computer vision, medical imaging automation, AI product engineering, and production platform integration."
        />

        <div className="mt-14 space-y-5">
          {EXPERIENCE.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.05}>
              <Card className="glass-card border-white/10 bg-white/[0.035]">
                <CardContent className="p-6 sm:p-7">
                  <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant={entry.current ? "default" : "outline"}>
                          {entry.current ? "Current" : entry.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{entry.period}</span>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold">{entry.role}</h3>
                      <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <BriefcaseBusiness className="size-4" />
                        {entry.company}
                        <span className="text-white/20">/</span>
                        <MapPin className="size-4" />
                        {entry.location}
                      </p>
                      <p className="mt-5 text-sm leading-7 text-muted-foreground">{entry.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {entry.skills.slice(0, 8).map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-white/[0.06] text-muted-foreground">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-3">
                      {entry.highlights.map((highlight) => (
                        <p key={highlight} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-muted-foreground">
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
          title="IIT Madras foundation, production AI specialization."
          description="A data science academic base strengthened by hands-on machine learning, NLP, generative AI, agentic AI, Python, SQL, and deployment work."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {EDUCATION.map((entry) => (
            <Reveal key={entry.id}>
              <AccentPanel className="h-full p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-neon-blue/10 text-neon-cyan">
                    <GraduationCap className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{entry.period}</p>
                    <h3 className="text-2xl font-semibold">{entry.credential}</h3>
                  </div>
                </div>
                <p className="mt-5 font-medium text-neon-cyan">{entry.institution}</p>
                <p className="mt-2 text-sm text-muted-foreground">{entry.location}</p>
                {entry.description ? <p className="mt-5 text-sm leading-7 text-muted-foreground">{entry.description}</p> : null}
              </AccentPanel>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <AccentPanel className="h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-neon-cyan/10 text-neon-cyan">
                  <BadgeCheck className="size-5" />
                </span>
                <h3 className="text-2xl font-semibold">Certifications & focus topics</h3>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {CERTIFICATIONS.map((certification) => (
                  <div key={certification.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-medium">{certification.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {certification.issuer}
                      {certification.date ? ` / ${certification.date}` : ""}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {PROFESSIONAL_TOPICS.map((topic) => (
                  <Badge key={topic} variant="outline" className="border-white/10 bg-white/[0.04]">
                    {topic}
                  </Badge>
                ))}
              </div>
            </AccentPanel>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id="contact" className="pb-12">
        <Reveal>
          <AccentPanel className="overflow-hidden p-8 text-center sm:p-12">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-neon-blue/10 text-neon-cyan">
              <Target className="size-7" />
            </div>
            <Badge variant="outline" className="mt-6 border-neon-cyan/30 bg-neon-cyan/5">
              Open to AI engineering, web AI, and product collaborations
            </Badge>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Have an AI product, data problem, or agentic workflow worth building?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Always up for talking AI, web development, machine learning, medical imaging, or the next thing worth shipping.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              <a
                href={SOCIAL.email}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
              >
                <Mail className="size-4" />
                Email me
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 px-5 text-sm font-medium transition-colors hover:bg-white/[0.06]"
              >
                <FaGithub className="size-4" />
                GitHub
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 px-5 text-sm font-medium transition-colors hover:bg-white/[0.06]"
              >
                <FaLinkedin className="size-4" />
                LinkedIn
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-left md:grid-cols-2">
              {PROFILE.goals.priorities.map((priority) => (
                <p key={priority} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground">
                  <Code2 className="mt-0.5 size-4 shrink-0 text-neon-cyan" />
                  {priority}
                </p>
              ))}
            </div>
          </AccentPanel>
        </Reveal>
      </SectionShell>
    </main>
  );
}
