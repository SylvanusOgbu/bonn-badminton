import {
  Users,
  Trophy,
  HeartHandshake,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Friendly Community",
    description:
      "Meet welcoming players from around the world and build genuine friendships.",
  },
  {
    icon: Trophy,
    title: "Improve Faster",
    description:
      "Play with different skill levels every week and steadily improve your game.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusive Environment",
    description:
      "Whether you're a beginner or advanced player, you'll always find a place here.",
  },
  {
    icon: CalendarDays,
    title: "Weekly Activities",
    description:
      "Regular badminton nights, tournaments, social dinners and community events.",
  },
];

const stats = [
  {
    number: "80+",
    label: "Community Members",
  },
  {
    number: "Every",
    label: "Thursday Evening",
  },
  {
    number: "4+",
    label: "Skill Levels",
  },
  {
    number: "100%",
    label: "Fun Guaranteed",
  },
];

export default function WhyJoin() {
  return (
    <section
      id="join"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-lime-400 font-semibold">
            Why Join Us
          </p>

          <h2 className="text-5xl font-black">
            More Than Just Badminton
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            We believe badminton is more than winning matches.
            It's about building friendships, staying active,
            improving together and creating a community you'll
            look forward to every Thursday.
          </p>
        </div>

        {/* Statistics */}

        <div className="mb-20 grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-slate-800 p-8 text-center"
            >
              <h3 className="text-5xl font-black text-lime-400">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}

        <div className="grid gap-8 md:grid-cols-2">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex gap-5 rounded-3xl bg-slate-800 p-8 transition hover:bg-slate-700"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-500">
                  <Icon size={30} />
                </div>

                <div>

                  <h3 className="mb-3 text-2xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="leading-7 text-slate-300">
                    {benefit.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <h3 className="text-4xl font-black">
            Ready to Play?
          </h3>

          <p className="mt-4 text-slate-300">
            Join us this Thursday and become part of Bonn's growing badminton community.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-500 px-8 py-4 font-bold text-white transition hover:bg-lime-600">
            Register Now
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}