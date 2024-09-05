import "./App.css";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ReadingsList from "./pages/ReadingList";
import Contact from "./pages/Contact";
// import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/reading-list" element={<ReadingsList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      {/* <BackToTopButton /> */}
    </Router>
  );
}

export default App;
