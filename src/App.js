import React from 'react';
import Home from './components/RouteExample/pages/Home';
import Products from './components/RouteExample/pages/Products';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // 리액트에서 제공하는 라우터
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';
import ProductDetail from './components/RouteExample/pages/ProductDetail';
import Events from './components/RouteExample/pages/Events';
import EventDetail from './components/RouteExample/pages/EventDetail';

// 라우터 설정
const router = createBrowserRouter
([
  {
    path: '/', 
    element: <RootLayout />, // / 들어오면 <RootLayout /> 을 띄우고
    errorElement: <ErrorPage />, // 에러가 났을 때 보여줄 컴포넌트

    // 중첩라우팅
    children: 
    [
      { index: true, element: <Home /> }, // http://localhost:3000/events/
      { path: 'events', element: <Events /> }, // http://localhost:3000/events
      { path: 'events/:eventId', element: <EventDetail /> }, // http://localhost:3000/events/1

    ]
  },
]);
const App = () => {
  
  return (
    <div>
      {/* <Home /> */}
      {/* <Products /> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

