"use strict";

import React from "react";

import TransactionList from "./partials/transaction-list";
import FilterPanel from "./partials/filter-panel";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <FilterPanel />
      <div className="transaction-list">
        <TransactionList />
      </div>
    </div>
  );
};

export default Dashboard;
