import React from 'react';
import { useNavigate } from 'react-router-dom';
import { exploreCards } from '../../data/homeData';

const ExploreSection = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/explore');
  };

  return (
    <section className="p-4 bg-white mb-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Explore</h2>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {exploreCards.map((card) => (
          <div
            key={card.id}
            className={`flex-shrink-0 w-64 h-32 ${card.bgColor} rounded-lg p-4 flex flex-col justify-between cursor-pointer transition-transform hover:scale-105`}
            onClick={handleCardClick}
          >
            <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
            <p className="text-sm text-gray-700">{card.description}</p>
            <div className="flex justify-between text-xs text-gray-600">
              <span>{card.spots} spots</span>
              <span>{card.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
