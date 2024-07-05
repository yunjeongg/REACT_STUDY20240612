import React from "react";
import EventForm from "../components/EventForm";
// import { redirect } from "react-router-dom";

const NewEvent = () => {
  // return <h1>NewEventPage</h1>;
  return <EventForm method='post' />;
};

export default NewEvent;

// // 서버에 갱신 요청을 보내는 트리거 함수
// // 1. App.js 에서 router 에 설정한다.
// export const action = async ({ request, params }) => {
//   // action 함수를 트리거하는 방법
//   // form이 있는 EventForm으로 이동
//   // console.log('action 함수 call!');

//   // console.log('request', request); // 여기의 method 방식은

//   // console.log('acb:', abc);
//   const formData = await request.formData();
//   // console.log(formData);

//   const payload = {
//     title: formData.get('title'),
//     desc: formData.get('description'),
//     imageUrl: formData.get('image'),
//     beginDate: formData.get('date'),
//   };

//   // console.log(payload);

//   let url = `http://localhost:8282/events`;
//   if (request.method === 'PATCH') {
//     url += `/${params.eventId}`; // 갱신(수정)할 id 추가
//   }

//   console.log('info:', { url, method: request.method });

//   const response = await fetch(`http://localhost:8282/events`, {
//     method: request.method, // 바로 POST, DELETE 등을 작성하는 것이 아닌 받아온 요청방식을 바로 적용
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   });

//   return redirect('/events');

// };

