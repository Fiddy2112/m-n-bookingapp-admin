import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Navbar.scss";

function Navbar() {
  const [fullscreen, setFullscreen] = useState(false);
  const handleFullscreen = () => {
    const elem = document.getElementById("root");
    console.log(elem);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      setFullscreen(true);
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
      setFullscreen(true);
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
      setFullscreen(true);
    }

    if (elem.exitFullscreen) {
      elem.exitFullscreen();
      setFullscreen(false);
    } else if (elem.webkitExitFullscreen) {
      /* Safari */
      elem.webkitExitFullscreen();
      setFullscreen(false);
    } else if (elem.msExitFullscreen) {
      /* IE11 */
      elem.msExitFullscreen();
      setFullscreen(false);
    }
  };
  console.log(fullscreen);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarSearch">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="searchIcon" />
        </div>
        <div className="navbarItems">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            {fullscreen ? (
              <FullscreenExitOutlinedIcon
                className="icon click"
                onClick={() => handleFullscreen()}
              />
            ) : (
              <FullscreenOutlinedIcon
                className="icon click"
                onClick={() => handleFullscreen()}
              />
            )}
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">6</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MenuOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhciUyMGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
