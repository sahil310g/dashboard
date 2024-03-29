import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import '../styles/Graphs.css';


const BarGraph = ({ brokersData }) => {
  return (
    <div className="barGraph">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={brokersData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Broker Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Planned GWP" fill="#82ca9d" name="Planned GWP" />
          <Bar dataKey="GWP" fill="#8884d8" name="GWP" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
