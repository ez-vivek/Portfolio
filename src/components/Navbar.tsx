'use client'

import { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false)
            } else {
                // Scrolling up
                setIsVisible(true)
            }
            setLastScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-20'
                }`}
        >
            <div className={`relative ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
                <div className="absolute inset-0 rounded-full bg-black/30"></div>
                <nav
                    className="relative px-8 py-3 bg-black rounded-full backdrop-blur-lg shadow-lg"
                    style={{
                        boxShadow: `
                            0 0 0.5px 0.5px rgba(236, 72, 153, 0.3),
                            0 0 0.5px 0.5px rgba(168, 85, 247, 0.3),
                            0 0 0.5px 0.5px rgba(0, 123, 255, 0.5),
                            0 0 0.5px 0.5px rgba(255, 105, 180, 0.5)
                        `
                    }}

                >
                    <div className="flex justify-center items-center gap-6">
                        <a href="#hero" className="text-white hover:text-gray-200 transition-colors">
                            <i className="bi bi-house-door text-xl sm:text-2xl"></i>
                            <span className="sr-only">Home</span>
                        </a>
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
                        <i className="bi bi-layout-sidebar-inset-reverse text-xl sm:text-2xl" title="Sidebar"></i>
                    </div>
                </nav>
            </div>
        </div>
    )
}
