import React, { Component } from "react";
import { Button, Row, Col } from "reactstrap";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./Forms/form.css";
import { Spinner } from "reactstrap";
import { MdRefresh } from "react-icons/md";

class DataTable extends Component {
  render() {
    const {
      data,
      // count,
      manual,
      pages,
      page,
      pageSize,
      columns,
      defaultPageSize,
      loading,
      // filterData,
      // hideActions,
      // setPageNumber,
      // setPageSize,
      // searchParam,
      // actions,
      // searchPlaceholder,
      hideSearchParam,
      refreshData,
      disabled,
      shiftRefeshButton,
    } = this.props;

    const columnsWithoutAction = [...columns];

    return (
      <div style={{ color: "white" }}>
        <Row>
          <Col sm="8">
           
          </Col>
          <Col sm="4">
            {!hideSearchParam && (
              <Button
                color="danger"
                className="mb-2"
                style={shiftRefeshButton ? { width: "6rem", marginLeft: "49%" }:{width: "6rem", marginLeft: "59%"}}
                outline={true}
                onClick={refreshData}
                disabled={disabled}
              >
                <MdRefresh size={20} />
              </Button>
            )}
          </Col>
        </Row>
        <ReactTable
          className="ReactTable -striped -highlight"
          LoadingComponent={loading ? Spinner : "w"}
          data={data}
          pages={pages}
          page={page}
          pageSize={pageSize}
          manual={manual}
          defaultPageSize={defaultPageSize}
    
          columns={columnsWithoutAction}
          noDataText={"No data"}
        />
      </div>
    );
  }
}

export default DataTable;
