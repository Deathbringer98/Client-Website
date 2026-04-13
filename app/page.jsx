import Image from "next/image"
import Link from "next/link"
import { divisions, process, services, stats } from "../lib/konarr-content"

const heroImage =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80"

export default function HomePage() {
  return (
    <>
      <section className="section-shell pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal">
            <span className="k-chip">Calgary Born. Global Delivery.</span>
            <h1 className="k-title mt-6 font-[var(--font-title)]">
              We engineer products that move from concept to performance.
            </h1>
            <p className="k-subtitle">
              Konarr is a parent brand powering specialized divisions in motorsports engineering, additive manufacturing,
              software-hardware systems, and applied research. We collaborate with teams that need speed without sacrificing rigor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-konarr-accent px-6 py-3 text-sm font-semibold text-konarr-base transition hover:opacity-90"
              >
                Explore Capabilities
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-konarr-line px-6 py-3 text-sm font-semibold text-konarr-text transition hover:border-konarr-accent hover:text-konarr-accent"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>

          <div className="reveal rounded-3xl border border-konarr-line bg-konarr-panel p-3 shadow-glow [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-2xl">
              <Image src={heroImage} alt="Konarr performance engineering" width={1200} height={800} className="h-[420px] w-full object-cover" priority />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-konarr-base to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.16em] text-konarr-muted">Operational Focus</p>
                <p className="mt-2 text-lg font-semibold">Integrated design, testing, and deployment under one execution model.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <article
              key={item.label}
              className="reveal rounded-2xl border border-konarr-line bg-konarr-panelAlt p-5"
              style={{ animationDelay: `${160 + index * 90}ms` }}
            >
              <p className="text-2xl font-semibold text-konarr-accent">{item.value}</p>
              <p className="mt-1 text-sm text-konarr-muted">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-8 md:pb-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="k-chip">Divisions</span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Specialized execution, unified standards.</h2>
          </div>
          <Link href="/about" className="text-sm font-semibold text-konarr-accent hover:underline">
            Learn how Konarr operates
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {divisions.map((division) => (
            <article key={division.name} className="k-card">
              <p className="text-xs uppercase tracking-[0.15em] text-konarr-signal">{division.tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-konarr-text">{division.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-konarr-muted">{division.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-konarr-text">
                {division.outcomes.map((outcome) => (
                  <li key={outcome}>- {outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="k-card">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-konarr-muted">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-konarr-text">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20 pt-4 md:pb-28">
        <div className="k-card">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="k-chip">Delivery Model</span>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Built for teams that cannot afford guesswork.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="rounded-2xl border border-konarr-line/80 bg-konarr-base/60 p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-konarr-accent">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-konarr-muted">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-konarr-signal px-6 py-3 text-sm font-semibold text-konarr-base transition hover:opacity-90"
            >
              Request Technical Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
