import { Laptop, Brush, BarChart, Shield, Video, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Build responsive and user-friendly websites that offer seamless user experiences across all devices.'
  },
  {
    icon: <Brush className="w-8 h-8" />,
    title: 'Graphic Design',
    description: 'Create visually compelling graphics for branding, marketing materials, websites, and social media.'
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights to help businesses make informed decisions and drive growth.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cybersecurity',
    description: 'Ensure your digital assets are protected against threats with advanced cybersecurity solutions and protocols.'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Video Production',
    description: 'Create high-quality video content for marketing, branding, and storytelling that engages audiences effectively.'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing to enhance collaboration, scalability, and flexibility for your business.'
  }
];

export default function Services() {
  return (
    <div className="py-20 bottom-10 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Look at my <span className="text-pink-500">Services</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          "If you're looking for someone who can help you create a strong digital web presence, look no further. I’m here to ensure your vision becomes a reality. Congratulations!"
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 group hover:border-pink-500/50 transition-colors">
              <div className="text-pink-500 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}