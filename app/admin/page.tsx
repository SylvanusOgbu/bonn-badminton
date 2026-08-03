"use client";

import { useEffect, useState } from "react";

type Member = {
  id: string;
  first_name: string;
  surname: string;
  nickname: string;
  skill_level: string;
  has_racket: boolean;
  hangout_interest: string;
  created_at: string;
};

export default function AdminPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMembers();
  }, []);

  async function loadMembers() {
    try {
      const res = await fetch("/api/admin");

      if (!res.ok) {
        throw new Error("Unable to fetch members");
      }

      const data = await res.json();

      setMembers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const beginners = members.filter(
    (m) => m.skill_level === "Beginner"
  ).length;

  const intermediate = members.filter(
    (m) => m.skill_level === "Intermediate"
  ).length;

  const advanced = members.filter(
    (m) => m.skill_level === "Advanced"
  ).length;

  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-slate-900 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

          <div>
            <h1 className="text-3xl font-black">
              🏸 Bonn Badminton Admin
            </h1>

            <p className="text-slate-300">
              Community Management Dashboard
            </p>
          </div>

          <button className="rounded-xl bg-red-500 px-5 py-2 font-semibold hover:bg-red-600">
            Logout
          </button>

        </div>
      </header>

      <div className="mx-auto max-w-7xl px-8 py-10">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl bg-white p-8 shadow">
            <p className="text-slate-500">Members</p>
            <h2 className="mt-3 text-5xl font-black">
              {members.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <p className="text-slate-500">Beginners</p>
            <h2 className="mt-3 text-5xl font-black">
              {beginners}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <p className="text-slate-500">Intermediate</p>
            <h2 className="mt-3 text-5xl font-black">
              {intermediate}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <p className="text-slate-500">Advanced</p>
            <h2 className="mt-3 text-5xl font-black">
              {advanced}
            </h2>
          </div>

        </div>

        <div className="mt-12 rounded-2xl bg-white p-8 shadow">

          <h2 className="mb-6 text-3xl font-black">
            Registered Members
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="py-4 text-left">Name</th>
                <th className="text-left">Level</th>
                <th className="text-left">Racket</th>
                <th className="text-left">Hangout</th>
                <th className="text-left">Joined</th>

              </tr>

            </thead>

            <tbody>

              {loading ? (
                <tr>
                  <td className="py-5">Loading...</td>
                </tr>
              ) : members.length === 0 ? (
                <tr>
                  <td className="py-5">No members found.</td>
                </tr>
              ) : (
                members.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b"
                  >
                    <td className="py-4">
                      {member.first_name} {member.surname}
                    </td>

                    <td>{member.skill_level}</td>

                    <td>
                      {member.has_racket ? "✅" : "❌"}
                    </td>

                    <td>{member.hangout_interest}</td>

                    <td>
                      {new Date(
                        member.created_at
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}