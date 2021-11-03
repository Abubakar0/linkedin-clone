import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import Headerop from "./Headerop";
import Recipe from "./Recipe";

import "./Header.css";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutofapp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png "
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <Headerop Icon={HomeIcon} title="Home" />

        <Headerop Icon={SupervisorAccountIcon} title="Network" />
        <Headerop Icon={BusinessCenterIcon} title="Jobs" />
        <Headerop Icon={ChatIcon} title="Messaging" />
        <Headerop Icon={NotificationsIcon} title="Notifications" />
        <Headerop
          avatar={true}
          title={user?.displayname}
          onClick={logoutofapp}
        />
      </div>
    </div>
  );
}

export default Header;
