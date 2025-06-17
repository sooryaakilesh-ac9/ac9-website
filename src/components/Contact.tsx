import { Mail, Phone, MapPin, Send } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-20 top-10 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute right-15 bottom-15 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-fast">
          <InteractiveCard darkMode={true} intensity={0.5}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
          </InteractiveCard>
          <InteractiveCard darkMode={true} intensity={0.3}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
            </p>
          </InteractiveCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in-fast animation-delay-200">
            <InteractiveCard darkMode={true} intensity={0.4}>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            </InteractiveCard>
            
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: 'Email', value: 'hello@abovecloud9.ai' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA' }
              ].map((item, index) => (
                <InteractiveCard key={index} darkMode={true} intensity={0.6}>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-100">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>

          <InteractiveCard darkMode={true} intensity={0.7} className="animate-fade-in-fast animation-delay-300">
            <form className="bg-gray-800 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 transition-all duration-100 hover:bg-gray-600/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 transition-all duration-100 hover:bg-gray-600/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 transition-all duration-100 hover:bg-gray-600/50"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 transition-all duration-100 resize-none hover:bg-gray-600/50"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-100 flex items-center justify-center group hover:scale-105 hover:shadow-lg">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-100" />
                </button>
              </div>
            </form>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;