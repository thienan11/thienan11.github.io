import ProjectsData from '../data/ProjectsData';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const goToProjectDetails = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {ProjectsData.map((project) => (
          <div className="project-card" key={project.id} onClick={() => goToProjectDetails(project.projectId)}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
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