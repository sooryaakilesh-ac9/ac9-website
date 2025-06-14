
import { Brain, Zap, BarChart3, Shield, Cloud, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "Comprehensive AI roadmap development tailored to your business objectives and industry requirements.",
      features: ["Strategic Planning", "ROI Analysis", "Implementation Roadmap"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation solutions that streamline operations and eliminate repetitive tasks.",
      features: ["Workflow Optimization", "Smart Automation", "Performance Monitoring"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced analytics and machine learning models that transform data into actionable insights.",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports"]
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description: "Enterprise-grade security frameworks designed specifically for AI-powered applications.",
      features: ["Security Audits", "Compliance Management", "Risk Assessment"]
    },
    {
      icon: Cloud,
      title: "Cloud AI Integration",
      description: "Seamless integration of AI capabilities into your existing cloud infrastructure.",
      features: ["Cloud Migration", "API Integration", "Scalable Architecture"]
    },
    {
      icon: Settings,
      title: "Custom AI Development",
      description: "Bespoke AI solutions built from the ground up to meet your unique business challenges.",
      features: ["Custom Models", "API Development", "Ongoing Support"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Comprehensive AI solutions designed to transform your business operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl p-8 border border-white/20 hover:border-yellow-300/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glass reflection effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/40 via-transparent to-transparent"></div>
              
              <div className="w-16 h-16 bg-yellow-100/20 text-yellow-600 backdrop-blur-md border border-yellow-200/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10">
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gray-100/20 hover:bg-yellow-500/80 backdrop-blur-md border border-gray-200/30 hover:border-yellow-300/50 text-gray-700 hover:text-white py-3 px-4 font-semibold transition-all duration-300 group-hover:scale-105 relative z-10">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-yellow-500/80 hover:bg-yellow-600/80 backdrop-blur-md border border-yellow-300/30 text-white px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 animate-bounce-in animation-delay-800">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
