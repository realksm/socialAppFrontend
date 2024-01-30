import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title: "Reels",
        icon:<ExploreIcon/>,
        path:"/reels"
    },
    {
        title:"Create Reels" ,
        icon:<ControlPointIcon/>,
        path:"/create-reels"
        
    },
    {
        title: "Notifications",
        icon:<NotificationsIcon/>,
        path:"/notifications"
    },
    {
        title:"Messages" ,
        icon:<MessageIcon/>,
        path:"/messages"
    },
    {
        title:"Lists" ,
        icon:<ListAltIcon/>,
        path:"/lists"
    },
    {
        title:"Communities" ,
        icon:<GroupIcon/>,
        path:"/communities"
    },
    
    {
        title:"Profile" ,
        icon:<AccountCircleIcon/>,
        path:"/profile"
        
    },
   
]