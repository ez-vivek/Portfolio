import { Laptop, Brush, Video, Book, Pen } from 'lucide-react';
import { FiFigma } from 'react-icons/fi';

const services = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Develop interactive and responsive websites that offer smooth and seamless user experiences.'
  },
  {
    icon: <Brush className="w-8 h-8" />,
    title: 'Logo Design',
    description: 'Design professional and creative logos that establish a strong visual identity for your brand.'
  },
  {
    icon: <Pen className="w-8 h-8" />,
    title: 'Brand Design',
    description: 'Craft cohesive brand identities that effectively communicate your business’s core values.'
  },
  {
    icon: <FiFigma className="w-8 h-8" />,
    title: 'UI Design',
    description: 'Create intuitive and visually appealing user interface designs using Figma for your projects.'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Presentation Design',
    description: 'Design impactful presentations that effectively communicate ideas and captivate your audience.'
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: 'Report Services',
    description: 'Deliver comprehensive and visually appealing reports tailored to your specific business needs.'
  }
];


export default function Services() {
  return (
    <div id="services" className="py-20 bottom-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 animate__animated animate__fadeIn animate__delay-0.9s">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Look at my <span className="text-pink-500">Services</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          "If you're looking for someone who can help you create a strong digital web presence, look no further. I’m here to ensure your vision becomes a reality."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <a
              key={service.title}
              href="#contact"
              className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 group hover:border-pink-500/50 transition-colors block"
            >
              <div className="text-pink-500 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
