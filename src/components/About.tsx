
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-yellow-500">aboveCloud9.ai</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            We're pioneering the future of business intelligence through artificial intelligence, 
            helping organizations transcend traditional limitations and achieve unprecedented growth.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-yellow-100 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize AI technology and make it accessible for businesses of all sizes, 
                enabling them to compete in the digital economy with intelligent automation and insights.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-yellow-100 mx-auto mb-6 flex items-center justify-center">
                <Eye className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every business, regardless of size or industry, can harness the power of AI 
                to innovate, grow, and create meaningful impact in their communities.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Us
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business results.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 font-semibold transition-colors duration-200">
              Learn More About Us
            </button>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-3xl font-bold text-yellow-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-yellow-500">Leadership</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced leaders drive innovation and guide our mission to transform businesses with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-24 h-24 mx-auto mb-6 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
              <p className="text-yellow-500 font-semibold mb-4">{leader.role}</p>
              <p className="text-gray-600 leading-relaxed text-sm">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
