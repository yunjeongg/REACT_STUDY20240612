import React from 'react';

// portal을 사용하기 위한 불러오기
import ReactDOM from 'react-dom';
import Portal from '../Portal/Portal';

import Card from '../Card';
import Button from '../Button';
import styles from './ErrorModal.module.css';

const BackDrop = ({ onClose }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
    ></div>
  );
};

const ModalOverlay = ({ title, message, onClose }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onClose }) => {
  // Portal
  // {ReactDOM.createPortal(a, b)} -- a를 b로 태워보낸다.
  // 모달이 생성되는 위치는 모달컴포넌트가 맞지만
  // 모달은 에러창띄울때 한번만 사용되는 것이 아니고 전체 브라우저에서 다른용도로 재활용할 수도 있기 때문에 
  // portal 을 사용해 index.html 의 b로 태워보냄
  return (
    <>

      {/* Portal 버전 2 */}
      <Portal destId={'backdrop-root'}>
        <BackDrop onClose={onClose} />
      </Portal>

      <Portal destId={'overlay-root'}>
        <ModalOverlay title={title} message={message} onClose={onClose} />
      </Portal> 
      

      {/* Portal 버전 1 */}
      {/* {
        ReactDOM.createPortal(
          <BackDrop onClose={onClose} />
          , document.getElementById('backdrop-root')
        )
      }

      {
        ReactDOM.createPortal(
          <ModalOverlay title={title} message={message} onClose={onClose} />
          , document.getElementById('overlay-root')
        )
      } */}

    </>
  );
};

export default ErrorModal;


