import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import { Facebook, Mail, Phone, Youtube } from 'lucide-react';
import MasterHak from "../../assets/Monks/MasterHak.jpg"
import SoundKong from "../../assets/Monks/SounKong.jpg"
// import { SoundKong } from '../../assets/Monks';
// import logo from "../assets/Logo.jpg";

const founderData = [

    {
        id: 'left-vp',
        name: 'Yu YiHak',
        nameKm: 'យូ យីហាក់',
        title: 'Leads the construction and is the Chief Monk at Wat Phnom Penh Tmei',
        titleKm: 'អ្នកដឹកនាំកសាង និងជាប្រធានសង្ឃ នៅវត្តភ្នំពេញថ្មី',
        bio: '',
        bioKm: '',
        imgUrl: MasterHak,
        socialLinks: [
            // { name: 'Youtube', url: 'https://linkedin.com', icon: 'Youtube' },
            { name: 'Facebook', url: 'https://www.facebook.com/yi.hak.3', icon: 'Facebook' },
            // { name: 'Email', url: 'mailto:founder@example.com', icon: 'Email' },
            // { name: 'PhoneNumber', url: '+855 98 905 246', icon: 'Phone' }   
        ]
    },
    {
        id: 'right-vp',
        name: 'Sound Kong',
        nameKm: 'មហាឧបាសិកាពុទ្ធសានូបត្ថម សួន គង់',
        title: 'You help maintain the new Phnom Penh Temple and help the monks inside the temple.',
        titleKm: 'អ្នកជួយទំនុបបំរុង វត្តភ្នំពេញថ្មី​ និង​ជួយខ្នះខ្នែង​ក្នុង​នៅក្នុងវត្ត ',
        bio: '',
        bioKm: '',
        imgUrl: SoundKong,
        socialLinks: [
            // { name: 'Youtube', url: 'https://linkedin.com', icon: 'Youtube' },
            // { name: 'Facebook', url: 'https://www.facebook.com/yi.hak.3', icon: 'Facebook' },
            // { name: 'Email', url: 'mailto:founder@example.com', icon: 'Email' },
            // { name: 'PhoneNumber', url: '+855 98 905 246', icon: 'Phone' }
        ]
    },

];

function Founder() {
    const { t, language } = useTranslation();
    const [visibleSections, setVisibleSections] = useState([]);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observers = sectionRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleSections((prev) => [...new Set([...prev, index])]);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            if (ref) {
                observer.observe(ref);
            }

            return observer;
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Facebook':
                return <Facebook />;
            case 'Phone':
                return <Phone />;
            case 'Email':
                return <Mail />;
            case 'Youtube':
                return <Youtube />;
            default:
                return null;
        }
    };

    return (
        <main className="space-y-12 py-8">
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .animate-fadeInLeft {
                    animation: fadeInLeft 0.8s ease-out forwards;
                }

                .animate-fadeInRight {
                    animation: fadeInRight 0.8s ease-out forwards;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.8s ease-out forwards;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .opacity-0 {
                    opacity: 0;
                }

                .delay-100 {
                    animation-delay: 0.1s;
                }

                .delay-200 {
                    animation-delay: 0.2s;
                }

                .delay-300 {
                    animation-delay: 0.3s;
                }

                .delay-400 {
                    animation-delay: 0.4s;
                }

                .delay-500 {
                    animation-delay: 0.5s;
                }
            `}</style>
            {founderData.map((founder, index) => (
                <section
                    key={founder.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="relative overflow-hidden mt-10 mb-10 px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-6xl mx-auto">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
                            {/* Profile Image */}
                            <div className={`relative group shrink-0 mt-5 ${visibleSections.includes(index)
                                ? index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'
                                : 'opacity-0'
                                }`}>
                                <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300 animate-float">
                                    <img
                                        src={founder.imgUrl}
                                        alt={language === 'en' ? founder.name : founder.nameKm}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Hero Content */}
                            <div className={`flex-1 text-gray-900 md:text-left rounded-xl shadow-lg p-8 ${visibleSections.includes(index)
                                ? index % 2 === 0 ? 'animate-fadeInRight' : 'animate-fadeInLeft'
                                : 'opacity-0'
                                }`}>
                                <h1 className={`text-4xl md:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent text-blue-800 bg-gradient-to-r from-purple-600 to-pink-600 ${visibleSections.includes(index) ? 'animate-fadeInUp delay-100' : 'opacity-0'
                                    }`}>
                                    {language === 'en' ? founder.name : founder.nameKm}
                                </h1>
                                <p className={`text-xl md:text-2xl text-primary mb-4 md:mb-6 font-semibold ${visibleSections.includes(index) ? 'animate-fadeInUp delay-200' : 'opacity-0'
                                    }`}>
                                    {language === 'en' ? founder.title : founder.titleKm}
                                </p>
                                <p className={`text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto ${visibleSections.includes(index) ? 'animate-fadeInUp delay-300' : 'opacity-0'
                                    }`}>
                                    {language === 'en' ? founder.bio : founder.bioKm}
                                </p>

                                {/* Social Links */}
                                <div className={`flex flex-wrap gap-4 justify-center md:justify-start ${visibleSections.includes(index) ? 'animate-fadeInUp delay-400' : 'opacity-0'
                                    }`}>
                                    {founder.socialLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 btn btn-primary btn-soft rounded-lg transition-all duration-300 flex items-center gap-2 shadow hover:shadow-lg hover:scale-105 transform"
                                        >
                                            <span>{getIcon(link.icon)}</span>
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </main>
    )
}

export default Founder