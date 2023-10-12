import './App.css';
import TileGallery from './components/TileGallery';
import Home from './components/Home';
import NavBar from './components/NavBar';
import projects from './content/projects';

import { Element } from 'react-scroll';

// TODO: Need to make all classNames kebab-case instead of PascalCase...
function App() {
  return (<>
      <NavBar>
      </NavBar>
      <Home />
      <h1>
        Work Experience
      </h1>
      <p>
        This is where I should put a dynamic section about my work experience
      </p>
      <h1>
        Projects
      </h1>
      <div className="App">
        <TileGallery projects={projects}>
        </TileGallery>
      </div>
      <h1>
        About Me
      </h1>
      <p>
        This is where I should have a long section outlining more about what I want to do career wise. What I am looking for, what my hobbies are, etc. Maybe a section about my skills
      </p>
      <Element name="contact">
        <h1>
          Contact
        </h1>
      </Element>
      <p>
        In a coloured box I am going to have my contact information (and possibly a form that will allow user to directly email me through the site)
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
