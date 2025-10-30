import React from "react";
import Header from "./components/Header";
import MetricCard from "./components/MetricCard";
import SalesChart from "./components/SalesChart";
import RevenueChart from "./components/RevenueChart";
import TopProducts from "./components/TopProducts";
import OrdersProgress from "./components/OrdersProgress";
import "./App.css";

const App = () => {
  return (
    <div className="dashboard-container">
      <Header />

      <div className="metrics-grid">
        <MetricCard
          title="Total Revenue"
          value="$45,231"
          change="+20.1%"
          sub="from last month"
        />
        <MetricCard
          title="Total Sales"
          value="2,350"
          change="+15.2%"
          sub="from last month"
        />
        <MetricCard
          title="Active Orders"
          value="143"
          change="+8.5%"
          sub="from last week"
        />
        <MetricCard
          title="Conversion Rate"
          value="3.24%"
          change="+2.1%"
          sub="from last month"
        />
      </div>

      <div className="charts-grid">
        <SalesChart />
        <RevenueChart />
      </div>

      <div className="bottom-grid">
        <TopProducts />
        <OrdersProgress />
      </div>
    </div>
  );
};

export default App;
