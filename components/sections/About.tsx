import {
  Users,
  Trophy,
  Heart,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Friendly Community",
    description:
      "Meet players from different backgrounds, make friends, and enjoy badminton together every week.",
  },
  {
    icon: Trophy,
    title: "Improve Your Game",
    description:
      "Friendly matches, coaching tips, and regular play help you become a better badminton player.",
  },
  {
    icon: Heart,
    title: "Everyone is Welcome",
    description:
      "Whether you're just starting or already experienced, you'll find players at your level.",
  },
  {
    icon: Sparkles,
    title: "More Than Badminton",
    description:
      "Join tournaments, dinners, community events, and create lasting friendships beyond the court.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-14"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-lime-500 font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="text-5xl font-black text-slate-900">
            Bonn Badminton Community
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We're a welcoming badminton community in Bonn that brings
            people together through sport, friendship and fun.
            Every Thursday evening we meet to play, improve,
            challenge ourselves and enjoy great company.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-500 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}