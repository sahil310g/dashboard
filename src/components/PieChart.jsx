import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/PieChart.css';

const PieChart = ({ brokersData, value }) => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Extracting names and GWP values from the data array
    const labels = brokersData.map(item => item.name);


    const gwpValues = (value==="Planned") ?brokersData.map(item => item.plannedGWP):brokersData.map(item => item.actualGWP);
    console.log(`GWP values: ${gwpValues}`);
    // Data for the pie chart
    const chartData = {
      labels: labels,
      datasets: [{
        data: gwpValues, // Values in lakhs
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
          position: 'right', // Place legends to the right of the chart
            align: 'center',
            marginRight: '10px',
        }
      }
    };

    // If a chart already exists, destroy it before creating a new one
    if (myChart !== null) {
      myChart.destroy();
    }

    // Create the pie chart
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
