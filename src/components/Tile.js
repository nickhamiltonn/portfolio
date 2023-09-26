import './Tile.css';

function Tile(props) {
    return (
      <div className="Tile">
        <div className='TileHeader'>
          <h1>
              {props.project.name}
          </h1>
        </div>
        <p>
            {props.project.short_description}
        </p>
        <div className='TileBottom'>
          <ol>
              {props.project.tools.map(tool => (<li>{tool}</li>))}
          </ol>
          {(props.project.src ? <a href={props.project.src}>src</a> : <></>) }
        </div>
      </div>
    );
  }
  
  export default Tile;