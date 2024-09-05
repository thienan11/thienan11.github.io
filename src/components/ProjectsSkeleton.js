import React from 'react';
import ProjectsData from '../data/ProjectsData';

const ProjectsSkeleton = () => {
  // Define a number of placeholders based on the typical number of projects
  const placeholders = new Array(ProjectsData.length).fill(null);
  // const placeholders = new Array(6).fill(null);

  return (
    <div className="projects-grid">
      {placeholders.map((_, index) => (
        <div
          key={index}
          className="project-card border p-4 rounded shadow-lg bg-white animate-pulse"
        >
          <div className="relative h-40 mb-4 bg-gray-300 rounded"></div>
          <div className="project-info">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSkeleton;
