import React from 'react';
import PlaceHeader from '../components/placedetail/PlaceHeader';
import PlaceInfo from '../components/placedetail/PlaceInfo';
import PlaceDescription from '../components/placedetail/PlaceDescription';
import CourseSection from '../components/placedetail/CourseSection';
import ReviewSection from '../components/placedetail/ReviewSection';
import { placeDetailData } from '../data/placeDetailData';

const PlaceDetailPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <PlaceHeader
        image={placeDetailData.image}
        title={placeDetailData.title}
      />
      <div className="p-4">
        <PlaceInfo
          tags={placeDetailData.tags}
          address={placeDetailData.address}
          rating={placeDetailData.rating}
        />
        <PlaceDescription description={placeDetailData.description} />
        <CourseSection courses={placeDetailData.courses} />
        <ReviewSection reviews={placeDetailData.reviews} />
      </div>
    </div>
  );
};

export default PlaceDetailPage;
