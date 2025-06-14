
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
    <section id="services" className="py-24 bg-white">
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
              className="group bg-white p-8 border border-gray-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gray-100 hover:bg-yellow-500 text-gray-700 hover:text-white py-3 px-4 font-semibold transition-all duration-300 group-hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-in animation-delay-800">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
