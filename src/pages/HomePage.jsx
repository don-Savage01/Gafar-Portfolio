import React, { useState } from "react";
import { FaFolder, FaGithub, FaFilePdf, FaGamepad } from "react-icons/fa";
import DesktopIcon from "../components/DesktopIcon";
import Taskbar from "../components/Taskbar";
import ProjectsPage from "./ProjectsPage";

const HomePage = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjects = () => {
    setShowProjects(true);
    setSelectedProject(null);
  };

  const closeProjects = () => {
    setShowProjects(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-800 via-indigo-700 to-gray-800 relative">
      {/* Desktop Icons */}
      <aside className="w-24 flex flex-col items-center py-8 space-y-12 pt-20">
        <DesktopIcon
          icon={<FaFolder className="text-4xl text-yellow-400" />}
          label="Projects"
          onClick={openProjects}
        />
        <DesktopIcon
          icon={<FaGithub className="text-4xl text-white" />}
          label="GitHub"
          onClick={() =>
            window.open("https://github.com/don-Savage01", "_blank")
          }
        />
        <DesktopIcon
          icon={<FaFilePdf className="text-4xl text-red-500" />}
          label="Resume"
          onClick={() => window.open("/resume.pdf", "_blank")}
        />
        <DesktopIcon
          icon={<FaGamepad className="text-4xl text-green-500" />}
          label="Game"
          onClick={() => window.open("/game", "_self")}
        />
      </aside>

      {/* Projects Window - 90% height with 10% top gap */}
      {showProjects && (
        <div className="fixed inset-0 z-50">
          {/* 10% top gap showing background */}
          <div className="h-[10%] w-full bg-transparent"></div>

          {/* 90% projects content with slide-up animation */}
          <div className="h-[90%] bg-gradient-to-b from-purple-700 via-indigo-600 to-gray-800  bg-opacity-95 p-6 animate-slide-up rounded-t-3xl shadow-2xl">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">
                  {selectedProject
                    ? selectedProject.title
                    : "Personal Projects"}
                </h2>
                <button
                  onClick={closeProjects}
                  className="text-gray-300 hover:text-white text-lg"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <ProjectsPage
                  onSelectProject={setSelectedProject}
                  selectedProject={selectedProject}
                  showTitle={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
};

export default HomePage;
