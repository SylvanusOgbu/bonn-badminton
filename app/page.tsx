import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import InfoPanel from "@/components/sections/InfoPanel";
import RegistrationCard from "@/components/sections/RegistrationCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="bg-slate-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">

          <div>
            <InfoPanel />
          </div>

          <div className="lg:col-span-2">
            <RegistrationCard />
          </div>

        </div>
      </section>
    </>
  );
}