import React from 'react';
import { react_projects } from '../helpers/react_projects';
import { IProjectType } from '../interfaces/IProjects';

const ReactProjects = () => {
  function displayProjects() {
    return react_projects.map((project: IProjectType) => {
      return (
        <React.Fragment>
          <a className="project-container" href={project.href} target="_blank" rel="noreferrer">
            <div className="project-row">
              <div className="thumbnail-container">
                <div className="thumbnail">
                  <img src={project.imagePath} alt={project.alt}/>
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
      )
    })
  }

  return (
    <div className='body'>
      <div className="project-list-title">
        <h3>React Projects</h3>
      </div>
      {displayProjects()}
    </div>
  )
}

export default ReactProjects;