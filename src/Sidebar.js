import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentitems = (topic) => (
    <div className="recentitems">
      <span className="hashtag"># {topic}</span>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1519817650390-64a93db51149?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_top_Avatar">
          {user.email[0]}
        </Avatar>
        <h2>Abubakar</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p> Who Viewed You</p>
          <p className="number"> 2183</p>
        </div>
        <div className="sidebar_stat">
          <p> Views On Post</p>
          <p className="number"> 12383</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
