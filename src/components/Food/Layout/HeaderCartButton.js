import React, { useContext, useEffect, useState } from 'react'
import CartIcon from './CartIcon'
import styles from './HeaderCartButton.module.scss';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {

  // bump 애니메이션을 제어하는 상태변수
  const [isBump, setIsBump] = useState(false);

  // 장바구니 배열
  const { cartItems } = useContext(CartContext);

  // 1번
  // const calcTotalAmount = () => {
  //   let totalAmount = 0;
  //   for (const item of cartItems) {
  //     totalAmount += item.amount;
  //   }
  // return totalAmount;

  // 2번
  const numberOfCart = cartItems.reduce((accum, current) => accum + current.amount, 0);



  const {button, icon, badge, bump} = styles

  useEffect (() => {
    
    // 장바구니 비었을 때는 (초기값일때는)
    if(cartItems.length === 0) return;
    // console.log('useEffect 실행');
    const timer = setIsBump(true);

    // 애니메이션 실행 후 클래스 제거
    setTimeout (() => {
      setIsBump(false);
    }, 300)
    return () => clearTimeout(timer);
  }, [cartItems])
  
  return (
    <button className={`${button} ${isBump ? bump : undefined}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  )
}

export default HeaderCartButton