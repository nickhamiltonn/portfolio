import '../styles/pages.css';
import ExperienceBar from '../components/ExperienceBar';
import experiences from '../content/experiences';

import {useEffect} from 'react';

const renderBars = (experiences) => {
  const experiencesJSX = [];
  experiences.forEach((experience) => {
    experiencesJSX.push(<ExperienceBar experience={experience}/>);
  });
  return experiencesJSX;
};

function Projects() {
  const width = 200;

  const fn = async (thing) => {
    console.log(thing);
  };

  useEffect(() => {
    fn(width);
  }, [fn, width]);

  return (
    <div className="experience page">
      <h1>
        Experience
      </h1>
      {renderBars(experiences)}
    </div>
  );
}

export default Projects;
