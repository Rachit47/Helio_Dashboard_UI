import React from "react";
import "./singleproduct.scss";
import { useParams } from "react-router-dom";
import { productRows } from "../../datatablesource";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import List from "../../components/table/Table";
import Chart from "../../components/chart/Chart";
import { productSales } from "../../datatablesource";
import { useNavigate } from "react-router-dom";
const Singleproduct = () => {
  const { productId } = useParams(); // Extracting userId from the route params

  const productIdNum = parseInt(productId);
  const productData = productRows.find(
    (product) => product.id === productIdNum
  );
  const productSalesdata = productSales.find(
    (sales) => sales.id === productIdNum
  );

  const navigate = useNavigate();
  const GoBackHandler = () => {
    navigate(-1);
  };
  
  if (!productData) {
    return <div>Product not found for ID: {productId}</div>;
  }

  return (
    <div className="singleproduct">
      <Sidebar />
      <div className="singleproductContainer">
        <Navbar />
        <div className="top">
          <button onClick={GoBackHandler} className="GoBackButton">
            Go Back
          </button>
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Product Information</h1>
            <div className="item">
              <img src={productData.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{productData.productName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Quantity:</span>
                  <span className="itemKey">{productData.quantity}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemKey">{productData.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title=" Product Sales Revenue (Last 6 Months)"
              data={productSalesdata.data}
            />
          </div>
        </div>
        {/* <div className="bottom">
          <h1 className="title">Information</h1>
          <div className="item"></div>

          <List />
        </div> */}
      </div>
    </div>
  );
};

export default Singleproduct;
