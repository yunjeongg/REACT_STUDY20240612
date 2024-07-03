import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const DUMMY_EVENTS = 
// [
//   {
//     id: '1',
//     title: '여름맞이 이벤트',
//     image: 'https://m.puroluna.com/file_data/iffl8888/2019/06/18/e6a78ac2fbfa26acf240feb86380a47f.jpg',
//     date: '2024-07-20',
//     description: '여름맞이 이벤트입니다. 재밌겠지?'
//   },
//   {
//     id: '2',
//     title: '건강관리 이벤트',
//     image: 'https://www.nhis.or.kr/static/alim/paper/oldpaper/202109/assets/images/sub/event01_mo.jpg',
//     date: '2024-07-15',
//     description: '건강 이벤트입니다. 건강하겠지?'
//   },
// ]

/* DUMMY_EVENTS 대신 DB 에 데이터 넣기
   postman post http://localhost:8282/events body 에 아래 적고 send (2번)

  {
    "title": "여름맞이 이벤트",
    "desc": "여름맞이 이벤트입니다. 재밌겠지?",
    "imageUrl": "https://m.puroluna.com/file_data/iffl8888/2019/06/18/e6a78ac2fbfa26acf240feb86380a47f.jpg",
    "beginDate": "2024-07-20"
  }
  ,
  {
    "title": "건강관리 이벤트",
    "desc": "건강 이벤트입니다. 건강하겠지?",
    "imageUrl": "https://www.nhis.or.kr/static/alim/paper/oldpaper/202109/assets/images/sub/event01_mo.jpg",
    "beginDate": "2024-07-15"
}
*/
const Events = () => {

  // 상태변수
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    // useEffect 에 직접적으로 async 를 적용할 수 없고, useEffec 안에 async 함수 따로 만들어야한다. 
    (async () => {
      const response = await fetch('http://localhost:8282/events');
      const jsonData = await response.json();
      setEventList(jsonData);
    })();
  ;
  }, []);

  /*
  useEffect(() => {

    fetch('http://localhost:8282/events')
    .then(res => res.json())
    .then(jsonData => {
      console.log(jsonData);
      setEventList(jsonData); // 상태변수에 jsonData 추가 (상태변수 변경)
  })
  }, []); // useEffect 의 [] 안에 값을 넣으면, []변경이 일어날 때 마다 변경이 일어나고, []를 비워두면 단 한번만 변경이 일어남

  */

  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {
          eventList.map (e => (
            <li key={e.id}>
              <Link to={e.id}>{e.title}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Events