import React from 'react'
import BarGraph from '../components/BarGraph';
import LineGraph from '../components/LineGraph';
import PieChart from '../components/PieChart';
import Table from '../components/Table'
import "../styles/Broker.css"
const brokersData = [
  { name: 'Miller', actualGWP: 528491.5777, plannedGWP: 792737.3665},
  { name: 'Howden', actualGWP: 181322.5075, plannedGWP:  271983.7612},
  { name: 'Aon', actualGWP: 84163.92827, plannedGWP:  126245.8924},
  { name: 'Besso', actualGWP: 81961.47385, plannedGWP:  122942.2108},
  { name: 'Croton Stokes', actualGWP: 988720.6725, plannedGWP:  1483081.009},
  { name: 'Balance', actualGWP: 492444.4544, plannedGWP:  738666.6816},
  { name: 'BMS', actualGWP: 322499.6381, plannedGWP:  483749.4572},
  { name: 'JLT', actualGWP: 335889.4383, plannedGWP:  503834.1575},
  { name: 'Willis', actualGWP: 227841.5319, plannedGWP:  341762.2979},
  { name: 'Aon', actualGWP: 820441.1325, plannedGWP: 1230661.699}
];

function Broker() {
  return (
    <div>
        <Table brokersData={brokersData}/>
        <div className="pieCharts">

      <PieChart brokersData={brokersData} value={"Planned"} />
      <PieChart brokersData={brokersData} value={"Expected"} />
        </div>
      <LineGraph brokersData={brokersData} />
      <BarGraph brokersData={brokersData} />
    </div>
  )
}

export default Broker