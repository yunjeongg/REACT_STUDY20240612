import React, { useEffect, useRef, useState } from 'react';
import EventList from '../components/EventList';
import { useLoaderData, json } from 'react-router-dom';
import EventSkeleton from '../components/EventSkeleton';
import { debounce, throttle } from 'lodash'; // npm install loadsh
// import { throttle } from 'lodash';

const Events = () => {

  // loader가 리턴한 데이터 받아오기
  // const eventList = useLoaderData();
  // console.log(eventList);

  // 이벤트 목록 아래 박스 참조
  const skeletonBoxRef = useRef();

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

  // // 초기 이벤트 1페이지 목록 가져오기
  // 처음에 노란박스가 보이기 때문에 필요없음
  // useEffect(() => {
  //   loadEvents();
  // }, []);

  // 스크롤 핸들러
  // // 1. 디바운싱 (스크롤 멈춘 후 일정 초(2초) 이후 재로딩)
  // const scrollHandler = debounce(() => {
  //   console.log('scroll');
  // }, 2000);

  // 2. 스로틀링 (스크롤을 돌리던 말던 일정시간에 한번씩 재로딩)
    // 처음에 노란박스가 보이기 때문에 필요없음
  // const scrollHandler = throttle(() => {
  //   // console.log('scroll');

  //   // 로딩중이거나, 화면의 맨 밑바닥이라면 return
  //   // 아래 공식은 화면 하단부를 감지하는 로직 (만약 게시물의 height 가 하단부에 닿지 않는 경우 스크롤이벤트가 작동하지 않는다.)
  //   // 해결방법 - 화면의 하단에 가상의 박스를 설치하고 게시물의 밑면이 박스에 닿는 경우 스크롤이벤트를 작동시키기.
  //   if(loading || window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
  //     return;
  //   }
  //   loadEvents();
  // }, 2000);

  // // 스로틀링
  // // 처음한번만실행되도록 useEffect
  // // 처음에 노란박스가 보이기 때문에 필요없음
  // useEffect(()=> {
  //   window.addEventListener('scroll', scrollHandler);

  //   // 이벤트 끝난 후 이벤트를 지워줘야한다.
  //   return () => {
  //     window.removeEventListener('scroll', scrollHandler);
  //     scrollHandler.cancel(); // 스로틀 취소
  //   }
  // }, [currentPage, loading]); // 밑바닥이 아니면 다시 실행

  // 화면에 특정 박스가 보이면 다음 페이지를 로딩
  useEffect (() => {
    const observer = new IntersectionObserver((entries) => { // 바닐라js에서도 사용가능

      // entries 는 현재 감시하고 있는 대상의 target 의 정보를 알려줌 (배열)
      console.log('entries', entries[0]); // isIntersecting 가 true이면 노란박스 보이는 상태, false 면 보이지 않는 상태
      
      // 서버에서 데이터 페칭
      // !entries[0].isIntersecting : 관찰하고 있는 박스가 감지되지 않으면
      if (!entries[0].isIntersecting || loading || isFinish) { // 로딩중이거나 다 가져왔을 경우 옵저빙 중지
        return;
      }
      loadEvents();
    }, {
      // 관찰하고 있는 요소의 높이가 50%보일 때 콜백을 실행한다.
      threshold: 0.5
    }); 

    // observer 관찰 대상 (DOM) 을 지정하기
    if (skeletonBoxRef.current) {
      observer.observe(skeletonBoxRef.current);
    }

    // 컴포넌트가 랜더링이 사라질 때 옵저빙 중지
    return () => {
      if (skeletonBoxRef.current) {
        observer.disconnect();
      }
    };

  }, [loading, currentPage]);

  return (
    <>
      <EventList eventList={events} />
      <div ref={skeletonBoxRef} 
                                // style={{height: '300px', background: ' yellow'}}
                                >
        {loading && <EventSkeleton count={skeletonCount} />}
      </div>
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

