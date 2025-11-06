import React from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const PlaceInfo = ({ tags, address, rating }) => {
  return (
    <div className="mb-4">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center text-gray-600 mb-1">
        <FaMapMarkerAlt className="mr-1" />
        <span>{address}</span>
      </div>
      <div className="flex items-center text-yellow-500">
        <FaStar className="mr-1" />
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default PlaceInfo;
