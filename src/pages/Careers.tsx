import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, MapPin, Clock, Palette, Brain, Smartphone, Users, Eye, Mail, Filter, Search, BarChart3, Settings, Code, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import InteractiveCard from '../components/InteractiveCard';

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Engineering', 'Operations'];

  const positions = [
    {
      icon: Smartphone,
      title: "Mobile Engineer",
      location: "Coimbatore / Remote",
      type: "Full-time",
      category: "Engineering",
      techStack: "Flutter / React Native / Native iOS or Android",
      workOn: [
        "Building clean, performant mobile applications",
        "Integrating APIs and optimizing for mobile performance",
        "Working closely with designers and QA teams"
      ],
      lookingFor: [
        "5+ years mobile app development experience",
        "Knowledge of secure, scalable mobile architecture",
        "Experience with cross-platform development",
        "Bonus: Published apps on Play Store/App Store"
      ],
      email: "careers@aboveclooud9.ai",
      subject: "Mobile Engineer Application"
    },
    {
      icon: BarChart3,
      title: "Data Engineer",
      location: "Coimbatore / Remote",
      type: "Full-time",
      category: "Engineering",
      techStack: "Python, SQL, Apache Spark, AWS, Data Pipeline Tools",
      workOn: [
        "Designing and building scalable data pipelines",
        "Optimizing data processing and storage systems",
        "Collaborating with data scientists and analysts"
      ],
      lookingFor: [
        "6+ years experience in data engineering",
        "Strong Python and SQL skills",
        "Experience with cloud data platforms (AWS, GCP, Azure)",
        "Knowledge of data warehousing and ETL processes"
      ],
      email: "careers@aboveclooud9.ai",
      subject: "Data Engineer Application"
    },
    {
      icon: Users,
      title: "Business Analyst",
      location: "Coimbatore / Remote",
      type: "Full-time",
      category: "Operations",
      techStack: "Business Analysis, SQL, Data Visualization, Project Management",
      workOn: [
        "Analyzing business requirements and processes",
        "Creating detailed specifications for development teams",
        "Working with stakeholders to define project scope"
      ],
      lookingFor: [
        "2.5+ years business analysis experience",
        "Strong analytical and problem-solving skills",
        "Experience with requirement gathering and documentation",
        "Knowledge of agile methodologies"
      ],
      email: "careers@aboveclooud9.ai",
      subject: "Business Analyst Application"
    },
    {
      icon: Settings,
      title: "DevOps Engineer",
      location: "Coimbatore / Remote",
      type: "Full-time",
      category: "Engineering",
      techStack: "Docker, Kubernetes, AWS, CI/CD, Infrastructure as Code",
      workOn: [
        "Building and maintaining cloud infrastructure",
        "Implementing CI/CD pipelines and automation",
        "Ensuring system reliability and scalability"
      ],
      lookingFor: [
        "6+ years DevOps/Infrastructure experience",
        "Strong experience with cloud platforms (AWS, GCP, Azure)",
        "Knowledge of containerization and orchestration",
        "Experience with monitoring and logging tools"
      ],
      email: "careers@aboveclooud9.ai",
      subject: "DevOps Engineer Application"
    },
    {
      icon: Code,
      title: "Backend Lead",
      location: "Coimbatore / Remote",
      type: "Full-time",
      category: "Engineering",
      techStack: "Node.js, Python, PostgreSQL, Redis, Microservices",
      workOn: [
        "Leading backend development and architecture decisions",
        "Building scalable APIs and microservices",
        "Mentoring junior developers and code reviews"
      ],
      lookingFor: [
        "6+ years backend development experience",
        "Strong leadership and mentoring skills",
        "Experience with system design and architecture",
        "Knowledge of database design and optimization"
      ],
      email: "careers@aboveclooud9.ai",
      subject: "Backend Lead Application"
    },
    {
      icon: CheckCircle,
      title: "QA Lead",
      location: "Coimbatore / Remote",
      type: "Full-time",
      category: "Engineering",
      techStack: "Test Automation, Selenium, Cypress, API Testing, CI/CD",
      workOn: [
        "Leading QA strategy and test automation initiatives",
        "Building and maintaining test frameworks",
        "Ensuring product quality and reliability"
      ],
      lookingFor: [
        "6+ years QA/testing experience",
        "Strong experience with test automation tools",
        "Leadership skills and team management experience",
        "Knowledge of agile testing methodologies"
      ],
      email: "careers@aboveclooud9.ai",
      subject: "QA Lead Application"
    }
  ];

  const filteredPositions = positions.filter(position => {
    const matchesCategory = selectedCategory === 'All' || position.category === selectedCategory;
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         position.techStack.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-yellow-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <InteractiveCard intensity={0.6}>
              <div className="inline-flex items-center px-6 py-3 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-lg font-bold mb-8 rounded-full transition-colors duration-300">
                <Briefcase className="w-5 h-5 mr-2" />
                OPEN ROLES
              </div>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.4}>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight transition-colors duration-300">
                Join Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Mission</span>
              </h1>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.3}>
              <p className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
                Help us create AI solutions that make a real difference in people's lives. Work with industry veterans from top tech companies.
              </p>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search positions or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-all duration-200"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-yellow-500 text-white shadow-lg'
                          : 'bg-white/80 text-gray-600 hover:bg-yellow-100 hover:text-yellow-700 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredPositions.length} of {positions.length} positions
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            {filteredPositions.length === 0 ? (
              <div className="text-center py-12">
                <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-500 mb-2">No positions found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPositions.map((position, index) => (
                  <InteractiveCard
                    key={index}
                    className="group bg-white/80 p-8 border-2 border-gray-200/50 shadow-lg rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                    intensity={0.8}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-yellow-500 group-hover:text-white">
                        <position.icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-200">
                          {position.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1 space-x-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {position.category}
                      </div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</p>
                      <p className="text-sm text-gray-600">{position.techStack}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">You'll Work On:</h5>
                      <ul className="space-y-2">
                        {position.workOn.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">What We're Looking For:</h5>
                      <ul className="space-y-2">
                        {position.lookingFor.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50/80 p-4 rounded-xl transition-colors duration-300 group-hover:bg-yellow-50">
                      <div className="text-center">
                        <a 
                          href={`mailto:${position.email}?subject=${position.subject}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center mx-auto"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </InteractiveCard>
                ))}
              </div>
            )}
          </div>

          {/* Don't See Your Role Section */}
          <InteractiveCard 
            className="text-center bg-white/50 p-12 shadow-lg border-2 border-gray-200/50 rounded-2xl transition-colors duration-300"
            intensity={0.6}
          >
            <div className="flex items-center justify-center mb-6">
              <Eye className="w-10 h-10 text-yellow-500 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900 transition-colors duration-300">
                Don't See Your Role?
              </h3>
            </div>
            <p className="text-gray-600 mb-6 text-xl transition-colors duration-300">
              We're always looking for exceptional talent.
            </p>
            <p className="text-gray-600 mb-8 transition-colors duration-300">
              If you think you'd be a great fit for our mission, we'd love to hear from you.
            </p>
            <a 
              href="mailto:careers@aboveclooud9.ai?subject=General Application"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Apply Now
            </a>
          </InteractiveCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;