import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Graphs.css";

const LineGraph = ({ brokersData }) => {
  return (
    <div className="lineGraph">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={brokersData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Broker Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Planned GWP"
            stroke="#82ca9d"
            name="Planned GWP"
          />
          <Line type="monotone" dataKey="GWP" stroke="#8884d8" name="GWP" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
