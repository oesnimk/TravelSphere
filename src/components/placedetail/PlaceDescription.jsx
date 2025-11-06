import React from 'react';

const PlaceDescription = ({ description }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">장소 설명</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default PlaceDescription;
