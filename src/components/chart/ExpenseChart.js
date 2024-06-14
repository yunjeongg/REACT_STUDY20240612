import React from 'react'
import Chart from './Chart'

const ExpenseChart = ( { expenses } ) => {
  
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  /*
    해당 연도의 모든 지출 데이터배열에서 월별로 지출액을 합산하여
    chartDataPoints 배열 value값에 누적 저장해야 한다. 
  */

    console.log("지출 데이터배열", expenses);

    expenses.forEach(exp => {
      // 지출액을 추출해서 chartDataPoints 배열의 해당 월의 value에 합산하기
      // 지출액
      const expensePrice = exp.price;
      const expenseMonth = exp.date.getMonth();
      
      // 달의 시작은 1월이고, 인덱스의 시작은 0이라 -1 해줘야 하지만
      // chartDataPoints[expenseMonth -1]
      // 시스템원인으로 이미 -1한 상황이라 여기서 -1생략한다.
      chartDataPoints[expenseMonth].value += expensePrice;
  });

  console.log('cdp: ', chartDataPoints);

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;