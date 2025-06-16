import { useQuery } from '@tanstack/react-query';
import { fetchAboutData } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';
import { Users, Heart } from 'lucide-react';

const About = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['aboutData'],
    queryFn: fetchAboutData,
  });

  const { leadership = [] } = data || {};

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/30 via-transparent to-blue-50/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-sm font-medium mb-6 rounded-full">
            <Heart className="w-4 h-4 mr-2" />
            ABOUT US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>
        </div>

        {/* Main Content Grid - Mission/Vision on Left, Founders on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Mission and Who We Are */}
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-md p-8 shadow-lg border border-white/30 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to positively impact people's lives, helping them live more 
                happily, improve their overall well-being, and build a happy and stress-free 
                lifestyle. We believe in combining advanced AI technology with cutting-edge 
                solutions to create meaningful differences in people's daily lives.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-md p-8 shadow-lg border border-white/30 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're an early-stage software company founded by tech luminaries from Silicon Valley 
                giants like Google, Meta, Palo Alto Networks, Oracle, and WhatsApp. We're backed by 
                industry veterans from Apple, Amazon, Ericsson, Siemens, and other tech powerhouses.
              </p>
            </div>
          </div>

          {/* Right Side - Leadership Section */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-sm font-medium mb-6 rounded-full">
              <Users className="w-4 h-4 mr-2" />
              LEADERSHIP
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Meet Our Founders
            </h3>

            <div className="space-y-6">
              {isLoading ? (
                Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="p-6 space-y-3">
                    <Skeleton className="w-24 h-24 rounded-full" />
                    <Skeleton className="h-5 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))
              ) : (
                leadership.map((leader, index) => (
                  <div
                    key={index}
                    className="bg-white/50 backdrop-blur-md p-6 shadow-lg border border-white/30 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-start space-x-6"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full shadow-lg">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
                      <p className="text-yellow-500 font-semibold mb-3">{leader.role}</p>
                      <p className="text-gray-600 leading-relaxed text-sm">{leader.bio}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;