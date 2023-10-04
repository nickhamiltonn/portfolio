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
  const projects = props.projects;
  const [filters, setFilters] = useState(new Set()); // TODO, need to revisit if set makes the most sense here

  // current implementation always returns if any of the projects tags match
  const setDisplayedProjects = () => {
    //console.log(filters);
    if (filters.size > 0) {
      return projects.filter((proj) => {
        // cant return greater scope within forEach
        for (var i=0; i<proj.tools.length; i++) {
          if (filters.has(proj.tools[i])) {
            return true;
          }
        }
        return false;
      });
    } else {
      return projects;
    }
  }

  const addFilterOption = (filterOption) => {
    const newFilters = new Set(filters);
    newFilters.add(filterOption);
    setFilters(newFilters);
  }

  const removeFilterOption = (filterOption) => {  
    if (filters.has(filterOption)) {
      const newFilters = new Set(filters);
      newFilters.delete(filterOption);
      setFilters(newFilters);
    }
  }

  const displayedProjects = setDisplayedProjects();
  console.log(displayedProjects);

  return (
    <div className="TileGallery">
      <GalleryHeader 
        addFilterOption={addFilterOption} 
        removeFilterOption={removeFilterOption} />
      <div className="ListOfTiles">
        {renderTiles(displayedProjects)}
      </div>
    </div>
  );
}
  
 export default TileGallery;