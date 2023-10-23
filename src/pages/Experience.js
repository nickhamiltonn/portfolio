import '../styles/pages.css';
import ExperienceBar from '../components/ExperienceBar';
import experiences from '../content/experiences';

import {Element} from 'react-scroll';

const renderBars = (experiences) => {
  const experiencesJSX = [];
  experiences.forEach((experience) => {
    experiencesJSX.push(<ExperienceBar experience={experience}/>);
  });
  return experiencesJSX;
};

function Projects() {
  return (
    <Element name="experience">
      <div className="experience page">
        <h1>
          Experience
        </h1>
        {renderBars(experiences)}
      </div>
    </Element>
  );
}

export default Projects;
