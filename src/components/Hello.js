// 대문자 파일명 시작은 component 파일, 소문자 파일명 시작은 js파일
// 컴포넌트의 종류 1. 함수컴포넌트, 2. 클래스컴포넌트

// 여기사용한 것은 클래스 컴포넌트, 하지만 이제 잘 사용하지 않는다.
import React from "react";

class Hello extends React.Component {
  render(){
    return (
      <>
        <h1>하하호호</h1>
        <h2>냠냠뇽뇽</h2>
      </>
    );
  }
}

export default Hello;