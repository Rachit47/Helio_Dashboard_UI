import React from "react";
import "./single.scss";
import { useParams } from "react-router-dom";
import { userRows } from "../../datatablesource";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
import { userSpendingdata } from "../../datatablesource";
const Single = () => {
  const { userId } = useParams(); // Extracting userId from the route params

  const userIdNum = parseInt(userId);

  const userData = userRows.find((user) => user.id === userIdNum);
  const SpendingData = userSpendingdata.find((user) => user.id === userIdNum);
  if (!userData) {
    return <div>User not found for ID: {userId}</div>;
  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Customer Information</h1>
            <div className="item">
              <img src={userData.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{userData.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemKey">{userData.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemKey">{userData.phoneno}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemKey">{userData.city}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemKey">{userData.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Customer Spending (Last 6 Months)"
              data={SpendingData.data}
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

export default Single;
