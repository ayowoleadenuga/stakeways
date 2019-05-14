import React, { Component } from "react";
import {
  Row,
  Col,
  // UncontrolledAlert,
  Card,
  Button,
  // CardHeader,
  // CardImg,
  CardBody,
} from "reactstrap";
import { MdPayment } from "react-icons/md";
import Formsy from "formsy-react";
import { TextInput } from "../../../shared/Forms/TextInput";
import PaystackButton from "react-paystack";

//inline styling object:
const formatTable = {
  backgroundColor: "#313340",
};

//customised button

const payStackButton = (
  <span style={{ color: "white" }}>
    {" "}
    <MdPayment /> Pay Stack
  </span>
);

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      costomerEmail: "mmkeut@yahoo.com",
      key: "pk_test_7d7177d018dffeec7e3b0d66cf376509124f8014",
      costomerAmount: 44440,
    };
  }

  componentDidMount() {
    //get the user details on call here.....or we use redux concepts here.
  }

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  //   createRequest = data => {
  //     let request = { ...data };
  //     if (request.interestCode) {
  //       request = {
  //         interestId: request.interestCode.id,
  //         ...request
  //       };
  //       delete request.interestCode;
  //     }
  //     return request;
  //   };

  handleChange = data => {
    console.log(data);
 
    if(data && data.postsNum){
      let newAmount = parseInt(data.postsNum);
      this.setState({ costomerAmount: newAmount });
     
      // let requestBody = this.createRequest(data);
      // this.props.submitAction(requestBody);
      //will call paystack api here.
      //!newAmount.NaN
    }else{
      console.log("hahahhha")
    }
    
  };

  //   componentWillReceiveProps(nextProps) {
  //     if (nextProps.submitSucessful) {
  //       this.resetForm();
  //     }
  //   }

  resetForm = () => {
    this.refs.paystackref.reset();
  };

  ClearDescription = () => {
    this.props.reset();
    this.resetForm();
  };

  callback = response => {
    console.log(response); // card charged successfully, get reference here
  };

  close = () => {
    console.log("Payment closed");
  };

  getReference = () => {
    console.log("help me", this.state.costomerAmount);
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  // payWithPaystack=()=>{
  //  let handler = PaystackPop.setup({
  //     key: 'pk_test_86d32aa1nV4l1da7120ce530f0b221c3cb97cbcc',
  //     email: 'customer@email.com',
  //     amount: 10000,
  //     currency: "NGN",
  //    // ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
  //     metadata: {
  //        custom_fields: [
  //           {
  //               display_name: "Mobile Number",
  //               variable_name: "mobile_number",
  //               value: "+2348012345678"
  //           }
  //        ]
  //     },
  //     callback:this.callback,
  //     onClose:this.close
  //   });
  //   handler.openIframe();
  // }
  render() {
    const { canSubmit, costomerAmount, costomerEmail, key } = this.state;
    const { submitting } = this.props;
    return (
      <div>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card style={formatTable}>
              <CardBody>
                <Formsy
                  ref="paystackref"
                  onValidSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                  onValid={this.enableButton}
                  onInvalid={this.disableButton}
                  noValidate
                >
                  <TextInput
                    name="postsNum"
                    required
                    disabled={submitting}
                    title="Enter your stack"
                    validations={{
                      isNumeric: true,
                    }}
                    validationErrors={{
                      isNumeric: "Enter number only",
                    }}
                  />
                  <PaystackButton
                    text="Make Payment"
                    class="btn btn-danger"
                    callback={this.callback}
                    close={this.close}
                    embed={false}
                    reference={this.getReference()}
                    email={costomerEmail}
                    amount={costomerAmount}
                    paystackkey={key}
                    tag="button"
                    ref={c => {
                      this.payStackButton = c;
                    }}
                  />
                </Formsy>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TransactionForm;

//style={{backgroundColor:"#901E78"}}
