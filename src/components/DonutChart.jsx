import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
function DonutChart() {
  const data = [
    { name: "passed", value: 400 },
    { name: "Failed", value: 300 },
  ];
  const COLORS = ["green","red"];

  return (
    <div className="card" style={{ height: "20rem  ", width: "24rem" }}>
      <div style={{ fontSize: 20 }} >Quiz Passing %</div>
      <div className="pie-chart-container">
      <PieChart width={380} height={300}>
        <Pie
          data={data}
          cx='30%'
          cy='50%'
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="vetical" verticalAlign="middle" align="right"/>
      </PieChart>
      </div>
    </div>
  );
}

export default DonutChart;
