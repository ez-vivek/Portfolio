import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaBootstrap,
  FaGit, FaGithub, FaWordpress, FaGoogleDrive, FaAws, FaFigma
} from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="min-h-screen bg-black flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center animate__animated animate__fadeIn animate__delay-0.9s">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-pink-500">Digital Designer</span>
            <br />
            <span className="text-white">crafting products that</span>
            <br />
            <span className="text-white">people <span className="text-blue-500/70">Love .</span></span>
          </h1>
          <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto">
            I'm Vivek — a designer who works with startups looking to push creative <br />boundaries and create unique user experiences.
          </p>

          {/* Scrolling Icons Section */}
          <div className="mt-8 overflow-hidden ml-10 mr-10">
            <div className="flex animate-marquee gap-8 text-4xl text-white mx-auto">
              <div className="flex gap-8">
                <FaHtml5 className="hover:text-pink-500" />
                <FaCss3Alt className="hover:text-blue-500" />
                <FaJsSquare className="hover:text-yellow-500" />
                <FaReact className="hover:text-blue-500" />
                <FaNodeJs className="hover:text-teal-500" />
                <FaPython className="hover:text-green-500" />
                <FaBootstrap className="hover:text-purple-500" />
                <FaGit />
                <FaGithub />
                <FaWordpress className="hover:text-blue-500" />
                <FaGoogleDrive className="hover:text-yellow-500" />
                <FaAws className="hover:text-orange-500" />
                <FaFigma className="hover:text-purple-500" />
              </div>
              <div className="flex gap-8">
                <FaHtml5 className="hover:text-pink-500" />
                <FaCss3Alt className="hover:text-blue-500" />
                <FaJsSquare className="hover:text-yellow-500" />
                <FaReact className="hover:text-blue-500" />
                <FaNodeJs className="hover:text-teal-500" />
                <FaPython className="hover:text-green-500" />
                <FaBootstrap className="hover:text-purple-500" />
                <FaGit />
                <FaGithub />
                <FaWordpress className="hover:text-blue-500" />
                <FaGoogleDrive className="hover:text-yellow-500" />
                <FaAws className="hover:text-orange-500" />
                <FaFigma className="hover:text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
