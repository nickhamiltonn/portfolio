import './AppHeader.css';

import { Link } from 'react-scroll';

function AppHeader(props) {
  return (
    <div class="app-header">
        <a class="logo">Nick</a>
        <div class="app-header-right">
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
  
  export default AppHeader;