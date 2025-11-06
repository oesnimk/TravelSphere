import React from 'react';
import { categories } from '../../data/homeData';

const CategoryFilterSection = () => {
  return (
    <section className="p-4 bg-white mb-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Filter by</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm cursor-pointer hover:bg-purple-200"
          >
            {category}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilterSection;
