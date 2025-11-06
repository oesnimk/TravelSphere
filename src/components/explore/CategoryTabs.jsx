import React, { useState } from 'react';
import { popularPlacesCategories } from '../../data/exploreData';

const CategoryTabs = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(popularPlacesCategories[0]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="flex space-x-3 overflow-x-auto pb-2 mb-4">
      {popularPlacesCategories.map((category) => (
        <button
          key={category}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
