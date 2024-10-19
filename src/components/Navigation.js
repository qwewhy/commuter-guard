import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-700 text-white py-2">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="hover:text-gray-300">首页</Link></li>
        <li><Link to="/ai-call" className="hover:text-gray-300">AI模拟通话</Link></li>
        <li><Link to="/auto-alarm" className="hover:text-gray-300">自动报警</Link></li>
        <li><Link to="/phone-alert" className="hover:text-gray-300">手机警报</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;