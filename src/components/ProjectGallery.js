import {useState} from 'react';

import ProjectTile from './ProjectTile';
import ProjectGalleryHeader from './ProjectGalleryHeader';
import '../styles/components/ProjectGallery.css';
import Options from '../enums';

const renderTiles = (projects) => {
  const projectsJSX = [];
  projects.forEach((project) => {
    projectsJSX.push(<ProjectTile project={project}/>);
  });
  return projectsJSX;
};

// TODO: Make it display a message if there are no projects that fit criteria...
function ProjectGallery(props) {
  const projects = props.projects;
  const [filters, setFilters] = useState([]);
  const [filterOption, setFilterOption] = useState(Options.Filter.Any);
  const [sortOption, setSortOption] = useState(Options.Sort.Latest);

  console.log(`filterOption: ${filterOption}`);

  const handleFilterOptionChange = (newOption) => {
    setFilterOption(newOption);
  };

  const handleSortOptionChange = (newOption) => {
    setSortOption(newOption);
  };

  const filterAndSortProjects = () => {
    // returns true iff proj should be displayed given filter/filterOptions
    const applyFilter = (proj) => {
      if (filterOption == Options.Filter.Any) {
        // return true iff any active filter is found in proj
        for (let i=0; i<filters.length; i++) {
          if (proj.tools.includes(filters[i])) {
            return true;
          }
        }
        return false;
      } else if (filterOption == Options.Filter.All) {
        // return true iff all active filters are found in proj
        for (let i=0; i<filters.length; i++) {
          if (!proj.tools.includes(filters[i])) {
            return false;
          }
        }
        return true;
      }
    };

    let organizedProjects = projects;

    if (filters.length > 0) {
      organizedProjects = projects.filter((proj) => applyFilter(proj));
    }

    organizedProjects.sort((a, b) => {
      if (a.date < b.date) {
        return (sortOption == Options.Sort.Oldest ? -1 : 1);
      } else {
        return (sortOption == Options.Sort.Latest ? -1 : 1);
      }
    });

    return organizedProjects;
  };

  const handleAddFilter = (filter) => {
    if (filters.indexOf(filter) == -1) {
      setFilters([
        ...filters,
        filter,
      ]);
    }
  };

  const handleRemoveFilter = (filter) => {
    if (filters.indexOf(filter) >= 0) {
      const newFilters = [...filters];
      newFilters.splice(newFilters.indexOf(filter), 1);
      setFilters(newFilters);
    }
  };

  return (
    <div className="project-gallery">
      <ProjectGalleryHeader
        onAddFilter={handleAddFilter}
        onRemoveFilter={handleRemoveFilter}
        onFilterOptionChange={handleFilterOptionChange}
        onSortOptionChange={handleSortOptionChange}/>
      <div className="projects-list">
        {renderTiles(filterAndSortProjects())}
      </div>
    </div>
  );
}

export default ProjectGallery;
