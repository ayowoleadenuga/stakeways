import React, { Component } from "react";
import { Card, CardHeader, CardBody, UncontrolledAlert } from "reactstrap";
import DataTable from "../../../shared/DataTable";
import { MdDone, MdClear, MdRefresh } from "react-icons/md";

import Moment from "moment";
import { GoClock } from "react-icons/go";
import "./edet.css";

const testingData = [
  {
    userId: "string",
    playerId: "string",
    stack: "string",
    lines: "string",
    numbers: "string",
    creationTime: "2019-05-02T13:44:01.825Z",
    betstate: 0,
    gameId: 0,
    games: {
      name: "string",
      startDate: "2019-05-02T13:44:01.825Z",
      endDate: "2019-05-02T13:44:01.825Z",
      datePlayed: "string",
      price: 0,
      gameTypeId: 0,
      organizationId: 0,
      organization: {
        name: "string",
        creationDate: "2019-05-02T13:44:01.825Z",
        createdBy: 0,
        id: 0,
      },
      id: 0,
    },
    id: 0,
  },
];

//inline styling object:
const formatTable = {
  backgroundColor: "#313340",
};

const mockData = [
  {
    organisation: "BETNAIJA",
    game: "NPM1",
    no: "2",
    amount: "200",
    status: "CONFIRMED",
  },
  {
    organisation: "BABAIJEBU",
    game: "LLLA",
    no: "3",
    amount: "2000",
    status: "PENDING",
  },
  {
    organisation: "WINNERBET",
    game: "NPM45",
    no: "2",
    amount: "400",
    status: "CONFIRMED",
  },
  {
    organisation: "BETNAIJA",
    game: "NPM1",
    no: "2",
    amount: "200",
    status: "CONFIRMED",
  },
  {
    organisation: "BABAIJEBU",
    game: "LLLA",
    no: "3",
    amount: "2000",
    status: "PENDING",
  },
  {
    organisation: "WINNERBET",
    game: "NPM45",
    no: "2",
    amount: "400",
    status: "CONFIRMED",
  },
  {
    organisation: "BABAIJEBU",
    game: "LLLA",
    no: "3",
    amount: "2000",
    status: "PENDING",
  },
  {
    organisation: "WINNERBET",
    game: "NPM45",
    no: "2",
    amount: "400",
    status: "CONFIRMED",
  },
];
const Confirmed = () => {
  return (
    <span style={{ color: "green" }}>
      <MdDone /> Confirmed
    </span>
  );
};
const Declined = () => {
  return (
    <span style={{ color: "red" }}>
      <MdClear /> Declined
    </span>
  );
};

const Pending = () => {
  return (
    <span style={{ color: "red" }}>
      <GoClock /> Pending
    </span>
  );
};

const map = (array, fn) => {
  let results = [];
  for (const value of array) {
    results.push(fn(value));
  }
  
  return results;
};
export class HistoryTable extends Component {
  state = {
    status: "all",
  };

  componentDidMount() {
    const pp = this.refineData(testingData);
     console.log(pp);
  }

  refineData = data => {
    
   const newData= map(data, content => {
    
      return { userId: content.userId };
    });
    return newData
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
        accessor: "no",

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
        Header: "Amount",
        accessor: "amount",

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
        Header: "Date Created",
        id: "date",
        accessor: d => {
          return Moment(d.submittedOn)
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

        maxWidth: 200,
        id: "status",
        sortable: true,
        filterable: true,

        Cell: row => (
          <span>
            {row.value === "CONFIRMED" ? (
              <Confirmed />
            ) : row.value === "PENDING" ? (
              <Pending />
            ) : (
              <Pending />
            )}
          </span>
        ),
        filterMethod: (filter, row) => {
          if (filter.value === "CONFIRMED") {
            return row[filter.id] == "CONFIRMED";
          }
          if (filter.value === "PENDING") {
            return row[filter.id] == "PENDING";
          }
          return row[filter.id];
        },
        Filter: ({ filter, onChange }) => (
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: "60%" }}
            // value={this.state.status}
            value={filter ? filter.value : null}
          >
            <option value="all">Show All</option>
            <option value="CONFIRMED">Confirmed</option>

            <option value="PENDING">Pending</option>
          </select>
        ),
        style: {
          textAlign: "center",
        },
      },
    ];

    const {
      match,
      fetching,
      data,
      error,
      selectRow,
      pages,
      page,
      pageSize,
      setPageNumber,
      filterData,
      setPageSize,
      refreshData,
    } = this.props;

    return (
      <div>
        <Card style={formatTable}>
          <CardHeader style={{ color: "white" }}>
            <h4>Bet History</h4>
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
              //  data={data ? data.content : []}
              data={mockData}
              count={data ? data.count : 0}
              defaultPageSize={5}
              refreshData={refreshData}
              // selectRow={selectRow}
              // manual={true}
              // pages={pages}
              // page={page}
              // pageSize={pageSize}
              // filterData={filterData}
              // setPageNumber={setPageNumber}
              // setPageSize={setPageSize}
              // searchParam="searchKey"
              // searchPlaceholder="Search by title/instructor"
              // actions={actions}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default HistoryTable;
