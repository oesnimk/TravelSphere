import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import MapPage from './pages/MapPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import GuideHomePage from './pages/GuideHomePage';
import AIRecommendedCoursePage from './pages/AIRecommendedCoursePage';
import ARGuidePage from './pages/ARGuidePage';
import CourseDetailPage from './pages/CourseDetailPage';
import BottomNavBar from './components/BottomNavBar';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[375px] h-[812px] bg-white shadow-xl rounded-3xl overflow-hidden">
        <div className="relative h-full flex flex-col">
          <Router>
            <div className="flex-grow overflow-y-auto pb-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/guide" element={<GuideHomePage />} />
              <Route path="/ai-guide" element={<AIRecommendedCoursePage />} />
              <Route path="/ar" element={<ARGuidePage />} />
              <Route path="/place-detail/:id" element={<PlaceDetailPage />} />
              <Route path="/course-detail/:id" element={<CourseDetailPage />} />
            </Routes>
          </div>
            <div className="absolute bottom-0 left-0 right-0"><BottomNavBar /></div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
