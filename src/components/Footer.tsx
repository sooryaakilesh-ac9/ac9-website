
import { Cloud, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm text-white py-16 relative overflow-hidden">
      {/* Background overlay with transparency */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">aboveCloud9.ai</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Empowering businesses to reach new heights with cutting-edge AI technology and innovative solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-yellow-400/90 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-yellow-400/90 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-yellow-400/90 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:translate-x-2 inline-block">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:translate-x-2 inline-block">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:translate-x-2 inline-block">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:translate-x-2 inline-block">News</a></li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:translate-x-2 inline-block">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:translate-x-2 inline-block">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:translate-x-2 inline-block">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:translate-x-2 inline-block">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 bg-white/5 backdrop-blur-sm rounded-lg p-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2024 aboveCloud9.ai. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-200 hover:scale-105">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-200 hover:scale-105">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-all duration-200 hover:scale-105">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
