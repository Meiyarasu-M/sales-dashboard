import React from "react";
import "./TopProducts.css";

const products = [
  { name: "Wireless Headphones", sales: 1234, revenue: "$49,360" },
  { name: "Smart Watch Pro", sales: 987, revenue: "$39,480" },
  { name: "Laptop Stand", sales: 756, revenue: "$18,900" },
  { name: "USB-C Hub", sales: 645, revenue: "$12,900" },
  { name: "Ergonomic Mouse", sales: 534, revenue: "$10,680" },
];

const TopProducts = () => (
  <div className="card top-products">
    <h3>Top Products</h3>
    <p>Best selling items this month</p>
    <ul>
      {products.map((p) => (
        <li key={p.name}>
          <span>{p.name}</span>
          <span className="sales">{p.sales} sales</span>
          <span className="revenue">{p.revenue}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TopProducts;
