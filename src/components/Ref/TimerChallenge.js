import React from 'react';

const TimerChallenge = () => {
  return (
    <section className="challenge">
      <h2>NOT EASY</h2>
      <p className="challenge-time">
        10 seconds
      </p>
      <p>
        <button>
          Start Challenge
        </button>
      </p>
      <p className="">
        Time is running... / Timer inactive
      </p>
    </section>
  );
};

export default TimerChallenge;