import React, { Component } from "react";
import { Button } from "reactstrap";
import { MdReceipt, MdPayment } from "react-icons/md";
import "./edet.css";
import HistoryTable from "./BetHistoryTable";
import TransactionHistoryTable from "./TransactionHistoryTable";
import { historyService } from "./service/HistoryServices";
import { connect } from "react-redux";

class ManageHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBetClick: true,
      isTransactionClick: false,
      error: null,
      fetching: false,
      submitting: false,
      id: null,
      betHistoryData: null,
      transactionHistoryData: null,
    };
  }
  componentDidMount() {
    this.getBetHistory(this.props.response.result.userId);
  }
  
  getUserLoginDetails = data => {
    this.setState({
      fetching: true,
    });
    historyService
      .login(data)
      .then(response => {
        this.setState({
          response,
          fetching: false,
        });
      })

      .catch(error => this.setState({ formError: error, fetching: false }));
  };

  getBetHistory = id => {
    this.setState({ fetching: true });
    historyService
      .getAllBetsHistory(id)
      .then(response => {
        this.setState({
          error: null,
          fetching: false,
          betHistoryData: response.result,
        });
      })
      .catch(error => this.setState({ error, fetching: false }));
  };

  getTransactionHistory = id => {
    this.setState({ fetching: true });
    historyService
      .getAllTransactionHistory(id)
      .then(response => {
        this.setState({
          error: null,
          fetching: false,
          transactionHistoryData: response.result,
        });
      })
      .catch(error => this.setState({ error, fetching: false }));
  };
  betHistoryClick = () => {
    this.setState({ isBetClick: true, isTransactionClick: false });
  };

  transactionHistoryClick = () => {
    this.setState({ isBetClick: false, isTransactionClick: true });
    this.getTransactionHistory(this.props.response.result.userId);
  };

  refreshData = () => {
    if (this.state.isBetClick) {
      this.getBetHistory(this.props.response.result.userId);
    }
    if (this.state.isTransactionClick) {
      this.getTransactionHistory(this.props.response.result.userId);
    }
  };
  render() {
    const {
      isBetClick,
      isTransactionClick,
      error,
      fetching,

      betHistoryData,
      transactionHistoryData,
    } = this.state;

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
              betHistoryData={betHistoryData}
            />
          ) : isTransactionClick ? (
            <TransactionHistoryTable
              error={error}
              fetching={fetching}
              refreshData={this.refreshData}
              transactionHistoryData={transactionHistoryData}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { response } = state.auth;
  return {
    response,
  };
};

export default connect(mapStateToProps)(ManageHistory);
