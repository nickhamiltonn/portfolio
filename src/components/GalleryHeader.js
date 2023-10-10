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

  const handleSortSelectChange = (event) => {
    props.onSortOptionChange(event.target.value);
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

  // TODO: Make it so that "any of..." is the obvious default value
  const handleFilterRadioChange = (event) =>  {
    props.onFilterSelectorChange(event.target.value);
  }

  // TODO: Make new_first/old_first an enum???
  // TODO: Need to fix bug where the window gets overlapped by the tags in the tiles....
  return (
    <div className="GalleryHeader">
      <div className="Hover Sort">
        Sort By...
        <div className="Dropdown Sort">
          <select name="sort_criteria" className = "SortOptions" onChange={handleSortSelectChange}>
            <option value="new_first">Newest to Oldest</option>
            <option value="old_first">Oldest to Newest</option>
          </select>
        </div>
      </div>
      <div className="Hover Filter">
        Filter By...
        <div className="Dropdown Filter">
          <div className = "FilterOptions" onChange={handleFilterRadioChange}>
            <label className="Radio">
              <input type="radio" value="any" name="filter_criteria" />
              Any of...
            </label>
            <b>or</b>
            <label className="Radio">
              <input type="radio" value="all" name="filter_criteria" />
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