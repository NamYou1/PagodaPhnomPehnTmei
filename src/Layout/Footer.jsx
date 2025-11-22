import React from "react";
import { useTranslation } from "../hooks/useTranslation";

const Footer = () => {
  const { t, language } = useTranslation();

  return (
    <footer className="bg-base-300 text-base-content py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
          {/* Company / description + small map */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-2">
              {language === 'en' ? 'Wat Phnom Pehn Tmey' : 'ទីតាំងវត្តភ្នំពេញថ្មី'}
            </h3>


            {/* Map hidden on very small devices */}
            <div className=" md:block">
              <iframe
                title="ACME location"
                src="https://www.google.com/maps?q=11.5750773,104.8781759&z=15&output=embed"
                className="w-full h-32 rounded"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">
              {language === 'en' ? 'Quick Links' : 'តំណភ្ជាប់'}
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="link link-hover">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/about" className="link link-hover">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="/contact" className="link link-hover">
                  {t('nav.contact')}
                </a>
              </li>
              <li>
                <a href="/structure" className="link link-hover">
                  {t('nav.structure')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">
              {language === 'en' ? 'Contact' : 'ទាក់ទង'}
            </h4>
            <p className="text-sm">
              {language === 'en' ? 'Phone' : 'ទូរស័ព្ទ'}: {" "}
              <a href="tel:+855964563693" className="link">
                +855 964 563 693
              </a>
            </p>
            <p className="text-sm">
              {language === 'en' ? 'Email' : 'អ៊ីមែល'}: {" "}
              <a href="mailto:info@watphnom.com" className="link">
                info@watphnom.com
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-3">
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm md:btn-md hover:bg-primary hover:border-primary"
                title="Telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.247-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>

              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm md:btn-md hover:bg-primary hover:border-primary"
                title="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a
                href="https://wa.me/855123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-sm md:btn-md hover:bg-primary hover:border-primary"
                title="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="divider my-6"></div>

        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} {language === 'en' ? 'Wat Phnom Pehn Tmey' : 'វត្តភ្នំពេញថ្មី'}. {' '}
            {language === 'en' ? 'All rights reserved.' : 'រក្សាសិទ្ធិទាំងអស់។'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
