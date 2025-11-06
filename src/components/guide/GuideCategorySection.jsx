import React from 'react';

const GuideCategorySection = ({ categories }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">카테고리</h2>
        <button className="text-blue-600 text-sm font-semibold">모두 보기</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center p-3 bg-gray-100 rounded-lg shadow-sm">
            <img src={category.image} alt={category.name} className="w-16 h-16 object-cover rounded-full mb-2" />
            <p className="text-sm font-medium text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideCategorySection;
