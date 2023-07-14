import "./App.css";
import AreaChartCard from "./components/AreaChartCard";
import BarChartCard from "./components/BarChartCard";
import DonutChart from "./components/DonutChart";
import ListCard from "./components/ListCard";
import PieChartCard from "./components/PieChartCard";
import SideNav from "./components/SideNav";
import SmallBarChart from "./components/SmallBarChart";
import WelcomeBanner from "./components/WelcomeBanner";

function App() {
  return (
    <>
      <div className="main">
        <SideNav />
        <div className="dashboard">
          <WelcomeBanner />
          <div className="area-chart-container">
            <AreaChartCard
              title="In Training Workers"
              mainData="3,354"
              badgeData={20}
              profitable={true}
              secondaryData={234}
            />
            <AreaChartCard
              title="Video Watch Time (Hrs)"
              mainData="2,433"
              badgeData={20}
              profitable={false}
              secondaryData={435}
            />
            <AreaChartCard
              title="% Workers Passing Quiz"
              mainData="95%"
              badgeData={20}
              profitable={true}
              secondaryData={24}
            />
            <AreaChartCard
              title="Avg Days Taken"
              mainData="6"
              badgeData={20}
              profitable={true}
              secondaryData={3}
            />
          </div>
          <div className="chart-level-2">
            <PieChartCard/>
            <div className="bar-chart-container">
            <BarChartCard/>
            </div>
          </div>
          <div className="chart-level-3">
            <ListCard/>
            <DonutChart/>
            <SmallBarChart/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
