import React from 'react';
import './Chart.scss';
import { Chart, registerables, ScriptableContext } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { BsTextRight } from 'react-icons/bs';
Chart.register(...registerables);

const labels = [0, 1, 2, 3, 4, 5, 6, 7];
const data = [10, 30, 25, 50, 18, 38, 44, 40, 36];
const data1 = [8, 18, 18, 12, 39, 44, 22, 31, 39];
const ChartLine = () => {
  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            label: `Today`,
            borderColor: 'rgba(55, 81, 255, 1)',
            cubicInterpolationMode: 'monotone',
            fill: true,
            backgroundColor: (context: ScriptableContext<'line'>) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(10, 500, 40, 40);
              gradient.addColorStop(0, 'rgba(63,94,251,0.6349133403361344)');
              gradient.addColorStop(1, 'rgba(255,255,255,0.17833070728291311)');
              return gradient;
            },
          },
          {
            data: data1,
            label: `Yesterday`,
            borderColor: 'rgba(183, 183, 183, 0.8)',
            cubicInterpolationMode: 'monotone',
          },
        ],
      }}
      options={{
        elements: {
          point: {
            radius: 1,
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: true,
              pointStyle: 'line',
              padding: 20,
            },
            align: 'end',
          },
          title: {
            text: 'Todays trends',
            display: true,
            color: 'rgb(0,0,0)',
            padding: 20,
          },
        },
      }}
    />
  );
};

export default ChartLine;
