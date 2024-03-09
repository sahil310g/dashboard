import React from 'react';
import '../styles/Table.css'; // Import CSS file for styling
import BarGraph from './BarGraph';
import LineGraph from './LineGraph';
import PieChart from './PieChart';


const Table = ({brokersData}) => {
  return (
    <div className="table-container">
      <h2>Top 10 Brokers</h2>
      <table className="broker-table">
        <thead>
          <tr>
            <th className="heading">Broker Name</th>
            <th className="heading">GWP</th>
            <th className="heading">Planned GWP</th>
          </tr>
        </thead>
        <tbody>
          {brokersData.map((broker, index) => (
            <tr key={index}>
              <td>{broker.name}</td>
              <td>{broker.actualGWP}</td>
              <td>{broker.plannedGWP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
