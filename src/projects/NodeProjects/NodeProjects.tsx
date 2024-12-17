import React from 'react';
import { IProjectType } from '../interfaces/IProjects';
import { node_projects } from '../helpers/node_projects';


const NodeProjects = () => {

  function displayProjects() {
    return node_projects.map((project: IProjectType) => {
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
    <React.Fragment>
      <div className="project-list-title">
        <h3>Node with Express Projects</h3>
      </div>
      {displayProjects()}
    </React.Fragment>
  )
}

export default NodeProjects;