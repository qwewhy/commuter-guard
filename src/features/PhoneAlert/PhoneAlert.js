import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const AutoAlarm = () => {
  const { t } = useTranslation();
  const [tapsRemaining, setTapsRemaining] = useState(3);
  const [triggerColor, setTriggerColor] = useState("bg-white");
  const [isActive, setIsActive] = useState(false);
  const [showDeactivate, setShowDeactivate] = useState(false);
  const [volume, setVolume] = useState(50);
  const [alarmSound, setAlarmSound] = useState(t("alarmSounds.siren"));
  const longPressTimer = useRef(null);

  const handleTriggerPress = () => {
    if (isActive) return;

    setTapsRemaining((prev) => {
      const newTaps = prev - 1;
      if (newTaps === 2) setTriggerColor("bg-yellow-200");
      if (newTaps === 1) setTriggerColor("bg-yellow-400");
      if (newTaps === 0) {
        setTriggerColor("bg-red-500");
        setIsActive(true);
      }
      return newTaps > 0 ? newTaps : 0;
    });
  };

  const handleLongPressStart = () => {
    if (!isActive) return;
    longPressTimer.current = setTimeout(() => {
      setShowDeactivate(true);
    }, 1000);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    if (showDeactivate) {
      setIsActive(false);
      setTapsRemaining(3);
      setTriggerColor("bg-white");
      setShowDeactivate(false);
    }
  };

  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        {t("PhoneAlert_title")}
      </h1>
      <p className="mb-8 text-xl text-gray-700">
        {isActive
          ? t("PhoneAlert_alarmActive")
          : t("PhoneAlert_tapToActivate", { count: tapsRemaining })}
      </p>
      <div
        className={`w-64 h-64 rounded-full ${triggerColor} border-4 border-gray-300 flex items-center justify-center text-3xl font-bold transition-all duration-300 shadow-lg ${
          isActive ? "animate-pulse" : ""
        }`}
      >
        <button
          className="w-full h-full rounded-full focus:outline-none"
          onClick={handleTriggerPress}
          onMouseDown={handleLongPressStart}
          onMouseUp={handleLongPressEnd}
          onTouchStart={handleLongPressStart}
          onTouchEnd={handleLongPressEnd}
        >
          {showDeactivate
            ? t("PhoneAlert_deactivate")
            : isActive
            ? t("PhoneAlert_alarming")
            : t("PhoneAlert_trigger")}
        </button>
      </div>
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {t("PhoneAlert_settings")}
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("PhoneAlert_volume", { volume })}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("PhoneAlert_alarmSound")}
          </label>
          <select
            value={alarmSound}
            onChange={(e) => setAlarmSound(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option>{t("PhoneAlert_alarmSounds.siren")}</option>
            <option>{t("PhoneAlert_alarmSounds.policecar")}</option>
            <option>{t("PhoneAlert_alarmSounds.scream")}</option>
            <option>{t("PhoneAlert_alarmSounds.fireAlarm")}</option>
          </select>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        <p className="mb-2">{t("PhoneAlert_instructions.activate")}</p>
        <p>{t("PhoneAlert_instructions.deactivate")}</p>
      </div>
    </div>
  );
};

export default AutoAlarm;
