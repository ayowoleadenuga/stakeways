import React, { Component } from "react";
import {
  Row,
  Col,
  UncontrolledAlert,
  Card,
  Button,
  CardHeader,
  CardImg,
  CardBody,
} from "reactstrap";
import { MdAdd, MdPayment } from "react-icons/md";
import Formsy from "formsy-react";
import { TextInput } from "../../../shared/Forms/TextInput";

//inline styling object:
const formatTable = {
  backgroundColor: "#313340",
};

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };
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

  handleSubmit = data => {
    console.log("hey whats the data?:", data);
    // let requestBody = this.createRequest(data);
    // this.props.submitAction(requestBody);
    //will call paystack api here.
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

  render() {
    const { canSubmit } = this.state;
    const { submitting } = this.props;
    return (
      <div>
        <Row>
          <Col  sm="12" md={{ size: 6, offset: 3 }}>
            <Card style={formatTable}>
              <CardBody>
                <Formsy
                  ref="paystackref"
                  onValidSubmit={this.handleSubmit}
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
                  <Button  color="danger"   type="submit" disabled={!canSubmit || submitting}>
                    {" "}
                    <span style={{ color: "white" }}>
                      {" "}
                      <MdPayment /> Pay Stack
                    </span>
                  </Button>
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
