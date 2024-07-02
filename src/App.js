import React from 'react';
import Home from './components/RouteExample/pages/Home';
import Products from './components/RouteExample/pages/Products';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // 리액트에서 제공하는 라우터

const router = createBrowserRouter
([
  {path: '/', element: <Home />}, // / 들어오면 <Home /> 을 띄우고
  {path: '/products', element: <Products /> } // /products 들어오면 <Products /> 을 띄운다.
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

