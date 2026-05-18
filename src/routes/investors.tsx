import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { TrendingUp, Users, Globe2, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/investors")({
  component: Investors,
  head: () => ({
    meta: [
      { title: "Investors — Winners College" },
      { name: "description", content: "Partner with Winners College — building South Asia's foundational digital talent pipeline through trilingual mobile microlearning." },
      { property: "og:title", content: "Invest in Winners College" },
      { property: "og:description", content: "An ambitious EdTech platform addressing South Asia's employability gap." },
    ],
    links: [{ rel: "canonical", href: "/investors" }],
  }),
});

const stats = [
  { k: "50M+", v: "Young South Asians entering the workforce by 2030" },
  { k: "3", v: "Languages — full content parity across Sinhala, Tamil & English" },
  { k: "Mobile-first", v: "Built for the device 90% of learners already own" },
];

const opportunity = [
  { icon: Users, title: "Massive, underserved audience", body: "Millions of Sri Lankan youth are excluded from English-only EdTech. We meet them in their language." },
  { icon: Globe2, title: "South Asia–wide expansion", body: "Sri Lanka is our beachhead. The same trilingual, mobile-first playbook scales across the region." },
  { icon: TrendingUp, title: "Industry-backed curriculum", body: "Courses co-built with top employers — translating directly into hireable, day-one-ready talent." },
  { icon: Rocket, title: "App-ready product roadmap", body: "Web platform live first; native mobile app next — unlocking subscriptions, cohorts, and B2B partnerships." },
];

const why = [
  "First-mover trilingual EdTech in Sri Lanka",
  "Founders embedded in the local employer ecosystem",
  "Capital-efficient, content-led growth",
  "Clear pathway from learner → employed professional",
  "Repeatable model across South Asian markets",
];

function Investors() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-warm opacity-30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <span className="text-sm font-semibold uppercase tracking-widest opacity-80">For investors</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl text-balance">
            Build South Asia's talent pipeline with us.
          </h1>
          <p className="mt-6 max-w-2xl text-lg opacity-90 text-balance">
            Winners College is solving the employability gap for a generation of ambitious youth —
            in the languages they think in, on the devices they already carry.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl">
            {stats.map((s) => (
              <div key={s.v} className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6">
                <div className="font-display text-4xl">{s.k}</div>
                <div className="mt-2 text-sm opacity-85">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">The opportunity</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            A regional market, served the way it actually learns.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {opportunity.map((o) => (
            <div key={o.title} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition">
              <div className="h-12 w-12 rounded-xl bg-accent text-primary flex items-center justify-center">
                <o.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{o.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Why now</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              The right product, in the right market, at the right moment.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Smartphone penetration is at an all-time high. Employers are screaming for
              practical, job-ready talent. And no one is serving Sri Lankan youth in their
              native languages with industry-grade content. We are.
            </p>
          </div>
          <ul className="space-y-4">
            {why.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-xl bg-card border border-border p-5">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-gradient-warm text-secondary-foreground p-10 md:p-16 shadow-warm">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Let's talk about what we can build together.
          </h2>
          <p className="mt-4 max-w-xl text-lg opacity-90">
            We're raising to expand our trilingual catalogue, launch our mobile app, and scale
            beyond Sri Lanka. Request our investor deck.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition">
            Request the deck <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
