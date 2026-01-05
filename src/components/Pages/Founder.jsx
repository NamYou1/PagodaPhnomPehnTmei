import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import { Facebook, Mail, Phone, Youtube } from 'lucide-react';
import MasterHak from "../../assets/Monks/MasterHak.jpg"
// import logo from "../assets/Logo.jpg";
function Founder() {
    const { t } = useTranslation();

    const socialLinks = [
        // { name: 'Youtube', url: 'https://linkedin.com', icon: <Youtube /> },
        { name: 'Facebook', url: 'https://www.facebook.com/yi.hak.3', icon: <Facebook /> },
        // { name: 'Email', url: 'mailto:founder@example.com', icon: <Mail /> },
        { name: "PhoneNumber", url: "+855 98 905 246", icon: <Phone /> }
    ]

    return (

        <main className=" ">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="relative max-w-6xl mx-auto ">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Profile Image */}
                        <div className="relative group shrink-0 mt-5">
                            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <img
                                    src={MasterHak}
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Hero Content */}
                        <div className="flex-1 text-gray-900  md:text-left rounded-xl shadow-lg p-8 ">
                            <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent text-blue-800 bg-gradient-to-r from-purple-600 to-pink-600">
                                {t('founder.name')}
                            </h1>
                            <p className="text-xl md:text-2xl text-primary mb-4 md:mb-6 font-semibold">{t('founder.title')}</p>
                            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                                {t('founder.bio')}
                            </p>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 btn btn-primary btn-soft  rounded-lg transition flex items-center gap-2 shadow"
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