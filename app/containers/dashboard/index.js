import React from "react";

import TransactionList from "./partials/transaction-list";
import FilterPanel from "./partials/filter-panel";
import SummaryBar from "./partials/summary-bar";

const Dashboard = () => (
  <div className="dashboard">
    <SummaryBar />
    <FilterPanel />
    <TransactionList />
  </div>
);

export default Dashboard;
