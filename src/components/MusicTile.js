import '../styles/components/MusicTile.css';

import {useState} from 'react';
import YouTube from 'react-youtube';

const SONG_IDS = [
  'HldHtBxNK6k',
  '4gYi0NyZMZg',
  'o7sx32alzeE',
];

const musicPlayerOptions = {
  height: '125',
  width: '200',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
  },
};

function MusicTile() {
  const [songIndex, setSongIndex] = useState(0);
  const [player, setPlayer] = useState();
  const [isOpen, setIsOpen] = useState(false);

  function _onReady(e) {
    setPlayer(e.target);
  };

  const playVid = () => {
    player.playVideo();
  };

  const pauseVid = () => {
    player.pauseVideo();
  };

  const muteVid = () => {
    player.mute();
  };

  const unMuteVid = () => {
    player.unMute();
  };

  const nextSong = () => {
    setSongIndex((songIndex+1) % SONG_IDS.length);
  };

  return (<>
    <div className={`music-player ${isOpen ? 'open' : 'closed'}`}>
      <div className='music-player-edge'
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '<' : '>'}
      </div>
      <div className='music-player-content'>
        <p>
          Video Title
        </p>
        <div className='embedded-youtube'>
          <YouTube
            videoId={SONG_IDS[songIndex]}
            opts={musicPlayerOptions}
            onReady={_onReady}/>
        </div>
        <div className='music-controls'>
          <button onClick={muteVid}>Mute</button>
          <button onClick={unMuteVid}>Unmute</button>
          <button onClick={pauseVid}>Pause</button>
          <button onClick={playVid}>play</button>
          <button onClick={nextSong}>nextSong</button>
        </div>
      </div>
    </div>
    <div className='music-next'>
    </div>
  </>);
};

export default MusicTile;
