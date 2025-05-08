import React from "react";

const ProjectsPage = ({ onSelectProject, selectedProject }) => {
  const projects = [
    {
      id: 1,
      title: "Pizza Pronto",
      type: "Website",
      about: "",
      technologies:
        "Built With HTML, CSS, Javascript, React, Next.js TailwindCss",
      description:
        "Pizza Pronto is a modern single-page pizza ordering app built with React and styled using Tailwind CSS. It allows users to browse a live-updating menu fetched from a public API, manage their cart with Redux, and place orders with optional priority delivery. The app supports real-time address lookup using the browser's geolocation and reverse-geocoding APIs. Users can also track the status and ETA of their orders and search for any order by its ID, all within a responsive, mobile-friendly interface.",
      frontView: "Next.js, JavaScript, React",
      icon: "/images/pizza-icon.png",
      previewImage: "/images/pizza-ui.png",
      projectLink: "https://pizza-pronto.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Munch",
      type: "Mobile App",
      technologies: "Built With HTML/CSS, Next.js, JavaScript, TailwindCss",
      description:
        "Movie Munch is a lightweight movie discovery app built with React. It allows users to search for movies using the OMDB API, view key details about each film, and rate and mark movies as watched. The app maintains a persistent watched list, so users can revisit or modify their movie history anytime. It's designed to be fast, interactive, and beginner-friendly, making it a great example of handling APIs and state management in React.",
      frontView: "JavaScript, Next.js",
      icon: "/images/movie-munch.jpeg",
    },
    {
      id: 3,
      title: "GlobeLog",
      type: "Mobile App",
      technologies: "Built With Next.js, JavaScript, React TailwindCss, HTML",
      description:
        "GlobeLog is a travel-tracking single-page application built with React. It features an interactive world map where users can log cities they’ve visited, along with visit dates, notes, and custom emojis. The app includes a country-based organization of cities, fake authentication, and protected routes. It showcases advanced React patterns like context APIs for global state, lazy loading, dynamic routing, and geolocation integration for a rich user experience.",
      frontView: "React, TailwindCSS",
      icon: "/images/globe.png",
    },
    {
      id: 4,
      title: "Pack Reminder",
      type: "Website",
      technologies: "Built With Next.js/React, JavaScript, Html, Css",
      description:
        "ThePack Reminder App is a simple yet intuitive React-based tool designed to help users organize and manage travel items. It allows users to add, remove, and mark items as packed, with options to sort or clear the list. With a clean UI and responsive behavior, the app offers a smooth experience for travelers looking to stay organized and never forget essentials.",
      frontView: "Next.js, JavaScript, React, TailwindCSS",
      icon: "/images/pack-remind.png",
    },
    {
      id: 5,
      title: "Fair Share",
      type: "API",
      technologies: "Built With React, Html, Vanilla-CSS, JavaScript, Next.js",
      description:
        "The Fair Share App is a React-based tool that simplifies shared expense tracking with friends. It displays each friend's balance, whether you owe them or they owe you. You can add friends with custom names and avatars, select a friend to split a bill, input the total amount and your share, and indicate who paid. The app then automatically updates balances to reflect the transaction.",
      frontView: "JavaScript, React, CSS",
      icon: "/images/fair-share.jpeg",
    },
  ];

  return (
    <div className="h-full w-full rounded-t-lg p-6 text-white relative">
      {selectedProject ? (
        <div className="h-full flex flex-col relative">
          <div className="flex-1 overflow-y-auto pr-2">
            <h2 className="text-2xl font-sans mb-4 text-gray-200">
              About {selectedProject.title}
            </h2>
            <p className="text-gray-300 mb-2 font-thin">
              {selectedProject.technologies}
            </p>
            <p className="text-gray-200 font-large mb-4">
              {selectedProject.description}
            </p>
            {selectedProject.previewImage && (
              <div className="relative">
                <img
                  src={selectedProject.previewImage}
                  alt={`${selectedProject.title} Preview`}
                  className="w-full max-w-xl rounded-lg mx-auto mb-4 object-cover"
                />
                <a
                  href={selectedProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-8 sm:bottom-9 md:bottom-8 lg:bottom-10 right-4 sm:right-7 text-white text-[7px] sm:text-[8px] lg:text-[12px] bg-gradient-to-r from-purple-500 to-indigo-500 px-1 py-1 rounded-lg hover:bg-orange-400"
                >
                  Access Project
                </a>
              </div>
            )}
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
              <div className="flex items-center">
                <img
                  src={project.icon}
                  alt={`${project.title} Icon`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-300">{project.type}</p>
                  <p className="text-gray-400 text-sm">{project.frontView}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
