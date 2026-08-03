import {
  MapPin,
  CalendarDays,
  Clock,
  Mail,
  Camera,
  MessageCircle,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-black">
              🏸 Bonn Badminton
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A welcoming badminton community in Bonn where players
              of every level come together to play, improve, compete
              and make lasting friendships.
            </p>

          </div>

          {/* Weekly Meetup */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Weekly Meetup
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex gap-3">
                <CalendarDays className="mt-1 h-5 w-5 text-lime-400" />
                <span>Every Thursday</span>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 text-lime-400" />
                <span>18:30 – 21:00</span>
              </div>

              <div className="flex gap-3">

                <MapPin className="mt-1 h-5 w-5 text-lime-400" />

                <div>

                  <p>
                    Phoenix Badminton-Center GmbH &amp; Co. KG
                  </p>

                  <p>
                    Pützchens Chaussee 202
                  </p>

                  <p>
                    53229 Bonn-Beuel
                  </p>

                  <a
                    href="https://maps.google.com/?q=Phoenix+Badminton-Center+GmbH+%26+Co.+KG,+P%C3%BCtzchens+Chaussee+202,+53229+Bonn-Beuel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-lime-400 hover:text-lime-300"
                  >
                    View on Google Maps
                    <ExternalLink size={16} />
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>
                <a href="#" className="hover:text-lime-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#register" className="hover:text-lime-400">
                  Register
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-lime-400">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-lime-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex gap-3">

                <Mail className="mt-1 h-5 w-5 text-lime-400" />

                <a
                  href="mailto:bonnbadminton@gmail.com"
                  className="hover:text-lime-400"
                >
                  bonnbadminton@gmail.com
                </a>

              </div>

              <div className="flex gap-3">

                <Camera className="mt-1 h-5 w-5 text-lime-400" />

                <a
                  href="#"
                  className="hover:text-lime-400"
                >
                  @bonnbadminton
                </a>

              </div>

              <div className="flex gap-3">

                <MessageCircle className="mt-1 h-5 w-5 text-lime-400" />

                <a
                  href="https://chat.whatsapp.com/Dzr4ZHMOViN6Q4nwfZb8pb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-400"
                >
                  Join our WhatsApp Community
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-center text-sm text-slate-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Bonn Badminton. All rights reserved.
          </p>

          <p className="mt-4 flex items-center gap-2 md:mt-0">
            Built with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            for the Bonn badminton community.
          </p>

        </div>

      </div>
    </footer>
  );
}