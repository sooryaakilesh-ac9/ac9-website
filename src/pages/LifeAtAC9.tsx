import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Brain, Globe, Palette, Users, Zap, Target, Coffee, Gamepad2, Music, CheckCircle, Clock, Beaker, MessageSquare, Building, Factory, BarChart3, Eye, Mail, ArrowRight, Star, Rocket, Search, HandHeart, TrendingUp, Code, Smile, Camera, MapPin, Calendar, Award, Briefcase } from 'lucide-react';
import { useState } from 'react';
import InteractiveCard from '../components/InteractiveCard';

const LifeAtAC9 = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [contactType, setContactType] = useState<string>('');

  // Team members with real photos
  const teamMembers = [
    {
      name: "Amit Singh",
      role: "Chairman & Co-Founder",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRxDRrudIbQ988kG-M_49vP-uU6d5tG6wDw&s",
      bio: "Visionary leader with 20+ years in tech",
      location: "Coimbatore",
      joinedDate: "Jan 2024"
    },
    {
      name: "Sudhagar Chinnasamy", 
      role: "Founder & CEO",
      image: "https://avatars.githubusercontent.com/u/3543343?v=4",
      bio: "AI expert and strategic innovator",
      location: "Coimbatore",
      joinedDate: "Jan 2024"
    },
    {
      name: "Gowtham",
      role: "Lead Mobile Developer",
      image: "../../public/blank-profile.jpg",
      bio: "React specialist with design flair",
      location: "Remote",
      joinedDate: "Mar 2024"
    },
    {
      name: "Sathya",
      role: "Lead Mobile Developer",
      image: "../../public/blank-profile.jpg",
      bio: "ML enthusiast building the future",
      location: "Coimbatore",
      joinedDate: "Feb 2024"
    },
    {
      name: "Rahul Nishanth",
      role: "Mobile Developer Intern",
      image: "../../public/blank-profile.jpg",
      bio: "Creating beautiful user experiences",
      location: "Remote",
      joinedDate: "Apr 2024"
    },
    {
      name: "Barath",
      role: "Frontend Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Afsal",
      role: "Backend Engineer Intern",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Soorya",
      role: "Backend Engineer Intern",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Navneethan AT",
      role: "Backend Engineer Intern",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Navneethan S",
      role: "Backend Lead",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Deenadayalan",
      role: "Backend Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Harini Shree",
      role: "Backend Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Naveen",
      role: "Backend Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Nivedha",
      role: "QA Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Gohul",
      role: "QA Intern",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Aadharsh",
      role: "QA Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Thangaraj",
      role: "QA Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Mathan Mohan",
      role: "Dev Ops Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Kalaivanan",
      role: "Dev Ops Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Pradeep kumar",
      role: "Data Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Palanivelrajan",
      role: "BA Engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Vethaprasath",
      role: "Salesforce engineer",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    },
    {
      name: "Malavika",
      role: "HR",
      image: "../../public/blank-profile.jpg",
      bio: "Scaling systems for millions",
      location: "Coimbatore",
      joinedDate: "Mar 2024"
    }
  ];

  // Company activities and trips
  const activities = [
    {
      title: "Team Hackathon 2024",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      description: "48-hour innovation sprint where our team built amazing prototypes",
      participants: "12 team members"
    },
    {
      title: "Ooty Team Retreat",
      date: "February 2024", 
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      description: "Mountain retreat for team bonding and strategic planning",
      participants: "Entire team"
    },
    {
      title: "Office Game Night",
      date: "Weekly",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      description: "Friday evening games, pizza, and team bonding",
      participants: "Open to all"
    },
    {
      title: "AI Conference Mumbai",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      description: "Team attended India's largest AI conference for learning and networking",
      participants: "6 team members"
    },
    {
      title: "Coimbatore Tech Meetup",
      date: "Monthly",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      description: "Hosting and participating in local tech community events",
      participants: "Tech community"
    },
    {
      title: "Wellness Wednesday",
      date: "Weekly",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      description: "Yoga sessions, meditation, and wellness activities",
      participants: "All interested"
    }
  ];

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

  const contactOptions = [
    { id: 'automate', label: 'I want to automate something', icon: Zap },
    { id: 'partnership', label: "Let's talk partnerships", icon: HandHeart },
    { id: 'work', label: 'I want to work with you', icon: Users },
    { id: 'browse', label: 'Just browsing — hi!', icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-yellow-50 relative overflow-hidden transition-colors duration-300">
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
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight transition-colors duration-300">
              Beyond <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">AI</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto transition-colors duration-300">
              We're not just building the future of AI—we're creating a workplace where 
              <span className="text-yellow-600 font-bold"> humans thrive</span>, 
              <span className="text-yellow-600 font-bold"> creativity flows</span>, and 
              <span className="text-yellow-600 font-bold"> impact matters</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-blue-300 text-blue-800 text-lg font-bold rounded-full shadow-medium mb-8 transition-colors duration-300">
              <Users className="w-6 h-6 mr-3 text-blue-600" />
              OUR TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 transition-colors duration-300">
              Meet the <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Humans</span> Behind the AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              Talented individuals from diverse backgrounds, united by a shared passion for building meaningful technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border-2 border-gray-200/50 shadow-medium hover:shadow-strong transition-all duration-200 card-hover-fast group"
                intensity={0.8}
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto overflow-hidden rounded-2xl shadow-yellow group-hover:shadow-yellow-lg transition-all duration-200 border-4 border-yellow-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div> */}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {member.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {member.joinedDate}
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Trips */}
      <section className="py-20 bg-gradient-to-br from-yellow-50/50 via-white to-yellow-100/30 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-300 text-green-800 text-lg font-bold rounded-full shadow-medium mb-8 transition-colors duration-300">
              <Camera className="w-6 h-6 mr-3 text-green-600" />
              ACTIVITIES & TRIPS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 transition-colors duration-300">
              Life Beyond <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Code</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
              We believe great work happens when great people connect. Here's how we build bonds beyond the office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <InteractiveCard
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-gray-200/50 shadow-medium hover:shadow-strong transition-all duration-200 card-hover-fast overflow-hidden group"
                intensity={0.8}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                      {activity.date}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {activity.participants}
                    </div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Cards Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 transition-colors duration-300">
              Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Culture</span> Cards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
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
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border-2 border-gray-200/50 shadow-medium hover:shadow-strong transition-all duration-300 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 animate-float-fast">{card.emoji}</div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-lg font-bold text-yellow-600 mb-4 transition-colors duration-300">
                      {card.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed transition-colors duration-300">
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
      <section className="py-20 bg-gradient-to-br from-yellow-50/50 via-white to-yellow-100/30 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 transition-colors duration-300">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Perks</span> & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">{perk.title}</h3>
                <p className="text-gray-600 leading-relaxed transition-colors duration-300">{perk.description}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-blue-300 text-blue-800 text-lg font-bold rounded-full shadow-medium mb-8 transition-colors duration-300">
              <Mail className="w-6 h-6 mr-3 text-blue-600" />
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 transition-colors duration-300">
              What do you want to talk about?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 transition-colors duration-300">
              Smart routing helps personalize our conversation.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactOptions.map((option) => (
                <InteractiveCard
                  key={option.id}
                  className={`rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    contactType === option.id
                      ? 'bg-yellow-100 border-yellow-400 shadow-yellow-lg'
                      : 'bg-white/80 border-gray-200 hover:border-yellow-300 hover:shadow-medium'
                  }`}
                  intensity={0.7}
                >
                  <div className="flex items-center space-x-4 p-6" onClick={() => setContactType(option.id)}>
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
                  href={`mailto:careers@AboveCloud9.AI?subject=${
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
      <section className="py-20 bg-gradient-to-br from-yellow-100/60 to-yellow-200/40 backdrop-blur-xl relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <InteractiveCard intensity={0.5}>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 transition-colors duration-300">
              Ready to Join Our Journey?
            </h2>
          </InteractiveCard>
          
          <InteractiveCard intensity={0.3}>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto transition-colors duration-300">
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
                href="mailto:careers@AboveCloud9.AI?subject=General Application"
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