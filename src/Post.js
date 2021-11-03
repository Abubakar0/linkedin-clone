import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Inputoptions from "./Inputoptions";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

function Post(props) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar src={props.photoUrl}></Avatar>
        <div className="post_info">
          <h2>Abubakar</h2>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{props.message}</p>
      </div>
      <div className="post_buttons">
        <Inputoptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="blue" />
        <Inputoptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <Inputoptions Icon={ShareOutlinedIcon} title="Share" color="green" />
        <Inputoptions Icon={SendOutlinedIcon} title="Send" color="gray" />{" "}
      </div>
    </div>
  );
}

export default Post;
