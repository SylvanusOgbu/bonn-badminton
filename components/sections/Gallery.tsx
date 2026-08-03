export default function Gallery() {
  const images = [
    {
      title: "Weekly Training",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
    },
    {
      title: "Friendly Matches",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
    },
    {
      title: "Community",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
    },
    {
      title: "After Game Hangout",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    },
    {
      title: "Tournament Day",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
    },
    {
      title: "New Friends",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
    },
  ];

  return (
    <section
      id="gallery"
      className="max-w-7xl mx-auto px-6 py-14"
    >
      <div className="text-center mb-14">
        <h2 className="text-5xl font-black text-slate-900">
          Gallery
        </h2>

        <p className="mt-4 text-slate-600 text-lg">
          Play together. Improve together. Grow together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}