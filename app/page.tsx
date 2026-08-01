export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto px-8 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-slate-900">
            BONN BADMINTON
          </h1>

          <p className="text-2xl text-lime-600 mt-5 font-semibold">
            Play • Connect • Grow
          </p>

          <p className="mt-10 text-xl text-slate-700">
            Every Thursday Evening
          </p>

          <p className="text-lg text-slate-500">
            Sportmeile Bonn (Pützchen)
          </p>

          <button className="mt-12 bg-lime-500 hover:bg-lime-600 text-white px-10 py-4 rounded-xl text-xl font-bold transition">
            Join Us
          </button>
        </div>
      </div>
    </main>
  );
}