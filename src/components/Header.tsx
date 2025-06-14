
import { Cloud, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">aboveCloud9.ai</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-yellow-500 transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-yellow-500 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-500 transition-colors duration-200 font-medium">
              Contact
            </a>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-yellow-500 transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#about" className="block text-gray-600 hover:text-yellow-500 transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#contact" className="block text-gray-600 hover:text-yellow-500 transition-colors duration-200 font-medium">
                Contact
              </a>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
