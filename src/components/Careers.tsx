
import { Briefcase, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: "Backend Technical Lead",
      type: "Full-time",
      location: "Remote",
      icon: "🌟"
    },
    {
      title: "Mobile Lead",
      type: "Full-time", 
      location: "Remote",
      icon: "🌟"
    },
    {
      title: "QA Automation Lead",
      type: "Full-time",
      location: "Remote", 
      icon: "🌟"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-white via-yellow-50/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-sm font-medium mb-6 rounded-full">
            <Briefcase className="w-4 h-4 mr-2" />
            CAREERS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of innovators and help us create AI solutions that make a real difference in people's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {positions.map((position, index) => (
            <div
              key={index}
              className="group bg-white/50 backdrop-blur-md p-8 border border-white/30 shadow-lg rounded-xl hover:bg-white/70 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 text-center"
            >
              <div className="text-4xl mb-4">{position.icon}</div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-200">
                {position.title}
              </h3>
              
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {position.type}
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {position.location}
                </div>
              </div>
              
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
                Apply
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see a position that fits? We're always looking for talented individuals.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
            Send Us Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
