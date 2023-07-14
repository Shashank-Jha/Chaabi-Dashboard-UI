import "./Card.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "M",
    uv: 0,
    pv: 240,
    amt: 240,
  },
  {
    name: "T",
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: "W",
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: "T",
    uv: 500,
    pv: 390,
    amt: 200,
  },
  {
    name: "F",
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: "S",
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: "S",
    uv: 0,
    pv: 430,
    amt: 210,
  },
];

function AreaChartCard(props) {

  return (
    <>
      <div className="card" style={{ height: "10rem   ", width: "18rem" }}>
        <div className="card-title">{props.title}</div>
        <div className="card-content">
          <div className="data-container">
            <h1>{props.mainData}</h1>
            <div className="sub-data-wrapper">
              <div className={props.profitable?'badge badge-profit':'badge badge-loss'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>{props.badgeData}%</span>
              </div>
              <div className="sub-data">{props.secondaryData}</div>
            </div>
          </div>
          <div className="chart-container">
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <AreaChart
              width={200}
              height={100}
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 40,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis hide />
              <Area
                type="monotone"
                dataKey="uv"
                stroke={props.profitable?"greenyellow":"red"}
                fill={props.profitable?"greenyellow":"red"}
              />
            </AreaChart>
            {/* </ResponsiveContainer> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AreaChartCard;
