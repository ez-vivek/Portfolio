import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
    {
        degree: "B.Tech in Computer Science Engineering",
        school: "Jis University",
        duration: "2023 - 2027",
        location: "West Bengal, INDIA",
        description: "Specialized in user experience design and interactive systems, focusing on emerging technologies, design thinking methodologies & user-centered solutions for engagement and usability across digital platforms."
    },
    {
        degree: "Logo & Brand Designer",
        school: "Freelancer",
        duration: "2022 - Now",
        location: "West Bengal, INDIA",
        description: "Focuses on digital design principles, typography, layout, color theory, visual hierarchy, and interactive media to create engaging and aesthetically pleasing user experiences across various platforms."
    },
    {
        degree: "UI Designer",
        school: "Freelancer",
        duration: "2022 - Now",
        location: "West Bengal, INDIA",
        description: "Specializes in creating intuitive and visually appealing interfaces by leveraging principles of user-centered design, interaction design, and responsive frameworks to enhance digital experiences."
    },
    {
        degree: "Scriptwriter",
        school: "Freelancer",
        duration: "2022 - Now",
        location: "West Bengal, INDIA",
        description: "Crafts compelling narratives, develops engaging scripts for diverse media formats, and utilizes storytelling techniques to connect with audiences emotionally and intellectually."
    }   
];

export default function Education() {
    return (
        <div className="py-20 bg-black relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0">
                <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-40 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 relative z-10 animate__animated animate__fadeIn animate__delay-0.9s">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                    My <span className="text-pink-500">Education </span>
                    & <span className="text-blue-500">Exp.</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    My education has equipped me with strong theoretical knowledge and practical skills in digital design preparing me for innovative challenges in today’s digital world.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/20 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-6">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                                <h4 className="text-xl text-pink-400 mb-4">{edu.school}</h4>

                                <div className="flex flex-wrap gap-4 mb-4">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <Calendar className="w-4 h-4" />
                                        <span>{edu.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <MapPin className="w-4 h-4" />
                                        <span>{edu.location}</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}