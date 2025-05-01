import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const chineseText = "欢迎来到我的作品集";
const englishText = "Oh sorry you don't speak Chinese 😂";

const IntroScreen = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState("typing-chinese");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (phase === "typing-chinese") {
      if (index < chineseText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + chineseText[index]);
          setIndex(index + 1);
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting-chinese");
          setIndex(chineseText.length - 1);
        }, 1000);
      }
    }

    if (phase === "deleting-chinese") {
      if (index >= 0) {
        timeout = setTimeout(() => {
          setDisplayedText(chineseText.slice(0, index));
          setIndex(index - 1);
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setPhase("typing-english");
          setIndex(0);
        }, 500);
      }
    }

    if (phase === "typing-english") {
      if (index < englishText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + englishText[index]);
          setIndex(index + 1);
        }, 80);
      } else {
        // Navigate to WelcomePage with REPLACE (no back history)
        timeout = setTimeout(
          () => navigate("/welcome", { replace: true }),
          3000
        );
      }
    }

    return () => clearTimeout(timeout);
  }, [index, phase, navigate]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-2xl font-mono px-4 text-center">
      <img
        src="/images/intro.jpeg"
        alt="Intro"
        className="w-[150px] h-[150px] object-contain mb-3 mt-[-20px] rounded-lg"
      />

      <div className="relative flex flex-col items-center justify-center mt-[-10px]">
        <p
          className="blinking-cursor"
          style={{
            fontFamily: "Readable",
            color: "white",
            fontSize: phase === "typing-chinese" ? "1.2rem" : "1.5rem",
            minHeight: "40px",
            lineHeight: "40px",
          }}
        >
          {displayedText}
        </p>
      </div>
    </div>
  );
};

export default IntroScreen;
