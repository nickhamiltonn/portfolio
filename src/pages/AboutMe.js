import "../styles/pages.css";
import { ReactComponent as LinkedInSVG } from "../resources/linkedin.svg";
import { ReactComponent as GitHubSVG } from "../resources/github.svg";
import { ReactComponent as InstaSVG } from "../resources/instagram.svg";

function AboutMe() {
  return (
    <div className="about-me page">
      <h1>About Me</h1>
      <div className="about-me-content">
        <div className="about-me-descriptions">
          <p className="about-me-description-1">
            I am <b>Nick Hamilton</b>, a recent Computer Engineering graduate
            from <b>UBC</b>.
          </p>
          <p className="about-me-description-2">
            I am a Software Engineer with professional experience in full stack
            development and ML engineering/ops. I also have experience and
            interests in DevOps, operating systems, distributed systems,
            cybersecurity, graphics/game programming, and embedded systems.
          </p>
          <p className="about-me-description-3">
            I am always excited by the opportunity to push my comfort zone.
            Tackling challenging problems, taking on new roles, and learning new
            technologies is where I find the greatest joy in my career.
          </p>
          <div className="about-me-links">
            <a
              className="about-me-linkedin icon"
              href="https://www.linkedin.com/in/nickhamiltonn"
            >
              <LinkedInSVG />
            </a>
            <a
              className="about-me-github icon"
              href="https://www.github.com/nickhamiltonn"
            >
              <GitHubSVG />
            </a>
            <a
              className="about-me-insta icon"
              href="https://www.instagram.com/nickhmltn/"
            >
              <InstaSVG />
            </a>
          </div>
        </div>
        <img src={require("../resources/DSCF2487.png")} />
      </div>
    </div>
  );
}

export default AboutMe;
