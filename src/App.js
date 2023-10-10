import { AppBar } from '@mui/material';

import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import TileGallery from './components/TileGallery';
import projects from './content/projects';


function App() {
  return (<>
      <ResponsiveAppBar />
      <p>
        This is going to be a cool hero component thing with a photo of me (and other things), short description, and link to github and linkedin...
      </p>
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
      <h1>
        Contact
      </h1>
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
