import "./ordersdatatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns, orderData } from "../../datatablesource";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const OrdersDatatable = () => {
  const [data, setData] = useState(orderData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const navigate = useNavigate();
  const GoBackHandler = () => {
    navigate(-1);
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="ordercellAction">
            <div
              className="orderdeleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              DELETE
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="orderdatatable">
      <div className="orderdatatableTitle">
        Orders
        <button
          onClick={GoBackHandler}
          className="GoBackButton"
        >
          Go Back
        </button>
      </div>
      <DataGrid
        className="orderdatagrid"
        rows={data}
        columns={orderColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default OrdersDatatable;
