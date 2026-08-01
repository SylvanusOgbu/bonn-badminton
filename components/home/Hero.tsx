import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">

      <Image
        src="/images/hero/bonn.jpg"
        alt="Bonn Skyline"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[#071321]/75"/>

      <div className="relative z-10 text-center text-white">

        <h1 className="text-6xl font-black tracking-tight">
          BONN BADMINTON
        </h1>

        <p className="mt-5 text-3xl font-semibold text-lime-400">
          Play • Connect • Grow
        </p>

        <p className="mt-8 text-xl">
          Every Thursday • 18:30 – 21:00
        </p>

        <p className="opacity-80">
          Sportmeile Bonn (Pützchen)
        </p>

        <button
          className="
          mt-10
          bg-lime-500
          hover:bg-lime-600
          px-10
          py-4
          rounded-xl
          text-lg
          font-bold
          transition
          "
        >
          Register Now
        </button>

      </div>

    </section>
  );
}