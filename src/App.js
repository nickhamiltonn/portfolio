import './App.css';
import TileGallery from './components/TileGallery';
import projects from './content/projects';


function App() {
  return (
    <div className="App">
      <TileGallery projects={projects}>
      </TileGallery>
    </div>
  );
}

export default App;
