export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            🏸 BONN BADMINTON
          </h1>
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#" className="hover:text-lime-600 transition">
            Home
          </a>

          <a href="#" className="hover:text-lime-600 transition">
            About
          </a>

          <a href="#" className="hover:text-lime-600 transition">
            Events
          </a>

          <a href="#" className="hover:text-lime-600 transition">
            Gallery
          </a>

          <a href="#" className="hover:text-lime-600 transition">
            Contact
          </a>
        </nav>

        <button className="rounded-xl bg-lime-500 px-5 py-2 font-semibold text-white transition hover:bg-lime-600">
          Register
        </button>
      </div>
    </header>
  );
}