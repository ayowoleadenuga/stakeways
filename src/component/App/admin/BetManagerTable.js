import React, { Component } from "react";
import { Card, CardHeader, CardBody, UncontrolledAlert } from "reactstrap";
import DataTable from "../../../shared/DataTable";
// import { MdDone, MdClear, MdRefresh } from "react-icons/md";

import Moment from "moment";
// import { GoClock } from "react-icons/go";
import "./edet.css";
import editModal from "./editModal";

//inline styling object:
const formatTable = {
  backgroundColor: "#313340",
};

// const mockData = [
//   {
//     reference: "367890",
//     game: "NPM1",
//     paymentside: "DR",
//     amount: "200",
//     status: "CONFIRMED",
//   },
//   {
//     reference: "6444900",
//     game: "LLLA",
//     paymentside: "CR",
//     amount: "5000",
//     status: "PENDING",
//   },
//   {
//     reference: "736790",
//     game: "NPM45",
//     paymentside: "DR",
//     amount: "400",
//     status: "CONFIRMED",
//   },
//   {
//     reference: "124O890000",
//     game: "NPM1",
//     paymentside: "DR",
//     amount: "200",
//     status: "CONFIRMED",
//   },
//   {
//     reference: "32232421",
//     game: "LLLA",
//     paymentside: "DR",
//     amount: "2000",
//     status: "PENDING",
//   },
//   {
//     reference: "89090873",
//     game: "NPM45",
//     paymentside: "CR",
//     amount: "400",
//     status: "CONFIRMED",
//   },
//   {
//     reference: "474894232",
//     game: "LLLA",
//     paymentside: "DR",
//     amount: "2000",
//     status: "PENDING",
//   },
//   {
//     reference: "12389003990",
//     game: "NPM45",
//     paymentside: "CR",
//     amount: "400",
//     status: "CONFIRMED",
//   },
// ];

export class BetManagerTable extends Component {
  state = {
    status: "all",
  };

  changeValue = event => {
    this.setState({ status: event.target.value });

    // this.props.filterData({
    //   status: event.target.value !== "all" ? event.target.value : "",
    // });
  };

  render() {
    const columns = [
      {
        Header: "Organisation",
        accessor: "organisation",
        maxWidth: 400,
        Filter: ({ filter, onChange }) => (
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ""}
            placeholder="&#x1F50D;"
            style={{
              width: "100%",
            }}
          />
        ),
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Game",
        accessor: "game",
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Numbers",
        accessor: "numbers",
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Amount",
        accessor: "amount",
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Date",
        id: "date",
        accessor: d => {
          return Moment(d.transactionDate)
            .local()
            .format("DD-MM-YYYY ");
        },

        Filter: ({ filter, onChange }) => (
          <input
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ""}
            placeholder="&#x1F50D;"
            style={{
              width: "100%",
            }}
          />
        ),
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Status",
        accessor: "status",
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Edit",
        style: {
          textAlign: "center",
        },
        cell: props => {
          return(
          <editModal classN={props} />)
        }
      },
    ];

    const {
      match,
      fetching,
      data,
      error,
      refreshData,
      transactionHistoryData,
    } = this.props;

    return (
      <div>
        <Card style={formatTable}>
          <CardHeader style={{ color: "white" }}>
            <h4>Transaction History</h4>
          </CardHeader>
          <CardBody>
            {error && (
              <UncontrolledAlert color="danger">
                {error.message}
              </UncontrolledAlert>
            )}

            <DataTable
              columns={columns}
              loading={fetching}
              disabled={fetching}
              urlParams={match}
              data={transactionHistoryData ? transactionHistoryData : []}
              count={data ? data.count : 0}
              defaultPageSize={5}
              refreshData={refreshData}
              shiftRefeshButton={true}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BetManagerTable;
