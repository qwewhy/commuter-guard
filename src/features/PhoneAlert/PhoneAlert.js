import React from 'react';

const PhoneAlert = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">手机警报</h1>
      <p className="mb-4">这里是手机警报功能的界面。</p>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        触发警报
      </button>
    </div>
  );
};

export default PhoneAlert;