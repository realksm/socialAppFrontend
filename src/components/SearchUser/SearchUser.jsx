import { Avatar, Card, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../Redux/Auth/auth.action";

const SearchUser = ({ handleClick }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [username, setUsername] = useState("");
  const handleSearchUser = (e) => {
    setUsername(e.target.value);
    dispatch(searchUser(e.target.value));
  };
  return (
    <div  >
      <div className="py-5 relative">
        <input
          className="bg-transparent border border-[#3b4054] outline-none w-full text-white px-5 py-3 rounded-full"
          type="text"
          placeholder="search user..."
          onChange={handleSearchUser}
        />
        {username && (
          <Card className="absolute w-full z-10 top-[4.5rem] cursor-pointer">
            {auth.searchResult.map((item) => (
              <CardHeader
              onClick={()=>{
                handleClick(item.id)
                setUsername("")
              }}
                avatar={<Avatar src={item.image} />}
                title={item.firstName + " " + item.lastName}
                subheader={`@${
                  item.firstName.toLowerCase() +
                  "_" +
                  item.lastName.toLowerCase()
                }`}
              />
            ))}
          </Card>
        )}
      </div>
    </div>
  );
};

export default SearchUser;
