import React from 'react';
import Home from './components/RouteExample/pages/Home';
import Products from './components/RouteExample/pages/Products';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // 리액트에서 제공하는 라우터
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';
import ProductDetail from './components/RouteExample/pages/ProductDetail';

const router = createBrowserRouter
([
  {
    path: '/abc', 
    element: <RootLayout />, // / 들어오면 <RootLayout /> 을 띄우고
    errorElement: <ErrorPage />, // 에러가 났을 때 보여줄 컴포넌트
    children: [
                // {path: '', element: <Home /> }, // /products 들어오면 <Home /> 을 띄운다.
                {index: true, element: <Home /> }, 
                // 웹페이지에 들어왔을 때 맨 처음 보여지는 부분이라 path: '' 이런식으로비워두는 것보다 index: true 이런식으로 작성하는게 좋다.
                {path: 'products', element: <Products /> }, // /products 들어오면 <Products /> 을 띄운다.
                // {path: 'products/:prodId', element: <ProductDetail /> } 
                // : 붙이는 것 - 동적렌더링
                {path: 'products/:prodId/page/:pageNo', element: <ProductDetail /> } 
                // 여러가지 파라미터를 한번에 알아낼수도 있다. (상품의 아이디, 페이지번호)


      // children 의 path 는 전체 path 보다 더 상위의 path가 올 수 없고
      // children 의 path 는 전체 path + 자기path 로 작성해야된다.

      // childe path 에서 전체path 를 생략할 수 있다. 
      // /base -> '', /base/product -> 'products'
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

