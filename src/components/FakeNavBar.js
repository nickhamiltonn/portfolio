import {useEffect, useState} from 'react';
import '../styles/components/FakeNavBar.css';

/* TODO: kinda magic numbery...
Make it add while it fits on screen not just an
arbitrary amount of times  */
const generateDisplayedText = (text) => {
  let returnText = '';
  for (let i=0; i<15; i++) {
    returnText += text;
  }
  return returnText;
};

/* TODO: Need to make this get pushed instead of overlapped */
function FakeNavBar() {
  const [repeatedText, setRepeatedText] = useState('WEBSITE');

  useEffect(() => {
    const interval = setInterval(() => {
      setRepeatedText((prevText) => prevText.substring(1) + prevText[0]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fake-navbar">
      {generateDisplayedText(repeatedText)}
    </div>
  );
}

export default FakeNavBar;
