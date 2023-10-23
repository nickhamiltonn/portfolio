import '../styles/components/ExperienceBar.css';

function ExperienceBar(props) {
  return (
    <div className="bar">
      <div className="bar-logo">
      </div>
      <div className="bar-content">
        <h1>
          {props.experience.title}
        </h1>
        <h2>
          {
            // TODO: Calculate best way to display
            // date given date_start and date_end
          }
        </h2>
        <p>
          {props.experience.short_description}
        </p>
      </div>
    </div>
  );
}

export default ExperienceBar;
