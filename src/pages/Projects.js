import '../styles/pages.css';
import projects from '../content/projects';
import ProjectGallery from '../components/ProjectGallery';

import {Element} from 'react-scroll';

function Projects() {
  return (
    <Element name="projects">
      <div className="projects page">
        <h1>
          Projects
        </h1>
        <ProjectGallery projects={projects} />
      </div>
    </Element>
  );
}

export default Projects;
