import { MoreVertical, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIRecommendedCourseHeader = ({ city, country }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white p-4 border-b border-gray-200 flex items-center">
      <button onClick={() => navigate(-1)} className="mr-4">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <div className="flex-grow">
        <h1 className="text-2xl font-bold text-gray-900">{city}</h1>
        <p className="text-sm text-gray-500">{country}</p>
      </div>
      <button>
        <MoreVertical className="text-gray-600" />
      </button>
    </header>
  );
};

export default AIRecommendedCourseHeader;
