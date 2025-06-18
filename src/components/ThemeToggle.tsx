import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import InteractiveCard from './InteractiveCard';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <InteractiveCard intensity={0.8}>
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className={`relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-600 ${
          isDark 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-purple-500/25' 
            : 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/25'
        }`}
        aria-label="Toggle theme"
      >
        {/* Background stars for dark mode */}
        {isDark && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse animation-delay-300"></div>
            <div className="absolute bottom-1 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse animation-delay-600"></div>
          </div>
        )}
        
        {/* Sliding toggle */}
        <div
          className={`absolute top-0.5 w-7 h-7 rounded-full transition-all duration-300 ease-in-out transform ${
            isDark 
              ? 'translate-x-8 bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg' 
              : 'translate-x-0.5 bg-gradient-to-br from-white to-gray-100 shadow-lg'
          }`}
        >
          {/* Sun icon */}
          <Sun 
            className={`absolute inset-0 w-5 h-5 m-1 text-yellow-600 transition-all duration-300 ${
              isDark ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
            }`} 
          />
          
          {/* Moon icon */}
          <Moon 
            className={`absolute inset-0 w-5 h-5 m-1 text-indigo-600 transition-all duration-300 ${
              isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
            }`} 
          />
        </div>
        
        {/* Floating particles for light mode */}
        {!isDark && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full animate-float-fast opacity-60"></div>
            <div className="absolute bottom-1 right-3 w-0.5 h-0.5 bg-white rounded-full animate-float-fast animation-delay-200 opacity-80"></div>
          </div>
        )}
        
        <span className="sr-only">Toggle theme</span>
      </button>
    </InteractiveCard>
  );
};

export default ThemeToggle;