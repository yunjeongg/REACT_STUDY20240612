import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, onClick, className, disabled, children }) => {
  // {type || 'button'} = type 이 들어오면 type, 안들어오면 button 타입
  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;