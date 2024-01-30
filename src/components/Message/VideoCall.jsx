import React from "react";
import { ZIM } from "zego-zim-web";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const VideoCall = () => {
  const { auth } = useSelector((store) => store);
  const userID = auth.user?.id.toString();
  const userName = "userName" + userID;
  const appID = 1850523677;
  const serverSecret = "5afbbfb7ff40b5283edf8ff46c9a7ede";
  const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForProduction(
    appID,
    serverSecret,
    null,
    userID,
    userName
  );

  const zp = ZegoUIKitPrebuilt.create(TOKEN);
  zp.addPlugins({ ZIM });

  function handleInvite() {
    const targetUser = {
      userID: "2",
      userName,
    };
    console.log("target user ------ ", targetUser);
    zp.sendCallInvitation({
      callees: [targetUser],
      callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
      timeout: 60,
    })
      .then((res) => {
        console.log("res",res);
      })
      .catch((err) => {
        console.log("err",err);
      });
  }

  zp.setCallInvitationConfig({
    // The callee will receive the notification through this callback when receiving a call invitation.
    onIncomingCallReceived: (callID, caller, callType, callees) => {
      console.log("incomming call");
    },

    // The callee will receive the notification through this callback when the caller canceled the call invitation.
    onIncomingCallCanceled: (callID, caller) => {},

    // The callee will receive the notification through this callback when the caller accepts the call invitation.
    onOutgoingCallAccepted: (callID, callee) => {
      console.log("outgoing call accept");
    },

    // The caller will receive the notification through this callback when the callee is on a call.
    onOutgoingCallRejected: (callID, callee) => {},

    // The caller will receive the notification through this callback when the callee declines the call invitation.
    onOutgoingCallDeclined: (callID, callee) => {},

    // The callee will receive the notification through this callback when he didn't respond to the call invitation.
    onIncomingCallTimeout: (callID, caller) => {},

    // The caller will receive the notification through this callback when the call invitation timed out.
    onOutgoingCallTimeout: (callID, callees) => {},
  });

  console.log("auth ------- ", auth.user);

  const handleInviteUser=()=>{
    console.log("handle invite user")
  }

  return (
    <div>
      <h1 className="py-20">VideoCall</h1>
      <div>
        <Button variant="contained" onClick={handleInvite}>
          invite user
        </Button>
      </div>
    </div>
  );
};

export default VideoCall;
