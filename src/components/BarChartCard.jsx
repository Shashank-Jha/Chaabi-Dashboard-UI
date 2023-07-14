import React from 'react'
import './Card.css'
import './BarChartCard.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BarChartCard() {
    const data = [
        {
          name: 'Jun 3',
          uv: 100,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Jun 4',
          uv: 130,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Jun 5',
          uv: 130,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Jun 6',
          uv: 220,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Jun 7',
          uv: 280,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun 8',
          uv: 200,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jun 9',
          uv: 250,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Jun 10',
            uv: 100,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Jun 11',
            uv: 280,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Jun 12',
            uv: 360,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Jun 13',
            uv: 370,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Jun 14',
            uv: 400,
            pv: 4300,
            amt: 2100,
          },
      ];
  return (
    <div className='card' style={{ height: "20rem  ", width: "62rem" }}>
        <div className='bar-chart-headings'>
            <div style={{fontSize:20}}>Last 14 Days Worker Active in Training</div>
            <div style={{fontSize:20}}>Last 14 Days</div>
        </div>
        
        <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={25}
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

export default BarChartCard