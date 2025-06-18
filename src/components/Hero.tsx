import { ArrowRight, Link, Sparkles, Star, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-yellow-50/30 to-yellow-100/20 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-700/20 pt-16 relative overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-yellow-300/20 to-yellow-400/20 dark:from-yellow-400/10 dark:to-yellow-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400/15 to-yellow-500/15 dark:from-yellow-500/8 dark:to-yellow-600/8 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 dark:from-yellow-600/5 dark:to-yellow-700/5 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
      </div>

      {/* Static floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[Sparkles, Star, Zap].map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float-fast opacity-20 dark:opacity-10"
            style={{
              left: `${25 + index * 20}%`,
              top: `${25 + index * 15}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <Icon className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-8 animate-fade-in-fast">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/40 dark:to-yellow-800/40 border-2 border-yellow-300 dark:border-yellow-600/50 text-yellow-800 dark:text-yellow-200 text-lg font-bold rounded-full shadow-medium hover:shadow-yellow-lg transition-all duration-100 btn-hover-fast">
              <Sparkles className="w-6 h-6 mr-3 animate-sparkle-fast text-yellow-600 dark:text-yellow-400" />
              AI-Powered Solutions
            </div>
          </div>
          
          <div className="mb-8 animate-fade-in-fast animation-delay-100">
            <h1 className="text-6xl md:text-8xl font-black text-gray-800 dark:text-gray-100 mb-8 leading-tight">
              <span className="inline-block hover-lift-fast bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">Creating</span>{' '}
              <span className="inline-block hover-lift-fast bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">A</span>{' '}
              <span className="inline-block hover-lift-fast bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">Happier</span>{' '}
              <span className="inline-block hover-lift-fast bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">World</span>
            </h1>
          </div>
          
          <div className="mb-12 max-w-4xl mx-auto animate-fade-in-fast animation-delay-200">
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
              AboveCloud9.ai is an innovative IT start-up founded by tech luminaries from Silicon Valley giants. 
              We aim to positively impact lives through <span className="text-yellow-600 dark:text-yellow-400 font-bold">advanced AI tools</span> and cutting-edge technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-fast animation-delay-300">
            <button onClick={() => window.location.href = '/careers'} className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-100 shadow-strong hover:shadow-yellow-lg btn-hover-fast relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Careers
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-100" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
            </button>
            
            <button onClick={() => window.location.href = '/life-at-ac9'} className="group bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 px-12 py-5 rounded-2xl font-bold text-xl border-3 border-yellow-300 dark:border-yellow-600 hover:border-yellow-500 dark:hover:border-yellow-400 transition-all duration-100 shadow-strong hover:shadow-yellow-lg btn-hover-fast relative overflow-hidden backdrop-blur-sm">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float-fast">
        <div className="w-8 h-12 border-3 border-yellow-500 dark:border-yellow-400 rounded-full flex justify-center">
          <div className="w-2 h-3 bg-yellow-500 dark:bg-yellow-400 rounded-full mt-2 animate-sparkle-fast"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;