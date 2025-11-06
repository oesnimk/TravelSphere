import React from 'react';

const RecommendedGuides = ({ guides }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">추천 가이드</h2>
        <button className="text-blue-600 text-sm font-semibold">모두 보기</button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {guides.map((guide) => (
          <div key={guide.id} className="flex bg-gray-100 rounded-lg shadow-sm overflow-hidden">
            <img src={guide.image} alt={guide.title} className="w-24 h-24 object-cover flex-shrink-0" />
            <div className="p-3 flex flex-col justify-center">
              <h3 className="font-semibold text-lg mb-1">{guide.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{guide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedGuides;
