import React, { useState } from 'react';

let timer; // setTimeout 의 참조변수, 위치 전역으로 이동!

const TimerChallenge = ({ title, targetTime }) => {

  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 타겟시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  // let timer; // setTimeout 의 참조변수

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

    // 전역변수로 timer 설정시 5초 -> 1초 -> 1초 -> 5초 를 연속으로 클릭해보면
    // 5초짜리 timer 가 정상작동하지 않는 이유는
    // 4rodml TimerChallenge 컴포넌트가 1개의 timer를 공유하여
    // 처음 5초짜리 timer 가 1초짜리에 의해 덮어씌워지기 때문이다.
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