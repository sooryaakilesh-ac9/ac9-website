
import { useQuery } from '@tanstack/react-query';
import { fetchAboutData } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';
import { CheckCircle, Target, Eye } from 'lucide-react';

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
        
        {/* Mission and Vision */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-yellow-500">aboveCloud9.ai</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            We're pioneering the future of business intelligence through artificial intelligence, 
            helping organizations transcend traditional limitations and achieve unprecedented growth.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/50 backdrop-blur-md p-6 shadow-lg border border-white/30 rounded-xl transition-all duration-200 hover:bg-white/70 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-yellow-100/80 mx-auto mb-4 rounded-lg flex items-center justify-center border border-yellow-200/50 shadow-sm">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To democratize AI technology and make it accessible for businesses of all sizes, 
                enabling them to compete in the digital economy with intelligent automation and insights.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-md p-6 shadow-lg border border-white/30 rounded-xl transition-all duration-200 hover:bg-white/70 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-yellow-100/80 mx-auto mb-4 rounded-lg flex items-center justify-center border border-yellow-200/50 shadow-sm">
                <Eye className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A world where every business, regardless of size or industry, can harness the power of AI 
                to innovate, grow, and create meaningful impact in their communities.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business results.
            </p>

            <div className="space-y-3 mb-8">
              {isLoading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Skeleton className="w-5 h-5 rounded-full" />
                    <Skeleton className="h-5 w-full" />
                  </div>
                ))
              ) : (
                benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))
              )}
            </div>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
              Learn More About Us
            </button>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
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
                    className="bg-white/50 backdrop-blur-md p-4 shadow-lg border border-white/30 rounded-xl text-center hover:shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    <div className="text-2xl font-bold text-yellow-500 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-yellow-500">Leadership</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced leaders drive innovation and guide our mission to transform businesses with AI.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="p-6 text-center space-y-3">
                <Skeleton className="w-20 h-20 rounded-xl mx-auto" />
                <Skeleton className="h-5 w-1/3 mx-auto" />
                <Skeleton className="h-4 w-1/4 mx-auto" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))
          ) : (
            leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-md p-6 shadow-lg border border-white/30 rounded-xl text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
              >
                <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                <p className="text-yellow-500 font-semibold mb-3">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{leader.bio}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
