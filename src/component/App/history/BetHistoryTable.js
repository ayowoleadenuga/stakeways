import React, { Component } from "react";
import { Card, CardHeader, CardBody, UncontrolledAlert } from "reactstrap";
import DataTable from "../../../shared/DataTable";
import { MdDone, MdClear } from "react-icons/md";

import Moment from "moment";
import { GoClock } from "react-icons/go";
import "./edet.css";



//inline styling object:
const formatTable = {
  backgroundColor: "#313340",
};


const Confirmed = () => {
  return (
    <span style={{ color: "green" }}>
      <MdDone /> Completed
    </span>
  );
};
const Declined = () => {
  return (
    <span style={{ color: "#FF6347" }}>
      <MdClear /> Declined
    </span>
  );
};

const Pending = () => {
  return (
    <span style={{ color: "grey" }}>
      <GoClock /> Pending
    </span>
  );
};

const Rejected = () => {
  return (
    <span style={{ color: "red" }}>
      <MdClear /> Rejected
    </span>
  );
};

const Processing = () => {
  return (
    <span style={{ color: "yellow" }}>
      <GoClock /> Processing
    </span>
  );
};

const Unconfirmed = () => {
  return <span style={{ color: "grey" }}>Unconfirmed</span>;
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

  refineData = data => {
    const newData = map(data, content => {
      return { userId: content.userId };
    });
    return newData;
  };

  changeValue = event => {
    this.setState({ status: event.target.value });
  };

  render() {
    const columns = [
      {
        Header: "Organisation",
        accessor: "games.organization.name",
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
        accessor: "games.name",
        style: {
          textAlign: "center",
        },
      },
      {
        Header: "Numbers",
        accessor: "numbers",

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
        accessor: "games.price",

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
        id: "creationTime",
        accessor: d => {
          return Moment(d.creationTime)
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
        accessor: "betstate",

        maxWidth: 200,
        id: "be",
        sortable: true,
        filterable: true,

        Cell: row => (
          <span>
            {row.value === 0 ? (
              <Unconfirmed />
            ) : row.value === 1 ? (
              <Pending />
            ) : row.value === 2 ? (
              <Processing />
            ) : row.value === 3 ? (
              <Confirmed />
            ) : row.value === 4 ? (
              <Declined />
            ) : row.value === 5 ? (
              <Rejected />
            ) : null}
          </span>
        ),
        filterMethod: (filter, row) => {
          if (filter.value === "UNCONFIRMED") {
            return row[filter.id] == 0;
          }
          if (filter.value === "PENDING") {
            return row[filter.id] == 1;
          }
          if (filter.value === "PROCESSING") {
            return row[filter.id] == 2;
          }
          if (filter.value === "COMPLETED") {
            return row[filter.id] == 3;
          }
          if (filter.value === "DECLINED") {
            return row[filter.id] == 4;
          }
          if (filter.value === "REJECTED") {
            return row[filter.id] == 5;
          }
          return row[filter.id];
        },
        Filter: ({ filter, onChange }) => (
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: "60%" }}
            value={filter ? filter.value : null}
          >
            <option value="all">Show All</option>
            <option value="UNCONFIRMED">Unconfirmed</option>
            <option value="COMPLETED">Completed</option>
            <option value="DECLINED">Declined</option>
            <option value="PENDING">Pending</option>
            <option value="PROCESSING">Processing</option>
            <option value="REJECTED">Rejected</option>
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

      refreshData,
      betHistoryData,
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
              data={betHistoryData ? betHistoryData : []}
              count={data ? data.count : 0}
              defaultPageSize={5}
              refreshData={refreshData}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default HistoryTable;
