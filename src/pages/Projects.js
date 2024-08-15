import ProjectsData from '../data/ProjectsData';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const goToProjectDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {ProjectsData.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            onClick={() => goToProjectDetails(project.projectId)}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              loading="lazy"
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
              variants={cardVariants}
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              {project.techStack && Array.isArray(project.techStack) && (
                <ul>
                  {project.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
