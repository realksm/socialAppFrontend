import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "0",
  outline:"none",
  boxShadow: 24,
  p: 4,
  borderRadius:".6rem"
};

export default function CreateStoryModal({handleClose,open}) {
  

  return (
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            {/* <div className="flex space-x-4 items-center">
              <Avatar />
              <div>
                <p className="font-bold text-lg">Code with zosh</p>
                <p className="text-sm">@codewithzosh</p>
              </div>
            </div> */}
            <input
                placeholder="Write captions..."
                className="outline-none w-full bg-slate-100 mt-5 p-2"
                type="text"
              />
       
              <div className="flex items-center mt-5">
               
              </div>
              
        
            <div className="flex w-full justify-end">
                <Button sx={{borderRadius:"1.5rem"}} variant="contained">Create</Button>
            </div>
          </div>
        </Box>
      </Modal>
    
  );
}
