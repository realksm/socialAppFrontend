import React, { useState } from "react";
import PopularUserCard from "./PopularUserCard";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import SearchUser from "../SearchUser/SearchUser";
import { useNavigate } from "react-router-dom";

const popularUser = [1, 1, 1, 1];
const HomeRight = () => {
  const navigate=useNavigate()
  
  const handleUserClick=(userId)=>{
navigate(`/profile/${userId}`)
  }
  return (
    <div className="pr-5">
      <SearchUser handleClick={handleUserClick}/>
      <div className="card p-5">
        
        <div className="flex justify-between py-5 items-center">
          <p className="font-semibold opacity-70">Suggestions for you</p>
          <p className="text-xs font-semibold opacity-95">View All</p>
        </div>

        <div className="space-y-5">
          {popularUser.map((item, index) => (
            <PopularUserCard
              key={index}
              image={
                item.userImage
              }
              username={"userName001"}
              description={"Follows you"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
