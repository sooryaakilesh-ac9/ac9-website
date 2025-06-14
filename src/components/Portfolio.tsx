
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
              className="group relative bg-white/30 backdrop-blur-2xl shadow-2xl shadow-gray-500/15 border border-white/40 rounded-2xl overflow-hidden hover:shadow-3xl hover:shadow-yellow-500/20 transition-all duration-200 hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced glass reflection effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/10 to-transparent pointer-events-none z-10 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/70 to-transparent z-10"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/70 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 rounded-2xl pointer-events-none z-10"></div>
              
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-yellow-500/90 backdrop-blur-xl border border-yellow-300/40 text-white px-3 py-1 text-xs font-semibold rounded-lg shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-150">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-800 text-sm">Key Results:</h4>
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>

                <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-all duration-150 group-hover:translate-x-1">
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-yellow-500/90 hover:bg-yellow-600/90 backdrop-blur-xl border border-yellow-300/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-150 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 flex items-center mx-auto animate-bounce-in animation-delay-600 shadow-lg">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
