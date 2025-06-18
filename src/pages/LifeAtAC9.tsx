import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Brain, Globe, Palette, Users, Zap, Target, Coffee, Gamepad2, Music, CheckCircle, Clock, Beaker, MessageSquare, Building, Factory, BarChart3, Eye, Mail, ArrowRight, Star, Rocket, Search, HandHeart, TrendingUp, Code, Smile } from 'lucide-react';
import { useState } from 'react';
import InteractiveCard from '../components/InteractiveCard';

const LifeAtAC9 = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [contactType, setContactType] = useState<string>('');

  const cultureCards = [
    {
      emoji: "👣",
      title: "No 24/7 Hustle",
      subtitle: "We build fast, not frantic. Burnout ≠ success.",
      description: "Work-life balance isn't just a buzzword here. We believe in sustainable productivity and respect your personal time.",
      color: "from-green-400 to-green-600"
    },
    {
      emoji: "🧠",
      title: "Mental Health > Deadlines",
      subtitle: "Take the pause. Clarity builds better code.",
      description: "Your mental wellbeing is our priority. We provide mental health support and encourage breaks when needed.",
      color: "from-blue-400 to-blue-600"
    },
    {
      emoji: "🤖",
      title: "AI ≠ Emotionless",
      subtitle: "We don't automate empathy. People matter.",
      description: "Technology should enhance human connection, not replace it. We build AI with heart and humanity at its core.",
      color: "from-purple-400 to-purple-600"
    },
    {
      emoji: "🌏",
      title: "Local Roots, Global Thinking",
      subtitle: "From Coimbatore to the world—with heart.",
      description: "Proudly based in Coimbatore with a global mindset. We combine local values with international standards.",
      color: "from-orange-400 to-orange-600"
    },
    {
      emoji: "🎨",
      title: "We're Weird, and We Like It",
      subtitle: "Bring your quirks. It's what makes us human.",
      description: "Diversity of thought drives innovation. Your unique perspective and personality are what make our team stronger.",
      color: "from-pink-400 to-pink-600"
    },
    {
      emoji: "🚫",
      title: "No Big Egos",
      subtitle: "Ideas win. Not titles. Period.",
      description: "The best idea wins, regardless of who suggests it. We foster an environment where everyone's voice matters.",
      color: "from-red-400 to-red-600"
    }
  ];

  const productDNA = [
    {
      emoji: "⚡",
      title: "Speed Matters",
      description: "We ship fast and iterate faster. No perfection paralysis."
    },
    {
      emoji: "🔍",
      title: "Precision Wins",
      description: "Accuracy > hype. Our AI hits the mark or doesn't ship."
    },
    {
      emoji: "🤝",
      title: "Human × Tech",
      description: "We co-create with our users, not for them."
    },
    {
      emoji: "🧠",
      title: "Learn > Repeat",
      description: "Every build is a lesson. Feedback is our fuel."
    }
  ];

  const wallOfWins = [
    {
      month: "May 2025",
      win: "Onboarded 2 engineers, launched AI doc parser beta"
    },
    {
      month: "April 2025",
      win: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      month: "March 2025",
      win: "3 new roles opened. Culture survey hit 92% team happiness"
    },
    {
      month: "Feb 2025",
      win: "Team offsite + first internal hackathon results shipped to prod"
    }
  ];

  const perks = [
    {
      icon: Coffee,
      title: "Unlimited Coffee & Snacks",
      description: "Fuel your creativity with premium coffee and healthy snacks available 24/7."
    },
    {
      icon: Gamepad2,
      title: "Game Zone",
      description: "Unwind with our gaming setup, board games, and recreational activities."
    },
    {
      icon: Music,
      title: "Music & Creative Space",
      description: "Jam sessions, creative corners, and spaces designed to inspire innovation."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, gym memberships, and wellness programs."
    },
    {
      icon: Brain,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and skill development opportunities."
    },
    {
      icon: Globe,
      title: "Flexible Work",
      description: "Hybrid work model with flexible hours and remote work options."
    }
  ];

  const teamValues = [
    "Transparency in everything we do",
    "Continuous learning and growth",
    "Celebrating failures as learning opportunities",
    "Open communication and feedback",
    "Innovation through collaboration",
    "Respect for work-life integration"
  ];

  const contactOptions = [
    { id: 'automate', label: 'I want to automate something', icon: Zap },
    { id: 'partnership', label: "Let's talk partnerships", icon: HandHeart },
    { id: 'work', label: 'I want to work with you', icon: Users },
    { id: 'browse', label: 'Just browsing — hi!', icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-10 right-20 w-48 h-48 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 dark:from-yellow-500/20 dark:to-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-yellow-500/25 to-yellow-600/25 dark:from-yellow-600/15 dark:to-yellow-700/15 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/40 dark:to-yellow-800/40 border-2 border-yellow-300 dark:border-yellow-600/50 text-yellow-800 dark:text-yellow-200 text-lg font-bold rounded-full shadow-medium hover:shadow-yellow-lg transition-all duration-100 mb-8">
              <Heart className="w-6 h-6 mr-3 animate-sparkle-fast text-yellow-600 dark:text-yellow-400" />
              LIFE AT AC9
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8 leading-tight transition-colors duration-300">
              Beyond <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">AI</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-4xl mx-auto transition-colors duration-300">
              We're not just building the future of AI—we're creating a workplace where 
              <span className="text-yellow-600 dark:text-yellow-400 font-bold"> humans thrive</span>, 
              <span className="text-yellow-600 dark:text-yellow-400 font-bold"> creativity flows</span>, and 
              <span className="text-yellow-600 dark:text-yellow-400 font-bold"> impact matters</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Product DNA Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 border-2 border-blue-300 dark:border-blue-600/50 text-blue-800 dark:text-blue-200 text-lg font-bold rounded-full shadow-medium mb-8 transition-colors duration-300">
              <Brain className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              🧬 PRODUCT DNA
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Core <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              These principles guide every product decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productDNA.map((principle, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-xl border-2 border-gray-200/50 dark:border-gray-600/50 shadow-medium hover:shadow-strong transition-all duration-200 card-hover-fast text-center"
                intensity={0.7}
              >
                <div className="text-4xl mb-4 animate-float-fast">{principle.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">{principle.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm transition-colors duration-300">{principle.description}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Wins */}
      <section className="py-20 bg-gradient-to-br from-green-50/50 via-white to-green-100/30 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/30 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40 border-2 border-green-300 dark:border-green-600/50 text-green-800 dark:text-green-200 text-lg font-bold rounded-full shadow-medium mb-8 transition-colors duration-300">
              <Star className="w-6 h-6 mr-3 text-green-600 dark:text-green-400" />
              🧩 AC9 WALL OF WINS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Recent <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Building trust through transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wallOfWins.map((win, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-xl border-2 border-green-200/50 dark:border-green-600/50 shadow-medium hover:shadow-green-lg transition-all duration-200 card-hover-fast"
                intensity={0.7}
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full mr-3 animate-sparkle-fast"></div>
                  <span className="text-sm font-bold text-green-700 dark:text-green-300">{win.month}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm transition-colors duration-300">{win.win}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Cards Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/30 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">Culture</span> Cards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              These aren't just values on a wall—they're the principles that guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureCards.map((card, index) => (
              <InteractiveCard
                key={index}
                className="group relative"
                intensity={0.8}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border-2 border-gray-200/50 dark:border-gray-600/50 shadow-medium hover:shadow-strong transition-all duration-300 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 animate-float-fast">{card.emoji}</div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-lg font-bold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-300">
                      {card.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50/50 via-white to-yellow-100/30 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/30 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">Perks</span> & Benefits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              We believe in taking care of our team so they can do their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-xl border-2 border-yellow-200/50 dark:border-yellow-600/50 shadow-medium hover:shadow-yellow-lg transition-all duration-200 card-hover-fast"
                intensity={0.7}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 dark:from-yellow-500 dark:to-yellow-700 rounded-xl flex items-center justify-center mb-4 shadow-yellow">
                  <perk.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">{perk.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{perk.description}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute left-20 top-10 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-yellow-500/15 dark:to-orange-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute right-15 bottom-15 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/15 dark:to-purple-500/15 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
              Our values aren't just words—they're the foundation of everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamValues.map((value, index) => (
              <InteractiveCard
                key={index}
                darkMode={true}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200"
                intensity={0.6}
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 dark:bg-yellow-500 rounded-full mr-4 flex-shrink-0 animate-sparkle-fast"></div>
                  <p className="text-lg font-medium text-white">{value}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 border-2 border-blue-300 dark:border-blue-600/50 text-blue-800 dark:text-blue-200 text-lg font-bold rounded-full shadow-medium mb-8 transition-colors duration-300">
              <Mail className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              📩 GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              What do you want to talk about?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 transition-colors duration-300">
              Smart routing helps personalize our conversation.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactOptions.map((option) => (
                <InteractiveCard
                  key={option.id}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    contactType === option.id
                      ? 'bg-yellow-100 dark:bg-yellow-900/40 border-yellow-400 dark:border-yellow-600 shadow-yellow-lg'
                      : 'bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-600 hover:border-yellow-300 dark:hover:border-yellow-600 hover:shadow-medium'
                  }`}
                  intensity={0.7}
                  onClick={() => setContactType(option.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      contactType === option.id
                        ? 'border-yellow-500 dark:border-yellow-400 bg-yellow-500 dark:bg-yellow-400'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {contactType === option.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <option.icon className={`w-5 h-5 ${
                      contactType === option.id ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-500 dark:text-gray-400'
                    }`} />
                    <span className={`font-medium ${
                      contactType === option.id ? 'text-yellow-800 dark:text-yellow-200' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {option.label}
                    </span>
                  </div>
                </InteractiveCard>
              ))}
            </div>

            <div className="text-center">
              <InteractiveCard intensity={1.0}>
                <a
                  href={`mailto:careers@abovecloud9.ai?subject=${
                    contactType === 'automate' ? 'Automation Inquiry' :
                    contactType === 'partnership' ? 'Partnership Discussion' :
                    contactType === 'work' ? 'Career Opportunity' :
                    contactType === 'browse' ? 'General Inquiry' :
                    'Hello from AC9 Website'
                  }`}
                  className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 dark:from-yellow-600 dark:to-yellow-700 dark:hover:from-yellow-700 dark:hover:to-yellow-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-150 hover:scale-110 hover:shadow-2xl shadow-strong"
                >
                  Start the Conversation
                  <ArrowRight className="ml-3 w-5 h-5" />
                </a>
              </InteractiveCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-100/60 to-yellow-200/40 dark:from-gray-800/60 dark:to-gray-700/40 backdrop-blur-xl relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <InteractiveCard intensity={0.5}>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Ready to Join Our Journey?
            </h2>
          </InteractiveCard>
          
          <InteractiveCard intensity={0.3}>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
              If our culture resonates with you and you're excited about building the future of AI, 
              we'd love to hear from you.
            </p>
          </InteractiveCard>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <InteractiveCard intensity={1.0}>
              <a
                href="/careers"
                className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 dark:from-yellow-600 dark:to-yellow-700 dark:hover:from-yellow-700 dark:hover:to-yellow-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-150 hover:scale-110 hover:shadow-2xl shadow-strong"
              >
                View Open Positions
              </a>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.8}>
              <a
                href="mailto:careers@AboveCloud9.ai?subject=General Application"
                className="inline-block bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border-2 border-yellow-500 dark:border-yellow-600 hover:border-yellow-600 dark:hover:border-yellow-500 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-150 hover:scale-110 shadow-strong"
              >
                Get in Touch
              </a>
            </InteractiveCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifeAtAC9;