const items = [
  "Sinhala · Tamil · English",
  "Mobile-first microlearning",
  "Industry-backed curriculum",
  "Day-one ready talent",
  "Lifetime access",
  "Expert instructors",
  "Practical skills",
  "South Asia's future",
];

export function MarqueeStrip() {
  const allItems = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden bg-primary text-primary-foreground py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {allItems.map((item, i) => (
          <span key={i} className="mx-8 text-sm font-medium uppercase tracking-widest opacity-90 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
