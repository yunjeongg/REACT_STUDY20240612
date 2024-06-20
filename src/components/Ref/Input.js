import React, { forwardRef } from 'react';

// 자식의 태그를 부모가 끌어다가 쓰려고 할 때 forwardRef 를 사용한다.

const Input = forwardRef(({type}, ref) => {
  return <input ref={ref} type={type} />;
});

export default Input;