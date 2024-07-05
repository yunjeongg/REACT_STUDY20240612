import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';
import { useLoaderData, json } from 'react-router-dom';
import EventSkeleton from '../components/EventSkeleton';
import { debounce, throttle } from 'lodash'; // npm install loadsh
// import { throttle } from 'lodash';

const Events = () => {

  // loader가 리턴한 데이터 받아오기
  // const eventList = useLoaderData();
  // console.log(eventList);

  // 서버에서 가져온 이벤트 목록
  const [events, setEvents] = useState([]);

  // 로딩상태를 체크하는 상태변수
  const [loading, setLoading] = useState(false); 

  // 현재 페이지 번호
  const [currentPage, setCurrentPage] = useState(1); // 페이지의 초기값 1

  // 서버로 목록 조회 요청보내기
  const loadEvents = async() => {

    console.log('start loading...');
    setLoading(true); // 로딩 중 true

  
    // useEffect 가 다시 실행될 때 마다 fetch 가 일어나야 한다.
    const response = await fetch(`http://localhost:8282/events/page/${currentPage}?sort=date`);
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

  // 스크롤 핸들러
  // // 1. 디바운싱 (스크롤 멈춘 후 일정 초(2초) 이후 재로딩)
  // const scrollHandler = debounce(() => {
  //   console.log('scroll');
  // }, 2000);

  // 2. 스로틀링 (스크롤을 돌리던 말던 일정시간에 한번씩 재로딩)
  const scrollHandler = throttle(() => {
    // console.log('scroll');

    // 로딩중이거나, 화면의 맨 밑바닥이라면 return
    if(loading || window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      return;
    }
    loadEvents();
  }, 2000);

  // 스로틀링
  // 처음한번만실행되도록 useEffect
  useEffect(()=> {
    window.addEventListener('scroll', scrollHandler);

    // 이벤트 끝난 후 이벤트를 지워줘야한다.
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      scrollHandler.cancel(); // 스로틀 취소
    }
  }, [currentPage, loading]); // 밑바닥이 아니면 다시 실행

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

