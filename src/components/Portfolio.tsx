
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchPortfolio } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';

const Portfolio = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['portfolio'],
    queryFn: fetchPortfolio,
  });

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
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-2xl overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-8 space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))
          ) : (
            projects?.map((project, index) => (
              <div
                key={index}
                className="group bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl overflow-hidden hover:bg-white/50 hover:shadow-xl transition-all duration-150 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 text-xs font-semibold rounded-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
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

                  <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-150">
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center">
          <button className="group bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-150 hover:scale-105 flex items-center mx-auto">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
