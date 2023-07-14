import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SmallBarChart() {
    const data = [
        {
          name: 'S',
          uv: 30,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'M',
          uv: 50,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'T',
          uv: 40,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'W',
          uv: 60,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'T',
          uv: 40,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'F',
          uv: 70,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'S',
          uv: 40,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'M',
            uv: 30,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'T',
            uv: 50,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'W',
            uv: 40,
            pv: 3800,
            amt: 2500,
          }
      ];
  return (
    <div className='card' style={{ height: "20rem  ", width: "34rem" }}>
        <div className='bar-chart-headings'>
            <div style={{fontSize:20}}>Last 14 Days Worker Active in Training</div>
            <div style={{fontSize:20}}>Last 14 Days</div>
        </div>
        
        <BarChart
          width={540}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={15}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#0d62ff" />
        </BarChart>
    </div>
  )
}

export default SmallBarChart