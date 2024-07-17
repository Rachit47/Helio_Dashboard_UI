import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./stats.scss";
import StatsGraphs from "../../components/statsgraphs/StatsGraphs";
const Stats = () => {
  return (
    <div className="stats">
      <Sidebar />
      <div className="statsContainer">
        <Navbar />
        <StatsGraphs />
      </div>
    </div>
  );
};

export default Stats;
