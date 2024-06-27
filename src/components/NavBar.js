import "../styles/components/NavBar.css";

function NavBar(props) {
  const displayPageLinks = () => {
    const pageLinks = [];
    for (const page of Object.values(props.pages)) {
      pageLinks.push(
        <a className="navbar-right" onClick={() => props.onChangePage(page)}>
          {page}
        </a>
      );
    }
    return pageLinks;
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        src={require("../resources/lord-stingray.png")}
        onClick={() => props.onChangePage(props.pages.HOME)}
      />
      <div className="navbar-right">{displayPageLinks()}</div>
    </div>
  );
}

export default NavBar;
