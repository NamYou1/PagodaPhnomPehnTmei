import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import FloorOne from "../../assets/PursPose/FloorOne.jpg";
import FloorTwo from "../../assets/PursPose/FloorTwo.jpg";
import Groundfloor from "../../assets/PursPose/Groundfloor.jpg";
import Mezzaninefloor from "../../assets/PursPose/Mezzaninefloor.jpg";

const dataPurpose = [
  {
    id: 'right-floor-zero',
    titleEn: ' Ground Floor',
    titleKm: 'ជាន់ទីផ្ទាល់ដី',
    imagefloor: Groundfloor,
    descriptionEn: 'Motorbike parking, spaces for various ceremonies, dining hall, 3 staircases, 4 restrooms, 2 storage rooms, and 3 living quarters.',
    descriptionKm: 'ចំណតម៉ូតូ លំហរប្រារព្ធពីធីផ្សេងៗ ចង្រ្កានបាយកន្លែងដាក់ធាតុ ជណ្តើរ៣ បន្ទប់ទឹក៤ ឃ្លាំង២ និង​បន្ទាប់ស្នាក់នៅ៣ ។',
  },
  {
    id: 'left-floor-one',
    titleEn: 'Mezzanine Floor ',
    titleKm: 'ជាន់ឡៅតឿ',
    imagefloor: Mezzaninefloor,
    descriptionEn: 'Spaces for various ceremonies and places where monks reside.',
    descriptionKm: 'លំហប្រារព្ធពីធីផ្សេងៗ និងកន្លែងព្រះសង្ឃគង់ឆាន់ចង្ហាន់់​។',
  },
  {
    id: 'right-floor-two',
    titleEn: ' Floor One ',
    titleKm: 'ជាន់ទីមួយ',
    imagefloor: FloorOne,
    descriptionEn: '25 monk quarters, 2 restrooms, 1 water storage room, a drying yard, and a communal utility yard.',
    descriptionKm: 'បន្ទប់ព្រះសង្ឃគង់នៅចំនួន ២៥អង្គ បណ្តាល័យ បន្ទប់ទឹក២ បន្ទប់ស្រង់ទឹក១ លំហរហាលចិវរ លំហរប្រើ់ប្រាស់រូម ។ ',
  },
  {
    id: 'left-floor-three',
    titleEn: ' Floor Two ',
    titleKm: 'ជាន់ទីពីរ',
    imagefloor: FloorTwo,
    descriptionEn: `Church, public space, student dormitory with 15 beds, 2 bathrooms, 1 shower room, and a place to dry students' clothes.`,
    descriptionKm: 'ព្រះវិហារ លំហសាធារណៈ បន្ទប់និស្សិតដែលមានគ្រែ១៥ បន្ទប់ទឹក២ កន្លែងងូតទឹក១ និងកន្លែងហាលសម្លៀកបំពាក់របស់និស្សិត​។',
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 mt-[50px] sm:mt-[60px] lg:mt-[70px]">
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

                /* Mobile-specific adjustments */
                @media (max-width: 640px) {
                    .animate-fadeInLeft,
                    .animate-fadeInRight {
                        animation: fadeInUp 0.8s ease-out forwards;
                    }
                }
            `}</style>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-bold text-purple-800 mb-3 sm:mb-4">
        {language === 'en' ? ' Construction Project Wat Phnom Penh Tmei ' : 'គម្រោងកសាង វត្តភ្នំពេញថ្មី'}
      </h3>
      {/* Introduction Section */}
      <div className="mb-8 sm:mb-10 lg:mb-12 space-y-4 sm:space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-4 sm:p-6 lg:p-8 border-l-4 border-blue-600">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium">
            {language === 'en' ? (
              <>
                <span className="text-blue-700 font-bold">Initiated by</span> the committee in collaboration with
                all levels of authorities in Sen Sok district,
                along with Buddhist devotees near and far. <span className="text-indigo-700 font-semibold">Led by Preah Sovannsoro Yu Yihak</span>
                <span className="text-purple-700 font-semibold block mt-2">Design plans by Bhikkhu Buddhivaro Tul Sokhman</span>
              </>
            ) : (
              <>
                <span className="text-blue-700 font-bold">ផ្តួចផ្តើមកសាងដោយ</span> អាចារ្យគណៈកម្មការរួមជាមួយ
                អជ្ញាធរគ្រប់លំដាប់ថ្នាក់ក្នុងខណ្ឌសែនសុខ
                ព្រមទាំងប្រជាពលរដ្ឋពុទ្ធបរិសទីជិតឆ្ងាយ <span className="text-indigo-700 font-semibold">ដឹកនាំគម្រោងដោយ ព្រះសុវណ្ណសោរោ យូ យីហាក់</span>
                <span className="text-red-400 font-semibold block mt-2">សិក្សាប្លង់ដោយ ភិក្ខុពុទ្ធិវរោ តុល សុខមាន</span>
              </>
            )}
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md p-4 sm:p-6 lg:p-8 border-l-4 border-purple-600">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-800 mb-3 sm:mb-4">
            {language === 'en' ? 'Purpose' : 'គោលបំណង'}
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium">
            {language === 'en'
              ? 'To extend the lifespan of the old temple site for monks and poor students to reside and continue their scriptural studies.'
              : 'បន្តអាយុកាលនៃជាទីស្ថាននៃវត្តអារាមចាស់សម្រាប់ភិក្ខុសង្ឃ និង និស្សិតក្រីក្រស្នាក់នៅដើម្បីបន្តការសិក្សារៀនសូត្រ'
            }
          </p>
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-primary px-2">
        {language === 'en' ? 'Temple Floor Structure' : 'អាគារតាមជាន់នីមួយៗ'}
      </h1>

      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {dataPurpose.map((floor, index) => (
          <section
            key={floor.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="relative overflow-hidden"
          >
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
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
                    className="relative  rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} ${visibleSections.includes(index)
                ? index % 2 === 0 ? 'animate-fadeInRight' : 'animate-fadeInLeft'
                : 'opacity-0'
                }`}>
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300">
                  <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ${visibleSections.includes(index) ? 'animate-fadeInUp delay-100' : 'opacity-0'
                    }`}>
                    {language === 'en' ? floor.titleEn : floor.titleKm}
                  </h2>
                  <p className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ${visibleSections.includes(index) ? 'animate-fadeInUp delay-200' : 'opacity-0'
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
