import { ArrowRight } from 'lucide-react';

const logoDesigns = [
    {
        image: '/Logo1.png',
        title: 'Modern Logo Design',
        tags: ['Logo', 'Branding', 'Minimalistic'],
        url: '#',
    },
    {
        image: '/Logo2.png',
        title: 'Creative Logo for Startups',
        tags: ['Logo', 'Vector', 'Unique'],
        url: '#',
    },
    {
        image: '/Logo3.png',
        title: 'Bold Logo Concept',
        tags: ['Logo', 'Bold', 'Professional'],
        url: '#',
    },
    {
        image: '/Logo4.png',
        title: 'Elegant Logo Design',
        tags: ['Logo', 'Elegant', 'Stylish'],
        url: '#',
    },
    // Add more logo designs here
];

export default function LogoDesign() {
    return (
        <div id="designs" className="py-20 bg-black relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-40 left-80 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 animate__animated animate__fadeIn animate__delay-0.9s">
                <h2 className="text-4xl text-center md:text-6xl font-bold mb-8">
                    Selected <span className="text-pink-500">Logo</span> Designs
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Over 3 years of exp. having digital design principles, typography, layout, color theory, visual hierarchy, and interactive media to create engaging user experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {logoDesigns.map((design, index) => (
                        <a
                            href={design.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={design.title}
                            className="group"
                        >
                            <div
                                className={`relative backdrop-blur-xl bg-white/10 rounded-lg p-4 border border-white/10 shadow-md hover:bg-white/20 transition-all duration-500 
                  animate-fade-in-up delay-[${index * 200}ms]`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img
                                            src={design.image}
                                            alt={design.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {design.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-white">{design.title}</h3>
                                    <button className="flex items-center gap-2 text-pink-400 font-medium text-sm group/btn hover:text-pink-300 transition-colors">
                                        VIEW DESIGN
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
