import React from 'react'
import './chart.css'
import ChartBar from './ChartBar'

const Chart = ({dataPoints}:any) => {
    const dataPointValues = dataPoints.map((dataPoint:any) => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
        {dataPoints.map((dataPoint:any) => (
            <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            />
        ))}
    </div>
  )
}

export default Chart