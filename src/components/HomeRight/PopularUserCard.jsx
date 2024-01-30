import { Avatar } from '@mui/material'
import React from 'react'

const PopularUserCard = ({image,username,description}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <Avatar sx={{bgcolor:"#212534",color:"rgb(88,199,250)"}} className='w-9 h-9 rounded-full' src={image} alt="" />
            <div className='ml-2'>
                <p className='text-sm font-semibold'>{username}</p>
                <p className='text-sm font-semibold opacity-70'>{description}</p>
            </div>
        </div>
        <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default PopularUserCard