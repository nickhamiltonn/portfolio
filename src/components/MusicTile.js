import {useState} from 'react';

const SONG_URLS = [
  'https://www.youtube.com/embed/HldHtBxNK6k?si=E7jSeMUlmREt_ywU&amp;controls=0',
  'https://www.youtube.com/embed/4gYi0NyZMZg?si=G6a55Xf14hh564nD',
];

function MusicTile() {
  const [songIndex, setSongIndex] = useState(0);

  return (<>
    <iframe width="560" height="315"
      src={SONG_URLS[songIndex]}
      title="YouTube video player" frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullscreen></iframe>
    <button
      className='music-next'
      onClick={() => setSongIndex((songIndex + 1) % SONG_URLS.length)}>
            Nextsongpls
    </button>
  </>);
};

export default MusicTile;
