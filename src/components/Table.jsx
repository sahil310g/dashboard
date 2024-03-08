import React from 'react';
import '../styles/Table.css'; // Import CSS file for styling
import PieChart from './PieChart';

const brokersData = [
  { name: 'Broker 1', gwp: '$100,000' },
  { name: 'Broker 2', gwp: '$95,000' },
  { name: 'Broker 3', gwp: '$90,000' },
  { name: 'Broker 4', gwp: '$85,000' },
  { name: 'Broker 5', gwp: '$80,000' },
  { name: 'Broker 6', gwp: '$75,000' },
  { name: 'Broker 7', gwp: '$70,000' },
  { name: 'Broker 8', gwp: '$65,000' },
  { name: 'Broker 9', gwp: '$60,000' },
  { name: 'Broker 10', gwp: '$55,000' }
];

const Table = () => {
  return (
    <div className="table-container">
      <h2>Top 10 Brokers</h2>
      <table className="broker-table">
        <thead>
          <tr>
            <th className="heading">Broker Name</th>
            <th className="heading">GWP</th>
          </tr>
        </thead>
        <tbody>
          {brokersData.map((broker, index) => (
            <tr key={index}>
              <td>{broker.name}</td>
              <td>{broker.gwp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PieChart/>
    </div>
  );
};

export default Table;
