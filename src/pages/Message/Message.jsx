import {
  Avatar,
  Backdrop,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import React, { Fragment, useEffect, useRef, useState } from "react";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideocamIcon from "@mui/icons-material/Videocam";
import WestIcon from "@mui/icons-material/West";
import ChatMessage from "../../components/Message/ChatMessage";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useDispatch, useSelector } from "react-redux";
import {
  createChat,
  createMessage,
  getAllChats,
} from "../../Redux/Message/message.action";
import UserChatCard from "../../components/Message/UserChatCard";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { uploadToCloudinary } from "../../utis/uploadToCloudniry";
import "./Message.css";
import { searchUser } from "../../Redux/Auth/auth.action";
import SearchUser from "../../components/SearchUser/SearchUser";
import SockJS from "sockjs-client";
import Stomp from 'stompjs';

const Message = () => {
  const dispatch = useDispatch();
  const { chat,auth } = useSelector((store) => store);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    dispatch(getAllChats());
  }, [currentChat]);

  useEffect(() => {
    setMessages([...messages, chat.message]);
  }, [chat.message]);

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat.id,
      content: value,
      image: selectedImage,
    };
    const data={message,sendToServer:sendMessageToServer}
    dispatch(createMessage(data));
    setSelectedImage(null);
  };

  const handleSelectImage = async (event) => {
    setLoading(true);
    const imgUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedImage(imgUrl);
    setLoading(false);
  };

  const handleCreateChat = (userId) => {
    dispatch(createChat({ userId }));
  };

// ------------------------------------------------- //

const [stompClient, setStompClient] = useState(null);
// const [messages, setMessages] = useState([]);
const [inputMessage, setInputMessage] = useState('');

const onConnect=(frem)=>{
console.log("connect frem : ",frem)
}
const onErr=(err)=>{
  console.log("error when connect ",err)
}
  useEffect(() => {
   
      const sock = new SockJS("http://localhost:5454/ws");
      const stomp = Stomp.over(sock);
      setStompClient(stomp);
     
      stomp.connect({}, onConnect, onErr);
   

    // return () => {
    //   if (stomp) {
    //     stomp.disconnect();
    //   }
    // };
  },[]);

  useEffect(() => {
    if (stompClient && auth.reqUser && currentChat) {
      

      const subscription = stompClient.subscribe(
        `/user/${currentChat?.id}/private`,
        onMessageRecive
      );

      return () => {
        subscription.unsubscribe();
      };
      
    }
  });

  const onMessageRecive = (payload) => {
    console.log("onMessageRecive ............. -----------", payload);

    console.log("recive message -  - - - - - - -  -", JSON.parse(payload.body));

    const recievedMessage = JSON.parse(payload.body);

    setMessages([...messages, recievedMessage]);
  };

  const sendMessageToServer = (message) => {
    if (stompClient && message) {
      // const messageToSend = { content: inputMessage }; // Customize this according to your message structure
      stompClient.send(`/app/chat/${currentChat?.id.toString()}`, {}, JSON.stringify(message));
      
    }
  };

  useEffect(() => {
    // Scroll to the bottom when 'messages' change or component mounts
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Fragment>
      <Grid className="h-screen overflow-y-hidden" container>
        <Grid className="px-5 bg-[#191c29] " xs={3} item>
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5 ">
                <WestIcon />
                <h1 className=" text-xl font-bold">Home</h1>{" "}
              </div>

              <div className="h-[83vh]">
                <div className="">
                  <SearchUser handleClick={handleCreateChat} />
                </div>
                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar ">
                  {chat.chats.map((item) => (
                    <div
                      onClick={() => {
                        setCurrentChat(item);
                        setMessages(item.messages);
                      }}
                      className="cursor-pointer bg-[#212534] rounded-md"
                    >
                      <UserChatCard item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid className="h-full" item xs={9}>
          {currentChat ? (
            <div>
              <div className="flex justify-between items-center bg-[#191c29] border-l  p-5">
                <div className="flex items-center space-x-3">
                  <Avatar src="https://cdn.pixabay.com/photo/2016/04/17/20/19/woman-1335487_640.jpg" />
                  <p>{currentChat.chat_name}</p>
                </div>
                <div className="flex space-x-3">
                  <IconButton>
                    <AddIcCallIcon />
                  </IconButton>
                  <IconButton>
                    <VideocamIcon />
                  </IconButton>
                </div>
              </div>
              <div ref={chatContainerRef} className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5 pb-10">
                {messages.map((item, i) => (
                  <ChatMessage key={item.id} item={item} />
                ))}
              </div>

              <div className="sticky bottom-0 border-l">
                {selectedImage && (
                  <img
                    className="w-[5rem] h-[5rem] object-cover px-2"
                    src={selectedImage}
                    alt=""
                  />
                )}
                <div className="bg-[#191c29] py-5 flex items-center justify-center space-x-5  ">
                  <input
                    onKeyPress={(e) => {
                      if (
                        e.key === "Enter" &&
                        (e.target.value || selectedImage)
                      ) {
                        handleCreateMessage(e.target.value);
                        setInputMessage("");
                      }
                    }}
                    className="bg-transparent border border-[#3b4054] rounded-full w-[90%] py-3 px-5 "
                    type="text"
                    placeholder="Type message..."
                    value={inputMessage}
                    onChange={(e)=>setInputMessage(e.target.value)}
                  />
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSelectImage}
                      style={{ display: "none" }}
                      id="image-input"
                    />
                    <label htmlFor="image-input">
                      <AddPhotoAlternateIcon />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full space-y-5 flex flex-col justify-center items-center">
              <ChatBubbleOutlineIcon sx={{ fontSize: "15rem" }} />
              <p className="text-xl font-semibold">No Chat Selected</p>
            </div>
          )}
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Fragment>
  );
};

export default Message;
