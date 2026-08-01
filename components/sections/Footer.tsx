import {
  MapPin,
  CalendarDays,
  Clock,
  Mail,
  Camera,
  MessageCircle,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-black">
              🏸 Bonn Badminton
            </h2>

            <p className="mt-5 text-slate-300 leading-7">
              A welcoming badminton community in Bonn where we
              play, improve, make friends and enjoy great
              Thursday evenings together.
            </p>
          </div>

          {/* Weekly Meetup */}

          <div>
            <h3 className="text-xl font-bold mb-5">
              Weekly Meetup
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex gap-3">
                <CalendarDays className="text-lime-400 w-5 h-5 mt-1" />
                <span>Every Thursday</span>
              </div>

              <div className="flex gap-3">
                <Clock className="text-lime-400 w-5 h-5 mt-1" />
                <span>18:30 – 21:00</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-lime-400 w-5 h-5 mt-1" />
                <span>
                  Sportmeile Bonn
                  <br />
                  Pützchen
                </span>
              </div>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#register"
                  className="hover:text-lime-400 transition"
                >
                  Register
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="hover:text-lime-400 transition"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-lime-400 transition"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}

          <div id="contact">

            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex gap-3">
                <Mail className="text-lime-400 w-5 h-5 mt-1" />
                <span>
                  bonnbadminton@gmail.com
                </span>
              </div>

              <div className="flex gap-3">
                <Camera className="text-lime-400 w-5 h-5 mt-1" />
                <span>@bonnbadminton</span>
              </div>

              <div className="flex gap-3">
                <MessageCircle className="text-lime-400 w-5 h-5 mt-1" />
                <span>WhatsApp Community (Coming Soon)</span>
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">

          <p>
            © {new Date().getFullYear()} Bonn Badminton.
            All rights reserved.
          </p>

          <p className="flex items-center gap-2 mt-4 md:mt-0">
            Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            for the Bonn badminton community.
          </p>

        </div>

      </div>
    </footer>
  );
}