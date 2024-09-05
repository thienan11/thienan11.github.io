import ProjectsData from '../data/ProjectsData';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectsSkeleton from '../components/ProjectsSkeleton';

const Projects = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Function to handle navigation
  const goToProjectDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 220); // Adjust time as needed
  }, []);

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
      {loading ? (
        <ProjectsSkeleton /> // Display skeleton while loading
      ) : (
        <>
          <div className="projects-grid">
            {ProjectsData.map((project) => (
              <motion.div
                className="project-card border p-4 rounded shadow-lg"
                key={project.id}
                onClick={() => goToProjectDetails(project.projectId)}
                // variants={cardVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
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
        </>
      )}
    </div>
  );
};

export default Projects;
