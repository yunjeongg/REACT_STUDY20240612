import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      {/* 헤더부분은 그대로 고정한다. */}
      <MainNavigation />

      {/* 바뀔 컴포넌트들 */}
      {/* RootLayout의 children 들이 Outlet 으로 렌더링된다. */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout