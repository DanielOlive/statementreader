import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchTransactions,
  incrementTotalAmount,
  decrementTotalAmount
} from "../actions";
import { getTransactions, getTransactionToggle } from "../selectors";

class TransactionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchTransactions();
  }

  handleSelection(e, value) {
    this.isChecked = e.currentTarget.checked;
    const { amount, reference } = value;

    if (this.isChecked) {
      this.props.incrementTotalAmount(amount, reference);
    } else {
      this.props.decrementTotalAmount(amount, reference);
    }
  }

  render() {
    const { transactions = [], toggleValue } = this.props;
    //  const list = transactions.length ? transactions:[];
    const transactionsFiltered = !toggleValue
      ? transactions
      : transactions.filter(item => item.checked);

    return (
      <div className="transaction-list">
        <div className="transaction-list__titles transaction-list__item">
          <p>Date</p>
          <p>Transaction</p>
          <p>Amount</p>
          <p>Paid</p>
          <p>Selection</p>
        </div>

        {transactions &&
          transactionsFiltered.map(
            ({ date, amount, retailer, reference, checked }) => (
              <div
                key={Math.random()}
                className={`transaction-list__item ${checked && "active"}`}
              >
                <p>{date}</p>
                <p>{retailer}</p>
                <p>{amount}</p>
                <p>-</p>
                <p>
                  <input
                    type="checkbox"
                    onChange={e =>
                      this.handleSelection(e, { amount, reference })
                    }
                    checked={checked}
                  />
                </p>
              </div>
            )
          )}
      </div>
    );
  }
}

TransactionList.propTypes = {
  transactions: PropTypes.array,
  fetchTransactions: PropTypes.func,
  incrementTotalAmount: PropTypes.func,
  decrementTotalAmount: PropTypes.func
};

const mapStateToProps = state => ({
  transactions: getTransactions(state),
  toggleValue: getTransactionToggle(state)
});

const mapDispatchToProps = {
  fetchTransactions,
  incrementTotalAmount,
  decrementTotalAmount
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
