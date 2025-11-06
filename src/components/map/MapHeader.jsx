import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import HomeSearchBar from '../home/HomeSearchBar';

const MapHeader = () => {
  const navigate = useNavigate();
  const filterChips = ['Museums', 'Galleries', 'Historic Spots', 'Eats'];

  return (
    <div className="p-4 bg-white shadow-sm">
      <div className="flex items-center mb-2">
        <button onClick={() => navigate(-1)} className="mr-2">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <div className="flex-grow">
          <HomeSearchBar />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {filterChips.map((chip) => (
          <span key={chip} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-pointer">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MapHeader;
