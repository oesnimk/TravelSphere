import React from 'react';
import { ChevronLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ARGuideHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <button onClick={() => navigate(-1)}>
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-lg font-semibold">AR Guide</h1>
      <MoreVertical size={24} />
    </header>
  );
};

export default ARGuideHeader;
