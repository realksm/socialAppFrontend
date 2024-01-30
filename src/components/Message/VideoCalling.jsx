import { Avatar, Button } from '@mui/material'
import React from 'react'

const VideoCalling = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-between py-10 border'>
        <div>
            <h1 className='font-bold text-4xl'>Calling...</h1>
        </div>
        <div className='flex flex-col items-center'>
            <Avatar sx={{width:"15rem",height:"15rem"}}/>
            <h1 className='py-2 font-semibold text-2xl'>codewithzosh</h1>
        </div>
        <div>
            <Button size='large' variant='contained'>End Call</Button>
        </div>

    </div>
  )
}

export default VideoCalling