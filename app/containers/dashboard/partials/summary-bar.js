import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTotalAmount } from "../selectors";

const SummaryBar = ({ totalAmount }) => (
  <div className="summary-bar">
    <div>
      <p>Amount</p>
      <p>{`£ ${totalAmount}`}</p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  //  transactions: (state) => state.transactionList.transactions
  totalAmount: getTotalAmount(state)
});

SummaryBar.propTypes = {
  totalAmount: PropTypes.string
};

export default connect(mapStateToProps)(SummaryBar);
