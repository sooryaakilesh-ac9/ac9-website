
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
      color: "bg-blue-100 text-blue-600"
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
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Cpu,
      title: "Smart Automation",
      description: "Automate complex workflows and reduce manual tasks with intelligent systems.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Powerful Features for
            <span className="text-yellow-400"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Discover how our AI-powered platform can transform your operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-yellow-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
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
