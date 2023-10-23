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
    <h1>
        Work Experience
    </h1>
    <p>
        This is where I should put a dynamic section about my work experience
    </p>
    <div className="App">
    </div>
    <h1>
        About Me
    </h1>
    <p>
        This is where I should have a long section outlining more about what I
        want to do career wise. What I am looking for, what my hobbies are, etc.
        Maybe a section about my skills.
    </p>
    <Element name="contact">
      <h1>
          Contact
      </h1>
    </Element>
    <p>
        In a coloured box I am going to have my contact information
        (and possibly a form that will allow user
        to directly email me through the site).
    </p>
    <p>
        .
    </p>
    <p>
        .
    </p>
    <p>
        .
    </p>
    <p>
        .
    </p>
    <p>
        .
    </p>
  </>
  );
}

export default App;
