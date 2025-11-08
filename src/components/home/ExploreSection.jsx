import React from 'react';
import { useNavigate } from 'react-router-dom';
import { exploreCards } from '../../data/homeData';

const ExploreSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Navigate to a new course detail page
    navigate(`/course-detail/${id}`);
  };

  return (
    <section className="p-4 bg-white mb-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Explore</h2>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {exploreCards.map((card) => ( 
          <div
            key={card.id}
            className="relative flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105 group"
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-lg font-bold">{card.title}</h3>
              <p className="text-gray-200 text-sm mb-2">{card.description}</p>
              <div className="flex justify-between text-xs text-gray-300">
                <span>{card.spots} spots</span>
                <span>{card.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
