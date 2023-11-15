import '../styles/components/NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <a className="logo">Nick</a>
      <div className="navbar-right">
        <a>
          Home
        </a>
        <a>
          Experience
        </a>
        <a>
          Projects
        </a>
        <a>
          Contact
        </a>
        <a>
          About
        </a>
      </div>
    </div>
  );
}

export default NavBar;
