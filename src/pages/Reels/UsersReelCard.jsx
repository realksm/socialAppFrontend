import React from "react";

const UsersReelCard = ({ reel }) => {
  return (
    <div className="w-[15rem] px-2">
      <video
        className="w-full h-full"
        src={reel.video}
        controls
      />
    </div>
  );
};

export default UsersReelCard;
