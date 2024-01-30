import React, { useState, useEffect } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { ZIM } from 'zego-zim-web';

const Demo = () => {
  const [zp, setZp] = useState(null);

  const generateToken = async (tokenServerUrl, userID) => {
    // Obtain the token interface provided by the App Server
    const response = await fetch(
      `${tokenServerUrl}/access_token?userID=${userID}&expired_ts=7200`,
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    return data;
  };

  const init = async () => {
    const userID = "ashok";
    const userName = 'user_' + userID;
    document.querySelector('.name').innerHTML = userName;
    document.querySelector('.id').innerHTML = userID;
    const appID = 1850523677;
    const serverSecret = "5afbbfb7ff40b5283edf8ff46c9a7ede";
    const { token } = await generateToken(
      'https://nextjs-token-callinvitation.vercel.app/api',
      userID
    );
    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
      252984006,
      token,
      null,
      userID,
      userName
    );
    const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForProduction(
        appID,
        serverSecret,
        null,
        userID,
        userName
      );
    const zegoInstance = ZegoUIKitPrebuilt.create(TOKEN);
    // add plugin
    zegoInstance.addPlugins({ ZIM });
    setZp(zegoInstance);
  };

  const handleSend = (callType) => {
    const callee = document.querySelector('#userID').value;
    console.log("calleeeeeeeeeeeeeeeeeeeeeee ", callee);
    if (!callee) {
      alert('userID cannot be empty!!');
      return;
    }
    const users = callee.split(',').map((id) => ({
      userID: id.trim(),
      userName: 'user_' + id,
    }));
    // send call invitation
    zp.sendCallInvitation({
      callees: users,
      callType: callType,
      timeout: 60,
    })
      .then((res) => {
        console.warn(res);
        if (res.errorInvitees.length) {
          alert('The user does not exist or is offline.');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <div className="name"></div>
      <div className="id"></div>
      <input id="userID" type="text" placeholder="Enter User ID" />
      <button className="videoCall" onClick={() => handleSend(ZegoUIKitPrebuilt.InvitationTypeVideoCall)}>Video Call</button>
      <button className="voiceCall" onClick={() => handleSend(ZegoUIKitPrebuilt.InvitationTypeVoiceCall)}>Voice Call</button>
    </div>
  );
};

export default Demo;
