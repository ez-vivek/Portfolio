'use client'

import { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className={`relative ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
                <div className="absolute inset-0 rounded-full bg-black/30"></div>
                <nav className="relative px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full overflow-hidden shadow-lg border-2 border-transparent">
                    <div className="flex justify-center items-center gap-6">
                        <a href="https://github.com/ez-vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                            <i className="bi bi-github text-xl sm:text-2xl"></i>
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/ezvivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                            <i className="bi bi-linkedin text-xl sm:text-2xl"></i>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://www.instagram.com/ez.vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors">
                            <i className="bi bi-instagram text-xl sm:text-2xl"></i>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://x.com/ez_vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                            <i className="bi bi-twitter-x text-xl sm:text-2xl"></i>
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="mailto:vivektalent200@gmail.com" className="text-white hover:text-yellow-400 transition-colors">
                            <i className="bi bi-envelope text-xl sm:text-2xl"></i>
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}
