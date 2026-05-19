import { createFileRoute, Link } from "@tanstack/react-router";
import heroStage from "@/assets/hero-stage.jpg";
import heroImg from "@/assets/hero-student.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useParallax } from "@/hooks/use-parallax";
import { Languages, Clock, GraduationCap, Target, ArrowRight, Sparkles, Play, ChevronDown } from "lucide-react";

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
  { icon: Languages, title: "Learn in all three languages", body: "World-class content delivered in Sinhala, Tamil and English. Learn in the language you think in." },
  { icon: Clock, title: "Your pace, lifetime access", body: "Pre-recorded lessons fit around your life — and stay with you forever, so skills compound." },
  { icon: GraduationCap, title: "Industry's finest instructors", body: "Top-notch practitioners share what actually works on the job — not what's in the textbook." },
  { icon: Target, title: "Implementation-first", body: "Tailored, step-by-step guidance you can apply the same day. Less theory, more doing." },
];

function Index() {
  const bgParallax = useParallax<HTMLDivElement>(0.25);
  const contentParallax = useParallax<HTMLDivElement>(-0.08);
  const aboutParallax = useParallax<HTMLImageElement>(0.15);
  const visionParallax = useParallax<HTMLDivElement>(0.2);

  return (
    <>
      {/* HERO — full-bleed image with dark overlay, parallax */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden text-white">
        {/* Parallax background image */}
        <div
          ref={bgParallax.ref}
          className="absolute inset-0 -top-20 -bottom-20 will-change-transform"
          style={{ transform: `translate3d(0, ${bgParallax.offset}px, 0)` }}
        >
          <img
            src={heroStage}
            alt="Industry expert addressing students at Winners College event"
            width={1920}
            height={1280}
            className="h-full w-full object-cover animate-ken-burns"
          />
          {/* Layered gradients for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        {/* Floating warm accent */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-warm opacity-30 blur-3xl" style={{ animation: "float-1 14s ease-in-out infinite" }} />

        {/* Content */}
        <div
          ref={contentParallax.ref}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 will-change-transform"
          style={{ transform: `translate3d(0, ${contentParallax.offset}px, 0)` }}
        >
          <div className="max-w-3xl animate-fade-up visible">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Trilingual learning platform · Sri Lanka
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
              Find Your Path <br className="hidden md:block" />
              to a <span className="italic text-secondary">Brighter</span> Career.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Sri Lanka's first ever online courses in Sinhala, Tamil and English — taught by
              industry experts, built to make you day-one ready.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-warm hover:scale-[1.03] active:scale-[0.98] transition"
              >
                Explore programs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/investors"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/15 transition"
              >
                For investors
              </Link>
              <a
                href="#story"
                className="group inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition"
              >
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30 group-hover:bg-white/20 transition">
                  <Play className="h-4 w-4 ml-0.5" />
                  <span className="absolute inset-0 rounded-full ring-2 ring-white/40 animate-ping" />
                </span>
                Watch the vision
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce-soft" />
        </div>
      </section>

      <MarqueeStrip />

      {/* MISSION STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-8 items-start">
          <h2 className="text-sm font-semibold uppercase tracking-widest opacity-80">Our mission</h2>
          <p className="md:col-span-2 text-2xl md:text-3xl font-display leading-snug text-balance">
            To bridge the employability gap for Sri Lankan youth by delivering trilingual,
            mobile-optimized microlearning that replaces theoretical overload with
            practical, industry-backed competence.
          </p>
        </div>
      </section>

      {/* VIDEO STORY */}
      <section id="story" className="mx-auto max-w-7xl px-6 py-24">
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
      <section className="mx-auto max-w-7xl px-6 py-28">
        <AnimatedSection className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Why Winners</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Built for the way young Sri Lankans actually learn.
          </h2>
        </AnimatedSection>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-2 transition-all duration-500">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all duration-500">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* PARALLAX IMAGE BAND */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          ref={aboutParallax.ref}
          src={aboutTeam}
          alt="Winners College team and mentors"
          className="absolute inset-0 -top-24 -bottom-24 h-[calc(100%+12rem)] w-full object-cover will-change-transform"
          style={{ transform: `translate3d(0, ${aboutParallax.offset}px, 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/40" />
        <div
          ref={visionParallax.ref}
          className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 will-change-transform"
          style={{ transform: `translate3d(0, ${visionParallax.offset}px, 0)` }}
        >
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] opacity-80">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Our vision
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              A talent pipeline <br /> for <span className="italic text-gold">South Asia</span>.
            </h2>
            <p className="mt-5 max-w-xl text-lg opacity-90">
              Transforming millions of ambitious youth into day-one-ready global professionals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero text-primary-foreground p-10 md:p-16 shadow-elegant">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-warm opacity-30 blur-3xl" style={{ animation: "float-2 12s ease-in-out infinite" }} />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" style={{ animation: "float-3 10s ease-in-out infinite" }} />
            <div className="relative max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Join us in shaping South Asia's next generation of professionals.
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Whether you're a learner, an instructor, or an investor — there's a place for you
                at Winners College.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/investors" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground shadow-warm hover:scale-105 transition">
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
