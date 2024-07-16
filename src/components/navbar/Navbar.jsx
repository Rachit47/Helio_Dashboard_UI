import { useContext } from "react";
import "./navbar.scss";
import avatar_logo from "./avatar_logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchRoundedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeRoundedIcon
              className="icon"
              onClick={() => {
                dispatch({ type: "TOGGLE" });
              }}
            />
          </div>
          <div className="item">
            <FullscreenExitRoundedIcon
              className="icon"
              onClick={toggleFullscreen}
            />
          </div>
          {/* <div className="item">
            <NotificationsNoneRoundedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineRoundedIcon className="icon" />
            <div className="counter">1</div>
          </div> */}
          <div className="item">
            <ListRoundedIcon className="icon" />
          </div>
          <div className="item">
            <img src={avatar_logo} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
