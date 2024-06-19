import React from "react"
// js 파일의 맨 앞글자가 대문자면 Component, 소문자면 기본 js파일

// 로그인 관련 상태데이터들을 중앙집중 관리하는 파일
const AuthContext = React.createContext(
  // 컨텍스트는 데이터 중앙저장소
  // - 생성시 관리할 기본 데이터를 명시한다.
  // 데이터 값은 타입 기본값을 명시한다.
  {
    isLoggedIn: false // isLoggedIn 을 관리
  }
);

export default AuthContext;