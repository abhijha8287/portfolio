import type { Metadata } from "next";
import { Footer, Header, external, linkClass } from "@/components/site-chrome";
import { withBasePath } from "@/lib/base-path";
import { CERTIFICATIONS, type Certification } from "@/lib/data/education";

export const metadata: Metadata = {
  title: "Certificates - Abhishek Jha",
  description: "Licences and certifications earned by Abhishek Jha from IIT Madras and Codebasics.",
};

const TYPE_LABEL: Record<Certification["type"], string> = {
  degree: "Degree",
  diploma: "Diploma",
  certificate: "Certificate",
  professional: "Course certificate",
};

// The degree is shown under Education on the home page, not here.
const certificates = CERTIFICATIONS.filter((c) => c.type !== "degree");
const issuers = [...new Set(certificates.map((c) => c.issuer))];

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5">
        <section className="pb-12 pt-16 sm:pt-24">
          <p className="font-mono text-sm text-muted">Licences &amp; certifications</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Certificates</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Earned alongside the four-year BS in Data Science and Applications at IIT Madras.
          </p>
        </section>

        {issuers.map((issuer) => (
          <section key={issuer} className="border-t border-line py-12">
            <h2 className="mb-6 font-mono text-sm text-muted">{issuer}</h2>
            <ul className="space-y-5">
              {certificates
                .filter((c) => c.issuer === issuer)
                .map((c) => (
                  <li key={c.id} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                    <p className="font-mono text-xs leading-6 text-muted">{c.date ?? TYPE_LABEL[c.type]}</p>
                    <div>
                      <h3 className="font-medium">
                        {c.credentialUrl ? (
                          <a href={c.credentialUrl} {...external} className={linkClass}>
                            {c.title} ↗
                          </a>
                        ) : (
                          c.title
                        )}
                      </h3>
                      {c.date ? <p className="mt-1 text-sm text-muted">{TYPE_LABEL[c.type]}</p> : null}
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))}

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
