import '../styles/components/ProjectGalleryHeader.css';
import Tags from '../content/Tags';
import Options from '../enums';

// TODO: Need to either implement pagination or allow it to be taller
// than 95vh if entries exceed that size
function ProjectGalleryHeader(props) {
  const handleFilterCheckbox = (event, filter) => {
    if (event.target.checked) {
      props.onAddFilter(filter);
    } else {
      props.onRemoveFilter(filter);
    }
  };

  const handleSortSelectChange = (event) => {
    props.onSortOptionChange(event.target.value);
  };

  const generateFiltersList = () => {
    const filtersJSX = [];
    Object.entries(Tags).forEach(([k, v]) => {
      filtersJSX.push(<span className="tools-category">{k}</span>);
      Object.values(v).forEach((tool) => {
        filtersJSX.push(
            <label className="filter-container">{tool}
              <input
                type="checkbox"
                onChange={(e) => handleFilterCheckbox(e, tool)}/>
              <span className="checkmark"></span>
            </label>,
        );
      });
    });
    return filtersJSX;
  };

  const handleFilterRadioChange = (event) => {
    props.onFilterOptionChange(event.target.value);
  };

  return (
    <div className="project-gallery-header">
      <div className="hover">
        Sort By...
        <div className="dropdown sort">
          <select
            name="sort_criteria"
            className="sort-options"
            onChange={handleSortSelectChange}>
            <option value={Options.Sort.Latest}>Newest to Oldest</option>
            <option value={Options.Sort.Oldest}>Oldest to Newest</option>
          </select>
        </div>
      </div>
      <div className="hover">
        Filter By...
        <div className="dropdown Filter">
          <div className = "filter-options" onChange={handleFilterRadioChange}>
            <label className="radio">
              <input
                type="radio"
                value={Options.Filter.Any}
                name="filter_criteria"
                defaultChecked />
              Any of...
            </label>
            <b>or</b>
            <label className="radio">
              <input
                type="radio"
                value={Options.Filter.All}
                name="filter_criteria" />
              All of...
            </label>
          </div>
          {generateFiltersList()}
        </div>
      </div>
    </div>
  );
}

export default ProjectGalleryHeader;
