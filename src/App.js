import React from 'react';
import Player from './components/Ref/Player';
import TimerChallenge from './components/Ref/TimerChallenge';

const App = () => {

  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge />
    </>
  );
};

export default App;