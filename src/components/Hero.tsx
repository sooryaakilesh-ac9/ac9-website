
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
            Creating A Happier World
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            AboveCloud9.AI is an innovative IT start-up founded by tech luminaries from Silicon Valley giants. 
            We aim to positively impact lives through advanced AI tools and cutting-edge technology.
          </p>
          
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
