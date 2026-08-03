"use client";

import { useState } from "react";

export default function RegistrationCard() {
 const [form, setForm] = useState({
  firstName: "",
  surname: "",
  email: "",
  level: "",
  racket: "",
  shuttles: "",
  support: "",
  payment: "",
  hangout: "",
  notes: "",
});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function submit(e: React.FormEvent) {
  e.preventDefault();

  if (
    !form.firstName.trim() ||
    !form.surname.trim() ||
    !form.level ||
    !form.racket ||
    !form.shuttles ||
    !form.support ||
    !form.payment ||
    !form.hangout
  ) {
    setErrorMessage("Please complete all required fields.");
    return;
  }

  setLoading(true);
  setSuccess("");
  setErrorMessage("");

  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (!response.ok) {
      setErrorMessage(result.error || "Registration failed.");
      return;
    }

    setSuccess(
      "🎉 Registration successful! Welcome to Bonn Badminton."
    );

    setForm({
      firstName: "",
      surname: "",
      email: "",
      level: "",
      racket: "",
      shuttles: "",
      support: "",
      payment: "",
      hangout: "",
      notes: "",
    });
  } catch (err) {
    console.error(err);
    setErrorMessage("Unable to connect to the server.");
  } finally {
    setLoading(false);
  }
}

  const inputStyle =
    "w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500";

  return (
    <section
      id="register"
      className="rounded-3xl bg-white p-10 shadow-xl"
    >
      <h2 className="mb-8 text-4xl font-black text-slate-900">
        Join Our Community
      </h2>

      {success && (
        <div className="mb-6 rounded-xl border border-green-300 bg-green-100 p-4 text-green-800">
          {success}
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 rounded-xl border border-red-300 bg-red-100 p-4 text-red-800">
          {errorMessage}
        </div>
      )}

      <form
        onSubmit={submit}
        className="space-y-8"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">
              First Name
            </label>

            <input
              className={inputStyle}
              name="firstName"
              placeholder="John"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Surname
            </label>

            <input
              className={inputStyle}
              name="surname"
              placeholder="Doe"
              value={form.surname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">
              email
            </label>

            <input
              className={inputStyle}
              name="email"
              placeholder="Johnnydoe@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Badminton Level
            </label>

           <select
  className={inputStyle}
  name="level"
  value={form.level}
  onChange={handleChange}
  required
>
  <option value="" disabled>
    Select your level
  </option>

  <option value="Beginner">Beginner</option>
  <option value="Lower Intermediate">Lower Intermediate</option>
  <option value="Intermediate">Intermediate</option>
  <option value="Advanced">Advanced</option>
</select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">
              Do you own a racket?
            </label>

            <select
              className={inputStyle}
              name="racket"
              value={form.racket}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose...</option>
              <option>Yes</option>
              <option>No</option>
              <option>I can borrow one</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Do you have shuttles?
            </label>

            <select
              className={inputStyle}
              name="shuttles"
              value={form.shuttles}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose...</option>
              <option>Yes</option>
              <option>No</option>
              <option>Sometimes</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">
              Help buy shuttles?
            </label>

            <select
              className={inputStyle}
              name="support"
              value={form.support}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose...</option>
              <option>Yes</option>
              <option>Maybe</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Split court payment?
            </label>

            <select
              className={inputStyle}
              name="payment"
              value={form.payment}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose...</option>
              <option>Yes</option>
              <option>Maybe</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            After badminton hangout?
          </label>

          <select
            className={inputStyle}
            name="hangout"
            value={form.hangout}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Choose...</option>
            <option>Very Open</option>
            <option>Open</option>
            <option>Sometimes</option>
            <option>Not Really</option>
            <option>Not Interested</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Anything we should know?
          </label>

          <textarea
            rows={4}
            className={inputStyle}
            name="notes"
            placeholder="Optional..."
            value={form.notes}
            onChange={handleChange}
            
          />
        </div>

       <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-lime-500 py-4 text-lg font-bold text-white transition hover:bg-lime-600 disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? "Registering..." : "Register Now"}
</button>
      </form>
    </section>
  );
}