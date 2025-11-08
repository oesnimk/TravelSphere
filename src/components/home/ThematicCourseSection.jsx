import React from 'react';
import { useNavigate } from 'react-router-dom';
import { thematicCourse } from '../../data/homeData'; // Corrected import path

const ThematicCourseSection = () => {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate('/guide');
  };

  return (
    <section className="p-4 bg-white mb-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Today's Thematic Course</h2>
      <div 
        className="w-full rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
        onClick={handleCourseClick}
      >
        <img src={thematicCourse.image} alt={thematicCourse.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{thematicCourse.title}</h3>
          <p className="text-sm text-gray-600">{thematicCourse.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ThematicCourseSection;
