import React from "react";
import "../styles/Table.css";

const BrokerTable = ({ brokersData }) => {
  return (
    <div className="table-container">
      <h2>Top 10 Brokers</h2>
      <table className="broker-table">
        <thead>
          <tr>
            <th className="heading">S. No.</th>
            <th className="heading">Year</th>
            <th className="heading">Broker Name</th>
            <th className="heading">GWP</th>
            <th className="heading">Planned GWP</th>
            <th className="heading">Market Type</th>
          </tr>
        </thead>
        <tbody>
          {brokersData.map((broker, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{broker.Year}</td>
              <td>{broker["Broker Name"]}</td>
              <td>{broker.GWP}</td>
              <td>{broker["Planned GWP"]}</td>
              <td>{broker["Market Type"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrokerTable;
