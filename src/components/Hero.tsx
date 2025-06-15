
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-yellow-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 border border-yellow-200/40 text-yellow-800 text-sm font-medium mb-8 rounded-full">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8">
            Take Your Business
            <span className="block text-yellow-500">Above Cloud 9</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Revolutionize your operations with cutting-edge AI technology. 
            We help businesses soar beyond limitations with intelligent automation and insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-150 hover:scale-105 flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
            </button>
            
            <button className="border-2 border-gray-400/50 hover:border-yellow-500 bg-white/30 text-gray-700 hover:text-yellow-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-150 hover:scale-105">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-20">
            <div className="relative">
              <div className="bg-white/30 backdrop-blur-lg shadow-xl p-8 max-w-4xl mx-auto border border-white/20 rounded-2xl">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-3 bg-yellow-500/80 rounded-full"></div>
                  <div className="h-3 bg-gray-300/60 rounded-full"></div>
                  <div className="h-3 bg-gray-300/60 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200/60 w-3/4 rounded-full"></div>
                  <div className="h-4 bg-gray-200/60 w-1/2 rounded-full"></div>
                  <div className="h-4 bg-yellow-200/80 w-2/3 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
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
