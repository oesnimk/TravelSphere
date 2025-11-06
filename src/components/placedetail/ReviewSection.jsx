import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewSection = ({ reviews }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">방문자 리뷰</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 p-3 rounded-lg shadow-sm">
            <div className="flex items-center mb-1">
              <p className="font-semibold mr-2">{review.author}</p>
              <div className="flex text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-1">{review.comment}</p>
            <p className="text-gray-500 text-xs">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
