import React from 'react';
import { curatedPlaces } from '../../data/exploreData';

const CuratedPlaceList = () => {
  return (
    <ul className="space-y-3">
      {curatedPlaces.map((place) => (
        <li key={place.id} className="p-3 bg-gray-100 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">{place.name}</h3>
          <p className="text-sm text-gray-600">{place.location}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {place.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CuratedPlaceList;
