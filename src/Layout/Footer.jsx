import React from "react";
import { useTranslation } from "../hooks/useTranslation";

const Footer = () => {
  const { t, language } = useTranslation();

  return (
    <footer className="bg-base-300 text-base-content pt-8 md:mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
          {/* Company / description + small map */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-2">
              {language === 'en' ? 'Wat Phnom Pehn Tmei ' : 'ទីតាំងវត្តភ្នំពេញថ្មី '}
            </h3>
            <p> {language === 'en' ? ' Street 1982, Phnom Pehn, Cambodia' : 'ផ្លូវ ១៩៨២ ភ្នំពេញ កម្ពុជា'}</p>


            {/* Map hidden on very small devices */}
            <div className=" md:block">
              <iframe
                title="ACME location"
                src="https://www.google.com/maps?q=11.5750773,104.8781759&z=17&output=embed"
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
              <a href="watphnompehntmei@gmail.com" className="link">
                watphnompehntmei@gmail.com
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-3">
              <a
                href="https://t.me/Namyou1"
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
                href="https://www.facebook.com/people/%E1%9E%9C%E1%9E%8F%E1%9F%92%E1%9E%8F%E1%9E%97%E1%9F%92%E1%9E%93%E1%9F%86%E1%9E%96%E1%9F%81%E1%9E%89%E1%9E%90%E1%9F%92%E1%9E%98%E1%9E%B8/100085604379815/"
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
            </div>
          </div>

        </div>

        <div className="divider my-6"></div>

        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} {language === 'en' ? 'Wat Phnom Pehn Tmei' : 'វត្តភ្នំពេញថ្មី'}. {' '}
            {language === 'en' ? 'All rights reserved.' : 'រក្សាសិទ្ធិទាំងអស់។'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
