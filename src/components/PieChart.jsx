import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/Graphs.css';

const PieChart = ({ brokersData, value }) => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const labels = brokersData.map(item => item["Broker Name"]);
    const gwpValues = (value==="Planned") ?brokersData.map(item => item["Planned GWP"]):brokersData.map(item => item["GWP"]);

    const chartData = {
      labels: labels,
      datasets: [{
        data: gwpValues, 
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)'
        ],
        borderWidth: 1
      }]
    };

    // Configuration options
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `${value} GWP Values for different Brokers`
        },
        legend: {
          position: 'right', 
            align: 'center',
            marginRight: '10px',
        }
      }
    };

    if (myChart) {
      myChart.destroy();
    }
    
    myChart = new Chart(ctx, {
      type: 'pie',
      data: chartData,
      options: options
    });

  }, [brokersData]);

  return (
    <div className='PieChart'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;
