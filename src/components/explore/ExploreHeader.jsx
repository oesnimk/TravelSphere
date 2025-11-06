import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ExploreHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="relative p-4 bg-white shadow-sm mb-4 flex items-center">
      <button 
        onClick={() => navigate(-1)} 
        className="mr-4"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <h1 className="text-2xl font-bold text-gray-800">Where do you want to go?</h1>
    </div>
  );
};

export default ExploreHeader;
