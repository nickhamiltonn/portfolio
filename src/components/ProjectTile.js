import { useState } from "react";
import "../styles/components/ProjectTile.css";
import Modal from "./Modal";

// TODO: Need to ensure li elements are only added to dom
// if they are going to fit entirely within the parent div...
// This also includes the src component as well
// figure out a solution here
// TODO: Need to possibly add date/daterange in here?
function ProjectTile(props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="tile"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <div className="tile-header">
          <h1>{props.project.name}</h1>
        </div>
        <p>{props.project.short_description}</p>
        <div className="tile-bottom">
          <ul>
            {props.project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          {props.project.src ? <a href={props.project.src}>src</a> : <></>}
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={props.project.name}
        content={props.project.long_description}
      />
    </>
  );
}

export default ProjectTile;
