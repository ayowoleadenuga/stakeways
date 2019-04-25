import React, { Component } from "react";
import TransactionForm from "./TransactionForm";

class ManageTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
    };
  }

  render() 
  
  { 
    const{submitting}=this.state;
    return(
      <div>
          
          <TransactionForm
        submitting={submitting}
      /> 
      </div>
    )
}
}

export default ManageTransactions;
