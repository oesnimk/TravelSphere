import React from 'react';

const CourseSection = ({ courses }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">추천 코스</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
            <div className="p-3">
              <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
