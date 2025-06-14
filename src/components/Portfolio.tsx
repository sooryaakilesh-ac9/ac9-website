
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Healthcare AI Platform",
      category: "Healthcare",
      description: "Revolutionizing patient care with predictive analytics and automated diagnostic assistance.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      results: ["40% faster diagnosis", "95% accuracy rate", "50% cost reduction"]
    },
    {
      title: "Retail Optimization Suite",
      category: "Retail",
      description: "Advanced inventory management and customer behavior analysis for e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      results: ["30% inventory optimization", "25% sales increase", "60% better forecasting"]
    },
    {
      title: "Financial Risk Assessment",
      category: "Finance",
      description: "Real-time fraud detection and risk analysis system for banking institutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      results: ["99.8% fraud detection", "80% faster processing", "70% risk reduction"]
    },
    {
      title: "Manufacturing Automation",
      category: "Manufacturing",
      description: "Smart factory solutions with predictive maintenance and quality control systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      results: ["35% efficiency gain", "90% less downtime", "45% quality improvement"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Success <span className="text-yellow-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Discover how we've transformed businesses across industries with innovative AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl shadow-2xl shadow-gray-500/10 border border-white/20 overflow-hidden hover:shadow-3xl hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glass reflection effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent z-10"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/40 via-transparent to-transparent z-10"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-yellow-500/80 backdrop-blur-md border border-yellow-300/30 text-white px-3 py-1 text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-800 text-sm">Key Results:</h4>
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 mr-3 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>

                <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-300 group-hover:translate-x-2">
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-yellow-500/80 hover:bg-yellow-600/80 backdrop-blur-md border border-yellow-300/30 text-white px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 flex items-center mx-auto animate-bounce-in animation-delay-600">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
