import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile.jpeg";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/home");
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
        Get Me In
      </button>
    </div>
  );
};

export default WelcomeScreen;
