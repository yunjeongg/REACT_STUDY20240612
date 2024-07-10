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

  // 더 이상 가져올 데이터가 있는지 확인하기
  const [isFinish, setIsFinish] = useState(false);

  // 로딩 스켈레톤 스크린을 보여줄 개수
  const [skeletonCount, setSkeletonCount] = useState(4);

  // 서버로 목록 조회 요청보내기
  const loadEvents = async() => {

    if (isFinish) {
      console.log('loading finished!');
      return;
    }

    console.log('start loading...');
    setLoading(true); // 로딩 중 true

  
    // useEffect 가 다시 실행될 때 마다 fetch 가 일어나야 한다.
    const response = await fetch(`http://localhost:8282/events/page/${currentPage}?sort=date`);
    
    const { events: loadedEvents, totalCount } = await response.json();

    console.log('loaded: ', { loadedEvents, totalCount, len: loadedEvents.length });

    const updatedEvents = [...events, ...loadedEvents]; // 기존 게시글 로딩, 후 새로운 게시글 그 밑에 로딩
    setEvents(updatedEvents);
    setLoading(false);

    // 로딩이 끝나면 페이지번호를 1 늘려놔야 한다.
    setCurrentPage(prevPage => prevPage + 1);
    console.log('end loading!!');
    // setEvents(events);

    // 로딩이 끝나면 더 이상 가져올게 있는지 여부를 체크하기
    setIsFinish(totalCount === updatedEvents.length);

    // 로딩 끝나면 false
    setLoading(false);
    console.log('end loading...');

    // 로딩 후 지금까지 불러온 데이터 개수(현재 렌더링된 개수)를 총 데이터 개수에서 차감
    const restEventsCount = totalCount - updatedEvents.length;

    // skeleton 개수 구하기 -> 남은 개수가 4보다 크면 4로 세팅 4보다 작으면 그 수로 세팅
    const skeletonCnt = Math.min(4, restEventsCount);
    setSkeletonCount(skeletonCnt);

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
      {loading && <EventSkeleton count={skeletonCount} />}
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

