import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveCard from './InteractiveCard';

const Careers = () => {

  const advantages = [
    {
      icon: DollarSign,
      title: "Top-Tier Compensation",
      description: "Industry-leading salaries with equity participation and performance bonuses that reward excellence."
    },
    {
      icon: Briefcase,
      title: "Unparalleled Growth", 
      description: "Work alongside brilliant minds from top tech companies and accelerate your career with ownership from day one."
    },
    {
      icon: Heart,
      title: "Meaningful Impact",
      description: "Build products that directly improve people's lives and contribute to solving real-world problems through AI."
    }
  ];

  const whyJoinUs = [
    {
      icon: Target,
      title: "Real ownership from Day 1",
      description: "Take charge of meaningful projects that ship to production"
    },
    {
      icon: Users,
      title: "Learn from the best",
      description: "Work with engineers from WhatsApp, Meta, Google, and Oracle"
    },
    {
      icon: Heart,
      title: "Human-centered AI",
      description: "Build technology that enhances human potential"
    },
    {
      emoji: "🧠",
      title: "Brains That Scale",
      description: "Built by ex-engineers from WhatsApp, Meta, Google, and Oracle — we carry forward the best of Big Tech and cut out the noise."
    },
    {
      emoji: "⚙",
      title: "Deep Work, Not Decks",
      description: "We're not here to impress with slides. We build usable tech that makes sense and scales smoothly."
    },
    {
      emoji: "🌍",
      title: "One Client. Full Focus.",
      description: "In an age of hustle, we focus. One trusted partner. Full-on problem solving."
    },
    {
      emoji: "🧬",
      title: "Zero-Fluff Engineering",
      description: "Smart, scalable, and purposeful — our tech runs in production, not in a pitch."
    },
    {
      emoji: "☕",
      title: "Rooted in Coimbatore",
      description: "A calm city, a focused team, and filter coffee powering our sprints."
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <InteractiveCard intensity={0.6}>
            <div className="inline-flex items-center px-6 py-3 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-lg font-bold mb-6 rounded-full">
              <Briefcase className="w-5 h-5 mr-2" />
              CAREERS
            </div>
          </InteractiveCard>
          
          <InteractiveCard intensity={0.4}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h2>
          </InteractiveCard>
          
          <InteractiveCard intensity={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Help us create AI solutions that make a real difference. Work with industry veterans 
              and build the future of human-centered technology.
            </p>
          </InteractiveCard>
        </div>

        {/* Why Join Us Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {/* Why <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">AboveCloud9.ai</span>? */}
              Above the <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Noise.</span> Built <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Differently.</span>
            </h3>
            <p className="text-lg text-gray-600">We don't do boring. At AC9, you won't be a cog—you'll be the engine.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {whyJoinUs.map((item, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 backdrop-blur-xl p-8 border-2 border-yellow-200/50 shadow-medium rounded-2xl text-center card-hover-fast"
                intensity={0.7}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-yellow">
                  {item.icon ? (
                    <item.icon className="w-8 h-8 text-white" />
                  ) : (
                    <span className="text-2xl">{item.emoji}</span>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* Advantages Cards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            What We Offer
          </h3>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <InteractiveCard key={index} intensity={0.8}>
                <div className="bg-white/80 backdrop-blur-xl p-8 border-2 border-yellow-200/50 shadow-medium hover:shadow-yellow-lg rounded-2xl text-center transition-all duration-200 card-hover-fast flex flex-col min-h-[280px]">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-yellow">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>

        <div className="text-center">
          <InteractiveCard intensity={0.3}>
            <p className="text-gray-600 mb-8 text-lg">
              Ready to join our team and make a difference?
            </p>
          </InteractiveCard>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <InteractiveCard intensity={1.0}>
              <Link 
                to="/careers"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                View Open Positions
              </Link>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.8}>
              <Link 
                to="/life-at-ac9"
                className="inline-block bg-white hover:bg-gray-50 text-gray-800 border-2 border-yellow-500 hover:border-yellow-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Life at AC9
              </Link>
            </InteractiveCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;