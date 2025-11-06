import React from 'react';
import { Search, Mic } from 'lucide-react';

const HomeSearchBar = () => {
  return (
    <div className="p-4 bg-white shadow-sm mb-4">
      <div className="flex items-center bg-gray-100 rounded-full p-3">
        <Search size={24} className="text-gray-400 mr-2" />
        <input type="text" placeholder="Search for places, courses..." className="flex-grow bg-transparent outline-none text-gray-700" />
        <Mic size={24} className="text-gray-400 ml-2" />
      </div>
    </div>
  );
};

export default HomeSearchBar;
