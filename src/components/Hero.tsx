import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaBootstrap,
  FaGit, FaGithub, FaWordpress, FaGoogleDrive, FaAws, FaFigma
} from 'react-icons/fa';

export default function Hero() {
  return (
    <div id="hero" className="min-h-screen bg-black flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 md:top-40 md:left-40 w-48 md:w-96 h-48 md:h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 md:bottom-40 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center animate__animated animate__fadeIn animate__delay-0.9s">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-pink-500">Digital Designer</span>
            <br />
            <span className="text-white whitespace-nowrap">crafting products that</span>
            <br />
            <span className="text-white">people <span className="text-blue-500/70">Love.</span></span>
          </h1>
          <p className="mt-6 md:mt-8 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Hello, I'm Vivek — a designer who works with startups looking to push creative boundaries and create unique user experiences.
          </p>

          {/* Scrolling Icons Section */}
          <div className="mt-8 overflow-hidden mx-4 sm:mx-10">
            <div className="flex animate-marquee gap-4 sm:gap-8 text-3xl sm:text-4xl text-white">
              <div className="flex gap-4 sm:gap-8">
                <FaHtml5 className="hover:text-pink-500 transition-colors" />
                <FaCss3Alt className="hover:text-blue-500 transition-colors" />
                <FaJsSquare className="hover:text-yellow-500 transition-colors" />
                <FaReact className="hover:text-blue-500 transition-colors" />
                <FaNodeJs className="hover:text-teal-500 transition-colors" />
                <FaPython className="hover:text-green-500 transition-colors" />
                <FaBootstrap className="hover:text-purple-500 transition-colors" />
                <FaGit className="transition-colors" />
                <FaGithub className="transition-colors" />
                <FaAws className="hover:text-orange-500 transition-colors" />
                <FaWordpress className="hover:text-blue-500 transition-colors" />
                <FaFigma className="hover:text-purple-500 transition-colors" />
                <FaGoogleDrive className="hover:text-yellow-500 transition-colors" />
              </div>
              <div className="flex gap-4 sm:gap-8">
                <FaHtml5 className="hover:text-pink-500 transition-colors" />
                <FaCss3Alt className="hover:text-blue-500 transition-colors" />
                <FaJsSquare className="hover:text-yellow-500 transition-colors" />
                <FaReact className="hover:text-blue-500 transition-colors" />
                <FaNodeJs className="hover:text-teal-500 transition-colors" />
                <FaPython className="hover:text-green-500 transition-colors" />
                <FaBootstrap className="hover:text-purple-500 transition-colors" />
                <FaGit className="transition-colors" />
                <FaGithub className="transition-colors" />
                <FaAws className="hover:text-orange-500 transition-colors" />
                <FaWordpress className="hover:text-blue-500 transition-colors" />
                <FaFigma className="hover:text-purple-500 transition-colors" />
                <FaGoogleDrive className="hover:text-yellow-500 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
