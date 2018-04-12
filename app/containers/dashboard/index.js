"use strict";

import React from "react";

import TransactionList from "./partials/transaction-list";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="filter-panel">filter</div>
      <div className="transaction-list">
        <TransactionList />
      </div>
      <div className="uploader">Uploader</div>
    </div>
  );
};

export default Dashboard;
