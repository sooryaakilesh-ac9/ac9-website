
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-yellow-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-800 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            Take Your Business
            <span className="block text-yellow-400">Above Cloud 9</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Revolutionize your operations with cutting-edge AI technology. 
            We help businesses soar beyond limitations with intelligent automation and insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button className="group bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="border-2 border-gray-300 hover:border-yellow-400 text-gray-700 hover:text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-20 animate-scale-in animation-delay-600">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-full"></div>
                  <div className="h-3 bg-gray-200 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  <div className="h-4 bg-yellow-100 rounded w-2/3"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
