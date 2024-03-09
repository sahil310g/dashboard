import React from "react";
import "../styles/Table.css";

const ClassTable = ({ classData }) => {
  return (
    <div className="table-container">
      <h2>Top 10 Classes</h2>
      <table className="broker-table">
        <thead>
          <tr>
            <th className="heading">S. No.</th>
            <th className="heading">Year</th>
            <th className="heading">Class of Business</th>
            <th className="heading">Class Type</th>
            <th className="heading">Business Plan</th>
            <th className="heading">Earned Premium</th>
            <th className="heading">GWP</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.Year}</td>
              <td>{item["Class of Business"]}</td>
              <td>{item.ClassType}</td>
              <td>{item["Business Plan"]}</td>
              <td>{item["Earned Premium"]}</td>
              <td>{item["GWP"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassTable;
