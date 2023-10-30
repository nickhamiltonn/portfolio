import '../styles/components/ExperienceBar.css';

const monthsShort = [
  'Jan.',
  'Feb.',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.'];

const generateDateRange = (start, end) => {
  let dateRange = monthsShort[start.getMonth()];
  dateRange += ` ${start.getFullYear()}`;
  dateRange += ' - ';
  if (end) {
    dateRange += monthsShort[end.getMonth()];
    dateRange += ` ${end.getFullYear()}`;
  } else {
    dateRange += 'Current';
  }
  return dateRange;
};

function ExperienceBar(props) {
  return (
    <div className="bar">
      <div className="bar-logo">
        <img
          src={props.experience.logo ?
            props.experience.logo :
            require('../resources/logos/settings.png')}/>
      </div>
      <div className="bar-content">
        <div className='bar-content-headers'>
          <h1>
            {props.experience.title}
          </h1>
          <h1>
            {
              generateDateRange(
                  props.experience.date_start,
                  props.experience.date_end)
            }
          </h1>
        </div>
        <h2>
          <i>{props.experience.company}</i>
        </h2>
        <p>
          {props.experience.short_description}
        </p>
      </div>
    </div>
  );
}

export default ExperienceBar;
