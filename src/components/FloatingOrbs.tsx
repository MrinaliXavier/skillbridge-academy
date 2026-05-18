export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--secondary))",
          animation: "float-1 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-20 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: "linear-gradient(135deg, var(--secondary), var(--gold))",
          animation: "float-2 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full opacity-15 blur-3xl"
        style={{
          background: "linear-gradient(135deg, var(--gold), var(--primary))",
          animation: "float-3 10s ease-in-out infinite",
        }}
      />
    </div>
  );
}
