import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Map, Camera, Star } from 'lucide-react';

const BottomNavBar = () => {
  const navItems = [
    { name: 'Explore', icon: Compass, path: '/explore' },
    { name: 'AI Guide', icon: Star, path: '/ai-guide' },
    { name: 'Map', icon: Map, path: '/map' },
    { name: 'Home', icon: Home, path: '/' },
    { name: 'AR', icon: Camera, path: '/ar' },
  ];

  return (
    <nav className="w-full bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around h-16 items-center pb-4 pt-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-medium ${isActive ? 'text-blue-600' : 'text-gray-500'}`
            }
          >
            <item.icon size={24} />
            <span className="mt-1">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
