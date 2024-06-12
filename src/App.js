import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  
  // 자바스크립트에서는 
  // const $h2 = React.createElement('h2', null, '방가방가');
  
  // React에서는
  const $h2 = <h2>방가봉가햄터리</h2>
  const hello = '안녕안녕?';

  // jsx 문법
  // 1. return 안에 있는 태그는 반드시 하나의 태그로 묶여야 한다.
  // 2. 의미없는 부모는 <React.Fragment>로 감싸면 된다. 대신 축약표현 <> 을 사용해도 된다.
  // 3. 빈 태그(닫는 태그가 없는 태그)는 반드시 />로 마감해야 한다.
  // 4. 태그의 class 속성은 자바스크립트 키워드 class 와 겹쳐서 className으로 표기해야 한다.

  // jsx 태그 자동완성
  // https://doishalf.tistory.com/59
  
  return (
    <React.Fragment>
      <div className="App">
        <h1>{hello}</h1>
        {/* <h2>방가방가햄토리</h2> */}
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' />
        <label htmlFor=''></label>
      </div>
    </React.Fragment>
  );
}

export default App;
