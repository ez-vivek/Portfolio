const certificates = [
  {
    image: '/certificates/certificate1.png',
    title: 'Certificate of Participation',
    subtitle: 'GDG • 2025',
  },
  {
    image: '/certificates/certificate2.png',
    title: 'Certificate of Appreciation',
    subtitle: 'JIS UNIVERSITY • 2025',
  },
];

export default function Certificates() {
  return (
    <div id="certificates" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 animate__animated animate__fadeIn animate__delay-0.9s">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Recent <span className="text-blue-500">Certificates</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Recognitions key certifications, professional achievements, and accolades that reflect expertise, dedication, and commitment to continuous learning and excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group relative backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/10 hover:bg-white/20 transition-all duration-500 animate-fade-in-up delay-[${index * 200}ms]`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
