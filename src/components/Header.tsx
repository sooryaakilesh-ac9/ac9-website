import { Cloud, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InteractiveCard from './InteractiveCard';
import ThemeToggle from './ThemeToggle';

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

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const headerOpacity = Math.min(scrollY / 100, 0.95);

  const navigationItems = [
    { href: "/#about", label: "About" },
    { to: "/careers", label: "Careers" },
    { to: "/life-at-ac9", label: "Life at AC9" },
    { to: "/blog", label: "Blog" },
  ];

  const handleMobileMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-150 border-b border-yellow-200/50 dark:border-gray-700/50 shadow-lg"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${0.85 + headerOpacity * 0.15})`,
          backdropFilter: 'blur(20px)',
          boxShadow: scrollY > 50 ? '0 10px 30px rgba(245, 158, 11, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <InteractiveCard intensity={0.8}>
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-150">
                  <img
                    src="/Abovecloudai Logo.svg"
                    alt="AboveCloud9.ai Logo"
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-150 hidden xs:block">
                  AboveCloud9.ai
                </span>
                {/* Shorter version for very small screens */}
                <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-150 block xs:hidden">
                  AC9
                </span>
              </Link>
            </InteractiveCard>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item, index) => (
                <InteractiveCard key={index} intensity={0.6}>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-150 font-semibold text-base xl:text-lg relative group px-3 py-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-150 group-hover:w-full group-hover:left-0 rounded-full"></span>
                    </a>
                  ) : (
                    <Link 
                      to={item.to!} 
                      className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-150 font-semibold text-base xl:text-lg relative group px-3 py-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-150 group-hover:w-full group-hover:left-0 rounded-full"></span>
                    </Link>
                  )}
                </InteractiveCard>
              ))}
              
              <ThemeToggle />
            </nav>

            {/* Mobile Navigation Controls */}
            <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
              <ThemeToggle />
              <button 
                className="mobile-menu-container p-2 sm:p-3 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 rounded-xl transition-all duration-150 border-2 border-transparent hover:border-yellow-300 dark:hover:border-yellow-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile menu */}
          <div className="mobile-menu-container absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-yellow-200 dark:border-gray-700 shadow-2xl animate-slide-down-fast">
            <div className="px-4 sm:px-6 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.href ? (
                    <a 
                      href={item.href}
                      onClick={handleMobileMenuClick}
                      className="block text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-150 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 border-l-4 border-transparent hover:border-yellow-500"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link 
                      to={item.to!}
                      onClick={handleMobileMenuClick}
                      className="block text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-150 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 border-l-4 border-transparent hover:border-yellow-500"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;