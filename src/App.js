import React from 'react';
import Home from './components/RouteExample/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';
import Events, { loader as eventListLoader } from './components/RouteExample/pages/Events'; // { loader } 전체조회, loader 의 이름이 겹칠 때 이름변경 -> as 바꿀이름
import EventDetail, { loader as eventDetailLoader } from './components/RouteExample/pages/EventDetail'; // { loader } 단일조회
import EventLayout from './components/RouteExample/layout/EventLayout';
import NewEvent from './components/RouteExample/pages/NewEvent';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          { 
            index: true, 
            element: <Events />,
            loader: eventListLoader,
          },
          { path: ':eventId', 
            element: <EventDetail />,
            loader: eventDetailLoader

          },
          { path: 'new', element: <NewEvent /> }
        ]
      },
    ]
  },
]);

const App = () => {
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;
