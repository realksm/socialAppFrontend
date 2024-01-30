import React from 'react';
import { useSelector } from 'react-redux';

function ChatMessage({ item }) {
  const {auth}=useSelector(store=>store)
  const isReqUserMessage = auth.user?.id===item.user?.id

  

  return (
    <div className={` flex ${!isReqUserMessage ? 'justify-start ' : 'justify-end '}`}>
      <div className={`p-1 ${item.image? "rounded-md":"px-5 rounded-full"} ${!isReqUserMessage?"bg-[#191c29]":'bg-[#191c29] '}`}>
       
      {item.image && <img className='w-[12rem] h-[17rem] object-cover rounded-md' src={item.image} alt="" />}
      <p className={`${item.image? "py-2":"py-1"} `}>{item.content}</p>
      </div>
     
      
    </div>
  );
}

export default ChatMessage;
