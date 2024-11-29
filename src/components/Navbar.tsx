import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import 'animate.css'; // Import animate.css for animations

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 px-4 py-3 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex justify-center items-center">
                {/* Social Media Links with Fade-In Animation */}
                <div className="flex justify-center gap-6 animate__animated animate__fadeIn animate__delay-0.9s">
                    <a href="https://github.com/ez-vivek" className="text-white hover:text-gray-400 transition-colors">
                        <i className="bi bi-github text-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ezvivek" className="text-white hover:text-gray-400 transition-colors">
                        <i className="bi bi-linkedin text-2xl"></i>
                    </a>
                    <a href="https://www.instagram.com/ez.vivek" className="text-white hover:text-gray-400 transition-colors">
                        <i className="bi bi-instagram text-2xl"></i>
                    </a>
                    <a href="https://x.com/ez_vivek" className="text-white hover:text-gray-400 transition-colors">
                        <i className="bi bi-twitter-x text-2xl"></i> {/* X icon */}
                    </a>
                    <a href="mailto:your-email@example.com" className="text-white hover:text-gray-400 transition-colors">
                        <i className="bi bi-envelope text-2xl"></i> {/* Mail icon */}
                    </a>
                </div>
            </div>
        </nav>
    );
}
