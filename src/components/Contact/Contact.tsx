import GradientBackground from './GradientBackground';
import ContactForm from './ContactForm';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden py-32 animate__animated animate__fadeIn animate__delay-0.9s">
      <GradientBackground />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's go🔥Have <span className="text-blue-500">projects</span> in<br />
              mind? Let's work<br />
              <span className="text-pink-500">together.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              Have a project in mind❓ Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
            </p>
            <div className="flex space-x-4 mt-6 gap-1">
              <a href="#hero" className="text-white hover:text-gray-200 transition-colors">
              <i className="bi bi-house-door text-xl sm:text-2xl"></i>
                <span className="sr-only">Home</span>
              </a>
              <a href="https://github.com/ez-vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                <i className="bi bi-github text-xl sm:text-2xl"></i>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ezvivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <i className="bi bi-linkedin text-xl sm:text-2xl"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/ez.vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors">
                <i className="bi bi-instagram text-xl sm:text-2xl"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://x.com/ez_vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                <i className="bi bi-twitter-x text-xl sm:text-2xl"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:vivektalent200@gmail.com" className="text-white hover:text-yellow-400 transition-colors">
                <i className="bi bi-envelope text-xl sm:text-2xl"></i>
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          {/* Right Column - Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

