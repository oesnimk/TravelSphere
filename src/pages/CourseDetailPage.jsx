import React from 'react';
import { useParams } from 'react-router-dom';
import { courseDetails } from '../data/courseDetailData';
import PlaceHeader from '../components/placedetail/PlaceHeader';
import PlaceInfo from '../components/placedetail/PlaceInfo';
import PlaceDescription from '../components/placedetail/PlaceDescription';
import CourseSection from '../components/placedetail/CourseSection';
import ReviewSection from '../components/placedetail/ReviewSection';

const CourseDetailPage = () => {
  const { id } = useParams();
  const data = courseDetails[id];

  if (!data) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Course not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <PlaceHeader image={data.image} title={data.title} />
      <div className="p-4">
        <PlaceInfo
          tags={data.tags}
          address={data.address}
          rating={data.rating}
        />
        <PlaceDescription description={data.description} />
        <CourseSection courses={data.courses} />
        <ReviewSection reviews={data.reviews} />
      </div>
    </div>
  );
};

export default CourseDetailPage;