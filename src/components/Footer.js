import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import 'flag-icons/css/flag-icons.min.css';


const ChineseFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" className="w-6 h-4 mr-2">
      <rect width="30" height="20" fill="#DE2910"/>
      <g fill="#FFDE00">
        {/* Large star - adjusted y-coordinate from 5 to 4 */}
        <path d="M5,3 l2.351,7.236 -6.15,-4.472 7.598,0 -6.15,4.472z" />
        {/* Small stars */}
        <path d="M10.1294,2.5 l0.8939,2.75208 -2.3363,-1.69757 2.8853,0 -2.3363,1.69757z" transform="rotate(23.036243 10.1294 4.313657)" />
        <path d="M12.0589,4.55 l0.8939,2.75208 -2.3363,-1.69757 2.8853,0 -2.3363,1.69757z" transform="rotate(45.869898 12.0589 6.367937)" />
        <path d="M12.0589,7.5 l0.8939,2.75208 -2.3363,-1.69757 2.8853,0 -2.3363,1.69757z" transform="rotate(69.945396 12.0589 9.298907)" />
        <path d="M10.1294,9.5435 l0.8939,2.75208 -2.3363,-1.69757 2.8853,0 -2.3363,1.69757z" transform="rotate(20.659808 10.1294 11.419537)" />
      </g>
    </svg>
  );
  

const UKFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-4 mr-2">
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
  </svg>
);

const GermanFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-6 h-4 mr-2">
    <rect width="5" height="3" y="0" x="0" fill="#000"/>
    <rect width="5" height="2" y="1" x="0" fill="#D00"/>
    <rect width="5" height="1" y="2" x="0" fill="#FFCE00"/>
  </svg>
);

const LanguageDropdown = ({ changeLanguage, currentLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t } = useTranslation();

  const languages = [
    { code: 'zh', name: t('中文'), flag: <ChineseFlag /> },
    { code: 'en', name: t('English'), flag: <UKFlag /> },
    { code: 'de', name: t('Deutsch'), flag: <GermanFlag /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguageObj = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center bg-blue-500 text-white px-3 py-1 rounded border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLanguageObj.flag}
        {currentLanguageObj.name}
        <ChevronDown size={16} className="ml-2" />
      </button>
      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left"
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.flag}
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [moreButtonListIsOpen, setMoreButtonListIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMoreButtonListIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setMoreButtonListIsOpen(!moreButtonListIsOpen);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <footer className="bg-[#153FCE] text-white shadow-lg fixed bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 py-4">
                <nav className="w-full">
                    <ul className="flex justify-between items-center">
                        <li className="flex-1 text-center">
                            <Link
                                to="/ai-call"
                                className="hover:text-yellow-300 transition duration-300 flex flex-col items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mb-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-xs">{t('footer.aiCall')}</span>
                            </Link>
                        </li>
                        <li className="flex-1 text-center">
                            <Link
                                to="/auto-alarm"
                                className="hover:text-yellow-300 transition duration-300 flex flex-col items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mb-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                                <span className="text-xs">{t('footer.autoAlarm')}</span>
                            </Link>
                        </li>
                        <li className="flex-1 text-center">
                            <Link
                                to="/phone-alert"
                                className="hover:text-yellow-300 transition duration-300 flex flex-col items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mb-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="text-xs">{t('footer.phoneAlert')}</span>
                            </Link>
                        </li>
                        <li className="flex-1 text-center relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="hover:text-yellow-300 transition duration-300 flex flex-col items-center focus:outline-none w-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                                <span className="text-xs">{t('footer.more')}</span>
                            </button>
                            {moreButtonListIsOpen && (
                                <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <div className="px-4 py-2">
                                        <LanguageDropdown changeLanguage={changeLanguage} currentLanguage={i18n.language} />
                                    </div>
                                    <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('footer.aboutUs')}</Link>
                                    <Link to="/privacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('footer.privacyInfo')}</Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;