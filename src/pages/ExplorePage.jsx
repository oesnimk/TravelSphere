import React, { useState } from 'react';
import ExploreHeader from '../components/explore/ExploreHeader';
import HomeSearchBar from '../components/home/HomeSearchBar';
import CategoryTabs from '../components/explore/CategoryTabs';
import PlaceCard from '../components/explore/PlaceCard';
import { popularPlaces } from '../data/exploreData';
import CuratedPlaceList from '../components/explore/CuratedPlaceList';

const ExplorePage = () => {
  const [activeCategory, setActiveCategory] = useState('Cultural'); // Default active category

  const filteredPlaces = popularPlaces.filter(
    (place) => place.category === activeCategory
  );

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <ExploreHeader />
      <HomeSearchBar />

      <div className="flex-grow overflow-y-auto">
        {/* Popular Places Section */}
        <section className="p-4 bg-white mb-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Popular Places</h2>
          <CategoryTabs onSelectCategory={setActiveCategory} />
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </section>

        <section className="p-4 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Curated for You</h2>
          <CuratedPlaceList />
        </section>
      </div>
    </div>
  );
};

export default ExplorePage;
