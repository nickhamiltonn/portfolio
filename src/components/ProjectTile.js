import '../styles/components/ProjectTile.css';

// TODO: Need to ensure li elements are only added to dom
// if they are going to fit entirely within the parent div...
// This also includes the src component as well
// figure out a solution here
// TODO: Need to possibly add date/daterange in here?
function ProjectTile(props) {
  return (
    <div className="tile">
      <div className='tile-header'>
        <h1>
          {props.project.name}
        </h1>
      </div>
      <p>
        {props.project.short_description}
      </p>
      <div className='tile-bottom'>
        <ul>
          {props.project.tools.map((tool, index) =>
            (<li key={index}>{tool}</li>))}
        </ul>
        {(props.project.src ? <a href={props.project.src}>src</a> : <></>) }
      </div>
    </div>
  );
}

export default ProjectTile;
