import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ChartDataset,
  ScriptableContext,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface DataPoint {
  x: number;
  y: number;
}

const generateData = () => {
  const data: DataPoint[] = [];
  const data2: DataPoint[] = [];
  const data3: DataPoint[] = [];
  let prev = 100;
  let prev2 = 90;
  let prev3 = 100;

  for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });

    prev2 += 5 - Math.random() * 10;
    data2.push({ x: i, y: prev2 });

    prev3 += 5 - Math.random() * 10;
    data3.push({ x: i, y: prev3 });
  }

  return { data, data2, data3 };
};

const ChartComponent = () => {
  const { data, data2, data3 } = generateData();

  const totalDuration = 10000;
  const delayBetweenPoints = totalDuration / data.length;

  const previousY = (ctx: any) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1]
          .getProps(["y"], true).y;

  const animation: ChartOptions<"line">["animations"] = {
    x: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: NaN,
      delay: (ctx: any) => {
        if (ctx.type !== "data" || ctx.xStarted) return 0;
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: previousY,
      delay: (ctx: any) => {
        if (ctx.type !== "data" || ctx.yStarted) return 0;
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
  };

  const dataConfig: ChartData<"line", DataPoint[]> = {
    datasets: [
      {
        label: "Unpaid",
        borderColor: "#00c0ef",
        backgroundColor: "#00c0ef",
        borderWidth: 1,
        pointRadius: 0, // changed from radius
        data,
      },
      {
        label: "Active",
        borderColor: "#00A693",
        backgroundColor: "#00A693",
        borderWidth: 1,
        pointRadius: 0,
        data: data2,
      },
      {
        label: "Present",
        borderColor: "#E4D00A",
        backgroundColor: "#E4D00A",
        borderWidth: 1,
        pointRadius: 0,
        data: data3,
      },
    ] as ChartDataset<"line", DataPoint[]>[],
  };

  const options: ChartOptions<"line"> = {
    animation,
    interaction: { intersect: false },
    plugins: { legend: { display: true } },
    scales: { x: { type: "linear" } },
  };

  return (
    <div className="bg-white">
      <Line data={dataConfig} options={options} />
    </div>
  );
};

export default ChartComponent;
