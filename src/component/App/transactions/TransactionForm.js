import React, { Component } from "react";
import { payStackService } from "./services/PayStackServices";
import { Row, Col, Card, CardBody } from "reactstrap";

import Formsy from "formsy-react";
import { TextInput } from "../../../shared/Forms/TextInput";
import PaystackButton from "react-paystack";
import Moment from "moment";
import { toast } from "react-toastify";

const formatTable = {
  backgroundColor: "#313340",
};

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      costumerEmail: null,
      key: null,
      costumerAmount: 100,
      costumerBalance: null,
      error: null,
      paymentData: null,
    };
  }

  componentDidMount() {
    this.getUserDetails(this.props.userId);
  }
  getUserDetails = id => {
    payStackService
      .getUserDetails(id)
      .then(response => {
        this.setState({
          costumerEmail: response.result.emailAddress,
          costumerBalance: response.result.balance,
          paymentData: response.result,
        });
      })
      .catch(error => this.setState({ error: error }));
  };

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  handleChange = data => {
    if (data && data.postsNum) {
      let newAmount = parseInt(data.postsNum);
      this.setState({ costumerAmount: newAmount });
    }
  };

  resetForm = () => {
    this.refs.paystackref.reset();
  };

  ClearDescription = () => {
    this.props.reset();
    this.resetForm();
  };

  callback = response => {
    this.paymentDone(this.props.userId);
  };

  paymentDone = async id => {
    this.setState({
      paymentData: {
        ...this.state.paymentData,
        creationTime: Moment()
          .local()
          .toISOString(),
        balance: this.state.costumerBalance + this.state.costumerAmount,
      },
    });
    try {
      if (this.state.paymentData.balance) {
        payStackService
          .createTransaction(this.state.paymentData, id)
          .then(response => {
            toast.success(`Your Payment is successfully`, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 4000,
            });
          })
          .catch(error => this.setState({ error: error }));
      }
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  };

  close = () => {
    toast.warn(`Your Payment is closed`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 4000,
    });
  };

  getReference = () => {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    const { costumerAmount, costumerEmail, key } = this.state;
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
                    value={costumerAmount}
                  />
                  <PaystackButton
                    text="Make Payment"
                    class="btn btn-danger"
                    callback={this.callback}
                    close={this.close}
                    embed={false}
                    reference={this.getReference()}
                    email={costumerEmail}
                    amount={costumerAmount * 100}
                    paystackkey={key}
                    tag="button"
                    ref={c => {
                      this.payStackButton = c;
                    }}
                    disabled={submitting}
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
