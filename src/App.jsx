import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizGame from "./pages/QuizGame";

import IntroScreen from "./components/IntroScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import GitHubPage from "./pages/GitHubPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/github" element={<GitHubPage />} />
          <Route path="/quiz" element={<QuizGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
