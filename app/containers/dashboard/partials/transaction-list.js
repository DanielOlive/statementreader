import React from "react";
import { TRANSACTIONLIST_PATH } from "../../../config";

class TransactionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // TRANSACTIONLIST_PATH

    fetch(TRANSACTIONLIST_PATH)
      .then(function(response) {
        return response.json();
      })
      .then(transactions => {
        this.setState({ transactions: transactions.list });
      });
  }

  render() {
    const list = this.state.transactions ? this.state.transactions : [];
    return (
      <div className="transaction-list">
        <div className="transaction-list__titles">
          <p>Date</p>
          <p>Transaction</p>
          <p>Amount</p>
          <p>Paid</p>
          <p>Selection</p>
        </div>

        <div className="transaction-list_results">
          {list.map(({ Date, Amount, Retailer }) => (
            <div key={Math.random()} className="transaction-list__items">
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
      </div>
    );
  }
}

export default TransactionList;
