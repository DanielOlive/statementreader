import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import {
  fetchTransactions,
  incrementTotalAmount,
  decrementTotalAmount,
  markTransactionAsPaid
} from "../actions";
import { getTransactions, getTransactionToggle } from "../selectors";

import ConfirmationModal from "../../../components/confirmation-modal";

class TransactionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIDs: []
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  componentWillMount() {
    this.props.fetchTransactions();
  }

  handleSelection(e, value) {
    this.isChecked = e.currentTarget.checked;
    const { amount, reference, _id } = value;

    if (this.isChecked) {
      this.props.incrementTotalAmount(amount, reference);
      this.setState({
        selectedIDs: [...this.state.selectedIDs, _id]
      });
    } else {
      this.props.decrementTotalAmount(amount, reference);
      const selectedIDs = this.state.selectedIDs.filter(id => id !== _id);
      this.setState({
        selectedIDs
      });
    }
  }

  handleConfirmation() {
    this.props.markTransactionAsPaid(this.state.selectedIDs);
    this.setState({ selectedIDs: [] });
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
            (
              { date, amount, retailer, reference, checked, _id, paid },
              idx
            ) => (
              <div
                key={Math.random()}
                className={`transaction-list__item ${checked && "active"}`}
              >
                <p>{date}</p>
                <p>{retailer}</p>
                <p>{amount}</p>
                <p>
                  {paid ? <Icon name="payment" /> : "-"} {idx}
                </p>
                <p>
                  <input
                    type="checkbox"
                    onChange={e =>
                      this.handleSelection(e, { amount, reference, _id })
                    }
                    checked={checked}
                  />
                </p>
              </div>
            )
          )}

        {this.state.selectedIDs.length && (
          <ConfirmationModal
            cta="Mark as Paid"
            description="Are you sure you want to mark the selected items as paid?"
            title="Mark as Paid"
            yesBtn={this.handleConfirmation}
          />
        )}
      </div>
    );
  }
}

TransactionList.propTypes = {
  transactions: PropTypes.array,
  fetchTransactions: PropTypes.func,
  incrementTotalAmount: PropTypes.func,
  markTransactionAsPaid: PropTypes.func,
  decrementTotalAmount: PropTypes.func
};

const mapStateToProps = state => ({
  transactions: getTransactions(state),
  toggleValue: getTransactionToggle(state)
});

const mapDispatchToProps = {
  fetchTransactions,
  incrementTotalAmount,
  decrementTotalAmount,
  markTransactionAsPaid
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
