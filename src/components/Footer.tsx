import { Cloud, Mail, Phone, MapPin } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 text-white py-16 relative overflow-hidden">
      {/* Background overlay with transparency */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>
      
      {/* Static background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-20 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute right-15 bottom-25 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <InteractiveCard darkMode={true} intensity={0.5}>
              <div className="flex items-center space-x-2 mb-6 group">
                <div className="w-10 h-10 bg-yellow-400/90 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-100">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">AboveCloud9.AI</span>
              </div>
            </InteractiveCard>
            
            <InteractiveCard darkMode={true} intensity={0.3}>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-6">
                Empowering businesses to reach new heights with cutting-edge AI technology and innovative solutions.
              </p>
            </InteractiveCard>
          </div>
          
          {/* Contact Information */}
          {/* <InteractiveCard darkMode={true} intensity={0.6} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:careers@aboveclooud9.ai" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  careers@aboveclooud9.ai
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  1166/2A1, Kurumbapalayam Road,<br />
                  Kalapatti, Coimbatore South,<br />
                  Coimbatore - 641048, Tamil Nadu
                </span>
              </div>
            </div>
          </InteractiveCard> */}
          
          {/* Quick Links */}
          <InteractiveCard darkMode={true} intensity={0.6} className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/#about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Life at AC9', href: '/life-at-ac9' },
                { label: 'Contact', href: '/contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-300 hover:text-yellow-400 transition-all duration-100 hover:translate-x-2 inline-block group">
                    <span className="group-hover:scale-105 transition-transform duration-100 inline-block">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </InteractiveCard>
        </div>
        
        <InteractiveCard darkMode={true} intensity={0.4} className="border-t border-white/20 pt-8 bg-white/5 rounded-lg p-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2025 AboveCloud9.AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-100 hover:scale-105 group">
                  <span className="group-hover:underline">{item}</span>
                </a>
              ))}
            </div>
          </div>
        </InteractiveCard>
      </div>
    </footer>
  );
};

export default Footer;