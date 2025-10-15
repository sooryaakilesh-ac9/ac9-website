import { Cloud, Menu, X, ArrowRight, Users, Briefcase, Heart, Mail, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InteractiveCard from './InteractiveCard';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const headerOpacity = Math.min(scrollY / 100, 0.95);

  const navigationItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: Users },
    { to: "/careers", label: "Careers", icon: Briefcase },
    { to: "/life-at-ac9", label: "Life at AC9", icon: Heart },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  const handleMobileMenuClick = () => {
    setIsMenuOpen(false);
  };

  const handleHamburgerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveRoute = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-150 border-b border-yellow-200/50 shadow-lg"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${0.85 + headerOpacity * 0.15})`,
          backdropFilter: 'blur(20px)',
          boxShadow: scrollY > 50 ? '0 10px 30px rgba(245, 158, 11, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-[70.4px]">
            {/* Logo */}
            <InteractiveCard intensity={0.8}>
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-11 h-11 sm:w-[52.8px] sm:h-[52.8px] bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-150">
                  <img
                    src="/Abovecloudai Logo.svg"
                    alt="AboveCloud9.AI Logo"
                    className="w-[26.4px] h-[26.4px] sm:w-[35.2px] sm:h-[35.2px] object-contain"
                  />
                </div>
                <span className="text-[19.8px] sm:text-[26.4px] font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-150 hidden xs:block">
                  AboveCloud9.AI
                </span>
                {/* Shorter version for very small screens */}
                <span className="text-[19.8px] font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-yellow-500 transition-all duration-150 block xs:hidden">
                  AC9
                </span>
              </Link>
            </InteractiveCard>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {/* Navigation Tabs */}
              <div className="flex items-center space-x-1 bg-gray-100/80 backdrop-blur-sm rounded-xl p-1 border border-gray-200/50">
                {navigationItems.map((item, index) => (
                  <InteractiveCard key={index} intensity={0.6}>
                    <Link 
                      to={item.to} 
                      className={`flex items-center space-x-2 px-[17.6px] py-[8.8px] rounded-lg font-semibold text-[15.4px] xl:text-[17.6px] transition-all duration-200 relative ${
                        isActiveRoute(item.to) 
                          ? 'bg-white text-yellow-600 shadow-md border border-yellow-200' 
                          : 'text-gray-600 hover:text-yellow-600 hover:bg-white/50'
                      }`}
                    >
                      <item.icon className="w-[17.6px] h-[17.6px]" />
                      <span>{item.label}</span>
                    </Link>
                  </InteractiveCard>
                ))}
              </div>
              
              {/* CTA Button */}
              {/* <InteractiveCard intensity={1.0}>
                <Link 
                  to="/careers"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-2 rounded-xl font-bold transition-all duration-150 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 ml-4"
                >
                  <span>Join Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </InteractiveCard> */}
            </nav>

            {/* Mobile Navigation Controls */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile CTA Button */}
              <InteractiveCard intensity={0.8}>
                <Link 
                  to="/careers"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-[17.6px] py-[8.8px] rounded-lg font-bold text-[15.4px] transition-all duration-150 hover:scale-105 shadow-lg flex items-center space-x-1"
                >
                  <span>Join</span>
                  <ArrowRight className="w-[13.2px] h-[13.2px]" />
                </Link>
              </InteractiveCard>
              
              {/* Hamburger Menu Button - Fixed with proper clickable area */}
              <div className="mobile-menu-container">
                <button 
                  onClick={handleHamburgerClick}
                  className="relative w-[52.8px] h-[52.8px] bg-yellow-50 hover:bg-yellow-100 border-2 border-yellow-200 hover:border-yellow-300 rounded-xl transition-all duration-150 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMenuOpen}
                  type="button"
                >
                  <div className="relative w-[26.4px] h-[26.4px] flex items-center justify-center">
                    {isMenuOpen ? (
                      <X className="w-[22px] h-[22px] text-yellow-600 transition-transform duration-200 group-hover:scale-110" />
                    ) : (
                      <Menu className="w-[22px] h-[22px] text-yellow-600 transition-transform duration-200 group-hover:scale-110" />
                    )}
                  </div>
                  
                  {/* Visual feedback overlay */}
                  <div className="absolute inset-0 bg-yellow-200 opacity-0 group-active:opacity-30 rounded-xl transition-opacity duration-100"></div>
                </button>
              </div>
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
          <div className="mobile-menu-container absolute top-[70.4px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-yellow-200 shadow-2xl animate-slide-down-fast">
            <div className="px-4 sm:px-6 py-6">
              {/* Mobile Navigation Tabs */}
              <div className="space-y-2 mb-6">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    <Link 
                      to={item.to}
                      onClick={handleMobileMenuClick}
                      className={`flex items-center space-x-3 font-semibold text-[19.8px] py-[13.2px] px-[17.6px] rounded-lg transition-all duration-150 ${
                        isActiveRoute(item.to) 
                          ? 'text-yellow-600 bg-yellow-50 border-l-4 border-yellow-500' 
                          : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 border-l-4 border-transparent hover:border-yellow-500'
                      }`}
                    >
                      <item.icon className="w-[22px] h-[22px]" />
                      <span>{item.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA Section */}
              <div className="pt-4 border-t border-gray-200">
                <Link 
                  to="/careers"
                  onClick={handleMobileMenuClick}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-[26.4px] py-[17.6px] rounded-xl font-bold text-[19.8px] transition-all duration-150 hover:scale-105 shadow-lg"
                >
                  <Briefcase className="w-[22px] h-[22px]" />
                  <span>Join Our Team</span>
                  <ArrowRight className="w-[22px] h-[22px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;