import "../styles/components/MusicTile.css";

import { useState } from "react";
import YouTube from "react-youtube";

const SONG_IDS = ["HldHtBxNK6k", "4gYi0NyZMZg", "o7sx32alzeE", "mcWLp2LpYXQ"];

const musicPlayerOptions = {
  height: "150",
  width: "225",
  playerVars: {
    autoplay: 0,
    controls: 0,
  },
};

function MusicTile() {
  const [songIndex, setSongIndex] = useState(0);
  const [player, setPlayer] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function _onReady(e) {
    setPlayer(e.target);
  }

  const playVid = () => {
    player.playVideo();
    setIsPlaying(true);
  };

  const pauseVid = () => {
    player.pauseVideo();
    setIsPlaying(false);
  };

  const nextSong = () => {
    setSongIndex((songIndex + 1) % SONG_IDS.length);
    setIsPlaying(false);
  };

  return (
    <>
      <div className={`music-player ${isOpen ? "open" : "closed"}`}>
        <div className="music-player-edge" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "<" : ">"}
        </div>
        <div className="music-player-content">
          {player && player.videoTitle && (
            <h2 className="music-player-title">{player.videoTitle}</h2>
          )}
          <div className="embedded-youtube">
            <YouTube
              videoId={SONG_IDS[songIndex]}
              opts={musicPlayerOptions}
              onReady={_onReady}
            />
          </div>
          <div className="music-controls">
            {!isPlaying ? (
              <img
                src={require("../resources/music_player/play.png")}
                onClick={playVid}
              />
            ) : (
              <img
                src={require("../resources/music_player/pause.png")}
                onClick={pauseVid}
              />
            )}
            <img
              src={require("../resources/music_player/next.png")}
              onClick={nextSong}
            />

            {/*<button onClick={pauseVid}>Pause</button>
            <button onClick={playVid}>Play</button>
          <button onClick={nextSong}>Next Song</button>*/}
          </div>
        </div>
      </div>
      <div className="music-next"></div>
    </>
  );
}

export default MusicTile;
