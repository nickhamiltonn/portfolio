import '../styles/pages.css';

import {Element} from 'react-scroll';

import Rellax from 'rellax';
import {useEffect} from 'react';

function Home() {
  useEffect(() => {
    new Rellax('.rellax');
  }, []);

  return (<>
    <div className="home page">
      <div
        className="home-background rellax"
        data-rellax-speed="-8">
      </div>

      {/* <div className="home-spacer">
      </div> */}
      <div className="home-content">
        <h1>
          Nick Hamilton
        </h1>
        <p className="home-sub1">
          <b>Software Engineer</b> with experience in <b>Full-Stack</b> and
          <b> ML Engineering</b>.
        </p>
        <p className="home-sub2">
          UBC Computer Engineering Graduate.
        </p>
      </div>

      <img
        src={require('../resources/DSCF2487.png')}
        alt="Photo of me!"
        className="main-img rellax"
        data-rellax-speed="-5"/>
      {/* <img
        src={require('../resources/DSCF2487.png')}
        alt="Photo of me!"
        className="second-img rellax"
        data-rellax-speed="4"/>
      <img
        src={require('../resources/DSCF2487.png')}
        alt="Photo of me!"
        className="third-img rellax"
      data-rellax-speed="7"/> */}
    </div>
    <Element name="thingy">
    </Element>
  </>);
}

export default Home;


/* import '../styles/pages.css';

import {Element} from 'react-scroll';

import Rellax from 'rellax';
import {useEffect/* , useState } from 'react';

function Home() {
  // const [scroll, setScroll] = useState(0);

  useEffect(() => {
    new Rellax('.rellax');
    /* window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const handleScroll = () => {
  //   setScroll(window.scrollY);
  // };

  // console.log(scroll);

  return (
    <Element name="home">
      <div className="home page rellax">
        <div className="home-image">
          <img
            src={require('../resources/DSCF2487.png')}
            alt="Photo of me!"
            className="rellax"
            data-rellax-speed="0"/>
        </div>
        <div
          className="home-content">
          <h1>
            Nick Hamilton
          </h1>
          <p className="home-sub1">
            <b>Software Engineer</b> with experience in <b>Full-Stack</b> and
            <b> ML Engineering</b>.
          </p>
          <p className="home-sub2">
            UBC Computer Engineering Graduate.
          </p>
        </div>
      </div>
    </Element>
  );
}

export default Home;*/
