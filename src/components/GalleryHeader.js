import './GalleryHeader.css';
import Tags from '../content/enums';

function GalleryHeader(props) {

  const handleFilterCheckbox = (event, filterOption) => {
    if (event.target.checked) {
      props.addFilterOption(filterOption);
    } else {
      props.removeFilterOption(filterOption);
    }
  }
  
  const generateFilterOptions = () => {
    var filtersJSX = []
    Object.entries(Tags).forEach(([k,v]) => {
      filtersJSX.push(<span className="Category">{k}</span>);
      Object.values(v).forEach(tool => {
        filtersJSX.push(
          <label class="container">{tool}
            <input type="checkbox" onChange={(e) => handleFilterCheckbox(e, tool)}/>
            <span class="checkmark"></span>
          </label>
        );
      });
    });
    return filtersJSX;
  }

  return (
    <div className="GalleryHeader">
      <div className="Hover Sort">
        Sort By...
        <div className="Dropdown Sort">
          This is where we select sort criteria
        </div>
      </div>
      <div className="Hover Filter">
        Filter By...
        <div className="Dropdown Filter">
          <div className = "FilterOptions">
            <label className="Radio">
              <input type="radio" name="filter_criteria"/>
              Any of...
            </label>
            <b>or</b>
            <label className="Radio">
              <input type="radio" name="filter_criteria"/>
              All of...
            </label>
          </div>
          {generateFilterOptions()}
        </div>
      </div>
    </div>
  );
}
  
  export default GalleryHeader;