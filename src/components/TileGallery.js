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


function TileGallery(props) {
  const projects = props.projects;
  const [filters, setFilters] = useState([]);
  const [filterSelector, setFilterSelector] = useState("any"); // TODO: make "any"/"all" an enum?
  const [sortOption, setSortOption] = useState("new_first"); // TODO: make this an enum?

  console.log(filters);
  console.log(filterSelector);
  console.log(sortOption);

  const handleFilterSelectorChange = (newState) => {
    setFilterSelector(newState)
  }

  const handleSortOptionChange = (newOption) => {
    setSortOption(newOption);
  }

  // This code is absolutely trash but it works...
  // TODO: Clean this up, could be split into a couple functions and logic could def
  // be cleaned up...
  const setDisplayedProjects = () => {
    let organizedProjects = projects;
    
    if (filters.length > 0) {
      organizedProjects = projects.filter((proj) => {
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
    }

    organizedProjects.sort((a, b) => {
      if (a.date < b.date) {
        return (sortOption == "old_first" ? -1 : 1);
      } else {
        return (sortOption == "old_first" ? 1 : -1);
      }
    })

    return organizedProjects;
  }
  
  // TODO: Look more into naming conventions... these names are pretty busted rn
  const addFilterOption = (filterOption) => {
    if (filters.indexOf(filterOption) == -1) {
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
        onFilterSelectorChange={handleFilterSelectorChange} 
        onSortOptionChange={handleSortOptionChange}/>
      <div className="ListOfTiles">
        {renderTiles(displayedProjects)}
      </div>
    </div>
  );
}
  
 export default TileGallery;