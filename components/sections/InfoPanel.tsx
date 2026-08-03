export default function InfoPanel() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold">
        Weekly Meetup
      </h2>

      <div className="space-y-8">

        <div>
          <h3 className="font-semibold text-lime-600">
            📅 WHEN
          </h3>

          <p className="mt-2">
            Every Thursday
          </p>

          <p>18:30 – 21:00</p>
        </div>

        <div>
          <h3 className="font-semibold text-lime-600">
            📍 WHERE
          </h3>

          <p className="mt-2">
            Phoenix Badminton-Center GmbH &amp; Co. KG
          </p>

          <p>Pützchens Chaussee 202</p>
        </div>

        <div>
          <h3 className="font-semibold text-lime-600">
            🏸 FOR WHO
          </h3>

          <p className="mt-2">
            Intermediate players
          </p>

          <p>and above</p>
        </div>

      </div>
    </div>
  );
}