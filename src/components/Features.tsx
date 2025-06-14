
import { Brain, Zap, Shield, BarChart3, Cloud, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Cutting-edge machine learning algorithms that evolve with your business needs.",
      color: "bg-yellow-100/30 text-yellow-600 backdrop-blur-xl border-yellow-200/40"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process data and generate insights at unprecedented speeds with optimized performance.",
      color: "bg-orange-100/30 text-orange-600 backdrop-blur-xl border-orange-200/40"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols to keep your sensitive data protected at all times.",
      color: "bg-green-100/30 text-green-600 backdrop-blur-xl border-green-200/40"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Make informed decisions with comprehensive analytics and predictive insights.",
      color: "bg-purple-100/30 text-purple-600 backdrop-blur-xl border-purple-200/40"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Scalable cloud infrastructure that grows with your business requirements.",
      color: "bg-gray-100/30 text-gray-600 backdrop-blur-xl border-gray-200/40"
    },
    {
      icon: Cpu,
      title: "Smart Automation",
      description: "Automate complex workflows and reduce manual tasks with intelligent systems.",
      color: "bg-amber-100/30 text-amber-600 backdrop-blur-xl border-amber-200/40"
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
              className="group relative bg-white/20 backdrop-blur-2xl p-8 border border-white/30 rounded-2xl hover:border-yellow-300/60 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-200 hover:-translate-y-4 animate-fade-in-up transform hover:scale-[1.02] overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced glass reflection effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-2xl pointer-events-none"></div>
              
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-150 transform border relative z-10 shadow-lg`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-150 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-150 relative z-10">
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
