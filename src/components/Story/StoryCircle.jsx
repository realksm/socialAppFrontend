import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StoryCircle = ({ image, username, userId }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`story/${userId}`);
  };

  
  return (
    <div className="cursor-pointer flex flex-col items-center mr-4" onClick={handleNavigate}>
      <Avatar sx={{width:"5rem",height:"5rem"}} className="w-16 h-16 rounded-full" src={image} alt="" />
      <p>
        {username?.length > 9 ? username.substring(0, 9) + "..." : username}
      </p>
    </div>
  );
};

export default StoryCircle;