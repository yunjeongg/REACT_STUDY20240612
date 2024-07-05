import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';
import { useLoaderData, json } from 'react-router-dom';
import EventSkeleton from '../components/EventSkeleton';

const Events = () => {

  // loader가 리턴한 데이터 받아오기
  // const eventList = useLoaderData();
  // console.log(eventList);

  // 서버에서 가져온 이벤트 목록
  const [events, setEvents] = useState([]);

  // 로딩상태를 체크하는 상태변수
  const [loading, setLoading] = useState(false); 

  // 서버로 목록 조회 요청보내기
  const loadEvents = async() => {

    console.log('start loading...');
    setLoading(true); // 로딩 중 true

  
    const response = await fetch('http://localhost:8282/events/page/1?sort=date');
    const events = await response.json();

    setEvents(events);

    // 로딩 끝나면 false
    setLoading(false);
    console.log('end loading...');
  };

  // 초기 이벤트 1페이지 목록 가져오기
  useEffect(() => {
    loadEvents();
  }, []);


  return (
    <>
      <EventList eventList={events} />
      {loading && <EventSkeleton />}
    </>
  );
};

export default Events;

// loader를 app.js로부터 아웃소싱
// export const loader = async () => {

//   // const response = await fetch('http://localhost:8282/events?sort=date');
//   const response = await fetch('http://localhost:8282/events/page/1?sort=date');

//   if (!response.ok) {
//     const errorText = await response.text();

//     // 리액트 돔에서 제공하는 json 을 사용했을 경우 JSON 을 파싱하는 부분을 작성하지 않아도 된다.
//     throw json(
//       { message: errorText },
//       {status: response.status}
//     );

//     // throw new Response(
//     //   JSON.stringify({ message: errorText }),
//     //   {
//     //     status: response.status
//     //   }
//     // );
//   } 
//   return response; // ok일 경우 events[]
// };

