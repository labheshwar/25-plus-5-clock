import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'></div>
      <audio
        id='beep'
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
        preload='auto'
      ></audio>
    </div>
  );
}

export default App;
