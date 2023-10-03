import './GalleryHeader.css';
import Tags from '../content/enums';

const generateFilterOptions = () => {
  var filtersJSX = []
  Object.entries(Tags).forEach(([k,v]) => {
    filtersJSX.push(<span className="Category">{k}</span>);
    Object.values(v).forEach(tool => {
      filtersJSX.push(
        <label class="container">{tool}
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      );
    });
  });
  return filtersJSX;
}

function GalleryHeader() {
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
            <label className="Radio">
              <input type="radio"/>
              Any of...
            </label>
            <b>or</b>
            <label className="Radio">
              <input type="radio" />
              All of...
            </label>
            {generateFilterOptions()}
          </div>
        </div>
      </div>
    );
  }
  
  export default GalleryHeader;