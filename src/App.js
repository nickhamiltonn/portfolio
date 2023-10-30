import './App.css';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';

import {Element} from 'react-scroll';

// TODO: Make items in the navbar get passed in as props from this scope
//       instead having 2 places where the pages are declared thus need
//       to be changed
function App() {
  return (<>
    <NavBar />
    <Home />
    <Experience />
    <Projects />
    <Element name="contact">
      <h1>
          Contact
      </h1>
    </Element>
  </>
  );
}

export default App;
