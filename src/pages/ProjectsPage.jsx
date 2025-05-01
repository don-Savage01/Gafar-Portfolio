import React from "react";

const ProjectsPage = ({ onSelectProject, selectedProject }) => {
  const projects = [
    {
      id: 1,
      title: "Fast Pizza",
      type: "Website",
      technologies: "HTML, CSS, Javascript, React, TailwindCss",
      description:
        "Fast Pizza is a modern single-page pizza ordering app built with React and styled using Tailwind CSS. It allows users to browse a live-updating menu fetched from a public API, manage their cart with Redux, and place orders with optional priority delivery. The app supports real-time address lookup using the browser's geolocation and reverse-geocoding APIs.",
    },
    {
      id: 2,
      title: "usePopcorn",
      type: "Mobile App",
      technologies: "HTML, CSS, React, JavaScript, TailwindCss",
      description:
        "usePopcorn is a lightweight movie discovery app built with React. It allows users to search for movies using the OMDB API, view key details, and manage a persistent watched list.",
    },
    {
      id: 3,
      title: "WorldWise",
      type: "Mobile App",
      technologies: "React, JavaScript, TailwindCss, HTML",
      description:
        "WorldWise is a travel-tracking app with an interactive map. Users can log cities, dates, notes, and custom emojis. Includes fake auth, protected routes, and geolocation.",
    },
    {
      id: 4,
      title: "Travel List App",
      type: "Website",
      technologies: "React, JavaScript, HTML, CSS",
      description:
        "This app helps users manage travel items. Add, remove, sort, and mark as packed. Clean UI and responsive behavior.",
    },
    {
      id: 5,
      title: "Split Bill App",
      type: "API",
      technologies: "React, HTML, Vanilla CSS, JavaScript",
      description:
        "Track shared expenses with friends. Add custom avatars, input bills, and automatically update balances.",
    },
  ];

  return (
    <div className="h-full w-full p-4 text-white">
      {selectedProject ? (
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-lg mb-2">{selectedProject.type}</p>
            <p className="text-gray-300 mb-4">{selectedProject.technologies}</p>
            <p className="text-gray-200">{selectedProject.description}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => onSelectProject(null)}
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
            >
              Back to projects
            </button>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 overflow-y-auto max-h-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300">{project.type}</p>
              <p className="text-gray-400 text-sm">{project.technologies}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
