import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
    },[]);

    const toggleDropdown = () => setMoreButtonListIsOpen(!moreButtonListIsOpen);

  return (
    <header className="bg-[#153FCE] text-white shadow-lg">
      {/* 为苹果手机灵动岛预留空间 */}
      <div className="h-12 bg-[#153FCE]"></div>
    </header>
  );
};

export default Header;
