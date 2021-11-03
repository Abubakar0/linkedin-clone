import React from "react";
import "./Headerop.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";

function Headerop({ title, Icon, avatar, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerop">
      {Icon && <Icon className="headerop_icons" />}
      {avatar && (
        <Avatar className="headerop_icons" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="title">{title}</h3>
    </div>
  );
}

export default Headerop;
