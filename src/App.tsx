import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Education from './components/Education';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Services />
      <Education/>
      <Projects />
      <Process />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;