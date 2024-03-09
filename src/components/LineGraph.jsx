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

const LineGraph = ({ brokersData }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={brokersData}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="plannedGWP"
          stroke="#82ca9d"
          name="Planned GWP"
        />
        <Line
          type="monotone"
          dataKey="actualGWP"
          stroke="#8884d8"
          name="Actual GWP"
          />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
