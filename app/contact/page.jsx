import Image from "next/image"
import ContactForm from "../../components/contact/ContactForm"

export const metadata = {
  title: "Contact Konarr",
  description: "Start a project conversation with Konarr.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    url: "https://konarrtech.shop/contact"
  }
}

const contactDetails = [
  { label: "Headquarters", value: "Ontario, Canada" },
  { label: "Primary Inbox", value: "Konarr2025@hotmail.com" },
  { label: "Preferred Response Window", value: "Within 1-2 business days" },
  { label: "Engagement Types", value: "Consulting, prototyping, and full delivery" }
]

export default function ContactPage() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="k-chip">Contact</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">Bring us your technical challenge.</h1>
          <p className="mt-5 text-base leading-relaxed text-konarr-muted md:text-lg">
            Share your timeline, constraints, and goals. We will assess fit, propose a working model,
            and map a practical path from concept to execution.
          </p>

          <div className="mt-8 space-y-4">
            {contactDetails.map((item) => (
              <article key={item.label} className="rounded-2xl border border-konarr-line bg-konarr-panelAlt p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-konarr-muted">{item.label}</p>
                <p className="mt-1 text-sm text-konarr-text">{item.value}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-konarr-line bg-konarr-panelAlt">
            <Image
              src="/assets/konarr-logotype.png"
              alt="Konarr white logo"
              width={960}
              height={560}
              className="h-44 w-full object-cover"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
