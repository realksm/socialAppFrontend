import logo from './logo.svg';
import './App.css';
import Routers from './Routes/Routers';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Message from './pages/Message/Message';
import Reels from './pages/Reels/Reels';
import Authentication from './pages/Authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProfile } from './Redux/Auth/auth.action';
import PasswordChangeSuccess from './pages/Authentication/PasswordChangeSuccess';
import VideoCall from './components/Message/VideoCall';
import Demo from './pages/Message/Demo';
import VideoCalling from './components/Message/VideoCalling';

import darkTheme from './theam/DarkTheam';
import { ThemeProvider } from '@mui/material';

function App() {
  const dispatch=useDispatch();
  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    const jwt=localStorage.getItem("jwt")
    if(jwt){
      dispatch(getUserProfile(jwt))
    }
  },[auth.jwt])

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path='/*' element={auth.user? <HomePage/>:<Authentication/>}/>
        <Route path="/messages" element={<Message/>} />
       
        <Route path="/password-change-success" element={<PasswordChangeSuccess/>} />
        <Route path='/video-call' element={<VideoCall/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='/video-calling' element={<VideoCalling/>}/>
      </Routes>
     
    </ThemeProvider>
  );
}

export default App;
