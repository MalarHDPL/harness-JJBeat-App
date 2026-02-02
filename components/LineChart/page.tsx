// import { useState, useEffect } from 'react';
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import 'chart.js/auto';

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Fees Awaiting Payment",
          fill: false,
          borderColor: "#00c0ef",
          backgroundColor:"#00c0ef",
          yAxisID: "y",
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10],
        },
        {
          label: "Staff Present Today",
          fill: false,
          borderColor: "#00A693",
          backgroundColor:"#00A693",
          yAxisID: "y1",
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
        {
          label: "Student Present Today",
          fill: false,
          borderColor: "#E4D00A",
          backgroundColor:"#E4D00A",
          yAxisID: "y",
          tension: 0.4,
          data: [35, 40, 60, 47, 88, 27, 65],
        },
      ],
    };

    const options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="bg-[#fff]">
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
