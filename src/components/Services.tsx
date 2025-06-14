
import { Brain, Zap, Shield, BarChart3, Cloud, Cpu, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Comprehensive AI roadmap development and strategic implementation planning tailored to your business objectives.",
      features: ["AI Readiness Assessment", "Custom Strategy Development", "ROI Analysis & Planning"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation solutions that streamline operations and eliminate manual tasks across your organization.",
      features: ["Workflow Optimization", "RPA Implementation", "Smart Document Processing"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics platforms that provide actionable insights and forecast future trends for better decision-making.",
      features: ["Predictive Modeling", "Real-time Dashboards", "Custom Reporting"]
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Enterprise-grade security frameworks and compliance solutions specifically designed for AI implementations.",
      features: ["Security Audits", "Compliance Monitoring", "Risk Assessment"]
    },
    {
      icon: Cloud,
      title: "Cloud AI Integration",
      description: "Seamless integration of AI capabilities into your existing cloud infrastructure with scalable solutions.",
      features: ["Cloud Migration", "API Development", "Scalable Architecture"]
    },
    {
      icon: Cpu,
      title: "Custom AI Development",
      description: "Bespoke AI solutions built from the ground up to address your unique business challenges and requirements.",
      features: ["Custom Model Training", "API Development", "Ongoing Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations 
            and drive sustainable growth across all departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-16 h-16 bg-yellow-100 mb-6 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-yellow-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-500 mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 font-semibold transition-colors duration-200">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
