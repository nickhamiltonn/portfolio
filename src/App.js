import "./App.css";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import FakeNavBar from "./components/FakeNavBar";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import MusicTile from "./components/MusicTile";

import { useState } from "react";

// Enum Name : Displayed Page Name
const pages = {
  HOME: "Home",
  EXPERIENCE: "Experience",
  PROJECTS: "Projects",
  ABOUT_ME: "About Me",
  RESUME: "Resume",
};

// TODO: Make items in the navbar get passed in as props from this scope
//       instead having 2 places where the pages are declared thus need
//       to be changed
function App() {
  const [page, setPage] = useState(pages.HOME);

  // TODO: Find a way to map/route? from ENUM to
  //       PageComponent other than switch statement
  const renderPage = (currPage) => {
    switch (currPage) {
      case pages.HOME:
        return <Home pages={pages} onChangePage={setPage} />;
      case pages.EXPERIENCE:
        return <Experience />;
      case pages.PROJECTS:
        return <Projects />;
      case pages.ABOUT_ME:
        return <AboutMe />;
      case pages.RESUME:
        return <Resume />;
    }
  };

  // TODO: Should define background image here instead. The random number only
  //       gets changed if we are actually remounting, not just rerendering.

  return (
    <>
      {page == pages.HOME ? (
        <FakeNavBar />
      ) : (
        <NavBar pages={pages} onChangePage={setPage} />
      )}
      {renderPage(page)}
      <MusicTile />
    </>
  );
}

export default App;
