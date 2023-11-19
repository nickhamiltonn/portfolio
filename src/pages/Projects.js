import '../styles/pages.css';
import projects from '../content/projects';
import ProjectGallery from '../components/ProjectGallery';


function Projects() {
  return (
    <div className="projects page">
      <h1>
        Projects
      </h1>
      <ProjectGallery projects={projects} />
    </div>
  );
}

export default Projects;
