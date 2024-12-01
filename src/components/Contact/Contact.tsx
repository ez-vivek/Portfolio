import { Mail, Phone } from 'lucide-react';
import GradientBackground from './GradientBackground';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden py-32">
      <GradientBackground />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Have <span className="text-blue-500">projects</span> in<br />
              mind? Let's work<br />
              <span className="text-pink-500">together</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8">
              Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-1">
              <a href="mailto:vivektalent200@gmail.com" className="flex items-center gap-4 text-white hover:text-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>vivektalent200@gmail.com</span>
              </a>
              
              <a href="Call:917003900610" className="flex items-center gap-4 text-white hover:text-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>IN 917003900610</span>
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