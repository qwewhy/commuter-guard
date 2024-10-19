import React from 'react';

const AutoAlarm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">自动报警</h1>
      <p className="mb-4">这里是自动报警功能的界面。</p>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        设置自动报警
      </button>
    </div>
  );
};

export default AutoAlarm;