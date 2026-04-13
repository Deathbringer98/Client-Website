import { divisions, services } from "../../lib/konarr-content"

export const metadata = {
  title: "Konarr Services",
  description: "Explore Konarr divisions, service lines, and product delivery capabilities."
}

const offerings = [
  {
    name: "Race Engineering Packages",
    detail:
      "Aero optimization, telemetry capture, and lightweight component design for motorsports teams seeking repeatable gains.",
    fit: "Best for: Competitive motorsports teams"
  },
  {
    name: "Custom CAD + Additive Manufacturing",
    detail:
      "Concept-to-print workflow for fixtures, enclosures, branded artifacts, and functional prototypes with fast revision loops.",
    fit: "Best for: Product teams and startup hardware builders"
  },
  {
    name: "Embedded + Product Software",
    detail:
      "Firmware development, data pipelines, and front-end interfaces that unify physical systems with digital visibility.",
    fit: "Best for: IoT and connected product initiatives"
  },
  {
    name: "Rapid R&D Sprints",
    detail:
      "Short-duration technical investigations to test feasibility, benchmark options, and derisk roadmap decisions.",
    fit: "Best for: Innovation teams validating high-risk ideas"
  }
]

export default function ServicesPage() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="max-w-4xl">
        <span className="k-chip">Services + Products</span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">Capabilities built for practical outcomes.</h1>
        <p className="mt-5 text-base leading-relaxed text-konarr-muted md:text-lg">
          Konarr provides modular service lines that can be deployed independently or combined into full lifecycle engagements.
          We structure each package around measurable milestones and deployment readiness.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {offerings.map((offering) => (
          <article key={offering.name} className="k-card">
            <h2 className="text-xl font-semibold">{offering.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-konarr-muted">{offering.detail}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-konarr-signal">{offering.fit}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-konarr-line bg-konarr-panelAlt p-8">
        <h2 className="text-2xl font-semibold md:text-3xl">Division breakdown</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {divisions.map((division) => (
            <article key={division.name} className="rounded-2xl border border-konarr-line bg-konarr-panel p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-konarr-accent">{division.tag}</p>
              <h3 className="mt-2 text-xl font-semibold">{division.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-konarr-muted">{division.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-konarr-text">
                {division.outcomes.map((outcome) => (
                  <li key={outcome}>- {outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
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
  )
}
