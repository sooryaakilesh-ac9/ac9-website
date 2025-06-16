import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: "Backend Technical Lead",
      type: "Full-time",
      location: "Remote",
      
      description: "Lead our backend development team and architect scalable AI-powered solutions.",
      requirements: [
        "5+ years of backend development experience",
        "Experience with Python, Node.js, or Go",
        "Cloud platforms (AWS, GCP, Azure)",
        "Microservices architecture"
      ]
    },
    {
      title: "Mobile Lead",
      type: "Full-time", 
      location: "Remote",
      
      description: "Drive mobile strategy and lead development of our cross-platform mobile applications.",
      requirements: [
        "5+ years of mobile development experience",
        "React Native or Flutter expertise",
        "iOS and Android development",
        "Team leadership experience"
      ]
    },
    {
      title: "QA Automation Lead",
      type: "Full-time",
      location: "Remote",
      
      description: "Build and maintain our automated testing infrastructure to ensure product quality.",
      requirements: [
        "4+ years of QA automation experience",
        "Selenium, Cypress, or similar tools",
        "CI/CD pipeline experience",
        "Performance testing expertise"
      ]
    },
    {
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "Remote",
      
      description: "Develop and deploy machine learning models that power our AI solutions.",
      requirements: [
        "3+ years of ML/AI experience",
        "Python, TensorFlow, PyTorch",
        "MLOps and model deployment",
        "Statistical analysis and data science"
      ]
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      
      description: "Create beautiful, responsive user interfaces for our AI-powered applications.",
      requirements: [
        "3+ years of frontend development",
        "React, TypeScript, modern CSS",
        "UI/UX design principles",
        "Performance optimization"
      ]
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: [
        "4+ years of DevOps experience",
        "Kubernetes, Docker, Terraform",
        "AWS/GCP/Azure expertise",
        "Monitoring and observability"
      ]
    }
  ];

  const advantages = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Enjoy rewards at or above industry standards, with additional benefits for high performers."
    },
    {
      icon: Briefcase,
      title: "Unparalleled Learning Experience", 
      description: "Work alongside brilliant minds from top tech companies and push the boundaries of innovation."
    },
    {
      icon: MapPin,
      title: "Meaningful Impact",
      description: "Work on projects that directly contribute to people's happiness and wellbeing."
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-sm font-medium mb-6 rounded-full">
            <Briefcase className="w-4 h-4 mr-2" />
            CAREERS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Help us create AI solutions that make a real difference in people's lives. Work with industry veterans from top tech companies.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Advantages of Working With Us
          </h3>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-md p-6 border border-white/30 shadow-lg rounded-xl text-center">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h4>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Open Positions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="group bg-white/50 backdrop-blur-md p-6 border border-white/30 shadow-lg rounded-xl hover:bg-white/70 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-200">
                  {position.title}
                </h4>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.type}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                  </div>
                  {/* <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {position.salary}
                  </div> */}
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {position.description}
                </p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2 text-sm">Requirements:</h5>
                  <ul className="space-y-1">
                    {position.requirements.slice(0, 2).map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Don't see a position that fits? We're always looking for talented individuals.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
            Send Us Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;