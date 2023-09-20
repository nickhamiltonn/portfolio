import './Tile.css';

function Tile() {
    return (
      <div className="Tile">
        <h1>
            Connect 4
        </h1>
        <p>
            One sentence of the technology.
        </p>
        <div className='TileBottom'>
          <ol>
              <li>Java</li>
              <li>Python</li>
              <li>AWS</li>
          </ol>
          <a href="https://www.google.com">src</a>
        </div>
      </div>
    );
  }
  
  export default Tile;