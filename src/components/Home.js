import './Home.css'

import { Element } from "react-scroll";

function Home() {
    return (
        <Element name="home">
            <div className="home">
                <div className="home-content">
                    <h1>
                        Nick Hamilton
                    </h1>
                    <p className="home-sub1">
                        <b>Software Engineer</b> with experience in <b>Full-Stack</b> and <b>ML Engineering</b>.
                    </p>
                    <p className="home-sub2">
                        UBC Computer Engineering Graduate.
                    </p>
                </div>
                <div className="home-image">
                    <img src={require("../resources/DSCF2487.png")} alt="Photo of me!" />
                </div>
            </div>
        </Element>
    );
}

export default Home;