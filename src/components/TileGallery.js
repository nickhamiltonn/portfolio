import { useState } from 'react';

import Tile from './Tile';
import './TileGallery.css';
import GalleryHeader from './GalleryHeader';

const renderTiles = (projects) => {
  var projectsJSX = []
  projects.forEach(project => {
    projectsJSX.push(<Tile project={project}/>);
  });
  return projectsJSX;
}

// need to add state to make filters and stuff work
function TileGallery(props) {
  const [projects, setProjects] = useState(props.projects)
  
  return (
    <div className="TileGallery">
      <GalleryHeader />
      <div className="ListOfTiles">
        {renderTiles(projects)}
      </div>
    </div>
  );
}
  
 export default TileGallery;