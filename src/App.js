import React from 'react';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  const [play, setPlay] = React.useState(false);
  const [timingType, setTimingType] = React.useState('SESSION');
  const [timeLeft, setTimeLeft] = React.useState(25 * 60);

  const title = timingType === 'SESSION' ? 'Session' : 'Break';

  const timeOut = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);

  const breakIncrease = () => {
    breakLength < 60 && setBreakLength((prevState) => prevState + 1);
  };
  const breakDecrease = () => {
    breakLength > 1 && setBreakLength((prevState) => prevState - 1);
  };
  const sessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength((prevState) => prevState + 1);
      setTimeLeft(timeLeft + 60);
    }
  };
  const sessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength((prevState) => prevState - 1);
      setTimeLeft(timeLeft - 60);
    }
  };

  const formattedTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const resetTimer = () => {
    const audio = document.getElementById('beep');
    if (!timeLeft && timingType === 'SESSION') {
      setTimeLeft(breakLength * 60);
      setTimingType('BREAK');
      audio.play();
    }
    if (!timeLeft && timingType === 'BREAK') {
      setTimeLeft(sessionLength * 60);
      setTimingType('SESSION');
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const playPause = () => {
    setPlay(!play);
    clearTimeout(timeOut);
  };

  const clock = () => {
    if (play) {
      resetTimer();
    } else {
      clearTimeout(timeOut);
    }
  };

  const reset = () => {
    clearTimeout(timeOut);
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimingType('SESSION');
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  };

  React.useEffect(() => {
    clock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, timeLeft, timeOut]);

  return (
    <div className='app'>
      <div className='container'>
        <h1>25 + 5 Clock</h1>
        <div className='break-session-container'>
          <div id='break-label'>
            <h3>Break Length</h3>
            <div className='parent-break'>
              <div className='break-counter'>
                <button
                  id='break-decrement'
                  disabled={play}
                  onClick={breakDecrease}
                >
                  <i
                    style={{ color: play && 'rgba(255, 255, 255, 0.652)' }}
                    className='icon fa-sharp fa-solid fa-arrow-down'
                  ></i>
                </button>
                <h4 id='break-length'>{breakLength}</h4>
                <button
                  id='break-increment'
                  disabled={play}
                  onClick={breakIncrease}
                >
                  <i
                    style={{ color: play && 'rgba(255, 255, 255, 0.652)' }}
                    className='icon fa-sharp fa-solid fa-arrow-up'
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div id='session-label'>
            <h3>Session Length</h3>
            <div className='parent-session'>
              <div className='session-counter'>
                <button
                  id='session-decrement'
                  disabled={play}
                  onClick={sessionDecrease}
                >
                  <i
                    style={{ color: play && 'rgba(255, 255, 255, 0.652)' }}
                    className='icon fa-sharp fa-solid fa-arrow-down'
                  ></i>
                </button>
                <h4 id='session-length'>{sessionLength}</h4>
                <button
                  id='session-increment'
                  disabled={play}
                  onClick={sessionIncrease}
                >
                  <i
                    style={{ color: play && 'rgba(255, 255, 255, 0.652)' }}
                    className='icon fa-sharp fa-solid fa-arrow-up'
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='timer-container'>
          <div className='timer'>
            <h3 id='timer-label'>{title}</h3>
            <h1 id='time-left'>{formattedTime()}</h1>
          </div>
        </div>
        <div className='controllers'>
          <button id='start_stop' onClick={playPause}>
            {play ? (
              <i className='icon fa-solid fa-pause'></i>
            ) : (
              <i className='icon fa-solid fa-play'></i>
            )}
          </button>
          <button id='reset' onClick={reset}>
            <i className='icon fa-solid fa-rotate-right'></i>
          </button>
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
