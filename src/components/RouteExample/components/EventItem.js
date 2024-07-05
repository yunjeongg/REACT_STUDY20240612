import React from "react";
import styles from './EventItem.module.scss';
import { Link, useNavigate, useParams, useSubmit } from "react-router-dom";

const EventItem = ({ event }) => { // event 객체를 전달받아 아래 파싱

  // action 함수를 트리거하는 2번째 방법
  const submit = useSubmit();

  const { title, desc: description, 'img-url':image, 'start-date':date} = event; // 디스트럭쳐하기

  const { eventId : id } = useParams();

  // const navigate = useNavigate();

  // const fetchDelete = async () => {

  //   const res = await fetch(`http://localhost:8282/events/${id}`, {
  //     method: 'DELETE'
  //   });

  // }

  const deleteHandler =  (e) => {

    // if (!window.confirm('정말 삭제하시겠습니까?')) return;

    // action 을 트리거
    submit(null, {method: "DELETE"});

    /*
        <Form method='delete'> 을 대체
     */

    // // console.log('id: ', id);
    // (async() => {
    //   await fetch(`http://localhost:8282/events/${id}`, {
    //     method: 'DELETE'
    //   });

    //   navigate('/events');
    // })();
  };

  // const deleteHandler =  (e) => {

  //   if (!window.confirm('정말 삭제하시겠습니까?')) return;

  //   // console.log('id: ', id);
  //   (async() => {
  //     await fetch(`http://localhost:8282/events/${id}`, {
  //       method: 'DELETE'
  //     });
  //   })();

  //   setTimeout(() => {
  //     navigate('/events');
  //   }, 200);
  // };
  
  return (

    <article className={styles.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      <menu className={styles.actions}>
        <Link to="edit">Edit</Link>
        <button 
                onClick={deleteHandler}
                                    >Delete</button>
      </menu>
    </article>

    // <article className={styles.event}>
    //   <img src={event.image} alt={event.title} />
    //   <h1>{event.title}</h1>
    //   <time>{event.date}</time>
    //   <p>{event.description}</p>
    //   <menu className={styles.actions}>
    //     <a href="#">Edit</a>
    //     <button>Delete</button>
    //   </menu>
    // </article>
  );
};

export default EventItem;