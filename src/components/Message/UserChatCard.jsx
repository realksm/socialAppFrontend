import { Avatar, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";

const UserChatCard = ({ item }) => {
  const { auth } = useSelector((store) => store);
  return (
    <CardHeader
      avatar={
        <Avatar
          sx={{
            width: "3.5rem",
            height: "3.5rem",
            fontSize: "1.5rem",
            bgcolor:"#191c29",color:"rgb(88,199,250)"
          }}
          aria-label="recipe"
          src={item.image}
        />
         
       
      }
      action={
        <IconButton aria-label="settings">
          <MoreHorizIcon />
        </IconButton>
      }
      title={
        item.chat_name
      }
      subheader={item.messages[item.messages.length - 1]?.content}
    />
  );
};

export default UserChatCard;
