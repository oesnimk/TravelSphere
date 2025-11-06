import React from 'react';
import GuideHeader from '../components/guide/GuideHeader';
import LandmarksList from '../components/guide/LandmarksList';
import CourseButtons from '../components/guide/CourseButtons';
import AIRecommendation from '../components/guide/AIRecommendation';
import { guideData } from '../data/guideData';

const GuideHomePage = () => {
  return (
    <div className="bg-[#1F2937] min-h-screen text-white p-4">
      <GuideHeader currentCity={guideData.currentCity} />
      <LandmarksList landmarks={guideData.landmarks} />
      <CourseButtons />
      <AIRecommendation suggestion={guideData.aiSuggestion} />
    </div>
  );
};

export default GuideHomePage;