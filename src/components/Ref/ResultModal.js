import React from 'react';

const ResultModal = ({result, targetTime}) => {

  // dialog 태그
  // https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog
  return (
    <dialog className="result-modal" open>
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