import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./RevenueChart.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const RevenueChart = () => {
  // Demo data - 30 days of revenue
  const labels = Array.from({ length: 30 }, (_, i) => `${i + 1}`);
  const revenueData = [
    12500, 13200, 12800, 13500, 13900, 14200, 15100, 14800, 15300, 15900, 15600,
    15200, 16100, 16800, 16400, 16900, 17500, 17200, 18100, 18600, 18400, 19200,
    19800, 19500, 20100, 20800, 21200, 21800, 22500, 23000,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: revenueData,
        borderColor: "#00ff66",
        backgroundColor: "rgba(0, 255, 102, 0.1)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#00ff66",
        pointHoverBackgroundColor: "#00ff66",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1a1c24",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (context) => `Day ${context[0].label}`,
          label: (context) => `$${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: "#9aa0b2",
          callback: (value) => `$${value.toLocaleString()}`,
          maxTicksLimit: 6,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9aa0b2",
          maxTicksLimit: 8,
          callback: (value) => `Day ${value}`,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="card chart-card">
      <h3>Revenue Trends</h3>
      <p>30-day revenue overview</p>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
