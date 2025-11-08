import React from 'react';
import HomeHeader from '../components/home/HomeHeader';
import HomeSearchBar from '../components/home/HomeSearchBar';
import ThematicCourseSection from '../components/home/ThematicCourseSection';
import NearbyAttractionsSection from '../components/home/NearbyAttractionsSection'; // Corrected import path
import ExploreSection from '../components/home/ExploreSection';

const HomePage = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <HomeHeader />

      <HomeSearchBar />

      <div className="flex-grow overflow-y-auto">
        <ExploreSection />

        <ThematicCourseSection />

        <NearbyAttractionsSection />
      </div>
    </div>
  );
};

export default HomePage;
