import React, { useEffect, useRef } from 'react';

const ResultModal = ({result, targetTime}) => {

  const dialog = useRef();

  useEffect (() => {
    dialog.current.showModal();
  }, []);

  // dialog태그의 기본 메소드를 통해 모달창 뒤 투명검은배경 띄우기

  // dialog 태그
  // https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>Your {result}</h2>
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;