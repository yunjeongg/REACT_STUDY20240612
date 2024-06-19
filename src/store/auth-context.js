import React from "react"
// js 파일의 맨 앞글자가 대문자면 Component, 소문자면 기본 js파일

// 로그인 관련 상태데이터들을 중앙집중 관리하는 파일
const AuthContext = React.createContext(
  // 컨텍스트는 데이터 중앙저장소
  // - 생성시 관리할 기본 데이터를 명시한다.
  // 데이터 값은 타입 기본값을 명시한다.
  {
    // 관리할 데이터의 타입은 null을 넣어줘도 되지만, 타입기본데이터를 넣으면 에디터에서 자동완성이 된다.
    
    isLoggedIn: false, // isLoggedIn 을 관리

    onLogout: () => {} // onLogout 의 타입은 함수다.
  }
);

export default AuthContext;