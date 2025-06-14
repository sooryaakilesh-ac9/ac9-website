
import { CheckCircle, TrendingUp, Users } from 'lucide-react';

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
    <section id="about" className="py-24 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Choose
              <span className="text-yellow-400"> aboveCloud9.ai?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're not just another AI company. We're your partners in digital transformation, 
              helping businesses reach new heights with innovative solutions that deliver real results.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Learn More About Us
            </button>
          </div>

          <div className="animate-fade-in">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Proven Results</h3>
                  <p className="text-gray-600">Trusted by industry leaders</p>
                </div>
              </div>
              <p className="text-gray-600">
                Our AI solutions have helped companies across various industries achieve 
                remarkable growth and efficiency improvements.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-yellow-400">Leadership</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leaders drive innovation and guide our mission to transform businesses with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h4>
              <p className="text-yellow-500 font-semibold text-lg mb-4">{leader.role}</p>
              <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
