import React from "react";

const SummaryBar = () => {
  const amount = "£0.00";
  return (
    <div className="summary-bar">
      <div>
        <p>Amount</p>
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default SummaryBar;
