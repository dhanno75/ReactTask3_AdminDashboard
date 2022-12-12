import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = ({ DoughnutDetails }) => {
  return <Doughnut data={DoughnutDetails} className="chartLine" />;
};

export default DoughnutChart;
