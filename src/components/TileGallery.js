import Tile from './Tile';
import './TileGallery.css';
import GalleryHeader from './GalleryHeader';

function TileGallery() {
    return (
      <div className="TileGallery">
        <GalleryHeader />
        <div className="ListOfTiles">
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    );
  }
  
  export default TileGallery;