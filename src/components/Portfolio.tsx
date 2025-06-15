
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50/30 via-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/30 via-transparent to-purple-50/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-yellow-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed businesses across industries with innovative AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <Skeleton className="h-40 w-full" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))
          ) : (
            projects?.map((project, index) => (
              <div
                key={index}
                className="group bg-white/50 backdrop-blur-md border border-white/30 shadow-lg rounded-xl overflow-hidden hover:bg-white/70 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-yellow-500/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-semibold rounded-md">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                        {result}
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors duration-200">
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center">
          <button className="group bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center mx-auto shadow-lg">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
