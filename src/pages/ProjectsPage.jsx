import React from "react";

const ProjectsPage = ({ onSelectProject, selectedProject }) => {
  const projects = [
    {
      id: 1,
      title: "Pizza Pronto",
      type: "Website",
      technologies: "HTML, CSS, Javascript, React, TailwindCss",
      description:
        "Pizza Pronto is a modern single-page pizza ordering app built with React and styled using Tailwind CSS. It allows users to browse a live-updating menu fetched from a public API, manage their cart with Redux, and place orders with optional priority delivery. The app supports real-time address lookup using the browser's geolocation and reverse-geocoding APIs. Users can also track the status and ETA of their orders and search for any order by its ID, all within a responsive, mobile-friendly interface.",
    },
    {
      id: 2,
      title: "Movie Munch",
      type: "Mobile App",
      technologies: "HTML, CSS, React, JavaScript, TailwindCss",
      description:
        "Movie Munch is a lightweight movie discovery app built with React. It allows users to search for movies using the OMDB API, view key details about each film, and rate and mark movies as watched. The app maintains a persistent watched list, so users can revisit or modify their movie history anytime. It's designed to be fast, interactive, and beginner-friendly, making it a great example of handling APIs and state management in React.",
    },
    {
      id: 3,
      title: "GlobeLog",
      type: "Mobile App",
      technologies: "React, JavaScript, TailwindCss, HTML",
      description:
        "GlobeLog is a travel-tracking single-page application built with React. It features an interactive world map where users can log cities they’ve visited, along with visit dates, notes, and custom emojis. The app includes a country-based organization of cities, fake authentication, and protected routes. It showcases advanced React patterns like context APIs for global state, lazy loading, dynamic routing, and geolocation integration for a rich user experience.",
    },
    {
      id: 4,
      title: "Pack Reminder",
      type: "Website",
      technologies: "React, JavaScipt, Html, Css",
      description:
        "ThePack Reminder App is a simple yet intuitive React-based tool designed to help users organize and manage travel items. It allows users to add, remove, and mark items as packed, with options to sort or clear the list. With a clean UI and responsive behavior, the app offers a smooth experience for travelers looking to stay organized and never forget essentials.",
    },
    {
      id: 5,
      title: "Fair Share",
      type: "API",
      technologies: "React, Html, Vanila-Css, JavaScript",
      description:
        "The Fair Share App is a React-based tool that simplifies shared expense tracking with friends. It displays each friend's balance, whether you owe them or they owe you. You can add friends with custom names and avatars, select a friend to split a bill, input the total amount and your share, and indicate who paid. The app then automatically updates balances to reflect the transaction.",
    },
  ];

  return (
    <div className="h-full w-full rounded-t-lg p-6 text-white relative">
      {selectedProject ? (
        <div className="h-full flex flex-col relative">
          <div className="flex-1 overflow-y-auto pr-2">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-lg mb-2">{selectedProject.type}</p>
            <p className="text-gray-300 mb-6">{selectedProject.technologies}</p>
            <p className="text-gray-200 mb-6">{selectedProject.description}</p>
          </div>

          <div className="absolute bottom-1 right-3">
            <button
              onClick={() => onSelectProject(null)}
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-xs"
            >
              Back to projects
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4 overflow-y-auto max-h-[calc(100%-3rem)]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 border border-gray-700 cursor-pointer hover:bg-gray-800 rounded-lg bg-gray-900 bg-opacity-50 transition-colors"
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
