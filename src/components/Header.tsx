import { Cloud, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InteractiveCard from './InteractiveCard';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', updateScrollY, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  const headerOpacity = Math.min(scrollY / 100, 0.95);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-150 border-b border-yellow-200/50 shadow-lg"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${0.85 + headerOpacity * 0.15})`,
        backdropFilter: 'blur(20px)',
        boxShadow: scrollY > 50 ? '0 10px 30px rgba(245, 158, 11, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <InteractiveCard intensity={0.8}>
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-150">
                <img
                  src="public/Abovecloudai Logo.svg"
                  alt="AboveCloud9.ai Logo"
                  className="w-10 h-8 object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-150">
                aboveCloud9.ai
              </span>
            </Link>
          </InteractiveCard>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/#about", label: "About" },
              { to: "/careers", label: "Careers" },
              { to: "/life-at-ac9", label: "Life at AC9" },
              { to: "/blog", label: "Blog" },
              { href: "/#contact", label: "Contact" }
            ].map((item, index) => (
              <InteractiveCard key={index} intensity={0.6}>
                {item.href ? (
                  <a 
                    href={item.href} 
                    className="text-gray-700 hover:text-yellow-600 transition-all duration-150 font-semibold text-lg relative group px-3 py-2 rounded-lg hover:bg-yellow-50"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-150 group-hover:w-full group-hover:left-0 rounded-full"></span>
                  </a>
                ) : (
                  <Link 
                    to={item.to!} 
                    className="text-gray-700 hover:text-yellow-600 transition-all duration-150 font-semibold text-lg relative group px-3 py-2 rounded-lg hover:bg-yellow-50"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-150 group-hover:w-full group-hover:left-0 rounded-full"></span>
                  </Link>
                )}
              </InteractiveCard>
            ))}
            
            <InteractiveCard intensity={1.0}>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-150 hover:scale-110 hover:shadow-2xl relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150 animate-pulse-fast"></div>
              </button>
            </InteractiveCard>
          </nav>

          <button 
            className="md:hidden p-3 hover:bg-yellow-100 rounded-xl transition-all duration-150 border-2 border-transparent hover:border-yellow-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-yellow-600" /> : <Menu className="w-6 h-6 text-yellow-600" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-yellow-200 shadow-2xl animate-slide-down-fast">
            <div className="px-6 py-6 space-y-6">
              <a href="/#about" className="block text-gray-700 hover:text-yellow-600 transition-all duration-150 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-yellow-50 border-l-4 border-transparent hover:border-yellow-500">
                About
              </a>
              <Link to="/careers" className="block text-gray-700 hover:text-yellow-600 transition-all duration-150 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-yellow-50 border-l-4 border-transparent hover:border-yellow-500">
                Careers
              </Link>
              <Link to="/life-at-ac9" className="block text-gray-700 hover:text-yellow-600 transition-all duration-150 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-yellow-50 border-l-4 border-transparent hover:border-yellow-500">
                Life at AC9
              </Link>
              <Link to="/blog" className="block text-gray-700 hover:text-yellow-600 transition-all duration-150 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-yellow-50 border-l-4 border-transparent hover:border-yellow-500">
                Blog
              </Link>
              <a href="/#contact" className="block text-gray-700 hover:text-yellow-600 transition-all duration-150 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-yellow-50 border-l-4 border-transparent hover:border-yellow-500">
                Contact
              </a>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-150 shadow-lg hover:shadow-xl">
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