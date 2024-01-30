import {useRef} from 'react';
import '../styles/pages.css';

const NUM_BACKGROUNDS = 5;

// returns number within range of 1-max inclusively
function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * max);
};

function Home(props) {
  // Img stays the same between rerenders (caused by music change)
  const backgroundImg = useRef(`url(${require('../resources/home_pics/' +
  getRandomInt(NUM_BACKGROUNDS) +
  '.JPG')})`);

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
      backgroundImage: backgroundImg.current,
    }}>
      <div className="home-links">
        {displayPageLinks()}
      </div>
      {/* <div className="thingy">
        big thingy
      </div> */ }
    </div>
  );
}

export default Home;
