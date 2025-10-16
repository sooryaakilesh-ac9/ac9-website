import { ArrowRight, Sparkles, Star, Zap, Users, Target, Rocket } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-yellow-50/30 to-yellow-100/20 pt-16 relative overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-yellow-300/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
      </div>

      {/* Static floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[Sparkles, Star, Zap].map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float-fast opacity-20"
            style={{
              left: `${25 + index * 20}%`,
              top: `${25 + index * 15}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <Icon className="w-4 h-4 text-yellow-500" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-8 animate-fade-in-fast">
            <InteractiveCard intensity={0.6}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-yellow-200 border-2 border-yellow-300 text-yellow-800 text-lg font-bold rounded-full shadow-medium hover:shadow-yellow-lg transition-all duration-100 btn-hover-fast">
                <Sparkles className="w-6 h-6 mr-3 animate-sparkle-fast text-yellow-600" />
                AI-Powered Solutions
              </div>
            </InteractiveCard>
          </div>
          
          <div className="mb-8 animate-fade-in-fast animation-delay-100">
            <InteractiveCard intensity={0.4}>
            <h1 className="text-[54px] md:text-[86.4px] font-black text-gray-800 mb-8 leading-tight md:leading-[1.2] py-2 overflow-visible">
              <span className="inline-block hover-lift-fast bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Creating</span>{' '}
              <span className="inline-block hover-lift-fast bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">A</span>{' '}
              <span className="inline-block hover-lift-fast bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Happier</span>{' '}
              <span className="inline-block hover-lift-fast bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">World</span>
            </h1>

            </InteractiveCard>
          </div>
          
          <div className="mb-12 max-w-4xl mx-auto animate-fade-in-fast animation-delay-200">
            <InteractiveCard intensity={0.3}>
              <p className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed">
We're an <span className="text-yellow-600 font-bold">impact-driven</span>, engineering team building <span className="text-yellow-600 font-bold">scalable</span> products that simplify
<span className="text-yellow-600 font-bold">automation, data intelligence, and AI integration</span>. 
{/* Right now, we're partnering with an early-stage company to validate 
key use cases while rapidly prototype internal platforms that solve real, repeatable technical challenges across modern stacks. */}
              </p>
            </InteractiveCard>
          </div>

          {/* Key Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto animate-fade-in-fast animation-delay-300">
            {[
              { icon: Target, title: "Purpose-Driven", desc: "Every solution we build has a clear mission: Make Life Better" },
              { icon: Users, title: "Human-Centered", desc: "Technology should enhance human potential, not replace it" },
              { icon: Rocket, title: "Innovation First", desc: "We don't just follow trends—we create the future" }
            ].map((item, index) => (
              <InteractiveCard key={index} intensity={0.7}>
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border-2 border-yellow-200/50 shadow-medium hover:shadow-yellow-lg transition-all duration-200 card-hover-fast flex flex-col text-center min-h-[280px]">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-yellow">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-fast animation-delay-400">
            <InteractiveCard intensity={1.0}>
              <button onClick={() => window.location.href = '/careers'} className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-100 shadow-strong hover:shadow-yellow-lg btn-hover-fast relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Join Our Mission
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-100" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
              </button>
            </InteractiveCard>
            
            <InteractiveCard intensity={0.8}>
              <button onClick={() => window.location.href = '/life-at-ac9'} className="group bg-white/90 hover:bg-white text-gray-800 px-12 py-5 rounded-2xl font-bold text-xl border-3 border-yellow-300 hover:border-yellow-500 transition-all duration-100 shadow-strong hover:shadow-yellow-lg btn-hover-fast relative overflow-hidden backdrop-blur-sm">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
              </button>
            </InteractiveCard>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float-fast">
        <div className="w-8 h-12 border-3 border-yellow-500 rounded-full flex justify-center">
          <div className="w-2 h-3 bg-yellow-500 rounded-full mt-2 animate-sparkle-fast"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;