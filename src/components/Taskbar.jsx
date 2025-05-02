// src/components/Taskbar.jsx
import React from "react";
import {
  SiX,
  SiThreads,
  SiFacebook,
  SiWhatsapp,
  SiLinkedin,
} from "react-icons/si";

const Taskbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 flex justify-around items-center">
      {/* X (white on gray box) */}
      <a
        href="https://x.com/iam_donSavage"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <div className="bg-gray-950 p-2 rounded-md">
          <SiX className="text-xl sm:text-2xl md:text-3xl text-white" />
        </div>
      </a>

      {/* Threads (white on gray box) */}
      <a
        href="https://www.threads.net/@iam_don_savage"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <div className="bg-gray-950 p-2 rounded-md">
          <SiThreads className="text-xl sm:text-2xl md:text-3xl text-white" />
        </div>
      </a>

      {/* Facebook (brand color in gray box) */}
      <a
        href="https://facebook.com/DonSavage01"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <div className="bg-blue-600 p-2 rounded-md">
          <SiFacebook className="text-xl sm:text-2xl md:text-3xl text-white" />
        </div>
      </a>

      {/* WhatsApp (brand color in gray box) */}
      <a
        href="https://wa.me/2347081700672"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <div className="bg-green-600 p-2 rounded-md">
          <SiWhatsapp className="text-xl sm:text-2xl md:text-3xl text-white" />
        </div>
      </a>

      {/* LinkedIn (brand color in gray box) */}
      <a
        href="https://linkedin.com/in/Gafar Gbolahan"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <div className="bg-blue-600 p-2 rounded-md">
          <SiLinkedin className="text-xl sm:text-2xl md:text-3xl text-white" />
        </div>
      </a>
    </div>
  );
};

export default Taskbar;
