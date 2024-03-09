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
import '../styles/Graphs.css';

const ClassLineGraph = ({ classData }) => {
  return (
    <div className="lineGraph">

    <ResponsiveContainer width="100%" height={400} >
      <LineChart
        data={classData}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Business Plan"
          stroke="#82ca9d"
          name="Business Plan"
        />
        <Line
          type="monotone"
          dataKey="Earned Premium"
          stroke="red"
          name="Earned Premium"
        />
        <Line
          type="monotone"
          dataKey="GWP"
          stroke="#8884d8"
          name="GWP"
          />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default ClassLineGraph;
