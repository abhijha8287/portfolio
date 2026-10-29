import type { Metadata } from "next";
import { Footer, Header, external, linkClass } from "@/components/site-chrome";
import { withBasePath } from "@/lib/base-path";
import { CERTIFICATIONS, type Certification } from "@/lib/data/education";

export const metadata: Metadata = {
  title: "Certificates - Abhishek Jha",
  description: "Licences and certifications earned by Abhishek Jha from IIT Madras, Codebasics, LinkedIn Learning and hackathons.",
};

const ISSUERS: Certification["issuer"][] = ["IIT Madras", "Codebasics", "LinkedIn Learning", "Hackathons"];

function CertificateRow({ cert }: { cert: Certification }) {
  return (
    <li className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
      <p className="font-mono text-xs leading-6 text-muted">{cert.date}</p>
      <div>
        <h3 className="font-medium">
          {cert.credentialUrl ? (
            <a href={cert.credentialUrl} {...external} className={linkClass}>
              {cert.title} ↗
            </a>
          ) : (
            cert.title
          )}
        </h3>
        {cert.skills?.length ? <p className="mt-1 text-sm text-muted">{cert.skills.join(", ")}</p> : null}
        {cert.credentialId ? (
          <p className="mt-1 font-mono text-xs text-muted">Credential ID {cert.credentialId}</p>
        ) : null}
      </div>
    </li>
  );
}

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5">
        <section className="pb-12 pt-16 sm:pt-24">
          <p className="font-mono text-sm text-muted">Licences &amp; certifications</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Certificates</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            {CERTIFICATIONS.length} certificates earned alongside the four-year BS in Data Science and Applications at IIT
            Madras.
          </p>
        </section>

        {ISSUERS.map((issuer) => {
          const certs = CERTIFICATIONS.filter((c) => c.issuer === issuer);
          if (!certs.length) return null;
          return (
            <section key={issuer} className="border-t border-line py-12">
              <h2 className="mb-6 font-mono text-sm text-muted">
                {issuer} <span className="text-line">·</span> {certs.length}
              </h2>
              <ul className="space-y-6">
                {certs.map((cert) => (
                  <CertificateRow key={cert.id} cert={cert} />
                ))}
              </ul>
            </section>
          );
        })}

        <p className="border-t border-line py-10 text-sm">
          <a href={withBasePath("/")} className={linkClass}>
            ← Back to home
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
