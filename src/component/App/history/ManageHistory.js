import React, { Component } from "react";
import { Button /* Row, Col */ } from "reactstrap";
import { MdReceipt, MdPayment } from "react-icons/md";
import "./edet.css";
import HistoryTable from "./BetHistoryTable";
import TransactionHistoryTable from "./TransactionHistoryTable";

class ManageHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBetClick: true,
      isTransactionClick: false,
      error: null,
      fetching: false,
      submitting: false
    };
  }

  betHistoryClick = () => {
    this.setState({ isBetClick: true, isTransactionClick: false });
    //set the bethistory table
  };

  transactionHistoryClick = () => {
    this.setState({ isBetClick: false, isTransactionClick: true });
    //set the transactionhistory table...
  };

  refreshData = () => {
    if (this.state.isBetClick) {
      this.setState({ fetching: true });
      //call end point to fetch the bet history data..
    }
    if (this.state.isTransactionClick) {
      this.setState({ fetching: true });
      //call end point to fetch the transaction history data..
    }
  };
  render() {
    const { isBetClick, isTransactionClick, error, fetching } = this.state;

    return (
      <div>
        <div className="btn-group mb-4">
          <Button
            color="danger"
            outline={isBetClick ? true : false}
            onClick={this.betHistoryClick}
            disabled={fetching}
          >
            <MdReceipt /> Bet History
          </Button>
          <Button
            color="danger"
            outline={isTransactionClick ? true : false}
            onClick={this.transactionHistoryClick}
            disabled={fetching}
          >
            <MdPayment /> Transaction History
          </Button>
        </div>
        <div className="mt-3">
          {isBetClick ? (
            <HistoryTable
              error={error}
              fetching={fetching}
              refreshData={this.refreshData}
            />
          ) : isTransactionClick ? (
            <TransactionHistoryTable
              error={error}
              fetching={fetching}
              refreshData={this.refreshData}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
export default ManageHistory;
