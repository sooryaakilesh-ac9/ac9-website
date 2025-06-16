import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Careers from '../components/Careers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;