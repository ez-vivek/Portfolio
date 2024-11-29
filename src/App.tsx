import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />
      <Services />
      <Projects />
      <Process />

    </div>
  );
}

export default App;