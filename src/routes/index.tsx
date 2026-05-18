import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-student.jpg";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Languages, Clock, GraduationCap, Target, ArrowRight, Sparkles, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Winners College — Sri Lanka's trilingual learning platform" },
      { name: "description", content: "Practical, mobile-first microlearning for Sri Lankan youth — taught by industry experts in Sinhala, Tamil and English." },
      { property: "og:title", content: "Winners College" },
      { property: "og:description", content: "Sri Lanka's first trilingual online courses, designed to make young people day-one ready." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const features = [
  {
    icon: Languages,
    title: "Learn in all three languages",
    body: "World-class content delivered in Sinhala, Tamil and English. Learn in the language you think in.",
  },
  {
    icon: Clock,
    title: "Your pace, lifetime access",
    body: "Pre-recorded lessons fit around your life — and stay with you forever, so skills compound.",
  },
  {
    icon: GraduationCap,
    title: "Industry's finest instructors",
    body: "Top-notch practitioners share what actually works on the job — not what's in the textbook.",
  },
  {
    icon: Target,
    title: "Implementation-first",
    body: "Tailored, step-by-step guidance you can apply the same day. Less theory, more doing.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <FloatingOrbs />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              Sri Lanka's first trilingual learning platform
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
              Bringing success <span className="text-primary">closer to you</span> — in your language.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
              Explore Sri Lanka's first ever online courses in Sinhala, Tamil and English —
              built to develop the practical, job-ready skills today's employers want.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant hover:opacity-90 transition"
              >
                Explore programs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/investors"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition"
              >
                For investors
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "3", v: "Languages" },
                { k: "100%", v: "Mobile-first" },
                { k: "∞", v: "Lifetime access" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-primary">{s.k}</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-warm opacity-20 blur-3xl rounded-[3rem] animate-pulse" />
            <img
              src={heroImg}
              alt="Young Sri Lankan student learning on a smartphone"
              width={1536}
              height={1152}
              className="relative rounded-3xl shadow-elegant object-cover w-full aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-elegant">
              <div className="h-10 w-10 rounded-full bg-gradient-warm" />
              <div>
                <div className="text-sm font-semibold">Day-one ready</div>
                <div className="text-xs text-muted-foreground">Industry-backed curriculum</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* MISSION STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-8 items-start">
          <h2 className="text-sm font-semibold uppercase tracking-widest opacity-80">Our mission</h2>
          <p className="md:col-span-2 text-2xl md:text-3xl font-display leading-snug text-balance">
            To bridge the employability gap for Sri Lankan youth by delivering trilingual,
            mobile-optimized microlearning that replaces theoretical overload with
            practical, industry-backed competence.
          </p>
        </div>
      </section>

      {/* VIDEO STORY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">See the vision</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Learning that moves with you.
          </h2>
        </AnimatedSection>
        <AnimatedSection variant="scale-in" delay={150}>
          <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-video bg-muted">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={heroImg}
            >
              <source src="src/assets/PixVerse_V6_Image_Text_540P_Futuristic_cinemat.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-16 w-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                <Play className="h-6 w-6 text-primary ml-1" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Why Winners</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Built for the way young Sri Lankans actually learn.
          </h2>
        </AnimatedSection>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 100}>
              <div className="group rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="bg-muted/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-5 gap-10 items-center">
          <AnimatedSection className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Our vision</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              A talent pipeline for South Asia.
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-3" delay={150}>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              To build a foundational digital talent pipeline for South Asia — transforming
              <span className="text-foreground font-medium"> millions of ambitious youth</span> into
              day-one-ready global professionals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-16 shadow-elegant">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-warm opacity-30 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Join us in shaping South Asia's next generation of professionals.
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Whether you're a learner, an instructor, or an investor — there's a place for you
                at Winners College.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/investors" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground shadow-warm hover:opacity-90 transition">
                  Partner with us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
