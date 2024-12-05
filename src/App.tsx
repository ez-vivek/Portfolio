import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import LogoDesign from './components/LogoDesign';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />     
      <Education/>
      <Projects />
      <LogoDesign />
      <Services />
      <Process />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;

