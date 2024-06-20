import React, { useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {

  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 타겟시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  let timer; // setTimeout 의 참조변수

  const startHandler = e => {

    // 1. 지역변수 timer 저장
    timer = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    // 2. 리랜더링
    setTimerStarted(true);
  };

  // 중지할 때 실행할 코드
  const stopHandler = e => {
    console.log("stop");

    // 3. 서로 다른변수
    clearTimeout(timer);

    // 이 상황에 stop이 작동하지 않는 이유는 
    // start시의 timer변수가 지역변수이기 때문에 
    // 상태변수의 setter호출시 리랜더링이 되면서 새로운 지역변수로 바뀜
    // stop시의 timer와 start시의 timer는 다른 변수다.
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? stopHandler : startHandler}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

export default TimerChallenge;