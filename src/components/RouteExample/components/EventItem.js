import React from "react";
import styles from './EventItem.module.scss';

const EventItem = ({ event }) => { // event 객체를 전달받아 아래 파싱

  const { title, desc: description, 'img-url':image, 'start-date':date} = event; // 디스트럭쳐하기
  
  return (

    <article className={styles.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      <menu className={styles.actions}>
        <a href="#">Edit</a>
        <button>Delete</button>
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