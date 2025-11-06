import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandmarksList = ({ landmarks }) => {
  const navigate = useNavigate();

  const handleLandmarkClick = (id) => {
    navigate(`/place-detail/${id}`);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-white mb-4">Recommended Landmarks</h2>
      {landmarks.map((landmark) => (
        <div 
          key={landmark.id} 
          className="flex items-center bg-[#374151] rounded-lg p-4 mb-3 shadow-md cursor-pointer transition-colors hover:bg-[#4b5563]"
          onClick={() => handleLandmarkClick(landmark.id)}
        >
          <img src={landmark.image} alt={landmark.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-white">{landmark.name}</h3>
            <p className="text-sm text-white">{landmark.description}</p>
          </div>
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      ))}
    </div>
  );
};

export default LandmarksList;
