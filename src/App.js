import React from 'react';
import Home from './components/RouteExample/pages/Home';
import Products from './components/RouteExample/pages/Products';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // 리액트에서 제공하는 라우터
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';
import ProductDetail from './components/RouteExample/pages/ProductDetail';
import Events from './components/RouteExample/pages/Events';
import EventDetail from './components/RouteExample/pages/EventDetail';
import EventLayout from './components/RouteExample/layout/EventLayout';

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
      { // children 의 children
        path: 'events',
        element: <EventLayout />, 
        children: [
          { 
            index: true, element: <Events />, 

            // loader 는 이 페이지가 열릴 때(라우팅됐을 때) 자동으로 트리거되어 호출되는 함수이다.
            // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있다.
            loader: async () => {
              // console.log('loader call!!');
              const response = await fetch('http://localhost:8282/events');
              const jsonData = await response.json();

              // loader 가 리턴한 데이터는 loader를 선언한 컴포넌트(<Events />)와 그 하위 컴포넌트에서 언제든 불러서 사용할 수 있다.
              return jsonData;
            }

          }, // http://localhost:3000/events
          { path: ':eventId', element: <EventDetail /> }, // http://localhost:3000/events/1
        ]
      },
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

