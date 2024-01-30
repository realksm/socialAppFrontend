import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { pink, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useDispatch } from "react-redux";
import { createComment, likeComment } from "../../Redux/Comment/comment.action";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Divider } from "@mui/material";
import { likePost, savePost } from "../../Redux/Post/post.action";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function PostCard({ item }) {
  const [showComment, setShowComment] = React.useState(false);
  const dispatch = useDispatch();

  const handleCreateComment = (content) => {
    dispatch(createComment({ postId: item?.id, data: { content } }));
  };

  const handlePostLike=()=>{
dispatch(likePost(item?.id))
  }

  const handleSavePost=()=>{
    dispatch(savePost(item?.id))
  }

  return (
    <div className="card" sx={{ w: "100%" }}>
      <CardHeader
      className=""
        avatar={
          <Avatar sx={{ bgcolor:"#212534",color:"rgb(88,199,250)" }} aria-label="recipe">
            {item?.user?.firstName[0]}
          </Avatar>
        }
        action={
          <IconButton color="primary" aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item?.user?.firstName + " " + item?.user?.lastName}
        subheader={
          "@" +
          item?.user?.firstName.toLowerCase() +
          "_" +
          item?.user?.lastName.toLowerCase()
        }
      />
     {item.image && <CardMedia
        component="img"
        height="194"
        image={item?.image}
        alt={item.caption}
      />}
      <CardContent>
        <Typography variant="body2" color="primary">
          {item?.caption}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between" disableSpacing>
        <div>
           <IconButton color="primary" onClick={handlePostLike} aria-label="add to favorites">
          {item?.likedByRequser ? (
            <FavoriteIcon  sx={{ color: pink[500] }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton color="primary" aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton color="primary" onClick={() => setShowComment(!showComment)}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        </div>
        <div>
          <IconButton color="primary" onClick={handleSavePost}>
            
            {item?.savedByRequser? <BookmarkIcon/>: <BookmarkBorderIcon/>}
            
          </IconButton>
        </div>
       
      </CardActions>

      {showComment && (
        <section>
          <div className="flex items-center space-x-5 mx-3 my-5">
            <Avatar sx={{bgcolor:"#212534",color:"rgb(88,199,250)"}}/>
            <input
              onKeyPress={(e) => {
                console.log("e", e.target.value);
                if (e.key === "Enter") {
                  console.log("--------");
                  handleCreateComment(e.target.value);
                }
              }}
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              type="text"
              placeholder="write your comment..."
            />
          </div>
          <Divider />
          <div className="mx-3 space-y-2 my-5 text-xs">
            {item?.comments.map((comment) => (
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-5">
                  <Avatar
                    sx={{ height: "2rem", width: "2rem", fontSize: ".8rem",bgcolor:"#212534",color:"rgb(88,199,250)" }}
                  >
                    {comment.user.firstName[0]}
                  </Avatar>
                  <p>{comment.content}</p>
                </div>
                <div>
                  <IconButton color="primary">
                    <FavoriteBorderIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
