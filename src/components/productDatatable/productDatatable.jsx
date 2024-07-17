import "./productDatatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const ProductDatatable = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const Navigate = useNavigate();
  const GoBackHandler = () => {
    Navigate(-1);
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="procellAction">
            <Link
              to={`/products/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="proviewButton">VIEW</div>
            </Link>
            <div
              className="prodeleteButton"
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
    <div className="prodatatable">
      <div className="prodatatableTitle">
        Add New Product
        <Link to="/products/new" className="prolink">
          Add New
        </Link>
        <button onClick={GoBackHandler} className="GoBackButton">
          Go Back
        </button>
      </div>
      <DataGrid
        className="prodatagrid"
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductDatatable;
