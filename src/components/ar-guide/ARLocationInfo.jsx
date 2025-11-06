import React from 'react';
import { arGuideData } from '../../data/arGuideData';
import { ChevronsUp, BookOpen, Volume2 } from 'lucide-react';

const ARLocationInfo = () => {
  const { recognizedPoint } = arGuideData;

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-t-2xl p-4 text-white">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="text-xl font-bold">{recognizedPoint.name}</h2>
          <p className="text-sm text-gray-300">{recognizedPoint.description}</p>
        </div>
        <button className="text-blue-400 font-semibold">Details</button>
      </div>
      <div className="flex justify-around items-center pt-3 border-t border-gray-700">
        <button className="flex flex-col items-center gap-1">
          <ChevronsUp size={24} />
          <span className="text-xs">Story Mode</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <BookOpen size={24} />
          <span className="text-xs">Text View</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Volume2 size={24} />
          <span className="text-xs">Audio Guide</span>
        </button>
      </div>
    </div>
  );
};

export default ARLocationInfo;
