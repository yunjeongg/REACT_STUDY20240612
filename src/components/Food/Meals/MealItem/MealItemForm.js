import React, { useRef, useState } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.scss';

const MealItemForm = (props) => {

  // 선택한 수량값
  // const [amount, setAmount] = useState(0);

  // 선택한 수량 값 가져오기
  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const seletedValue = inputRef.current.value;
    console.log('select: ', seletedValue);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {/* <Input label='취미' inputAttr={{type: 'checkbox', checked: 'checked', class: 'abc', id: 'aaa'}} /> */}
      <input ref={inputRef} type='number' />
      {/* <Input
        ref={inputRef}
        label='수량'
        inputAttr={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      /> */}
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;