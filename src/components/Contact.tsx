
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform
            <span className="text-yellow-400"> Your Business?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discover how we can help you leverage AI for unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">hello@abovecloud9.ai</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-yellow-500 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Free Consultation
                  </h4>
                  <p className="text-gray-800">
                    30-minute strategy session
                  </p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">
                Schedule a call to discuss your AI transformation journey and discover opportunities for your business.
              </p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 font-semibold transition-colors duration-200">
                Book Your Session
              </button>
            </div>
          </div>

          <div>
            <form className="bg-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
                  placeholder="john@company.com"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
                  placeholder="Your Company"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">How can we help?</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project and goals..."
                ></textarea>
              </div>
              
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 font-semibold transition-colors duration-200 flex items-center justify-center">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
