import { ArrowUp } from 'lucide-react';

const UserInput = ({ placeholder }) => {
  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-2 bg-blue-500 text-white p-2 rounded-full">
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserInput;
