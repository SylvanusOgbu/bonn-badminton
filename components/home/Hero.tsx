export default function Hero() {
  return (
    <section className="relative h-[420px] overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-black tracking-tight">
            BONN BADMINTON
          </h1>

          <p className="mt-5 text-2xl font-semibold text-lime-400">
            Play • Connect • Grow
          </p>

          <p className="mt-8 text-lg">
            Every Thursday Evening
          </p>

          <p className="opacity-80">
            Sportmeile Bonn (Pützchen)
          </p>
        </div>
      </div>
    </section>
  );
}