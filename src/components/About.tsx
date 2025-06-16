
import { useQuery } from '@tanstack/react-query';
import { fetchAboutData } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';
import { CheckCircle, Target, Eye, Users, Heart } from 'lucide-react';

const About = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['aboutData'],
    queryFn: fetchAboutData,
  });

  const { stats = [], benefits = [], leadership = [] } = data || {};

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/30 via-transparent to-blue-50/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Creating A Happier World Hero */}
        <div className="text-center mb-20">
          <div className="relative">
            <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20 px-8 rounded-3xl mb-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Creating A Happier World
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
                  AboveCloud9.AI is an innovative IT start-up founded by tech luminaries from 
                  Silicon Valley giants. We aim to positively impact lives through advanced AI tools 
                  and cutting-edge technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-sm font-medium mb-6 rounded-full">
            <Heart className="w-4 h-4 mr-2" />
            WELCOME TO ABOVECLOUD9.AI
          </div>
        </div>

        {/* Our Mission and Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="bg-white/50 backdrop-blur-md p-8 shadow-lg border border-white/30 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                  alt="Mission representative"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Our Mission
                </h2>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to positively impact people's lives, helping them live more 
              happily, improve their overall well-being, and build a happy and stress-free 
              lifestyle. We believe that by combining advanced AI technology with cutting-edge 
              technology to create solutions that make a real difference in people's 
              daily lives.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-md p-8 shadow-lg border border-white/30 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=face"
                  alt="Team representative"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Who We Are
                </h2>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're an early-stage software company with a mission to positively 
              impact people's lives. Founded by tech luminaries from Silicon Valley 
              giants like Google, Meta, Palo Alto Networks, Oracle, WhatsApp, we're 
              backed by industry veterans from Apple, Amazon, Ericsson, Siemens, and 
              other tech powerhouses.
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-sm font-medium mb-6 rounded-full">
            <Users className="w-4 h-4 mr-2" />
            OUR TEAM
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Meet Our Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {isLoading ? (
              Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="p-6 text-center space-y-3">
                  <Skeleton className="w-32 h-32 rounded-full mx-auto" />
                  <Skeleton className="h-5 w-1/2 mx-auto" />
                  <Skeleton className="h-4 w-1/3 mx-auto" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))
            ) : (
              leadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-md p-8 shadow-lg border border-white/30 rounded-xl text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                  <p className="text-yellow-500 font-semibold mb-4">{leader.role}</p>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">{leader.bio}</p>
                  <div className="text-xs text-gray-500">
                    <p>Ex: Google, Oracle, Palo Alto Networks</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="p-4 text-center space-y-2">
                <Skeleton className="h-6 w-1/2 mx-auto" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
              </div>
            ))
          ) : (
            stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-md p-6 shadow-lg border border-white/30 rounded-xl text-center hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
