import Header from '../components/Header';
import Footer from '../components/Footer';
import { useQuery } from '@tanstack/react-query';
import { fetchAboutData } from '@/api/mock';
import { Skeleton } from '@/components/ui/skeleton';
import { Users, Heart, Target, Star, Rocket, Zap, Brain, Shield, BarChart3, Cloud, Settings, CheckCircle, TrendingUp, Award, Globe } from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';

const About = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['aboutData'],
    queryFn: fetchAboutData,
  });

  const { stats = [], leadership = [] } = data || {};

  const visionMission = [
    {
      icon: Target,
      title: "Our Vision",
      description: "To be the global leader in human-centered AI, where technology amplifies human potential and creates meaningful impact in every interaction.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Heart,
      title: "Our Mission", 
      description: "To make life simpler, happier, and stress-free—one smart solution at a time. We're building AI that puts humans first and delivers impact where it matters most: real life.",
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  const coreValues = [
    {
      icon: Users,
      title: "Human-First Approach",
      description: "Every solution we build starts with understanding human needs and enhancing human capabilities."
    },
    {
      icon: Rocket,
      title: "Innovation with Purpose",
      description: "We don't innovate for the sake of it—every breakthrough serves a meaningful purpose."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build trust through transparent processes, ethical AI practices, and honest communication."
    },
    {
      icon: Globe,
      title: "Global Impact, Local Values",
      description: "We think globally while staying rooted in our values and community connections."
    }
  ];

  const companyStats = [
    { icon: TrendingUp, number: "500+", label: "Companies Transformed", color: "text-green-600" },
    { icon: Award, number: "99.9%", label: "Client Satisfaction", color: "text-blue-600" },
    { icon: Users, number: "24/7", label: "Expert Support", color: "text-purple-600" },
    { icon: BarChart3, number: "150%", label: "Average ROI Increase", color: "text-yellow-600" }
  ];

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-yellow-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <InteractiveCard className="inline-block mb-8" intensity={0.6}>
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-200 to-yellow-300 border-2 border-yellow-400 text-yellow-900 text-lg font-bold rounded-full shadow-medium hover:shadow-yellow-lg transition-all duration-100">
                <Star className="w-6 h-6 mr-3 animate-sparkle-fast text-yellow-700" />
                ABOUT US
              </div>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.4}>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight transition-colors duration-300">
                Tech that <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Thinks</span>. 
                People that <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Build</span>. 
                Impact that <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Lasts</span>.
              </h1>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.3}>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed">
            We're a fast-moving AI product company founded by engineers from WhatsApp, Meta, 
                Google, Oracle, and Palo Alto Networks. We combine deep expertise with startup velocity 
                to create AI tools that make life better—for businesses and people.
</p>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-yellow-50/50 via-white to-yellow-100/30 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/20 via-transparent to-yellow-200/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 animate-fade-in-fast animation-delay-200">
            {visionMission.map((item, index) => (
              <InteractiveCard
                key={index}
                className={`bg-gradient-to-br from-white/80 to-yellow-50/80 p-10 shadow-medium border-2 border-yellow-200/50 rounded-2xl card-hover-fast`}
                intensity={0.6}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mr-4 shadow-yellow`}>
                    <item.icon className="w-8 h-8 text-white animate-sparkle-fast" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  {item.description}
                </p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      {/* <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Proven <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Results</span>
            </h3>
            <p className="text-xl text-gray-600">Numbers that speak to our impact</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {companyStats.map((stat, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 p-6 rounded-xl border-2 border-gray-200/50 shadow-medium hover:shadow-strong transition-all duration-200 card-hover-fast text-center"
                intensity={0.7}
              >
                <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section> */}

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-yellow-50/50 via-white to-yellow-100/30 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Values</span>
            </h3>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {coreValues.map((value, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 p-8 border-2 border-yellow-200/50 shadow-medium rounded-2xl flex items-start space-x-6 card-hover-fast"
                intensity={0.8}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 group shadow-yellow">
                  <value.icon className="w-8 h-8 text-white group-hover:scale-105 transition-transform duration-100" />
                </div>
                <div>
                  <h5 className="text-xl font-black text-gray-900 mb-3">{value.title}</h5>
                  <p className="text-gray-700 leading-relaxed font-medium">{value.description}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <InteractiveCard className="inline-block mb-6" intensity={0.5}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-200 to-yellow-300 border-2 border-yellow-400 text-yellow-900 text-lg font-bold rounded-full shadow-soft">
                <Users className="w-5 h-5 mr-2 animate-sparkle-fast" />
                LEADERSHIP
              </div>
            </InteractiveCard>
            
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Meet Our Founders
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders with decades of experience from Silicon Valley's most innovative companies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
                  className="bg-white/80 p-8 shadow-medium border-2 border-yellow-200/50 rounded-2xl card-hover-fast"
                  intensity={0.7}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl shadow-yellow group border-4 border-yellow-300">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-100"
                      />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h4 className="text-2xl font-black text-gray-900 mb-2">{leader.name}</h4>
                      <p className="text-yellow-600 font-bold text-lg mb-4">{leader.role}</p>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </InteractiveCard>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;