import React from "react";
import "./widget.scss";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import {
  userRows,
  transactiondata,
  latestTransactionsData,
} from "../../datatablesource";
import { Link } from "react-router-dom";
const Widget = ({ type }) => {
  const getPreviousData = () => {
    return {
      users: 180, // Example previous user count
      orders: 110, // Example previous order count
      balance: 15000, // Example previous balance
    };
  };
  const previousData = getPreviousData();
  const calculatePercentDiff = (currentValue, previousValue) => {
    if (previousValue === 0) return 100;
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  const totalUsers = userRows.length + previousData.users;
  let totalOrders = latestTransactionsData.length + previousData.orders;

  let totalLatesttransEarnings = 0;
  let totaltransactionEarnings = 0;

  latestTransactionsData.forEach((t) => {
    totalLatesttransEarnings += t.amount;
  });

  transactiondata.forEach((t) => {
    totaltransactionEarnings += t.Total;
  });

  const totalEarnings = totalLatesttransEarnings + totaltransactionEarnings;

  console.log(totalLatesttransEarnings);
  console.log(totaltransactionEarnings);

  const netPreviousBalance = previousData.balance + totaltransactionEarnings;
  const totalBalance = previousData.balance + totalEarnings;

  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        page: "users",
        value: totalUsers,
        percentDiff: Math.abs(
          calculatePercentDiff(totalUsers, previousData.users)
        ).toFixed(2),
        isMoney: false,
        link: "See All Users",
        icon: (
          <PersonRoundedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        value: totalOrders,
        isMoney: false,
        percentDiff: calculatePercentDiff(
          totalOrders,
          previousData.orders
        ).toFixed(2),
        link: "View All Orders",
        icon: (
          <ShoppingCartRoundedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        value: totalEarnings,
        percentDiff: calculatePercentDiff(
          totalEarnings,
          totaltransactionEarnings
        ).toFixed(2),
        isMoney: true,
        //link: "View net earnings",
        icon: (
          <MonetizationOnRoundedIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        value: totalBalance,
        percentDiff: calculatePercentDiff(
          totalBalance,
          netPreviousBalance
        ).toFixed(2),
        // link: "View total balance",
        icon: (
          <AccountBalanceWalletRoundedIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.value}
        </span>
        <span className="link">
            <Link to={`${data.page}`} style={{ textDecoration: "none" }}>
            {data.link}
          </Link>
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessRoundedIcon />
          {data.percentDiff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
