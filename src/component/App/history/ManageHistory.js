import React, { Component } from "react";
import { Button } from "reactstrap";
import { MdReceipt, MdPayment } from "react-icons/md";
import "./edet.css";
import HistoryTable from "./BetHistoryTable";
import TransactionHistoryTable from "./TransactionHistoryTable";
import { historyService } from "./service/HistoryServices";

class ManageHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBetClick: true,
      isTransactionClick: false,
      error: null,
      fetching: false,
      submitting: false,
      id: 10004,
      betHistoryData:null
    };
  }
  componentDidMount() {
   // this.getUserLoginDetails(userDetails);//still undergoing testing..
    this.getBetHistory(this.state.id);
  }
componentWillReceiveProps(nextProps){
  //when transaction button is click..

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

  getBetHistory = params => {
    
    this.setState({ fetching: true });
    historyService
      .getAllBetsHistory(params)
      .then(response => {
       console.log("hey",response) ;
          this.setState({
            error: null,
            fetching: false,
            betHistoryData:response.result
          });
      }).then(response=>{
        console.log("informer>>>",this.state.betHistoryData)
      }
       
      )
      .catch(error => this.setState({ error, fetching: false }));
  };

  betHistoryClick = () => {
    this.setState({ isBetClick: true, isTransactionClick: false });
  };

  transactionHistoryClick = () => {
    this.setState({ isBetClick: false, isTransactionClick: true });
  };

  refreshData = () => {
    if (this.state.isBetClick) {
      this.setState({ fetching: true });
    }
    if (this.state.isTransactionClick) {
      this.setState({ fetching: true });
    }
  };
  render() {
    const {
      isBetClick,
      isTransactionClick,
      error,
      fetching,
      submitting,
      betHistoryData
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
            />
          ) : null}
        </div>
      </div>
    );
  }
}
export default ManageHistory;
