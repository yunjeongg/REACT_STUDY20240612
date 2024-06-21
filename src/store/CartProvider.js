import React, { useState } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [] // 장바구니 배열
};

// reducer: 여러가지 복잡한 상태관리를 단순화시키며 중앙집중화한다.
// 리듀서 함수 정의
// state: 업데이트 이전의 상태값
// action: 어떤 업데이트를 하는지 정보와 업데이트에 필요한 값을 가진 객체
const cartReducer = (state, action) => {

  if (action.type === 'ADD') { // 장바구니 추가
    // 상태 업데이트 코드
    return null; // 새로운 상태
  } else if (action.type === 'REMOVE') { // 장바구니 제거

    return null; // 새로운 상태
  } 
  return defaultState; // 새로운 상태
};

const CartProvider = ({ children }) => {


  // Provider가 실제로 관리할 상태들의 구체적인 내용들
  const cartContext = {
    cartItems: [], // 상태값
    addItem: item => {}, // 상태를 업데이트하는 함수
    removeItem: id => {}, // 상태를 업데이트하는 함수
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;