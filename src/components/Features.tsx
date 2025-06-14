
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
    <section id="features" className="py-24 bg-gradient-to-br from-white to-yellow-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Powerful Features for
            <span className="text-yellow-500"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform can transform your operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-sm p-8 border border-white/40 rounded-2xl hover:bg-white/80 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
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
