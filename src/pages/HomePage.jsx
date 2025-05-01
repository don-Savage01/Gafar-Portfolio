import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFolder,
  FaGithub,
  FaFilePdf,
  FaQuestionCircle,
} from "react-icons/fa";
import DesktopIcon from "../components/DesktopIcon";
import Taskbar from "../components/Taskbar";
import ProjectsPage from "./ProjectsPage";

const HomePage = () => {
  const navigate = useNavigate();
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.history.replaceState(null, "", "/home");

    const handleBackButton = (e) => {
      if (showProjects) {
        e.preventDefault();
        closeProjects();
      } else {
        e.preventDefault();
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [showProjects]);

  useEffect(() => {
    // Prevent background scroll when modal is open
    document.body.style.overflow = showProjects ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showProjects]);

  const openProjects = () => {
    setShowProjects(true);
    setSelectedProject(null);
    window.history.pushState({ modalOpen: true }, "", "/home");
  };

  const closeProjects = () => {
    setShowProjects(false);
    setSelectedProject(null);
    window.history.replaceState(null, "", "/home");
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-gradient-to-b from-purple-800 via-indigo-700 to-gray-800 relative">
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
          onClick={() => window.open("/Gafar_Resume.pdf", "_blank")}
        />
        <DesktopIcon
          icon={<FaQuestionCircle className="text-4xl text-blue-400" />}
          label="Quiz Game"
          onClick={() => navigate("/quiz")}
        />
      </aside>

      {showProjects && (
        <div className="fixed inset-0 z-50 flex justify-center items-end">
          <div className="h-[88vh] w-full bg-gradient-to-b from-purple-700 via-indigo-600 to-gray-800 bg-opacity-95 p-4 animate-slide-up rounded-t-xl">
            <div className="max-w-6xl mx-auto h-full flex flex-col rounded-xl shadow-2xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-gray-600">
                <h2 className="text-xl font-bold text-white">
                  {selectedProject
                    ? selectedProject.title
                    : "Personal Projects"}
                </h2>
                <button
                  onClick={closeProjects}
                  className="text-gray-300 hover:text-white text-2xl"
                  aria-label="Close projects"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <ProjectsPage
                  onSelectProject={setSelectedProject}
                  selectedProject={selectedProject}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Taskbar />
    </div>
  );
};

export default HomePage;
