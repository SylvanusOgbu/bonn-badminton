import {
  MapPin,
  Mail,
  Phone,
 Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-lime-500">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Come Play With Us
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We'd love to welcome you to our Thursday badminton sessions.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex gap-5">
              <MapPin className="text-lime-500" />
              <div>
                <h3 className="font-bold text-xl">
                  Location
                </h3>

                <p className="text-slate-600">
                  Sportmeile Bonn (Pützchen)
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="text-lime-500" />
              <div>
                <h3 className="font-bold text-xl">
                  Every Thursday
                </h3>

                <p className="text-slate-600">
                  18:30 – 21:00
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail className="text-lime-500" />
              <div>
                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p className="text-slate-600">
                  bonnbadminton@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Phone className="text-lime-500" />
              <div>
                <h3 className="font-bold text-xl">
                  WhatsApp
                </h3>

                <p className="text-slate-600">
                  Community Invite Available
                </p>
              </div>
            </div>

          </div>

          {/* Map */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=Sportmeile+Bonn+P%C3%BCtzchen&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>

      </div>
    </section>
  );
}