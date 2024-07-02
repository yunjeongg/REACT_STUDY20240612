import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MainNavigation.module.scss'

const MainNavigation = () => {

  const activeFn = ({ isActive }) => {
    // NavLink 컴포넌트에 className 프롭스에 함수를 전달하면,
    // 첫번째 파라미터에 어떤 객체정보를 준다.
    // console.log(aa);

    return isActive ? styles.active : undefined; // 활성화 되어있으면 styles.active, 아니면 undefined
  };
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to='/' className={activeFn}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products' className={activeFn}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation