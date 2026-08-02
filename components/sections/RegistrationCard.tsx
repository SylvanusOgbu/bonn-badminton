"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegistrationCard() {
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    nickname: "",
    level: "Intermediate",
    racket: "",
    shuttles: "",
    support: "",
    payment: "",
    hangout: "",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

async function submit(e: React.FormEvent) {
  e.preventDefault();

  const { data, error } = await supabase
    .from("members")
    .insert([
      {
        first_name: form.firstName,
        surname: form.surname,
        nickname: form.nickname,
        skill_level: form.level,
        has_racket: form.racket === "Yes",
        has_shuttles: form.shuttles === "Yes",
        supports_shuttles: form.support === "Yes",
        split_payment: form.payment === "Yes",
        hangout_interest: form.hangout,
        notes: form.notes,
      },
    ])
    .select();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    alert("Registration failed.");
    return;
  }

  alert("Registration successful! 🎉");

  setForm({
    firstName: "",
    surname: "",
    nickname: "",
    level: "Intermediate",
    racket: "",
    shuttles: "",
    support: "",
    payment: "",
    hangout: "",
    notes: "",
  });
}
  const optionStyle =
    "border rounded-lg px-3 py-2 w-full outline-none focus:ring-2 focus:ring-lime-500";

  return (
    <section
      id="register"
      className="bg-white rounded-3xl shadow-xl p-10"
    >
      <h2 className="text-4xl font-black text-slate-900 mb-8">
        Join Our Community
      </h2>

      <form
        onSubmit={submit}
        className="space-y-8"
      >
        {/* Row 1 */}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold block mb-2">
              First Name
            </label>

            <input
              className={optionStyle}
              name="firstName"
              placeholder="John"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Surname
            </label>

            <input
              className={optionStyle}
              name="surname"
              placeholder="Doe"
              value={form.surname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2 */}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold block mb-2">
              Nickname
            </label>

            <input
              className={optionStyle}
              name="nickname"
              placeholder="Johnny"
              value={form.nickname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Badminton Level
            </label>

            <select
              className={optionStyle}
              name="level"
              value={form.level}
              onChange={handleChange}
            >
              <option>Beginner</option>
              <option>Lower Intermediate</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold block mb-2">
              Do you own a racket?
            </label>

            <select
              className={optionStyle}
              name="racket"
              value={form.racket}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option>Yes</option>
              <option>No</option>
              <option>I can borrow one</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Do you have shuttles?
            </label>

            <select
              className={optionStyle}
              name="shuttles"
              value={form.shuttles}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option>Yes</option>
              <option>No</option>
              <option>Sometimes</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold block mb-2">
              Help buy shuttles?
            </label>

            <select
              className={optionStyle}
              name="support"
              value={form.support}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option>Yes</option>
              <option>Maybe</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Split court payment?
            </label>

            <select
              className={optionStyle}
              name="payment"
              value={form.payment}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option>Yes</option>
              <option>Maybe</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* Row 5 */}

        <div>
          <label className="font-semibold block mb-2">
            After badminton hangout?
          </label>

          <select
            className={optionStyle}
            name="hangout"
            value={form.hangout}
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            <option>Very Open</option>
            <option>Open</option>
            <option>Sometimes</option>
            <option>Not Really</option>
            <option>Not Interested</option>
          </select>
        </div>

        {/* Row 6 */}

        <div>
          <label className="font-semibold block mb-2">
            Anything we should know?
          </label>

          <textarea
            rows={4}
            className={optionStyle}
            name="notes"
            placeholder="Optional..."
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <button
          className="w-full rounded-xl bg-lime-500 hover:bg-lime-600 transition text-white font-bold text-lg py-4"
        >
          Register
        </button>
      </form>
    </section>
  );
}