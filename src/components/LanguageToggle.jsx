import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import cm from '../assets/cmb.png'
import uk from '../assets/uk.png'

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage()

    return (
        <div className="dropdown dropdown-end">
            <button
                tabIndex={0}
                title="Select language"
                className=""
            >
                <img
                    src={language === 'en' ? uk : cm}
                    alt="flag"
                    className="w-10 h-10 object-cover rounded"
                />
            </button>
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-30 w-50 p-2 shadow border border-primary"
            >
                <li>
                    <button
                        onClick={() => {
                            if (language !== 'en') toggleLanguage()
                        }}
                        className={`flex items-center gap-3 ${language === 'en' ? 'active' : ''}`}
                    >
                        <img src={uk} alt="English" className="w-5 h-5 object-cover rounded" />
                        <span>English</span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            if (language !== 'km') toggleLanguage()
                        }}
                        className={`flex items-center gap-3 ${language === 'km' ? 'active' : ''}`}
                    >
                        <img src={cm} alt="Khmer" className="w-5 h-5 object-cover rounded" />
                        <span>Khmer</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default LanguageToggle
