// BarChart.js

import ReactEcharts from 'echarts-for-react';
import React from 'react';

const BarChart = () => {
  // Sample data
  const data = {
    categories: ['A', 'B', 'C', 'D', 'E'],
    values: [20, 35, 25, 40, 30]
  };

  // ECharts option configuration
  const option = {
    xAxis: {
      type: 'category',
      data: data.categories
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: data.values,
      type: 'bar'
    }]
  };

  return (
    <ReactEcharts
      option={option}
    //   style={{ height: '400px', width: '100%' }}
    />
  );
};

export default BarChart;
