
import GradientBackground from './GradientBackground';
import ContactForm from './ContactForm';

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