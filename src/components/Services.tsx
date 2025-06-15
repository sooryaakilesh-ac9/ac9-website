
import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';

const Services = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices
  });

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive sustainable growth.
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
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
            ))
          ) : (
            services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/30 backdrop-blur-lg p-8 border border-white/20 shadow-lg rounded-2xl hover:bg-white/50 hover:shadow-xl transition-all duration-150 hover:-translate-y-1 flex flex-col"
              >
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-150">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-150">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-auto w-full bg-white/50 hover:bg-yellow-500 border border-white/40 hover:border-yellow-400 text-gray-700 hover:text-white py-3 px-4 rounded-xl font-semibold transition-all duration-150">
                  Learn More
                </button>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-16">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-150 hover:scale-105">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
