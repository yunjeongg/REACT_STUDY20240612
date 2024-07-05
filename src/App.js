import React from 'react';
import Home from './components/RouteExample/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';
import Events, { loader as eventListLoader } from './components/RouteExample/pages/Events'; // { loader } 전체조회, loader 의 이름이 겹칠 때 이름변경 -> as 바꿀이름
import EventDetail, { loader as eventDetailLoader, action as deleteAction } from './components/RouteExample/pages/EventDetail'; // { loader } 단일조회
import EventLayout from './components/RouteExample/layout/EventLayout';
import NewEvent from './components/RouteExample/pages/NewEvent';
import EditPage from './components/RouteExample/pages/EditPage';
import { action as manipulateAction} from './components/RouteExample/components/EventForm';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'events',
        element: <EventLayout />,
        children: [
          { 
            index: true, 
            element: <Events />,
            loader: eventListLoader, // // 서버에 조회 데이터요청을 보낼 때 트리거
          },
          { 
            path: ':eventId', 
            loader: eventDetailLoader, 
            // element: <EventDetail /> // 이걸 지우는 순간
            // loader가 childeren 에게 직접적으로 연결되지 않아, EventDetail 에서 loader을 사용하지 못한다. 
            // 해결방법
            id: 'event-detail', // loader 에게 ID 부여하기
            children: [
              { index: true, 
                element: <EventDetail />, 
                action: deleteAction 
              },
              { path: 'edit', 
                element: <EditPage />,
                action: manipulateAction // 액션이벤트 재활용하기
               },
            ]
          },
          { path: 'new', 
            element: <NewEvent />,
            // 서버에 갱신 데이터요청을 보낼 때 트리거
            action: manipulateAction // 이 액션이벤트를 edit 가 사용할 수 없기때문에 
          },
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
