import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8">Click below to enter</p>
      <button
        onClick={() => navigate("/home", { replace: true })} // REPLACE history
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition"
      >
        Get me in
      </button>
    </div>
  );
};

export default WelcomePage;
