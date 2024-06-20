import React, { useRef, useState } from "react";
import Input from "./Input";

const Player = () => {

  const $nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('anonymous');

  const nameChangeHandler = e => {
    console.log('click');

    // 입력창에 입력한 내용이 Welcome 뒤에 들어가게하기
    setEnteredName($nameInputRef.current.value);

    // 입력창 비우기
    $nameInputRef.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {enteredName}!</h2>
      <p>
        <Input ref={$nameInputRef} type="text" />
        <button onClick={nameChangeHandler}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;