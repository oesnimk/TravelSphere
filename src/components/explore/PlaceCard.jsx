import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlaceCard = ({ place }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/place-detail/${place.id}`);
  };

  return (
    <div 
      className="flex-shrink-0 w-48 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={handleCardClick}
    >
      <img src={place.thumbnail} alt={place.name} className="w-full h-32 object-cover" />
      <div className="p-3">
        <p className="text-xs text-gray-500 mb-1">{place.category}</p>
        <h3 className="text-base font-semibold text-gray-800 mb-1 truncate">{place.name}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{place.description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
