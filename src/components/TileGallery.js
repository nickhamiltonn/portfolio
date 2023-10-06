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
  const [filters, setFilters] = useState([]); // TODO: need to revisit if dict makes the most sense here
  const [filterSelector, setFilterSelector] = useState("any"); // TODO: make "any"/"all" an enum?

  console.log(filters);
  console.log(filterSelector);

  // TODO: Look more into naming conventions... these names are pretty busted rn
  const handleFilterSelector = (newState) => {
    setFilterSelector(newState)
  }

  // This code is absolutely trash but it works
  // TODO: Clean this up
  const setDisplayedProjects = () => {
    if (filters.length > 0) {
      return projects.filter((proj) => {
        if (filterSelector == "any") {
          for (var i=0; i<filters.length; i++) {
            if (proj.tools.indexOf(filters[i]) != -1) {
              return true;
            }
          }
          return false;
        } else if (filterSelector == "all") {
          for (var i=0; i<filters.length; i++) {
            if (proj.tools.indexOf(filters[i]) == -1) {
              return false;
            }
          }
          return true;
        }
      });
    } else {
      return projects;
    }
  }
    
  const addFilterOption = (filterOption) => {
    if (filters.indexOf(filterOption) == -1) {
      console.log("trying to add filter");
      setFilters([
        ...filters,
        filterOption
      ]);
    }
  }

  const removeFilterOption = (filterOption) => {  
    if (filters.indexOf(filterOption) >= 0) {
      let newFilters = [];
      // TODO: Make this code more elegant, could probably get shallow copy in one line
      for (var i=0; i<filters.length; i++) {
        newFilters[i] = filters[i];
      }
      newFilters.splice(newFilters.indexOf(filterOption), 1);
      setFilters(newFilters);
    }
  }

  const displayedProjects = setDisplayedProjects();

  return (
    <div className="TileGallery">
      <GalleryHeader 
        addFilterOption={addFilterOption} 
        removeFilterOption={removeFilterOption}
        handleFilterSelector={handleFilterSelector} />
      <div className="ListOfTiles">
        {renderTiles(displayedProjects)}
      </div>
    </div>
  );
}
  
 export default TileGallery;