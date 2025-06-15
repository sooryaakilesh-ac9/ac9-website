
import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';

const Services = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices
  });

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 via-transparent to-orange-100/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="p-6 space-y-4">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-8 w-full rounded-lg" />
              </div>
            ))
          ) : (
            services?.map((service, index) => (
              <div
                key={index}
                className="group bg-white/50 backdrop-blur-md p-6 border border-white/30 shadow-lg rounded-xl hover:bg-white/70 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] flex flex-col"
              >
                <div className="w-12 h-12 bg-yellow-100/80 text-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-white/60 hover:bg-yellow-500 border border-white/50 hover:border-yellow-400 text-gray-700 hover:text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.02]">
                  Learn More
                </button>
              </div>
            ))
          )}
        </div>

        <div className="text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
