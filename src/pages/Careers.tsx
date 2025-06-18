import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, MapPin, Clock, Palette, Brain, Smartphone, Users, Eye, Mail } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      icon: Palette,
      title: "Frontend Developer",
      location: "Coimbatore / Remote",
      techStack: "React, Next.js, TypeScript, Redux",
      workOn: [
        "Building beautiful, blazing-fast UIs",
        "Collaborating closely with backend + product teams",
        "Shipping features that users actually use"
      ],
      lookingFor: [
        "2–4 yrs experience",
        "Strong TypeScript and React foundations",
        "Eye for detail + design sensibility",
        "Bonus: Familiar with AI dashboarding or data viz"
      ],
      email: "careers@AboveCloud9.ai",
      subject: "Frontend FTW"
    },
    {
      icon: Brain,
      title: "AI Engineer",
      location: "Coimbatore / Remote",
      techStack: "Python, Transformers, OpenAI, HuggingFace, LangChain",
      workOn: [
        "Designing and deploying ML models for NLP and doc intelligence",
        "Fine-tuning LLMs for internal + client tools",
        "Research + prototyping using OpenAI, HuggingFace, LangChain"
      ],
      lookingFor: [
        "1–3 yrs in AI/ML (or strong GitHub + project work)",
        "Python, Transformers, vector DBs",
        "Fast learners who love solving unsolved problems"
      ],
      email: "careers@AboveCloud9.ai",
      subject: "AI Wizard"
    },
    {
      icon: Smartphone,
      title: "Mobile Engineer",
      location: "Coimbatore / Remote",
      techStack: "Flutter / React Native / Native iOS or Android",
      workOn: [
        "Building clean, snappy mobile apps",
        "Integrating APIs, optimizing performance",
        "Working closely with designers + QA"
      ],
      lookingFor: [
        "2+ yrs mobile app development",
        "Knowledge of secure, scalable mobile architecture",
        "Bonus: Apps live on the Play Store/App Store"
      ],
      email: "careers@AboveCloud9.ai",
      subject: "Mobile Magic"
    },
    {
      icon: Users,
      title: "HR Associate",
      location: "Coimbatore (Onsite Preferred)",
      techStack: "People Operations, Talent Management",
      workOn: [
        "Owning people operations, engagement, and talent management",
        "Leading hiring drives, events, and culture building",
        "Supporting growth with structure + heart"
      ],
      lookingFor: [
        "0–2 yrs HR experience",
        "Strong people skills and creative thinking",
        "Comfortable with tech hiring and startup energy"
      ],
      email: "careers@AboveCloud9.ai",
      subject: "HR Hustler"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 dark:bg-yellow-900/40 border border-yellow-200/40 dark:border-yellow-700/40 text-yellow-800 dark:text-yellow-200 text-sm font-medium mb-6 rounded-full transition-colors duration-300">
              <Briefcase className="w-4 h-4 mr-2" />
              OPEN ROLES
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8 leading-tight transition-colors duration-300">
              Join Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Help us create AI solutions that make a real difference in people's lives. Work with industry veterans from top tech companies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-gray-900/40 dark:via-transparent dark:to-gray-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Open Positions */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-8 border border-white/30 dark:border-gray-700/30 shadow-lg rounded-xl hover:bg-white/70 dark:hover:bg-gray-800/70 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300">
                      <position.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200">
                        {position.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                    </div>
                  </div>

                  {position.techStack && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{position.techStack}</p>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">You'll Work On:</h5>
                    <ul className="space-y-2">
                      {position.workOn.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">What We're Looking For:</h5>
                    <ul className="space-y-2">
                      {position.lookingFor.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50/50 dark:bg-gray-700/30 p-4 rounded-lg transition-colors duration-300">
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="font-medium">Apply:</span>
                      <a 
                        href={`mailto:${position.email}?subject=${position.subject}`}
                        className="ml-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors duration-200"
                      >
                        {position.email}
                      </a>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Subject: {position.subject}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don't See Your Role Section */}
          <div className="text-center bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-8 shadow-lg border border-white/30 dark:border-gray-700/30 rounded-2xl transition-colors duration-300">
            <div className="flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                Don't See Your Role?
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg transition-colors duration-300">
              Let's not miss out on magic.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              If you think you'd be a great fit, drop us a line anyway →
            </p>
            <a 
              href="mailto:careers@AboveCloud9.ai?subject=General Application"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Send Us Your Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;