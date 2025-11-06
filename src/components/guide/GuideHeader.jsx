import React from 'react';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GuideHeader = ({ currentCity }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 text-white">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-2xl font-bold">도시/지역 선택</h1>
        <div className="w-6"></div>
      </div>
      <div className="bg-[#374151] p-4 rounded-lg shadow-md flex items-center justify-between">
        <span className="text-xl font-bold">{currentCity}</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default GuideHeader;