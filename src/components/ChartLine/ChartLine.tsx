import React from 'react';
import './Chart.scss';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(...registerables);

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const data = [0, 1, 2, 4, 8, 16, 32, 5, 4, 3, 4, 5, 6, 7, 18, 15, 16, 17, 18, 19, 20, 21, 22];
const ChartLine = () => {
  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            label: `Data ${data[0]}`,
            borderColor: 'rgba(55, 81, 255, 1)',
          },
        ],
      }}
      // options={{
      //   elements: {
      //     point: {
      //       radius: 1,
      //     },
      //   },
      // }}
    />
  );
};

export default ChartLine;
