import React from "react";
import { Link } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import { useDarkModeProvider } from "../../context/DarkModeProvider";
import { actionType } from "../../context/DarkModeReducer";
import "./Sidebar.scss";

function Sidebar() {
  const { darkMode, dispatch } = useDarkModeProvider();
  console.log(darkMode);

  console.log(dispatch);

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <Link to="/">
          <span className="logo">Booking App</span>
        </Link>
      </div>

      <div className="sidebarCenter">
        <ul>
          {/* Main */}
          <p className="sidebarTitle">MAIN</p>
          <li>
            <DashboardOutlinedIcon className="sidebarIcon" />
            <span>Dashboard</span>
          </li>
          {/* Lists */}
          <p className="sidebarTitle">LISTS</p>
          <Link to="/users">
            <li>
              <Person2OutlinedIcon className="sidebarIcon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels">
            <li>
              <HotelOutlinedIcon className="sidebarIcon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms">
            <li>
              <BedroomChildOutlinedIcon className="sidebarIcon" />
              <span>Rooms</span>
            </li>
          </Link>
          <li>
            <LocalShippingOutlinedIcon className="sidebarIcon" />
            <span>Delivery</span>
          </li>
          {/* Useful */}
          <p className="sidebarTitle">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="sidebarIcon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="sidebarIcon" />
            <span>Notifications</span>
          </li>

          <p className="sidebarTitle">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="sidebarIcon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="sidebarIcon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="sidebarIcon" />
            <span>Settings</span>
          </li>
          {/* User */}
          <p className="sidebarTitle">User</p>
          <li>
            <AccountBoxOutlinedIcon className="sidebarIcon" />
            <span>Profile</span>
          </li>
          <li>
            <InputOutlinedIcon className="sidebarIcon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="sidebarBottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: actionType.SET_LIGHT })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: actionType.SET_DARK })}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
