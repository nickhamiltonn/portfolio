import '../styles/pages.css';

// returns number within range of 1-max inclusively
function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * max);
};

function Home(props) {
  const displayPageLinks = () => {
    const pageLinks = [];
    for (const page of Object.values(props.pages)) {
      if (page != props.pages.HOME) {
        pageLinks.push(
            <div
              className="home-link-element"
              onClick={() => props.onChangePage(page)}>
              {page}
            </div>);
      }
    };
    return pageLinks;
  };

  return (
    <div className="home page" style={{
      backgroundImage:
      `url(${require('../resources/home_pics/' +
      getRandomInt(5) +
      '.JPG')})`}}>
      <div className="home-links">
        {displayPageLinks()}
      </div>
    </div>
  );
}

export default Home;
