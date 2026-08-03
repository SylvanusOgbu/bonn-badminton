export default function Hero() {
  return (
    <section className="relative h-[72vh] flex items-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/drachenburg.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <p className="uppercase tracking-[0.3em] text-lime-400 font-bold">
          Welcome to
        </p>

        <h1 className="mt-4 text-6xl md:text-8xl font-black text-white">
          BONN
          <br />
          <span className="text-lime-400">
            BADMINTON
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-white/90">
          Play • Connect • Grow Together.
          Join weekly training sessions,
          friendly matches, tournaments,
          and a welcoming badminton community in Bonn.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#register"
            className="rounded-xl bg-lime-500 px-8 py-4 font-bold text-white hover:bg-lime-600"
          >
            Join the Community
          </a>

          <a
            href="#gallery"
            className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-black"
          >
            View Gallery
          </a>

        </div>

        <div className="mt-12 space-y-2 text-white">
          <p>📍 Sportmeile Bonn</p>
          <p>🗓 Every Thursday</p>
          <p>🕡 18:30 – 21:00</p>
        </div>

      </div>

    </section>
  );
}