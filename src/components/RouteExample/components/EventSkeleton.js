import React from 'react';
import styles from './EventSkeleton.module.scss';

const EventSkeleton = () => {
  return (
    <div className={styles.events}>
      <div className={styles.list}>
      {
        Array.from(new Array(4)).map(
          // (a, inder)  => ( 
          (_, index)  => ( // (_, inder) map 등배열고차함수, 1- 돌린것의 하나하나, 2-인덱스, 안쓰는 경우 _ 로 대체
                <div
                  className={styles.skeleton}
                  key={index}
                  >
                  <div className={styles.imageSkeleton} />
                  <div className={styles.contentSkeleton}>
                    <div className={styles.titleSkeleton} />
                    <div className={styles.dateSkeleton} />
                  </div>
                </div>
          )
        )
          
        }

      </div>
    </div>
  );
};

EventSkeleton.displayName = 'EventSkeleton';

export default EventSkeleton;
