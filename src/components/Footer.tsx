
import { Cloud, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">aboveCloud9.ai</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Empowering businesses to reach new heights with cutting-edge AI technology and innovative solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 aboveCloud9.ai. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
