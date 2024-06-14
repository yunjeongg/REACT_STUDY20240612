import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';

const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  /*
    dataPoints 배열에서 12개요소의 value를 합산하여 연도 지출총액을 계산
    그리고 각 ChartBar에 해당월지출총액/연도지출총액 비율을 전달한다.
  */
  console.log(dataPoints);

  // 1년치 총액
  const totalValue = dataPoints
                              .map(dp => dp.value) // value 값 찾아내기
                              .reduce((accum, curr) => accum + curr, 0); // 누적더하기

  return (
    <div className='chart'>

      {
        dataPoints.map(dp => 
                  <ChartBar 
                        key={dp.label} 
                        label={dp.label} 
                        currentMonthValue={dp.value}
                        totalValue={totalValue}
                  />)
      }
      
    </div>
  )
}

export default Chart