import React from 'react';
import { php_projects } from '../helpers/php_projects';
import { IProjectType } from '../../interfaces/IProjects';

const PHPProjects = () => {
  function displayProjects() {
    return php_projects.map((project: IProjectType) => {
      return (
        <React.Fragment>
          <a className="project-container" href={project.href} target="_blank" rel="noreferrer">
            <div className="project-row">
              <div className="thumbnail-container">
                <div className="thumbnail">
                  <img src={project.imagePath} alt={project.alt} />
                </div>
              </div>
              <div className="project-title-container">
                <div className="project-title">
                  {project.projectName}
                </div>
              </div>
            </div>
          </a>
        </React.Fragment>
      );
    });
  }

  return (
    <React.Fragment>
      <div className="project-list-title">
        <h3>PHP Projects</h3>
      </div>
      {displayProjects()}
    </React.Fragment>
  );
};

export default PHPProjects;