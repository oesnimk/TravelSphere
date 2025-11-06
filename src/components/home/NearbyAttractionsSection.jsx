import React from 'react';
import { useNavigate } from 'react-router-dom';
import { nearbyAttractions } from '../../data/homeData';

const NearbyAttractionsSection = () => {
  const navigate = useNavigate();

  const handleAttractionClick = (id) => {
    navigate(`/place-detail/${id}`);
  };

  return (
    <section className="p-4 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Nearby Attractions</h2>
      <ul className="space-y-3">
        {nearbyAttractions.map((attraction) => (
          <li 
            key={attraction.id} 
            className="p-3 bg-gray-100 rounded-lg shadow-sm cursor-pointer transition-colors hover:bg-gray-200"
            onClick={() => handleAttractionClick(attraction.id)}
          >
            <h3 className="text-lg font-semibold text-gray-800">{attraction.name}</h3>
            <p className="text-sm text-gray-600">{attraction.description}</p>
            <p className="text-xs text-gray-500">{attraction.distance}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NearbyAttractionsSection;
