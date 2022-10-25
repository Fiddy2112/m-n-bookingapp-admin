import React from "react";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import "./Widget.scss";

function Widget({ type }) {
  return (
    <div className="widget">
      <div className="widgetLeft">
        <span className="title">User</span>
        <span className="counter">100</span>
        <span className="link">See all user</span>
      </div>
      <div className="widgetRight">
        {type === "positive" ? (
          <div className="widgetPercent positive">
            <ExpandLessOutlinedIcon />
            20%
          </div>
        ) : type === "negative" ? (
          <div className="widgetPercent negative">
            <ExpandMoreOutlinedIcon />
            20%
          </div>
        ) : (
          <div className="widgetPercent positive">
            <ExpandLessOutlinedIcon />
            20%
          </div>
        )}
        <AccountBalanceWalletOutlinedIcon className="icon" />
      </div>
    </div>
  );
}

export default Widget;
