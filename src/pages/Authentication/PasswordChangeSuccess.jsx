import { Alert, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PasswordChangeSuccess = () => {
    const navigate=useNavigate();
  return (
    <div className='h-screen flex justify-center  '>
        <div className='w-[50vw] mt-20'>
           <Alert severity="success">Password Successfully Change!</Alert>
        <div className="flex justify-center mt-5">
                <Button
                  onClick={() => navigate("/login")}
                  fullWidth
                  variant="outlined"
                   sx={{ padding: ".8rem 0rem" }}
                >
                  Back To Login
                </Button>
              </div> 
        </div>
        
    </div>
  )
}

export default PasswordChangeSuccess