import React from "react";
import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";

const NewEvent = () => {
  // return <h1>NewEventPage</h1>;
  return <EventForm method='post' />;
};

export default NewEvent;

// 서버에 갱신 요청을 보내는 트리거 함수
// 1. App.js 에서 router 에 설정한다.
export const action = async ({ request }) => {
  // action 함수를 트리거하는 방법
  // form이 있는 EventForm으로 이동
  // console.log('action 함수 call!');

  // console.log('acb:', abc);
  const formData = await request.formData();
  // console.log(formData);

  const payload = {
    title: formData.get('title'),
    desc: formData.get('description'),
    imageUrl: formData.get('image'),
    beginDate: formData.get('date'),
  };

  // console.log(payload);

  const response = await fetch(`http://localhost:8282/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return redirect('/events');

};

