
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Success <span className="text-yellow-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed businesses across industries with innovative AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl overflow-hidden hover:bg-white/80 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-white px-3 py-1 text-xs font-semibold rounded-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
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

                <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-200">
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center mx-auto">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
