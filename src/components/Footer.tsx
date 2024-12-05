export default function Footer() {
    return (
        <footer id="footer" className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 text-center animate__animated animate__fadeIn animate__delay-0.9s">
                {/* Copyright */}
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Vivek's Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
