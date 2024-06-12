import React from 'react';
import './Card.css';

const Card = ({ className, children}) => {

  const cn = 'card ' + className; // 공통태그명 card, 추가클래스 className
  return (
    <div className={cn}>
      {children}
    </div>
  )
}

export default Card