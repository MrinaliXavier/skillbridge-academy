import { createFileRoute } from "@tanstack/react-router";
import teamImg from "@/assets/about-team.jpg";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Winners College" },
      { name: "description", content: "Winners College educates Sri Lankan youngsters through guided trilingual online courses built by industry experts." },
      { property: "og:title", content: "About Winners College" },
      { property: "og:description", content: "Educating Sri Lankan youngsters through guided trilingual courses." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">About us</span>
        <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl text-balance">
          Educating Sri Lankan youngsters through guided courses.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
          Winners College offers Sri Lanka's first ever online courses in all three languages —
          designed to develop the practical, real-world skills today's workplaces demand.
          We bring success closer to you, in your language, guided by the industry's finest instructors.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <img
          src={teamImg}
          alt="Young Sri Lankan team collaborating"
          width={1280}
          height={896}
          loading="lazy"
          className="rounded-3xl w-full aspect-[16/9] object-cover shadow-elegant"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-2 gap-10">
        <div className="rounded-3xl border border-border bg-card p-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Vision</span>
          <p className="mt-4 text-2xl font-display leading-snug text-balance">
            To build a foundational digital talent pipeline for South Asia — transforming
            millions of ambitious youth into day-one-ready global professionals.
          </p>
        </div>
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 shadow-elegant">
          <span className="text-sm font-semibold uppercase tracking-widest opacity-80">Mission</span>
          <p className="mt-4 text-2xl font-display leading-snug text-balance">
            To bridge the employability gap for Sri Lankan youth by delivering trilingual,
            mobile-optimized microlearning that replaces theoretical overload with practical,
            industry-backed competence.
          </p>
        </div>
      </section>
    </>
  );
}
