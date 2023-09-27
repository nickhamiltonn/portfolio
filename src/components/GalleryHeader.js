import './GalleryHeader.css';

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
            This is where we select filters
          </div>
        </div>
      </div>
    );
  }
  
  export default GalleryHeader;