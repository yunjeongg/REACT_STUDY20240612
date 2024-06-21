import React from 'react';
import Player from './components/Ref/Player';
import TimerChallenge from './components/Ref/TimerChallenge';
import Header from './components/Food/Layout/Header';
import Meals from './components/Food/Meals/Meals';

const App = () => {

  return (
    <>
      <Header />
      <div id='main'>
        <Meals />
      </div>
    </>
  );
};

export default App;
