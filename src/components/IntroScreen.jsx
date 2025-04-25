// src/components/IntroScreen.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IntroScreen = () => {
  const navigate = useNavigate();
  const fullText = "Life would be much easier if only we had the source code.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => navigate("/welcome"), 8000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black  flex flex-col items-center justify-center  text-2xl font-mono px-4 text-center">
      <img
        src="/images/intro.jpeg" // Adjust the path based on where your image is in the public folder
        alt="Intro Image"
        className="w-[150px] h-[150px] object-contain mb-6 rounded-lg"
        // Small square with rounded corners
      />
      <p style={{ fontFamily: "Readable", color: "white" }}>{displayedText}</p>
    </div>
  );
};

export default IntroScreen;
