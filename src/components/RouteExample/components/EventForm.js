import React from "react";

import styles from './EventForm.module.scss';

import { useParams, useNavigate } from "react-router-dom";

const EventForm = ({ method, event={} }) => {

  const {
    title,
    desc: description,
    'img-url': image,
    'start-date': date
  } = event; // 디스트럭쳐하기

  const {eventId: id} = useParams;
  const navigate = useNavigate();  

  const cancelHandler = e => {
    // window.location.href = '/events/' + id; 
    // 리액트에서 a태그, location.href 는 새로고침을 일으키기 때문에 사용하지 않는게 좋다.
    // 해결방법 - useNavigate 사용하기
    // navigate('/events/' + id); // 이걸 줄여서 아래처럼 작성가능
    navigate('..');
  }

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? title : ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? image : ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? date : ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? description : ''}/>
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>{method === 'post' ? 'Save' : 'Modify'}</button>
      </div>
    </form>
  );
};

export default EventForm;

