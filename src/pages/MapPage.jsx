import React from 'react';
import MapHeader from '../components/map/MapHeader';

const MapPage = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <MapHeader />

      {/* Map Area Placeholder */}
      <div className="flex-grow bg-gray-300 flex items-center justify-center text-gray-600 text-lg">
        Map Area (Placeholder)
      </div>

      {/* Place Summary Card Placeholder */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white shadow-lg rounded-t-xl">
        <h3 className="text-lg font-bold">Place Name</h3>
        <p className="text-sm text-gray-600">Short description of the place.</p>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">View Details</button>
      </div>
    </div>
  );
};

export default MapPage;
