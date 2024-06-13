import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0); 
  // 0 을 count 로 부르고, setCount 는 상태값(count) 를 변경할 값

  const increaseHandler = e => {
    // useState 의 setter 는 상태값을 업데이트 할 때
    // 렌더링 전의 이전 상태값을 참조한다.
    // 그래서 여러번 실행하더라도 setter 들이 참조하는 것은 렌더링 이전의 값이기 때문에
    // setter을 두개 실행해도 한번 실행한 것과 같은 업데이트를 한다.
    // setCount(count + 1); // 기존count +1
    // setCount(count + 1);

    // 해결방법 : 함수형 업데이트를 사용한다.
    setCount((prev) => {
      console.log('변경이전값:', prev);
      // 변경이후값을 반환
      return prev + 1
    });

    setCount(count => count + 1);

    // 상태값의 변경은 실시간으로 일어나지 않는다.
    // 해결방법 : 나중에 배울 useEffect훅 으로 해결할 수 있다.
    console.log('변경이후값:', count);
  };
  return (
    <div>
      <h1>숫자 : {count}</h1>
      <button onClick={increaseHandler}>증가</button>
      <button onClick={e => setCount(count - 1)}>감소</button>
    </div>
  );
};

export default Counter