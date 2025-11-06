import React from 'react';
import AIRecommendedCourseHeader from '../components/ai-recommended-course/AIRecommendedCourseHeader';
import AIChat from '../components/ai-recommended-course/AIChat';
import UserInput from '../components/ai-recommended-course/UserInput';
import BottomNavBar from '../components/BottomNavBar';
import { aiRecommendedCourseData } from '../data/aiRecommendedCourseData';

const AIRecommendedCoursePage = () => {
  const { location, chatHeader, messages, courseCard, inputPlaceholder } = aiRecommendedCourseData;

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <AIRecommendedCourseHeader city={location.city} country={location.country} />
      <AIChat chatHeader={chatHeader} messages={messages} courseCard={courseCard} />
      <UserInput placeholder={inputPlaceholder} />
      <BottomNavBar />
    </div>
  );
};

export default AIRecommendedCoursePage;
