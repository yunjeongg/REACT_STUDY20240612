import React from 'react'

// portal을 사용하기 위한 불러오기
import ReactDOM from 'react-dom';

const Portal = ({ children, destId }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById(destId)
  );
};

export default Portal