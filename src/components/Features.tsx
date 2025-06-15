
import { useQuery } from '@tanstack/react-query';
import { fetchFeatures } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';

const Features = () => {
  const { data: features, isLoading } = useQuery({
    queryKey: ['features'],
    queryFn: fetchFeatures,
  });

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-white to-yellow-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Powerful Features for
            <span className="text-yellow-500"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform can transform your operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="p-8 space-y-4">
                <Skeleton className="h-16 w-16 rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))
          ) : (
            features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/30 backdrop-blur-lg p-8 border border-white/20 shadow-lg rounded-2xl hover:bg-white/50 hover:shadow-xl transition-all duration-150 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-150`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-150">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
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
