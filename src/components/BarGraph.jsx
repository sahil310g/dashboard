import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarGraph = ({ brokersData }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={brokersData}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="plannedGWP" fill="#82ca9d" name="Planned GWP" />
        <Bar dataKey="actualGWP" fill="#8884d8" name="Actual GWP" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
