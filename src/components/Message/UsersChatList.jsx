import React from 'react'
import UserChatCard from './UserChatCard'
import "./Message.css"
const chats=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
const UsersChatList = () => {
  return (
    <div className='h-[83vh]'>
      <div className='pr-2'>
        <input 
        className='outline-none py-[.60rem] px-5 rounded-full w-full bg-slate-100'
        type="text" placeholder='search user...' />
      </div>
      <div className='h-full space-y-4 mt-5 overflow-y-scroll scrollBar'>
        {chats.map((item)=><UserChatCard/>)}
      </div>
    </div>
  )
}

export default UsersChatList