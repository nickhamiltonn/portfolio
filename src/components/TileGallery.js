import Tile from './Tile';
import './TileGallery.css';
import GalleryHeader from './GalleryHeader';

const renderTiles = (projects) => {
  var projectsJSX = []
  projects.forEach(project => {
    projectsJSX.push(<Tile project={project}/>)
  });
  return projectsJSX;
}

// need to add state to make filters and stuff work
function TileGallery(props) {
  return (
    <div className="TileGallery">
      <GalleryHeader />
      <div className="ListOfTiles">
        {renderTiles(props.projects)}
      </div>
    </div>
  );
}
  
 export default TileGallery;