import React from 'react'
import EventsNavigation from './EventNavigation'
import { Outlet } from 'react-router-dom'

const EventLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
      {/* Outlet 은 EventLayout 의 자식들 전부 불러올 수 있고, 그 자식들의 상단에 <EventsNavigation /> 가 뜨게할 수 있다. */}
    </>
  )
}

export default EventLayout