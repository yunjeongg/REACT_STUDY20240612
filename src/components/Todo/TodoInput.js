import React, { useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import './scss/TodoInput.scss';

const TodoInput = ({ onAdd }) => {

  // input의 주소값을 기억하는 변수 생성
  // useRef 는 값이 변경되도 랜더링에 영향을 주지 않는다.
  // 또는 Dom 을 제어할 때 사용한다.
  const $textInput = useRef();

  // 입력창 토글링 상태값
  const [open, setOpen] = useState(false);

  // 버튼 토글링 함수
  const onToggle = () => setOpen(prevOpen => !prevOpen);

  const submitHandler = e => {
    e.preventDefault();
    onAdd($textInput.current.value);
    // form이 제출되면 입력창 비우기

    // useRef 안의 값은 무조건 .current 을 사용하기
    // $textInput.current 와 document.quertSelector('input') 는 같다.
    // console.log($textInput.current.value);
    
    $textInput.current.value = '';
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="form-wrapper">
          <form className="insert-form" onSubmit={submitHandler}>
            <input
              ref={$textInput}
              type="text"
              placeholder="할 일을 입력 후, 엔터를 누르세요!"
            />
          </form>
        </div>
      )}

      <button
        className={`insert-btn ${open ? 'open' : undefined}`}
        onClick={onToggle}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
