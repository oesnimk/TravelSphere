import React from 'react';
import { curatedPlaces } from '../../data/exploreData';

const CuratedPlaceList = () => {
  return (
    <ul className="space-y-4">
      {curatedPlaces.map((place) => (
        <li 
          key={place.id} 
          className="flex items-center p-3 bg-white rounded-lg shadow-sm transition-transform hover:scale-105 cursor-pointer"
        >
          <img 
            src={place.thumbnail} 
            alt={place.name} 
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">{place.name}</h3>
            <p className="text-sm text-gray-600">{place.location}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {place.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CuratedPlaceList;
