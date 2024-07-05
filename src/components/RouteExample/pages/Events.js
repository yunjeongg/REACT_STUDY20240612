import React from 'react';
import EventList from '../components/EventList';
import { useLoaderData, json } from 'react-router-dom';

const Events = () => {

  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();
  console.log(eventList);

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;

// loader를 app.js로부터 아웃소싱
export const loader = async () => {

  // const response = await fetch('http://localhost:8282/events?sort=date');
  const response = await fetch('http://localhost:8282/events/page/1?sort=date');

  if (!response.ok) {
    const errorText = await response.text();

    // 리액트 돔에서 제공하는 json 을 사용했을 경우 JSON 을 파싱하는 부분을 작성하지 않아도 된다.
    throw json(
      { message: errorText },
      {status: response.status}
    );

    // throw new Response(
    //   JSON.stringify({ message: errorText }),
    //   {
    //     status: response.status
    //   }
    // );
  } 
  return response; // ok일 경우 events[]
};

