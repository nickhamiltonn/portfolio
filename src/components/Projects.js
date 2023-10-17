import './Projects.css'
import projects from '../content/projects';
import TileGallery from './TileGallery';

import { Element } from "react-scroll";

function Projects() {
    return (
        <Element name="projects">
            <div className="projects">
                <h1>
                    Projects
                </h1>
                <TileGallery projects={projects} />
            </div>
        </Element>
    );
}

export default Projects;