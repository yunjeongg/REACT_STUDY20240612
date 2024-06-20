import React, { useRef, useState } from 'react';
import ResultModal from './ResultModal';

// let timer; // setTimeout 의 참조변수, 위치 전역으로 이동!

const TimerChallenge = ({ title, targetTime }) => {

  // 해결방법
  // timer 를 ref변수로 관리하기
  // 랜더링이 아닌 컴포넌트 안의 값을 유지하고 싶을 때 사용할 수도 있다.
  const timer = useRef();


  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 타겟시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  const startHandler = e => {

    // 1. 지역변수 timer 저장
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    // 2. 리랜더링
    setTimerStarted(true);
  };

  // 중지할 때 실행할 코드
  const stopHandler = e => {
    console.log("stop");

    // 3. 서로 다른변수
    clearTimeout(timer.current);

  }

  return (
    <>
      {/* 타이머가 만료되었을 때 모달창 띄우기 */}
      {<ResultModal targetTime={targetTime} result="lost" />}

      <section className="challenge">
        <h2>{title}</h2>
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
    </>
  );
};

export default TimerChallenge;