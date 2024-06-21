import React from 'react'
// import 변수명 from .scss 스타일파일
import styles from './Header.module.scss';

// 정적 이미지 로딩
// import 변수명 from 사진경로
import foodImage from '../../../assets/img/meals.jpg'

import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart}) => {
  // console.log(styles);

  // 디스트럭처링
  const { header, 'main-image':mainImage } = styles;
  return (
    <>
      <header className={styles.header}>
      {/* <header className='Header_header__u1k60'> */}
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={onShowCart} />
      </header>
      <div className={mainImage}>
        <img src={foodImage} alt='맛있어보이는음식' />
      </div>
    </>
  )
}

export default Header