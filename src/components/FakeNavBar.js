import {useEffect, useState} from 'react';
import '../styles/components/FakeNavBar.css';

// TODO: kinda magic numbery...
//       could be fixed by hardcoding width of each word (gross), 
//       or by appending divs while their width fits within parent
//       might be a bit inefficient or incrementally load in
//       with a lot of dom modifications / checking. Will keep for now.
const generateDisplayedText = (text) => {
  let returnText = '';
  for (let i=0; i<15; i++) {
    returnText += text;
  }
  return returnText;
};

// TODO: This might require a refactor since component is
//       being rerendered every 0.5 seconds.
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
