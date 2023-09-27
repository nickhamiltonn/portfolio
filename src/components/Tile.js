import './Tile.css';

/*
 *  TODO: Need to ensure li elements are only added to dom if they are going to fit entirely within the parent div... figure out a solution here
 */
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
          <ul>
              {props.project.tools.map(tool => (<li>{tool}</li>))}
          </ul>
          {(props.project.src ? <a href={props.project.src}>src</a> : <></>) }
        </div>
      </div>
    );
  }
  
  export default Tile;