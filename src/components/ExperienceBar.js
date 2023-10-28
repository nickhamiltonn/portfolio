import '../styles/components/ExperienceBar.css';

const monthsTextShort = [
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
  const generateDaySuffix = (date) => {
    switch (date % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  let dateRange = '';
  dateRange += monthsTextShort[start.getMonth()];
  dateRange += ` ${start.getDate()}${generateDaySuffix(start.getDate())}`;
  dateRange += ' - ';
  if (end) {
    dateRange += monthsTextShort[end.getMonth()];
    dateRange += ` ${end.getDate()}${generateDaySuffix(end.getDate())}`;
  } else {
    dateRange += 'Current';
  }
  return dateRange;
};

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
            generateDateRange(
                props.experience.date_start,
                props.experience.date_end)
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
