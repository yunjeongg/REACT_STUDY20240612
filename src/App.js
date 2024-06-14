import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

// 기본 더미 데이터
const DUMMY_DATA = 
[
  {
  id: 'g1',
  text: '리액트 컴포넌트 스타일링 마스터하기'
  }, 
  {
  id: 'g2',
  text: 'UI/UX 프로그래밍 쌉고수되기'
  }
]

const App = () => {

  const [goals, setGoals] = useState(DUMMY_DATA);

  // CourseInput 에게 전달할 함수 (목표 추가하기)
  const addGoalHandler = (goalObject) => {
    // goalObject 을 goals 에 추가하기
    setGoals([...goals, goalObject]);
  }

  // CouseItem에게 전달할 함수 (목표 삭제하기)
  const deleteGoalHandler = (id) => {
    // console.log('id: ', id);

    let index = -1;
    for (let i = 0; i < goals.length; i++) {
      if (goals[i].id === id) {
        index = i;
        break;
      }
    }
    // console.log('index: ', index);

    // 삭제 3가지 방법
    // 1. 기본
    // goals.splice(index, 1);
    // setGoals([...goals]);

    // 2. findIndex라는 인덱스 찾는 함수
    // goals.splice(goals.findIndex(g => g.id === id), 1);
    // setGoals([...goals]);

    // 3. 필터로 복사된 새 배열로 삭제
    const filteredGoals = goals.filter(g => g.id !== id);
    setGoals(filteredGoals);
  };


  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseList items={goals} onDelete={deleteGoalHandler} />
      </section>
    </div>
  );
};

export default App;