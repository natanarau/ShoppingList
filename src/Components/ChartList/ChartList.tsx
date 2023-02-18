import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Lista de compras',
    },
  },
};

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];


export const data = {
  labels,
  datasets: [
    {
      label: 'Previsto',
      data: labels.map((value, index) => index),
      backgroundColor: 'rgb(100, 232, 39)',
    },
    {
      label: 'Realizado',
      data: labels.map((value, index) => index+1),
      backgroundColor: 'rgb(235, 153, 53)',
    },
  ],
  options: {
    maintainAspectRatio : false
  }
};

export default function ChartList() {
  return <Bar options={options} data={data} />;
}
