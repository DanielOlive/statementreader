import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TRANSACTIONLIST_PATH } from "../../../config";
import { fetchTransactions } from "../actions";
import getTransactions from "../selectors";

class TransactionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchTransactions();
  }

  render() {
    const { transactions = [] } = this.props;
    //  const list = transactions.length ? transactions:[];

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
          transactions.map(({ Date, Amount, Retailer }) => (
            <div key={Math.random()} className="transaction-list__item">
              <p>{Date}</p>
              <p>{Retailer}</p>
              <p>{Amount}</p>
              <p>-</p>
              <p>
                <input type="checkbox" />
              </p>
            </div>
          ))}
      </div>
    );
  }
}

TransactionList.propTypes = {
  // transactions: PropTypes.array,
  // fetchTransactions: PropTypes.func,
};

const mapStateToProps = state => ({
  //  transactions: (state) => state.transactionList.transactions
  transactions: getTransactions(state)
});

const mapDispatchToProps = {
  fetchTransactions
};

// fetchTransactions

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
