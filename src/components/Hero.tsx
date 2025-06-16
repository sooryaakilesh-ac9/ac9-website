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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg border border-gray-200 transition-all duration-200 hover:scale-105 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;