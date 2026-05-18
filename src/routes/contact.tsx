import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Winners College" },
      { name: "description", content: "Get in touch with Winners College — for learners, instructors, partners and investors." },
      { property: "og:title", content: "Contact Winners College" },
      { property: "og:description", content: "Reach out to the Winners College team." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16">
      <div>
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Contact</span>
        <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight text-balance">
          Let's build something that matters.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-md">
          Whether you're a learner, an instructor with a story to tell, or an investor who
          wants to back the next chapter — we'd love to hear from you.
        </p>
        <div className="mt-10 space-y-5">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-accent text-primary flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Phone</div>
              <a href="tel:0769321191" className="font-medium hover:text-primary">076 932 1191</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-accent text-primary flex items-center justify-center">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <a href="mailto:jenistonapppostha@gmail.com" className="font-medium hover:text-primary">jenistonapppostha@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-accent text-primary flex items-center justify-center">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Address</div>
              <div className="font-medium">145/19C High Level Road, Colombo 6</div>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant"
      >
        {sent ? (
          <div className="text-center py-12">
            <div className="h-14 w-14 rounded-full bg-gradient-warm mx-auto flex items-center justify-center text-secondary-foreground">
              <Send className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold">Thanks — we'll be in touch.</h3>
            <p className="mt-2 text-muted-foreground">A team member will reply within 1–2 business days.</p>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name"><input required className="input" placeholder="Your name" /></Field>
              <Field label="Email"><input required type="email" className="input" placeholder="you@example.com" /></Field>
            </div>
            <Field label="I'm interested as a">
              <select className="input" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Learner</option>
                <option>Instructor</option>
                <option>Investor / Partner</option>
                <option>Press / Media</option>
              </select>
            </Field>
            <Field label="Message">
              <textarea required rows={5} className="input resize-none" placeholder="Tell us a little about your interest…" />
            </Field>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-elegant hover:opacity-90 transition">
              Send message <Send className="h-4 w-4" />
            </button>
          </div>
        )}
      </form>

      <style>{`.input{display:block;width:100%;border-radius:0.75rem;border:1px solid var(--border);background:var(--background);padding:0.75rem 1rem;font-size:0.95rem;outline:none;transition:border-color .15s, box-shadow .15s}.input:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in oklab, var(--primary) 20%, transparent)}`}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
