
import { CheckCircle, Target, Eye, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Companies Transformed" },
    { number: "99.9%", label: "Uptime Guaranteed" },
    { number: "24/7", label: "Expert Support" },
    { number: "150%", label: "Average ROI Increase" }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase productivity with smart automation",
    "Make data-driven decisions faster",
    "Scale your business without limits"
  ];

  const leadership = [
    {
      name: "John Smith",
      role: "Chairman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with 20+ years in technology and business transformation."
    },
    {
      name: "Sarah Johnson",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "AI expert and strategic innovator driving our mission to transform businesses."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission and Vision */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            About <span className="text-yellow-500">aboveCloud9.ai</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed animate-fade-in-up animation-delay-200">
            We're pioneering the future of business intelligence through artificial intelligence, 
            helping organizations transcend traditional limitations and achieve unprecedented growth.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/40 backdrop-blur-2xl p-8 shadow-lg border border-white/50 rounded-2xl animate-fade-in-up animation-delay-400 relative overflow-hidden">
              {/* Glass effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/60 via-transparent to-transparent"></div>
              
              <div className="w-16 h-16 bg-yellow-100/50 backdrop-blur-xl mx-auto mb-6 rounded-xl flex items-center justify-center border border-yellow-200/40 shadow-lg relative z-10">
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To democratize AI technology and make it accessible for businesses of all sizes, 
                enabling them to compete in the digital economy with intelligent automation and insights.
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-2xl p-8 shadow-lg border border-white/50 rounded-2xl animate-fade-in-up animation-delay-600 relative overflow-hidden">
              {/* Glass effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/60 via-transparent to-transparent"></div>
              
              <div className="w-16 h-16 bg-yellow-100/50 backdrop-blur-xl mx-auto mb-6 rounded-xl flex items-center justify-center border border-yellow-200/40 shadow-lg relative z-10">
                <Eye className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                A world where every business, regardless of size or industry, can harness the power of AI 
                to innovate, grow, and create meaningful impact in their communities.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in-up animation-delay-800">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Why Choose Us
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business results.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${1000 + index * 80}ms` }}>
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-yellow-500/90 hover:bg-yellow-600/90 backdrop-blur-xl border border-yellow-300/40 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-150 hover:scale-105 animate-fade-in-up animation-delay-1400 shadow-lg">
              Learn More About Us
            </button>
          </div>

          <div className="animate-fade-in-up animation-delay-1000">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/40 backdrop-blur-2xl p-6 shadow-lg border border-white/50 rounded-2xl text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-150 animate-scale-in relative overflow-hidden"
                  style={{ animationDelay: `${1200 + index * 80}ms` }}
                >
                  {/* Glass effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none rounded-2xl"></div>
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  
                  <div className="text-3xl font-bold text-yellow-500 mb-2 relative z-10">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm relative z-10">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up animation-delay-1500">
            Meet Our <span className="text-yellow-500">Leadership</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-1600">
            Our experienced leaders drive innovation and guide our mission to transform businesses with AI.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-2xl p-8 shadow-lg border border-white/50 rounded-2xl text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-150 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${1700 + index * 150}ms` }}
            >
              {/* Glass effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              
              <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-2xl shadow-lg relative z-10">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-150"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 relative z-10">{leader.name}</h4>
              <p className="text-yellow-500 font-semibold mb-4 relative z-10">{leader.role}</p>
              <p className="text-gray-600 leading-relaxed text-sm relative z-10">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
