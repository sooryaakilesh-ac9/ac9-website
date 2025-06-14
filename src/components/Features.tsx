
import { Brain, Zap, Shield, BarChart3, Cloud, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Cutting-edge machine learning algorithms that evolve with your business needs.",
      color: "bg-yellow-100/20 text-yellow-600 backdrop-blur-md border-yellow-200/30"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process data and generate insights at unprecedented speeds with optimized performance.",
      color: "bg-orange-100/20 text-orange-600 backdrop-blur-md border-orange-200/30"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols to keep your sensitive data protected at all times.",
      color: "bg-green-100/20 text-green-600 backdrop-blur-md border-green-200/30"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Make informed decisions with comprehensive analytics and predictive insights.",
      color: "bg-purple-100/20 text-purple-600 backdrop-blur-md border-purple-200/30"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Scalable cloud infrastructure that grows with your business requirements.",
      color: "bg-gray-100/20 text-gray-600 backdrop-blur-md border-gray-200/30"
    },
    {
      icon: Cpu,
      title: "Smart Automation",
      description: "Automate complex workflows and reduce manual tasks with intelligent systems.",
      color: "bg-amber-100/20 text-amber-600 backdrop-blur-md border-amber-200/30"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-white to-yellow-50/30 overflow-hidden">
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
              className="group bg-white/10 backdrop-blur-xl p-8 border border-white/20 hover:border-yellow-300/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-3 animate-fade-in-up transform hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/40 via-transparent to-transparent"></div>
              
              <div className={`w-16 h-16 ${feature.color} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 transform border relative z-10`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
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
