import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-blue shadow-[0_0_12px_var(--neon-blue)]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[2.9rem]">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
