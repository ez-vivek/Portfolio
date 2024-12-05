// 'use client'

// import { useEffect, useState } from 'react'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'animate.css'

// export default function Navbar() {
//     const [isVisible, setIsVisible] = useState(true)
//     const [lastScrollY, setLastScrollY] = useState(0)

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > lastScrollY) {
//                 // Scrolling down
//                 setIsVisible(false)
//             } else {
//                 // Scrolling up
//                 setIsVisible(true)
//             }
//             setLastScrollY(window.scrollY)
//         }

//         window.addEventListener('scroll', handleScroll)
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [lastScrollY])

//     return (
//         <div
//             className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-20'
//                 }`}
//         >
//             <div className={`relative ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
//                 <div className="absolute inset-0 rounded-full bg-black/30"></div>
//                 <nav
//                     className="relative px-8 py-3 bg-black rounded-full backdrop-blur-lg shadow-lg"
//                     style={{
//                         boxShadow: `
//                             0 0 0.5px 0.5px rgba(236, 72, 153, 0.3),
//                             0 0 0.5px 0.5px rgba(168, 85, 247, 0.3),
//                             0 0 0.5px 0.5px rgba(0, 123, 255, 0.5),
//                             0 0 0.5px 0.5px rgba(255, 105, 180, 0.5)
//                         `
//                     }}

//                 >
//                     <div className="flex justify-center items-center gap-6">
//                         <a href="#experience" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">Experience</a>
//                         <a href="#projects" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">Projects</a>
//                         <a href="#designs" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">Designs</a>
//                         <a href="#contact" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
//                         <a href="https://github.com/ez-vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
//                             <i className="bi bi-github text-xl sm:text-2xl"></i>
//                             <span className="sr-only">GitHub</span>
//                         </a>
//                         <a href="https://www.linkedin.com/in/ezvivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
//                             <i className="bi bi-linkedin text-xl sm:text-2xl"></i>
//                             <span className="sr-only">LinkedIn</span>
//                         </a>
//                         <a href="https://www.instagram.com/ez.vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors">
//                             <i className="bi bi-instagram text-xl sm:text-2xl"></i>
//                             <span className="sr-only">Instagram</span>
//                         </a>
//                         <a href="https://x.com/ez_vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
//                             <i className="bi bi-twitter-x text-xl sm:text-2xl"></i>
//                             <span className="sr-only">Twitter</span>
//                         </a>
//                         <a href="mailto:vivektalent200@gmail.com" className="text-white hover:text-yellow-400 transition-colors">
//                             <i className="bi bi-envelope text-xl sm:text-2xl"></i>
//                             <span className="sr-only">Email</span>
//                         </a>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     )
// }

'use client'

import { useState, useEffect, useRef } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false) // Update 1
    const menuRef = useRef<HTMLDivElement>(null)

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-20'
                }`}
        >
            <div className={`relative ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
                <div className="absolute inset-0 rounded-full bg-black/30"></div>
                <nav
                    className="relative px-4 sm:px-8 py-3 bg-black rounded-full backdrop-blur-lg shadow-lg"
                    style={{
                        boxShadow: `
                            0 0 0.5px 0.5px rgba(236, 72, 153, 0.3),
                            0 0 0.5px 0.5px rgba(168, 85, 247, 0.3),
                            0 0 0.5px 0.5px rgba(0, 123, 255, 0.5),
                            0 0 0.5px 0.5px rgba(255, 105, 180, 0.5)
                        `
                    }}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
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
                        <div className="hidden sm:flex justify-center items-center gap-6"> {/* Update 4 */}
                            <a href="#experience" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">Experience</a>
                            <a href="#projects" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">Projects</a>
                            <a href="#designs" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">Designs</a>
                            <a href="#contact" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
                        </div>
                        <div className="sm:hidden"> {/* Update 2 */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <motion.div
                                    animate={isMenuOpen ? "open" : "closed"}
                                    className="w-6 h-6 flex flex-col justify-around"
                                >
                                    <motion.span
                                        variants={{
                                            closed: { rotate: 0, y: 0 },
                                            open: { rotate: 45, y: 8 },
                                        }}
                                        className="w-6 h-0.5 bg-white block"
                                    ></motion.span>
                                    <motion.span
                                        variants={{
                                            closed: { opacity: 1 },
                                            open: { opacity: 0 },
                                        }}
                                        className="w-6 h-0.5 bg-white block"
                                    ></motion.span>
                                    <motion.span
                                        variants={{
                                            closed: { rotate: 0, y: 0 },
                                            open: { rotate: -45, y: -8 },
                                        }}
                                        className="w-6 h-0.5 bg-white block"
                                    ></motion.span>
                                </motion.div>
                            </button>
                        </div>
                    </div>
                </nav>
                {/* Update 3 */}
                {isMenuOpen && (
                    <div className="sm:hidden absolute top-full left-0 right-0 mt-2 bg-black rounded-lg shadow-lg overflow-hidden">
                        <div className="flex flex-col py-2">
                            <a href="#experience" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors px-4 py-2">Experience</a>
                            <a href="#projects" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors px-4 py-2">Projects</a>
                            <a href="#designs" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors px-4 py-2">Designs</a>
                            <a href="#contact" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors px-4 py-2">Contact</a>
                        </div>
                    </div>
                )}
                {/* End Update 3 */}
            </div>
        </div>
    )
}

