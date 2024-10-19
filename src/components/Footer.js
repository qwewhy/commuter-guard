import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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

    return (
        <footer className="bg-[#153FCE] text-white shadow-lg fixed bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 py-4">
                <nav>
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <Link
                                to="/ai-call"
                                className="hover:text-yellow-300 transition duration-300 flex flex-col items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mb-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                AI模拟通话
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/auto-alarm"
                                className="hover:text-yellow-300 transition duration-300 flex flex-col items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mb-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                                自动报警
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/phone-alert"
                                className="hover:text-yellow-300 transition duration-300 flex flex-col items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mb-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                手机警报
                            </Link>
                        </li>
                        <li className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="hover:text-yellow-300 transition duration-300 flex flex-col items-center focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                                更多
                            </button>
                            {moreButtonListIsOpen && (
                                <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <Link to="/language" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">语言</Link>
                                    <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">关于我们</Link>
                                    <Link to="/privacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">隐私信息</Link>
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