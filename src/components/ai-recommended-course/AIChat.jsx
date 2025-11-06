import { Compass, MapPin } from 'lucide-react';

const AIChat = ({ chatHeader, messages, courseCard }) => {
  const highlightText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;

    const parts = [];
    let lastIndex = 0;

    highlights.forEach(highlight => {
      const index = text.indexOf(highlight, lastIndex);
      if (index !== -1) {
        parts.push(text.substring(lastIndex, index));
        parts.push(
          <span key={highlight + index} className="text-green-600 font-semibold">
            {highlight}
          </span>
        );
        lastIndex = index + highlight.length;
      }
    });

    parts.push(text.substring(lastIndex));
    return parts;
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {/* AI Chat Header */}
      <div className="text-center my-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center">
          <span role="img" aria-label="crown" className="mr-2">👑</span>
          {chatHeader}
        </h2>
      </div>

      {/* Messages */}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`p-4 rounded-2xl max-w-[80%] ${message.sender === 'user'
                ? 'bg-gray-700 text-white'
                : 'bg-gray-100 text-gray-800'
              } ${message.sender === 'ai' && message.text.length > 100 ? 'max-w-[95%] leading-relaxed' : ''}`}
          >
            {message.sender === 'ai' && message.highlights
              ? highlightText(message.text, message.highlights)
              : message.text}
          </div>
        </div>
      ))}

      {/* Course Card */}
      {courseCard && (
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <Compass className="text-gray-500 mr-3" size={24} />
            <h3 className="font-semibold text-gray-900">{courseCard.title}</h3>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <span>{courseCard.distance}</span>
            <MapPin className="ml-1" size={16} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
