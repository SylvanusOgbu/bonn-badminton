"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b">

      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-black text-[#071321]"
        >
          🏸 BONN BADMINTON
        </Link>

        <nav className="hidden md:flex gap-10">

          <a href="#about">About</a>

          <a href="#gallery">Gallery</a>

          <a href="#join">Join</a>

          <a href="#contact">Contact</a>

        </nav>

        <button
          className="
          bg-lime-500
          hover:bg-lime-600
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          "
        >
          Register
        </button>

      </div>

    </header>
  );
}