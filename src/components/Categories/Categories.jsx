const categories = [
  "IT",
  "Design",
  "Marketing",
  "Finance",
  "HR",
  "Data Science",
];

const Categories = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">
        Browse by Category
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;