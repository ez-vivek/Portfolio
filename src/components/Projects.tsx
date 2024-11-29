import { ArrowRight } from 'lucide-react';
const projects = [
  {
    image: '/Workify.png',
    title: 'Dev Workify - Collaborative Workspace',
    tags: ['Html', 'Css', 'JavaScript', 'Animations','Tools','Workspace'],
    url: 'https://ez-vivek.github.io/DevWorkify/',
  },
  {
    image: '/Apple Preview.png',
    title: 'Apple Vision Pro - 3d Animation Model',
    tags: ['Html', 'Css', 'JavaScript','Gsap','Animations','3D'],
    url: 'https://ez-vivek.github.io/Vision-Pro-3D-Animation/',
  },
  {
    image: '/Elixpo Preview.png',
    title: 'Elixpo AI - Text to Image Generator',
    tags: ['Html', 'Css', 'JavaScript','python','Firebase', 'Contributed as Frontend'],
    url: 'https://circuit-overtime.github.io/Elixpo_ai_pollinations/log_in_out.html',
  },
  {
    image: '/Vi Preview.png',
    title: 'Elixpo VI - Video to Text {"UNDER CONSTRUCTION"}',
    tags: ['Html', 'Css', 'JavaScript','Python','MongoDB','Contributing as Frontend'],
     // Add URL here
  },
];

export default function Projects() {
  return (
    <div className="py-10 bottom-10 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-80 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl text-center md:text-5xl font-bold mb-8">
          Selected <span className="text-pink-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Over the years, I've partnered with startups of all sizes and various stages to create some truly unique products. Here are a few that I feel were the most challenging yet rewarding.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              className="group"
            >
              <div
                className={`relative backdrop-blur-xl bg-white/10 rounded-lg p-4 border border-white/10 shadow-md hover:bg-white/20 transition-all duration-500 
                  animate-fade-in-up delay-[${index * 200}ms]`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                  <button className="flex items-center gap-2 text-pink-400 font-medium text-sm group/btn hover:text-pink-300 transition-colors">
                    VIEW PROJECT
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

