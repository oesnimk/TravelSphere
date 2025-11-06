
import React from 'react';
import ARCameraView from '../components/ar-guide/ARCameraView';
import ARGuideHeader from '../components/ar-guide/ARGuideHeader';
import ARLocationInfo from '../components/ar-guide/ARLocationInfo';
import BottomNavBar from '../components/BottomNavBar';

const ARGuidePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <ARGuideHeader />
      <main className="flex-grow relative">
        <ARCameraView />
        <ARLocationInfo />
      </main>
      <BottomNavBar />
    </div>
  );
};

export default ARGuidePage;
