import React from "react";

const DesktopIcon = ({ icon, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center text-white cursor-pointer hover:scale-105 transform transition-all duration-200"
    >
      <div className="text-4xl">{icon}</div>
      <span className="mt-2">{label}</span>
    </div>
  );
};

export default DesktopIcon;
