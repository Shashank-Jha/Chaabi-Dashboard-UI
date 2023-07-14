import { PieChart, Pie, Legend, Cell } from 'recharts';
import './Card.css';

function PieChartCard() {
    const data = [
        { name: 'Finished Training', per: 34 },
        { name: 'Chapter A', per: 22 },
        { name: 'Chapter B', per: 22 },
        { name: 'Chapter C', per: 20 },
        {name: `Haven't Started Yet`, per:7}
    ];
    const COLORS = ['#0088FE', '#00C49F', 'lightcoral', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
 
    return (
        <div className="card" style={{ height: "20rem  ", width: "18rem" }}>
            <div style={{fontSize:20}}>Chapter Wise Status</div>
        <PieChart width={300} height={300}>
            <Pie data={data} dataKey="per" outerRadius={100} fill={'#000'} labelLine={false} label={renderCustomizedLabel}>
                {data.map((entry, index) => (
                <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                />
            ))}
            </Pie>
            <Legend />
        </PieChart>
        </div>
    );
}

export default PieChartCard