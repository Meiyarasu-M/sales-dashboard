import React from "react";

function MetricCard({ title, value, change }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p style={{ color: "#4ade80" }}>{change}</p>
    </div>
  );
}

export default MetricCard;
