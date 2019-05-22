import React, { Component } from "react";
import { Button} from "reactstrap";
import {  MdPayment } from "react-icons/md";
import TransactionForm from "./TransactionForm";
import Withdraw from "./Withdraw";
import { connect } from "react-redux";

class ManageTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      fetching:false,
      isFundAccountClick: true,
      isWithdrawClick: false,
    
    };
  }

  componentDidMount() {
  //get the user details on call here.....or we use redux concepts here.

  }

  isFundAccountClick = () => {
    this.setState({isFundAccountClick: true, isWithdrawClick: false });
    
  };

  isWithdrawClick = () => {
    this.setState({ isFundAccountClick:false, isWithdrawClick: true });
    
  };
  render() 
  
  { 
    const{
      submitting,
      fetching,
      isFundAccountClick,
    isWithdrawClick
    }=this.state;
    return(
      <div>
       <div className="btn-group mb-4">
       <Button
            color="danger"
            outline={ isFundAccountClick ? true : false}
            onClick={this.isFundAccountClick}
            disabled={fetching}
          >
            <MdPayment /> Fund Account
          </Button>
          <Button
            color="danger"
            outline={isWithdrawClick ? true : false}
            onClick={this.isWithdrawClick}
            disabled={fetching}
          >
            <MdPayment /> Withdraw
          </Button>
      </div>
          {isFundAccountClick ?(
            <TransactionForm
        submitting={submitting}
        userId={this.props.response.result.userId}
      /> 
          ):isWithdrawClick ?(
             <Withdraw/>
          ):null
         
          }
       
      </div>
    )
}
}
const mapStateToProps = state => {
  const { response } = state.auth;
  return {
    response,
  };
};
export default connect(mapStateToProps) (ManageTransactions);
