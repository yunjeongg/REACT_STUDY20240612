import React from 'react';
import Home from './components/RouteExample/pages/Home';
import Products from './components/RouteExample/pages/Products';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // 리액트에서 제공하는 라우터
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';

const router = createBrowserRouter
([
  {
    path: '/', 
    element: <RootLayout />, // / 들어오면 <RootLayout /> 을 띄우고
    errorElement: <ErrorPage />, // 에러가 났을 때 보여줄 컴포넌트
    children: [
                {path: '/', element: <Home /> }, // /products 들어오면 <Home /> 을 띄운다.
                {path: '/products', element: <Products /> } // /products 들어오면 <Products /> 을 띄운다.
  ]},
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

