import Image from "next/image"
import { process } from "../../lib/konarr-content"

export const metadata = {
  title: "About Konarr",
  description: "Learn how Konarr operates across engineering, design, software, and R&D divisions.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    url: "https://konarrtech.shop/about"
  }
}

const principles = [
  {
    title: "Performance by Design",
    body: "Every decision traces back to measurable outcomes: speed, reliability, quality, and long-term maintainability."
  },
  {
    title: "Cross-Discipline Thinking",
    body: "Industrial design, mechanical engineering, software, and operations are treated as one system, not disconnected departments."
  },
  {
    title: "Execution Transparency",
    body: "Clients receive clear checkpoints, documented assumptions, and ongoing visibility into progress and trade-offs."
  }
]

export default function AboutPage() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <span className="k-chip">About Konarr</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">Built in Canada. Designed to deliver globally.</h1>
          <p className="mt-5 text-base leading-relaxed text-konarr-muted md:text-lg">
            Konarr started as a hands-on engineering initiative and evolved into a multi-division platform for technical delivery.
            Today, our teams collaborate across motorsports, prototyping, digital systems, and product commercialization.
          </p>
        </div>

        <div className="k-card overflow-hidden p-0">
          <Image
            src="/assets/konarr-stencil-board.jpg"
            alt="Konarr stencil board"
            width={1100}
            height={760}
            className="h-full min-h-64 w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {principles.map((item) => (
          <article key={item.title} className="k-card">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-konarr-muted">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-konarr-line bg-konarr-panelAlt p-8">
        <h2 className="text-2xl font-semibold md:text-3xl">How we work with clients</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-konarr-muted md:text-base">
          We run compact teams with senior technical leadership. That means fewer handoff bottlenecks, faster iteration cycles,
          and decisions grounded in both engineering constraints and business objectives.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <article key={item.step} className="rounded-2xl border border-konarr-line bg-konarr-panel p-5">
              <p className="text-xs tracking-[0.16em] text-konarr-accent">{item.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-konarr-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
