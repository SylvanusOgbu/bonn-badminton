import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import InfoPanel from "@/components/sections/InfoPanel";
import RegistrationCard from "@/components/sections/RegistrationCard";
import Gallery from "@/components/sections/Gallery";
// import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Weekly Info + Registration */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl grid gap-10 px-6 lg:grid-cols-3">

          <InfoPanel />

          <div className="lg:col-span-2">
            <RegistrationCard />
          </div>

        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}