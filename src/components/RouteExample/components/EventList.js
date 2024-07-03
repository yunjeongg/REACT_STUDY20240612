import React from 'react'
import styles from './EventList.module.scss';
import { Link } from 'react-router-dom';

const EventList = ({ eventList }) => {

  const { events, list, item, content} = styles;
  return (
    <div className={events}>
      <h1>All Events</h1>
      <ul className={list}>
        {
          eventList.map(ev => (
            <li key={ev.id} className={item}>
              <Link to={ev.id.toString()}>  {/* 링크는 무조건 문자타입이 들어야한다. 숫자타입 들어가면 인식못함 */}
                <img src={ev.image} alt={ev.title} />
                <div className={content}>
                  <h2>{ev.title}</h2>
                  <time>{ev.date}</time>
                </div>
              </Link>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default EventList