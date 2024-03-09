import React, { useEffect, useState } from "react";
import ChatButton from "../components/ChatButton";
import ClassBarGraph from "../components/ClassBarGraph";
import ClassLineGraph from "../components/ClassLineGraph";
import ClassTable from "../components/ClassTable";
import Data from "../database/Data.json";

function Class({ chatList, setChatList }) {
  const [business, setBusiness] = useState("All");
  const [type, setType] = useState("All");
  const [year, setYear] = useState("All");
  const [options2, setOptions2] = useState([
    "All",
    "FIPI",
    "D&O",
    "Crime",
    "PI",
  ]);
  const [filteredData, setFilteredData] = useState(Data["Class stats"]);

  useEffect(() => {
    var filtered = Data["Class stats"].filter(item => item.Year === +year);
    if(year==="All"){
      filtered = Data["Class stats"];
    }
    filtered.sort((a,b)=>b.GWP - a.GWP);
    
    if (business !== "All") {
      filtered= filtered.filter(item => item["Class of Business"] === business);
    }

    if (type!== "All") {
      filtered= filtered.filter(item => item.ClassType === type);
    }
    setFilteredData(filtered.slice(0,10));
  }, [year, business, type]);

  const handleBusinessChange = (e) => {
    var selectedValue = e.target.value;
    setBusiness(selectedValue);

    if (selectedValue === "All") {
      setOptions2(["All", "FIPI", "D&O", "Crime", "PI"]);
    } else if (selectedValue === "Financial Institution") {
      setOptions2(["All", "FIPI", "D&O", "Crime"]);
    } else if (selectedValue === "Commercial PI") {
      setOptions2(["All", "PI"]);
    } else {
      setOptions2([]);
    }
  };

  return (
    <div>
      <div className="menus">
        <div className="dropDownMenu">
          <label htmlFor="dropdown1">Class of Business:</label>
          <select
            id="dropdown1"
            value={business}
            onChange={handleBusinessChange}
          >
            <option value="All">All</option>
            <option value="Financial Institution">Financial Institution</option>
            <option value="Commercial PI">Commercial PI</option>
          </select>
        </div>
        <div className="dropDownMenu">
          <label htmlFor="dropdown2">Class Type:</label>
          <select
            id="dropdown2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {options2.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
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
      <ClassTable classData={filteredData} />
      <ClassLineGraph classData={filteredData} />
      <ClassBarGraph classData={filteredData} />
      <ChatButton chatList={chatList} setChatList={setChatList}/>

    </div>
  );
}

export default Class;
