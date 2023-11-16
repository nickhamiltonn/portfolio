import '../styles/pages.css';

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
    <div className="home page">
      <div className="home-links">
        {displayPageLinks()}
      </div>
    </div>
  );
}

export default Home;
