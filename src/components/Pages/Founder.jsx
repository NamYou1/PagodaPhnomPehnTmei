import React from 'react'
import { Link } from 'react-router-dom'

function Founder() {


    const socialLinks = [
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
        { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
        { name: 'Email', url: 'mailto:founder@example.com', icon: '✉️' },
    ]

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Profile Image */}
                        <div className="relative group shrink-0">
                            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Hero Content */}
                        <div className="flex-1 text-gray-900 text-center md:text-left bg-white rounded-xl shadow-lg p-8">
                            <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-pink-400">
                                Sophea
                            </h1>
                            <p className="text-xl md:text-2xl text-purple-700 mb-4 md:mb-6 font-semibold">Founder & CEO</p>
                            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                                Passionate about building innovative solutions that make a difference.
                                With over 15 years of experience in technology and entrepreneurship,
                                I'm committed to creating products that empower people and transform industries.
                            </p>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition flex items-center gap-2 shadow"
                                    >
                                        <span>{link.icon}</span>
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Founder