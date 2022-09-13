import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <h1>25 + 5 Clock</h1>
        <div className='break-session-container'>
          <div className='break-length'>
            <h3>Break Length</h3>
            <div className='parent-break'>
              <div className='break-counter'>
                <i className='icon fa-sharp fa-solid fa-arrow-down'></i>
                <h4>5</h4>
                <i className='icon fa-sharp fa-solid fa-arrow-up'></i>
              </div>
            </div>
          </div>
          <div className='session-length'>
            <h3>Session Length</h3>
            <div className='parent-session'>
              <div className='session-counter'>
                <i className='icon fa-sharp fa-solid fa-arrow-down'></i>
                <h4>25</h4>
                <i className='icon fa-sharp fa-solid fa-arrow-up'></i>
              </div>
            </div>
          </div>
        </div>
        <div className='timer-container'>
          <div className='timer'>
            <h3>Session</h3>
            <h1>25:00</h1>
          </div>
        </div>
        <div className='controllers'>
          <i className='icon fa-solid fa-play'></i>
          <i className='icon fa-solid fa-pause'></i>
          <i class='icon fa-solid fa-rotate-right'></i>{' '}
        </div>
      </div>
      <audio
        id='beep'
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
        preload='auto'
      ></audio>
    </div>
  );
}

export default App;
