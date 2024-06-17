import React from 'react';
// import './Button.css';
import styled from 'styled-components';

// 스타일이 적용 된 버튼 생성
// 관리자모드에서 클래스명이 랜덤으로 작성된 것을 볼 수 있다. (절대안겹침)
/*
  .fruit {
    .fruit.hover{} 대신
    &:hover{} 이렇게 작성 가능 (상속받았다는 의미)
  }
*/
const Button = styled.button


`
font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
  outline: none;
  }

  &:hover, &:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;



// const Button = ({ type, onClick, children}) => {
//   return (
//     <button type={type} className="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// };

export default Button;