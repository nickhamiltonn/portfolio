import './NavBar.css';

import { Link } from 'react-scroll';

function NavBar() {
  return (
    <div class="navbar">
        <a class="logo">Nick</a>
        <div class="navbar-right">
            <Link spy={true} smooth={true} duration={500}>
                Home
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