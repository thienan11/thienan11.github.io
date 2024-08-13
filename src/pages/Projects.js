import ProjectsData from '../data/ProjectsData';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Projects = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const goToProjectDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {ProjectsData.map((project) => (
          <div className="project-card" key={project.id} onClick={() => goToProjectDetails(project.projectId)}>
            <img loading="lazy" src={project.imageUrl} alt={project.title} className="project-image" />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;