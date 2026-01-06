import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import FloorOne from '../../assets/Posepurse/floor1.jpg';
import Floorloter from '../../assets/Posepurse/floorLorter.jpg';
import floortwo from '../../assets/Posepurse/floorTwo.jpg';
import Floorzero from '../../assets/Posepurse/floorzero.jpg';
const dataPurpose = [
  {
    id: 'right-floor-zero',
    titleEn: 'Floor Level Ground',
    titleKm: 'ជាន់ទីផ្ទាល់ដី',
    imagefloor: Floorzero,
    descriptionEn: 'The ground floor serves as the foundation of our temple, welcoming visitors with open spaces for community gatherings and ceremonies. This level houses the main entrance hall where devotees can begin their spiritual journey.',
    descriptionKm: '',
  },
  {
    id: 'left-floor-one',
    titleEn: 'Floor Level One',
    titleKm: 'ជាន់ទីមួយ',
    imagefloor: Floorloter,
    descriptionEn: 'The first floor is dedicated to meditation and prayer halls. Here, monks and devotees gather for daily chanting and mindfulness practices, creating a peaceful atmosphere for spiritual contemplation.',
    descriptionKm: '',
  },
  {
    id: 'right-floor-two',
    titleEn: 'Floor Level Two',
    titleKm: 'ជាន់ទីពីរ',
    imagefloor: floortwo,
    descriptionEn: 'The second floor features the main Buddha shrine room, where sacred relics and Buddha statues are enshrined. This holy space is used for important religious ceremonies and special blessings.',
    descriptionKm: '',
  },
  {
    id: 'left-floor-three',
    titleEn: 'Floor Level Three',
    titleKm: 'ជាន់ទីបី',
    imagefloor: FloorOne,
    descriptionEn: 'The third floor is the highest level, symbolizing enlightenment and spiritual elevation. It offers panoramic views and serves as a space for advanced meditation practices and spiritual study.',
    descriptionKm: '',
  },
];

const Purpose = () => {
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
        { threshold: 0.2 }
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

  return (
    <div className="container mx-auto px-4 py-8 mt-[50px]">
      <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
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
            `}</style>

      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
        {language === 'en' ? 'Temple Floor Structure' : 'គោលបំណងនៃអាគារតាមជាន់នីមួយៗ'}
      </h1>

      <div className="space-y-16">
        {dataPurpose.map((floor, index) => (
          <section
            key={floor.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="relative overflow-hidden"
          >
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}>
              {/* Image */}
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} ${visibleSections.includes(index)
                ? index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'
                : 'opacity-0'
                }`}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <img
                    src={floor.imagefloor}
                    alt={language === 'en' ? floor.titleEn : floor.titleKm}
                    className="relative w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} ${visibleSections.includes(index)
                ? index % 2 === 0 ? 'animate-fadeInRight' : 'animate-fadeInLeft'
                : 'opacity-0'
                }`}>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
                  <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ${visibleSections.includes(index) ? 'animate-fadeInUp delay-100' : 'opacity-0'
                    }`}>
                    {language === 'en' ? floor.titleEn : floor.titleKm}
                  </h2>
                  <p className={`text-base md:text-lg text-gray-700 leading-relaxed ${visibleSections.includes(index) ? 'animate-fadeInUp delay-200' : 'opacity-0'
                    }`}>
                    {language === 'en' ? floor.descriptionEn : floor.descriptionKm}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
