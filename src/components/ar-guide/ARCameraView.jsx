import React from 'react';

const ARCameraView = () => {
  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <p className="text-white text-lg">Camera View Placeholder</p>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-gray-400 w-64 h-64 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">Point at an object</p>
      </div>
    </div>
  );
};

export default ARCameraView;