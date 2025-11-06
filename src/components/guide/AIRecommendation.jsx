import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIRecommendation = ({ suggestion }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-[#374151] p-5 rounded-lg shadow-md flex items-start space-x-3 mb-6 cursor-pointer transition-colors hover:bg-[#4b5563]"
      onClick={() => navigate('/ai-guide')}
    >
      <MessageSquare className="text-white mt-1" size={20} />
      <p className="text-white text-base flex-1">
        {suggestion}
      </p>
    </div>
  );
};

export default AIRecommendation;
