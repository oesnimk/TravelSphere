import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import MapPage from './pages/MapPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import GuideHomePage from './pages/GuideHomePage';
import AIRecommendedCoursePage from './pages/AIRecommendedCoursePage';
import ARGuidePage from './pages/ARGuidePage';
import BottomNavBar from './components/BottomNavBar';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="relative w-[375px] h-[812px] bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col">
        <Router>
          <div className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/guide" element={<GuideHomePage />} />
              <Route path="/ai-guide" element={<AIRecommendedCoursePage />} />
              <Route path="/ar" element={<ARGuidePage />} />
              <Route path="/place-detail/:id" element={<PlaceDetailPage />} />
            </Routes>
          </div>
          <BottomNavBar />
        </Router>
      </div>
    </div>
  );
}

export default App;
