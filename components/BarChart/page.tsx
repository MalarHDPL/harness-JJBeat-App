import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import "chart.js/auto";
type ChartKey =
  | "It"
  | "Ie"
  | "Production"
  | "Cutting"
  | "Printing"
  | "Embroidery"
  | "Quality"
  | "Employees"
  | "Recruitment"
  | "Payroll"
  | "Finance"
  | "Billing"
  | "Expenses";

interface BarCProps {
  selectedItem?: ChartKey;
}
 const chartDataset :Record<ChartKey, number[]>= {
    It: [50, 60, 70, 40, 90, 30],
    Ie: [20, 40, 55, 60, 30, 80],
    Production: [90, 40, 70, 20, 60, 30],
    Cutting: [30, 50, 40, 60, 55, 70],
    Printing: [70, 20, 40, 80, 90, 30],
    Embroidery: [25, 35, 45, 65, 85, 55],
    Quality: [50, 75, 60, 40, 90, 20],
    Employees: [80, 70, 90, 100, 85, 95],
    Recruitment: [20, 60, 50, 40, 70, 90],
    Payroll: [55, 75, 85, 60, 40, 20],
    Finance: [60, 50, 80, 90, 40, 70],
    Billing: [30, 40, 60, 80, 55, 90],
    Expenses: [90, 70, 40, 20, 50, 30],
  };
  const colorMap: Record<ChartKey, string> = {
    It: "#6B83A1",
    Ie: "#71A7A2",
    Production: "#C58A5A",
    Cutting: "#6FAF7E",
    Printing: "#8D7AB8",
    Embroidery: "#C97A92",
    Quality: "#D4A762",
    Employees: "#7BA9C4",
    Recruitment: "#A687C6",
    Payroll: "#C06A6A",
    Finance: "#6D757D",
    Billing: "#7EB79B",
    Expenses: "#C06E89",
  };

const BarC: React.FC<BarCProps> = ({ selectedItem }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

 
  useEffect(() => {
    const defaultKey = selectedItem || "It";

    const baseData = chartDataset[defaultKey];
    const barColor = colorMap[defaultKey];

    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: `Report for ${defaultKey}`,
          backgroundColor: barColor,
          borderColor: barColor,
          data: baseData,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: { color: "#000" },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [selectedItem]);

  return (
    <div className="w-full">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarC;
