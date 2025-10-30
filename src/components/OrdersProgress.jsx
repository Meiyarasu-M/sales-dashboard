import React from "react";
import "./OrdersProgress.css";

const orders = [
  {
    id: "ORD-001",
    name: "John Doe",
    items: 3,
    status: "Processing",
    amount: "$234",
  },
  {
    id: "ORD-002",
    name: "Jane Smith",
    items: 1,
    status: "Shipped",
    amount: "$89",
  },
  {
    id: "ORD-003",
    name: "Bob Johnson",
    items: 5,
    status: "Pending",
    amount: "$456",
  },
  {
    id: "ORD-004",
    name: "Alice Brown",
    items: 2,
    status: "Processing",
    amount: "$178",
  },
];

const OrdersProgress = () => (
  <div className="card orders-progress">
    <h3>Orders in Progress</h3>
    <p>Current active orders</p>
    <ul>
      {orders.map((o) => (
        <li key={o.id}>
          <div>
            <strong>{o.id}</strong>
            <p>
              {o.name} • {o.items} items
            </p>
          </div>
          <span className={`status ${o.status.toLowerCase()}`}>{o.status}</span>
          <span className="amount">{o.amount}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default OrdersProgress;
