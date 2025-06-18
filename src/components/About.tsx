import { useQuery } from '@tanstack/react-query';
import { fetchAboutData } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';
import { Users, Heart, Target, Star, Rocket, Zap, Brain, Shield, BarChart3, Cloud, Settings } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const About = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['aboutData'],
    queryFn: fetchAboutData,
  });

  const { leadership = [] } = data || {};

  const whyAC9Points = [
    {
      icon: Rocket,
      title: "Real ownership from Day 1",
      description: "Take charge of meaningful projects from your first day"
    },
    {
      icon: Brain,
      title: "Build products that go live—not just docs",
      description: "Ship real features that users actually use"
    },
    {
      icon: Cloud,
      title: "Global minds, Coimbatore heart",
      description: "International expertise with local values"
    },
    {
      icon: Zap,
      title: "Zero red tape. Only real growth.",
      description: "Fast decisions, faster execution, fastest growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-yellow-50/50 via-white to-yellow-100/30 dark:from-gray-900/50 dark:via-gray-800 dark:to-gray-700/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/20 via-transparent to-yellow-200/10 dark:from-yellow-900/10 dark:via-transparent dark:to-yellow-800/5"></div>
      
      {/* Static background elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-10 right-20 w-48 h-48 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 dark:from-yellow-500/20 dark:to-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-yellow-500/25 to-yellow-600/25 dark:from-yellow-600/15 dark:to-yellow-700/15 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Welcome Section */}
        <div className="text-center mb-16 animate-fade-in-fast">
          <InteractiveCard className="inline-block mb-8" intensity={0.6}>
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-200 to-yellow-300 dark:from-yellow-800/60 dark:to-yellow-700/60 border-2 border-yellow-400 dark:border-yellow-600/50 text-yellow-900 dark:text-yellow-200 text-lg font-bold rounded-full shadow-medium hover:shadow-yellow-lg transition-all duration-100">
              <Zap className="w-6 h-6 mr-3 animate-sparkle-fast text-yellow-700 dark:text-yellow-300" />
              WELCOME TO ABOVECLOUD9 AI
            </div>
          </InteractiveCard>
          
          <InteractiveCard intensity={0.4}>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8 leading-tight">
              <Star className="inline w-12 h-12 text-yellow-500 dark:text-yellow-400 mr-4 animate-float-fast" />
              Tech that <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">Thinks</span>. 
              People that <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">Build</span>. 
              Impact that <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">Lasts</span>.
            </h2>
          </InteractiveCard>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20 animate-fade-in-fast animation-delay-200">
          
          {/* Left Side - Mission and Who We Are */}
          <div className="space-y-10">
            <InteractiveCard className="bg-gradient-to-br from-white/80 to-yellow-50/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-xl p-10 shadow-medium border-2 border-yellow-200/50 dark:border-gray-600/50 rounded-2xl card-hover-fast" intensity={0.6}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-4 shadow-yellow">
                  <Target className="w-8 h-8 text-white animate-sparkle-fast" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-gray-100">
                  OUR MISSION
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
                To make life simpler, happier, and stress-free—one smart solution at a time. We're building 
                AI that puts humans first and delivers impact where it matters most: real life.
              </p>
            </InteractiveCard>

            <InteractiveCard className="bg-gradient-to-br from-white/80 to-yellow-50/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-xl p-10 shadow-medium border-2 border-yellow-200/50 dark:border-gray-600/50 rounded-2xl card-hover-fast" intensity={0.6}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-4 shadow-yellow">
                  <Star className="w-8 h-8 text-white animate-float-fast" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-gray-100">
                  WHO WE ARE
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
                We're a fast-moving AI product company founded by engineers from WhatsApp, Meta, 
                Google, Oracle, and Palo Alto Networks. Backed by global tech veterans, we combine deep 
                expertise with startup velocity to create AI tools that make life better — for businesses and 
                people.
              </p>
            </InteractiveCard>
          </div>

          {/* Right Side - Leadership Section */}
          <div>
            <InteractiveCard className="inline-block mb-8" intensity={0.5}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-200 to-yellow-300 dark:from-yellow-800/60 dark:to-yellow-700/60 border-2 border-yellow-400 dark:border-yellow-600/50 text-yellow-900 dark:text-yellow-200 text-lg font-bold rounded-full shadow-soft">
                <Users className="w-5 h-5 mr-2 animate-sparkle-fast" />
                LEADERSHIP
              </div>
            </InteractiveCard>
            
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-10">
              Meet Our Founders
            </h3>

            <div className="space-y-12">
              {isLoading ? (
                Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="p-8 space-y-4">
                    <Skeleton className="w-32 h-32 rounded-full" />
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-5 w-1/3" />
                    <Skeleton className="h-5 w-full" />
                  </div>
                ))
              ) : (
                leadership.map((leader, index) => (
                  <InteractiveCard
                    key={index}
                    className="bg-gradient-to-br from-white/80 to-yellow-50/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-xl p-8 shadow-medium border-2 border-yellow-200/50 dark:border-gray-600/50 rounded-2xl card-hover-fast relative"
                    intensity={0.7}
                  >
                    {/* Floating image with text wrapping */}
                    <div className={`w-40 h-40 flex-shrink-0 overflow-hidden rounded-2xl shadow-yellow group border-4 border-yellow-300 dark:border-yellow-600 mb-4 ${
                      index % 2 === 0 ? 'float-left mr-6' : 'float-right ml-6'
                    }`}>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-100"
                      />
                    </div>
                    
                    {/* Content that wraps around the image */}
                    <div className="text-content">
                      <h4 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-2">{leader.name}</h4>
                      <p className="text-yellow-600 dark:text-yellow-400 font-bold text-lg mb-4">{leader.role}</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-justify">
                        {leader.bio}
                      </p>
                    </div>
                    
                    {/* Clear float to prevent layout issues */}
                    <div className="clear-both"></div>
                  </InteractiveCard>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Why AC9 Section */}
        <InteractiveCard 
          className="bg-gradient-to-br from-yellow-100/60 to-yellow-200/40 dark:from-gray-800/60 dark:to-gray-700/40 backdrop-blur-xl p-12 shadow-strong border-2 border-yellow-300/50 dark:border-gray-600/50 rounded-3xl animate-fade-in-fast animation-delay-400" 
          intensity={0.5}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mr-4 shadow-yellow-lg">
                <Zap className="w-10 h-10 text-white animate-sparkle-fast" />
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-gray-100">
                Why AC9?
              </h3>
            </div>
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-3xl text-gray-800 dark:text-gray-200 font-black mb-6">We don't do boring.</p>
              <p className="text-2xl text-gray-700 dark:text-gray-300 font-bold">At AC9, you won't be a cog—you'll be the engine.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyAC9Points.map((point, index) => (
              <InteractiveCard
                key={index}
                className="bg-gradient-to-br from-white/80 to-yellow-50/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-xl p-8 border-2 border-yellow-200/50 dark:border-gray-600/50 shadow-medium rounded-2xl flex items-start space-x-6 card-hover-fast"
                intensity={0.8}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 group shadow-yellow">
                  <point.icon className="w-8 h-8 text-white group-hover:scale-105 transition-transform duration-100" />
                </div>
                <div>
                  <h5 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-3">{point.title}</h5>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{point.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </InteractiveCard>
      </div>
    </section>
  );
};

export default About;