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

  const productLab = [
    {
      emoji: "🧾",
      title: "Smart Contract Parser",
      status: "Pilot launched with fintech partner",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      emoji: "📁",
      title: "Auto-tagging for Legal Docs",
      status: "In beta – improving accuracy",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      emoji: "🔍",
      title: "Internal LLM Fine-Tuning",
      status: "Early stage experiments underway",
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      emoji: "🤖",
      title: "Voice-to-Workflow AI Assistant",
      status: "Concept sprint phase – voice in, task out",
      statusColor: "bg-purple-100 text-purple-800"
    },
    {
      emoji: "📈",
      title: "Internal Hiring Analytics Tool",
      status: "Dogfooding our own HR tech",
      statusColor: "bg-orange-100 text-orange-800"
    }
  ];

  const testimonials = [
    {
      quote: "Cut 40% of our manual work in just 6 weeks.",
      attribution: "— CTO, fintech startup"
    },
    {
      quote: "They understood our use case better than we did.",
      attribution: "— Founder, logistics tech"
    },
    {
      quote: "4 AI tools built, 2 in prod, 100% uptime. That's AC9.",
      attribution: "— Product Lead, SaaS firm"
    }
  ];

  const partnerships = [
    {
      emoji: "🏢",
      title: "Startups",
      need: "Fast MVPs",
      delivery: "We move fast, break nothing, and ship in weeks."
    },
    {
      emoji: "🏦",
      title: "Enterprises",
      need: "Custom tooling",
      delivery: "We build secure, compliant systems at scale."
    },
    {
      emoji: "📊",
      title: "Ops Teams",
      need: "Automation & analytics",
      delivery: "Reduce time, effort, and errors."
    },
    {
      emoji: "🎯",
      title: "PMs & Founders",
      need: "AI POCs",
      delivery: "Quick validation + execution-ready builds."
    }
  ];

  const wallOfWins = [
    {
      month: "May 2025",
      win: "Onboarded 2 engineers, launched AI doc parser beta"
    },
    {
      month: "April 2025",
      win: "Scaled fintech client's ops by 30%"
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-48 h-48 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-yellow-500/25 to-yellow-600/25 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-yellow-200 border-2 border-yellow-300 text-yellow-800 text-lg font-bold rounded-full shadow-medium hover:shadow-yellow-lg transition-all duration-100 mb-8">
              <Heart className="w-6 h-6 mr-3 animate-sparkle-fast text-yellow-600" />
              LIFE AT AC9
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Beyond <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">AI</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
              We're not just building the future of AI—we're creating a workplace where 
              <span className="text-yellow-600 font-bold"> humans thrive</span>, 
              <span className="text-yellow-600 font-bold"> creativity flows</span>, and 
              <span className="text-yellow-600 font-bold"> impact matters</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Product DNA Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-blue-300 text-blue-800 text-lg font-bold rounded-full shadow-medium mb-8">
              <Brain className="w-6 h-6 mr-3 text-blue-600" />
              🧬 PRODUCT DNA
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every product decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productDNA.map((principle, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 backdrop-blur-xl p-6 rounded-xl border-2 border-gray-200/50 shadow-medium hover:shadow-strong transition-all duration-200 card-hover-fast text-center"
                intensity={0.7}
              >
                <div className="text-4xl mb-4 animate-float-fast">{principle.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{principle.description}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lab Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-purple-200 border-2 border-purple-300 text-purple-800 text-lg font-bold rounded-full shadow-medium mb-8">
              <Beaker className="w-6 h-6 mr-3 text-purple-600" />
              🧪 PRODUCT LAB
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What We're Building Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparency is key. Here's what's cooking in our R&D kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productLab.map((project, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 backdrop-blur-xl p-6 rounded-xl border-2 border-gray-200/50 shadow-medium hover:shadow-strong transition-all duration-200 card-hover-fast"
                intensity={0.7}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{project.emoji}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                    {project.status.split(' – ')[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.status}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Wall - Testimonials */}
      <section className="py-20 bg-gradient-to-br from-yellow-50/50 via-white to-yellow-100/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-300 text-green-800 text-lg font-bold rounded-full shadow-medium mb-8">
              <MessageSquare className="w-6 h-6 mr-3 text-green-600" />
              💬 AC9 IMPACT WALL
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 backdrop-blur-xl p-8 rounded-xl border-2 border-yellow-200/50 shadow-medium hover:shadow-yellow-lg transition-all duration-200 card-hover-fast"
                intensity={0.7}
              >
                <div className="text-4xl text-yellow-500 mb-4">"</div>
                <p className="text-lg text-gray-800 font-medium mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <p className="text-gray-600 font-medium">{testimonial.attribution}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/20 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-orange-200 border-2 border-orange-300 text-orange-800 text-lg font-bold rounded-full shadow-medium mb-8">
              <Users className="w-6 h-6 mr-3 text-orange-600" />
              🎯 WHO WE WORK WITH
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Personas > Logos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with people, not just companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 backdrop-blur-xl p-8 rounded-xl border-2 border-gray-200/50 shadow-medium hover:shadow-strong transition-all duration-200 card-hover-fast"
                intensity={0.7}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{partner.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.title}</h3>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-700">What They Need: </span>
                      <span className="text-sm text-gray-600">{partner.need}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">What We Deliver: </span>
                      <span className="text-sm text-gray-600">{partner.delivery}</span>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Wins */}
      <section className="py-20 bg-gradient-to-br from-green-50/50 via-white to-green-100/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-300 text-green-800 text-lg font-bold rounded-full shadow-medium mb-8">
              <Star className="w-6 h-6 mr-3 text-green-600" />
              🧩 AC9 WALL OF WINS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Recent Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building trust through transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wallOfWins.map((win, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 backdrop-blur-xl p-6 rounded-xl border-2 border-green-200/50 shadow-medium hover:shadow-green-lg transition-all duration-200 card-hover-fast"
                intensity={0.7}
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-sparkle-fast"></div>
                  <span className="text-sm font-bold text-green-700">{win.month}</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{win.win}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Cards Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Culture Cards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just values on a wall—they're the principles that guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureCards.map((card, index) => (
              <InteractiveCard
                key={index}
                className="group relative"
                intensity={0.8}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border-2 border-gray-200/50 shadow-medium hover:shadow-strong transition-all duration-300 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 animate-float-fast">{card.emoji}</div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-lg font-bold text-yellow-600 mb-4">
                      {card.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-gradient-to-br from-yellow-50/50 via-white to-yellow-100/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Perks & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team so they can do their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 backdrop-blur-xl p-6 rounded-xl border-2 border-yellow-200/50 shadow-medium hover:shadow-yellow-lg transition-all duration-200 card-hover-fast"
                intensity={0.7}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-yellow">
                  <perk.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{perk.title}</h3>
                <p className="text-gray-600 leading-relaxed">{perk.description}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-20 top-10 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute right-15 bottom-15 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our values aren't just words—they're the foundation of everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamValues.map((value, index) => (
              <InteractiveCard
                key={index}
                darkMode={true}
                className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
                intensity={0.6}
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 flex-shrink-0 animate-sparkle-fast"></div>
                  <p className="text-lg font-medium text-white">{value}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-blue-300 text-blue-800 text-lg font-bold rounded-full shadow-medium mb-8">
              <Mail className="w-6 h-6 mr-3 text-blue-600" />
              📩 GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What do you want to talk about?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
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
                      ? 'bg-yellow-100 border-yellow-400 shadow-yellow-lg'
                      : 'bg-white/80 border-gray-200 hover:border-yellow-300 hover:shadow-medium'
                  }`}
                  intensity={0.7}
                  onClick={() => setContactType(option.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      contactType === option.id
                        ? 'border-yellow-500 bg-yellow-500'
                        : 'border-gray-300'
                    }`}>
                      {contactType === option.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <option.icon className={`w-5 h-5 ${
                      contactType === option.id ? 'text-yellow-600' : 'text-gray-500'
                    }`} />
                    <span className={`font-medium ${
                      contactType === option.id ? 'text-yellow-800' : 'text-gray-700'
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
                  href={`mailto:hello@abovecloud9.ai?subject=${
                    contactType === 'automate' ? 'Automation Inquiry' :
                    contactType === 'partnership' ? 'Partnership Discussion' :
                    contactType === 'work' ? 'Career Opportunity' :
                    contactType === 'browse' ? 'General Inquiry' :
                    'Hello from AC9 Website'
                  }`}
                  className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-150 hover:scale-110 hover:shadow-2xl shadow-strong"
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
      <section className="py-20 bg-gradient-to-br from-yellow-100/60 to-yellow-200/40 backdrop-blur-xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <InteractiveCard intensity={0.5}>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready to Join Our Journey?
            </h2>
          </InteractiveCard>
          
          <InteractiveCard intensity={0.3}>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              If our culture resonates with you and you're excited about building the future of AI, 
              we'd love to hear from you.
            </p>
          </InteractiveCard>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <InteractiveCard intensity={1.0}>
              <a
                href="/careers"
                className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-150 hover:scale-110 hover:shadow-2xl shadow-strong"
              >
                View Open Positions
              </a>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.8}>
              <a
                href="mailto:careers@abovecloud9.ai?subject=General Application"
                className="inline-block bg-white hover:bg-gray-50 text-gray-800 border-2 border-yellow-500 hover:border-yellow-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-150 hover:scale-110 shadow-strong"
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