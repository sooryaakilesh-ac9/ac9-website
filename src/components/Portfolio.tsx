
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise AI Dashboard",
      description: "Real-time analytics platform for Fortune 500 company with predictive insights and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Analytics",
      results: "40% efficiency increase"
    },
    {
      title: "Smart Manufacturing System",
      description: "IoT-integrated AI system for predictive maintenance and quality control in automotive manufacturing.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
      category: "Manufacturing",
      results: "60% downtime reduction"
    },
    {
      title: "Retail Intelligence Platform",
      description: "Customer behavior analysis and inventory optimization for multi-location retail chain.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "Retail",
      results: "25% revenue increase"
    },
    {
      title: "Healthcare AI Assistant",
      description: "Clinical decision support system with natural language processing for medical professionals.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      category: "Healthcare",
      results: "50% faster diagnosis"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Our <span className="text-yellow-500 animate-slide-in-left animation-delay-200">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Discover how we've helped businesses across industries achieve remarkable transformations 
            with our AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up transform"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-3 py-1 group-hover:bg-yellow-100 transition-colors duration-300">
                    {project.category}
                  </span>
                  <span className="text-sm font-semibold text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {project.results}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                <button className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-all duration-300 group-hover:translate-x-2">
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1 animate-fade-in-up animation-delay-600">
            View More Projects
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
