import React from 'react';
import styles from './EventSkeleton.module.scss';

const EventSkeleton = () => {
  return (
    <div className={styles.events}>
      <div className={styles.list}>
        <div
          className={styles.skeleton}
        >
          <div className={styles.imageSkeleton} />
          <div className={styles.contentSkeleton}>
            <div className={styles.titleSkeleton} />
            <div className={styles.dateSkeleton} />
          </div>
        </div>
      </div>
    </div>
  );
};

EventSkeleton.displayName = 'EventSkeleton';

export default EventSkeleton;
