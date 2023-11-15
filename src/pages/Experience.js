import '../styles/pages.css';
import ExperienceBar from '../components/ExperienceBar';
import experiences from '../content/experiences';

const renderBars = (experiences) => {
  const experiencesJSX = [];
  experiences.forEach((experience) => {
    experiencesJSX.push(<ExperienceBar experience={experience}/>);
  });
  return experiencesJSX;
};

function Projects() {
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
