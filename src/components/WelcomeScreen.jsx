import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile.jpeg";
import { useState } from "react";

const WelcomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/home");
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white text-center">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-6 border border-gray-300 shadow-lg"
      />
      <h1 className="text-3xl font-light mb-6">Welcome to my portfolio</h1>
      <button
        onClick={handleEnter}
        className="px-6 py-3 bg-gradient-to-br from-purple-900 to-indigo-800 text-white rounded-lg shadow-lg hover:bg-purple-100"
      >
        {isLoading ? "Please wait..." : "Get Me In"}
      </button>
    </div>
  );
};

export default WelcomeScreen;
