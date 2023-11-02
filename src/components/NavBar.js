import '../styles/components/NavBar.css';

import {Link} from 'react-scroll';

function NavBar() {
  return (
    <div className="navbar">
      <a className="logo">Nick</a>
      <div className="navbar-right">
        <Link to="thingy" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        <Link to="experience" spy={true} smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
        <Link spy={true} smooth={true} duration={500}>
          About
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
