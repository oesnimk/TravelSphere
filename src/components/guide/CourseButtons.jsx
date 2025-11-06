import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 mb-6">
      <button 
        className="flex-1 h-12 bg-[#3B82F6] text-white font-bold rounded-lg shadow-md"
        onClick={() => navigate('/map')}
      >
        Start Course
      </button>
      <button 
        className="flex-1 h-12 border-2 border-[#3B82F6] text-[#3B82F6] font-bold rounded-lg shadow-md"
        onClick={() => navigate('/ai-guide')}
      >
        Plan This Tour
      </button>
    </div>
  );
};

export default CourseButtons;
