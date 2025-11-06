import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PlaceHeader = ({ image, title }) => {
  const navigate = useNavigate();

  return (
    <div className="relative h-60 bg-gray-200">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default PlaceHeader;
