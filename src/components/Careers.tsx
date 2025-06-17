import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Careers = () => {
  const [currentAdvantage, setCurrentAdvantage] = useState(0);

  const advantages = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Enjoy rewards at or above industry standards, with additional benefits for high performers."
    },
    {
      icon: Briefcase,
      title: "Unparalleled Learning Experience", 
      description: "Work alongside brilliant minds from top tech companies and push the boundaries of innovation."
    },
    {
      icon: MapPin,
      title: "Meaningful Impact",
      description: "Work on projects that directly contribute to people's happiness and wellbeing."
    }
  ];

  const nextAdvantage = () => {
    setCurrentAdvantage((prev) => (prev + 1) % advantages.length);
  };

  const prevAdvantage = () => {
    setCurrentAdvantage((prev) => (prev - 1 + advantages.length) % advantages.length);
  };

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-sm font-medium mb-6 rounded-full">
            <Briefcase className="w-4 h-4 mr-2" />
            CAREERS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Help us create AI solutions that make a real difference in people's lives. Work with industry veterans from top tech companies.
          </p>
        </div>

        {/* Advantages Carousel */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Advantages of Working With Us
          </h3>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/50 backdrop-blur-md p-8 border border-white/30 shadow-lg rounded-xl text-center min-h-[200px] flex flex-col justify-center">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {React.createElement(advantages[currentAdvantage].icon, { className: "w-8 h-8" })}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{advantages[currentAdvantage].title}</h4>
              <p className="text-gray-600">{advantages[currentAdvantage].description}</p>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevAdvantage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextAdvantage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {advantages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAdvantage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentAdvantage ? 'bg-yellow-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to join our team and make a difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/careers"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              View Open Positions
            </Link>
            <Link 
              to="/life-at-ac9"
              className="inline-block bg-white hover:bg-gray-50 text-gray-800 border-2 border-yellow-500 hover:border-yellow-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Life at AC9
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;