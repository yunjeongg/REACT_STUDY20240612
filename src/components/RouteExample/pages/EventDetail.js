import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetail = () => {

  const ev = useLoaderData();

  return <EventItem event={ev} />;
};

/*
const EventDetail = () => {
  const { eventId: id } = useParams(); // 라우터에서 주소에 붙은 :eventId 읽어 id 로 바꿈 (eventId: id)

  const [ev, setEv] = useState({}); // 초기값 넣어주기

  useEffect(() => {
    // (function foo () {})(); // 즉시실행함수
    // (() => {})();  // 즉시실행 화살표함수(이름없는함수로만들고싶을때)

    (async() => {
      const response = await fetch(`http://localhost:8282/events/${id}`);

      const json = await response.json();
      setEv(json);
    })();
  }, []);

  // const data = useLoaderData();
  // console.log('loader data: ', data);

  return <EventItem event={ev} />;

  // return ( 
  //   <>
  //     <h1>EventDetail Page</h1>
  //     <p>{ev.title}</p>
  //     <p>{ev.desc}</p>
  //     <p>{ev['start-date']}</p>
  //   </>
  // );
};

*/

export default EventDetail;

export const loader = async ( { params }) => {

  const {eventId: id} = params;

  //console.log('abc:', abc.params.eventId); // 사용할 수 없는 useParams() 대신 Loader을 사용해 가져오기

  // use 로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용가능. (가져올 수 없다)
  // const { eventId: id } = useParams(); 
  // const [ev, setEv] = useState({});

  const response = await fetch(`http://localhost:8282/events/${id}`); // 문제점1. ${id} 사용불가

  if (!response.ok) {
    // 예외처리도 해줘야 한다.
  }

  return await response.json();
  // setEv(json); // 문제점1. setEv 사용불가
}
