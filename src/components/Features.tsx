
import { useQuery } from '@tanstack/react-query';
import { fetchFeatures } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';

const Features = () => {
  const { data: features, isLoading } = useQuery({
    queryKey: ['features'],
    queryFn: fetchFeatures,
  });

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden">
      {/* Background glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="text-yellow-500"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform can transform your operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="p-6 space-y-3">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))
          ) : (
            features?.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/40 backdrop-blur-md p-6 border border-white/30 shadow-lg rounded-xl hover:bg-white/60 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
