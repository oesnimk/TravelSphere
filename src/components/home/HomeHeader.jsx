import React from 'react';
import { User } from 'lucide-react';

const HomeHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <h1 className="text-2xl font-bold text-gray-800">Where do you want to go?</h1>
      <div className="p-2 bg-gray-200 rounded-full">
        <User size={24} className="text-gray-600" />
      </div>
    </div>
  );
};

export default HomeHeader;
