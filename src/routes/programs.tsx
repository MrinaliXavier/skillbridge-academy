import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { Languages, Clock, GraduationCap, Target, Smartphone, Infinity as InfinityIcon, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/programs")({
  component: Programs,
  head: () => ({
    meta: [
      { title: "Programs — Winners College" },
      { name: "description", content: "Trilingual, mobile-first microlearning programs taught by industry experts — flexible, lifetime-access courses for Sri Lankan youth." },
      { property: "og:title", content: "Programs at Winners College" },
      { property: "og:description", content: "Mobile-first, trilingual microlearning built for the real world." },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
});

const pillars = [
  { icon: Languages, title: "Trilingual learning", body: "Sinhala, Tamil, English — every course, every module. Choose the language you think in." },
  { icon: Smartphone, title: "Mobile-optimized", body: "Built for the phones young Sri Lankans already use. Learn anywhere, on any connection." },
  { icon: Clock, title: "Self-paced", body: "Pre-recorded lessons that fit your life — early morning, late night, between classes." },
  { icon: InfinityIcon, title: "Lifetime access", body: "Buy once, learn forever. Revisit content as the industry — and you — evolve." },
  { icon: GraduationCap, title: "Expert instructors", body: "Practitioners from the industry's top companies share what actually works on the job." },
  { icon: Target, title: "Implementation focus", body: "Step-by-step, tailored guidance you can apply on day one — no theoretical overload." },
];

function Programs() {
  return (
    <>
      <section className="relative overflow-hidden">
        <FloatingOrbs />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-14">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Programs</span>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl text-balance">
              Practical skills. Real instructors. Your language.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
              Every Winners College program is engineered around six core promises — the things that
              make the difference between watching a course and actually getting hired.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center text-secondary-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-16 grid md:grid-cols-3 gap-10 items-center shadow-elegant">
            <h2 className="md:col-span-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Coming soon: the Winners College app — your learning, in your pocket.
            </h2>
            <Link to="/contact" className="justify-self-start md:justify-self-end inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground shadow-warm hover:opacity-90 transition">
              Get early access <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
