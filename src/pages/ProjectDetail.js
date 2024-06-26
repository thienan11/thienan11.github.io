import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectsData from '../data/ProjectsData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = ProjectsData.find(p => p.projectId.toString() === projectId);
  const navigate = useNavigate();

  // // Check if project data is available
  // if (!project) {
  //   return <div>Project not found</div>;
  // }

  useEffect(() => {
    if (!project) {
      navigate('/'); // Redirect to the home page
    }
  }, [project, navigate]); // Dependency array to re-check when project or navigate changes

  if (!project) {
    return null; // Optionally render nothing or a loading spinner while waiting to redirect
  }

  const formatText = (text) => {
    // Split the text into lines and then format each line
    return text.split('\n').map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {/* Split and parse each line for bold and italics */}
        {line.split(/(\*{1,2}[^*]+\*{1,2})/g).map((part, partIndex) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
          } else if (part.startsWith("*") && part.endsWith("*")) {
            return <em key={partIndex}>{part.slice(1, -1)}</em>;
          }
          return part;
        })}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="project-detail-container">
      <h1>{project.title}</h1>
      <button onClick={() => window.history.back()}>← Back</button>
      <img src={project.imageUrl} alt={project.title} />
      {project.techStack && Array.isArray(project.techStack) && (
        <ul>
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      )}
      <p>{formatText(project.description)}</p>
      <div className="links-container">
        {project.websiteUrl && <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">Visit Website</a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>}
      </div>
    </div>
  );
};

export default ProjectDetail;
