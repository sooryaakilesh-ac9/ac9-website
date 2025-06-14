
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-yellow-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100/60 backdrop-blur-xl border border-yellow-200/40 text-yellow-800 text-sm font-medium mb-8 animate-fade-in rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            AI-Powered Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 animate-fade-in-up">
            Take Your Business
            <span className="block text-yellow-500 animate-slide-in-left animation-delay-200">Above Cloud 9</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Revolutionize your operations with cutting-edge AI technology. 
            We help businesses soar beyond limitations with intelligent automation and insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <button className="group bg-yellow-500/90 hover:bg-yellow-600/90 backdrop-blur-xl border border-yellow-300/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-150 hover:scale-105 hover:shadow-xl flex items-center transform hover:-translate-y-1 animate-bounce-in animation-delay-800 shadow-lg">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
            </button>
            
            <button className="border-2 border-gray-400/50 hover:border-yellow-500/70 backdrop-blur-xl bg-white/30 text-gray-700 hover:text-yellow-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-150 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1 animate-bounce-in animation-delay-1000 shadow-lg">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-20 animate-scale-in animation-delay-800">
            <div className="relative">
              <div className="bg-white/40 backdrop-blur-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-white/50 rounded-2xl transform hover:scale-[1.02] transition-transform duration-200 relative overflow-hidden">
                {/* Glass effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-transparent pointer-events-none rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/70 via-transparent to-transparent"></div>
                
                <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
                  <div className="h-3 bg-yellow-500/80 rounded-full animate-pulse"></div>
                  <div className="h-3 bg-gray-300/60 rounded-full animate-pulse animation-delay-200"></div>
                  <div className="h-3 bg-gray-300/60 rounded-full animate-pulse animation-delay-400"></div>
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="h-4 bg-gray-200/60 w-3/4 rounded-full animate-fade-in animation-delay-600"></div>
                  <div className="h-4 bg-gray-200/60 w-1/2 rounded-full animate-fade-in animation-delay-800"></div>
                  <div className="h-4 bg-yellow-200/80 w-2/3 rounded-full animate-fade-in animation-delay-1000"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500/90 backdrop-blur-xl border border-yellow-300/40 rounded-2xl flex items-center justify-center shadow-lg animate-bounce animation-delay-1000">
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
