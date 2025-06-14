
import { Brain, Zap, Shield, BarChart3, Cloud, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Cutting-edge machine learning algorithms that evolve with your business needs.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process data and generate insights at unprecedented speeds with optimized performance.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols to keep your sensitive data protected at all times.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Make informed decisions with comprehensive analytics and predictive insights.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Scalable cloud infrastructure that grows with your business requirements.",
      color: "bg-gray-100 text-gray-600"
    },
    {
      icon: Cpu,
      title: "Smart Automation",
      description: "Automate complex workflows and reduce manual tasks with intelligent systems.",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Powerful Features for
            <span className="text-yellow-500 animate-slide-in-left animation-delay-200"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Discover how our AI-powered platform can transform your operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 border border-gray-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up transform hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 ${feature.color} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
