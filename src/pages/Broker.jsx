import React, { useEffect, useState } from "react";
import BarGraph from "../components/BarGraph";
import LineGraph from "../components/LineGraph";
import PieChart from "../components/PieChart";
import BrokerTable from "../components/BrokerTable";
import "../styles/Broker.css";
import Data from "../database/Data.json";

function Broker() {
  const [market, setMarket] = useState("All");
  const [year, setYear] = useState("All");
  const [filteredData, setFilteredData] = useState(Data["Broker stats"]);
  useEffect(() => {
    var filtered = Data["Broker stats"].filter(item => item.Year === +year);
    if(year==="All"){
      filtered = Data["Broker stats"];
    }
    filtered.sort((a,b)=>b.GWP - a.GWP);
    
    if (market !== "All") {
      filtered= filtered.filter(item => item["Market Type"] === market);
    }

    console.log(filtered.slice(0,10));
    setFilteredData(filtered.slice(0,10));
  }, [year, market]);

  return (
    <div>
      <div className="menus">
        <div className="dropDownMenu">
          <label htmlFor="dropdown1">Market Type:</label>
          <select
            id="dropdown1"
            value={market}
            onChange={(e) => setMarket(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Open Market">Open Market</option>
            <option value="Facilities">Facilities</option>
          </select>
        </div>
        <div className="dropDownMenu">
          <label htmlFor="dropdown2">Year:</label>
          <select
            id="dropdown1"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="All">All Time</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
      <BrokerTable brokersData={filteredData} />
      <LineGraph brokersData={filteredData} />
      <BarGraph brokersData={filteredData} />
    </div>
  );
}

export default Broker;
