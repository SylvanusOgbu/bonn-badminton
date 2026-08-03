import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-100 py-16"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-lime-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Come Play With Us
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Join us every Thursday for badminton, fun games and a great community.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Details */}

          <div className="space-y-8">

            {/* Venue */}

            <div className="flex items-start gap-5">

              <MapPin
                size={28}
                className="mt-1 text-lime-500"
              />

              <div>

                <h3 className="text-xl font-bold">
                  Venue
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Phoenix Badminton-Center GmbH & Co. KG
                  <br />
                  Pützchens Chaussee 202
                  <br />
                  53229 Bonn-Beuel
                  <br />
                  Germany
                </p>

                <a
                  href="https://maps.google.com/?q=Phoenix+Badminton-Center+GmbH+%26+Co.+KG,+P%C3%BCtzchens+Chaussee+202,+53229+Bonn-Beuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-lime-600 hover:text-lime-700"
                >
                  Open in Google Maps
                  <ExternalLink size={18} />
                </a>

              </div>

            </div>

            {/* Training Time */}

            <div className="flex items-start gap-5">

              <Clock
                size={28}
                className="mt-1 text-lime-500"
              />

              <div>

                <h3 className="text-xl font-bold">
                  Weekly Session
                </h3>

                <p className="mt-2 text-slate-600">
                  Every Thursday
                  <br />
                  18:30 – 21:00
                </p>

              </div>

            </div>

            {/* Email */}

            <div className="flex items-start gap-5">

              <Mail
                size={28}
                className="mt-1 text-lime-500"
              />

              <div>

                <h3 className="text-xl font-bold">
                  Email
                </h3>

                <a
                  href="mailto:bonnbadminton@gmail.com"
                  className="mt-2 block text-lime-600 hover:underline"
                >
                  bonnbadminton@gmail.com
                </a>

              </div>

            </div>

            {/* WhatsApp */}

            <div className="flex items-start gap-5">

              <Phone
                size={28}
                className="mt-1 text-lime-500"
              />

              <div>

                <h3 className="text-xl font-bold">
                  WhatsApp Community
                </h3>

                <a
                  href="https://chat.whatsapp.com/Dzr4ZHMOViN6Q4nwfZb8pb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-semibold text-lime-600 hover:text-lime-700 hover:underline"
                >
                  Join our WhatsApp Community →
                </a>

              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=Phoenix+Badminton-Center+GmbH+%26+Co.+KG,+P%C3%BCtzchens+Chaussee+202,+53229+Bonn-Beuel&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[500px] w-full border-0"
            />

          </div>

        </div>

      </div>
    </section>
  );
}