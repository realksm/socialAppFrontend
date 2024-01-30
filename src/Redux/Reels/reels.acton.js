import { api } from "../../config/api"
import { CREATE_REELS_FAILUER, CREATE_REELS_REQUEST, CREATE_REELS_SUCCESS, GET_ALL_REELS_FAILUER, GET_ALL_REELS_REQUEST, GET_ALL_REELS_SUCCESS, GET_USERS_REEL_FAILUER, GET_USERS_REEL_REQUEST, GET_USERS_REEL_SUCCESS } from "./reels.actionType"

export const createReels=(reelData)=>async (dispatch)=>{
    dispatch({type:CREATE_REELS_REQUEST})
    try {

        const {data} = await api.post("/api/reels",reelData)

        dispatch({type:CREATE_REELS_SUCCESS,payload:data})

        console.log("created reels",data)

        
    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:CREATE_REELS_FAILUER,payload:error})
    }
}

export const getAllReels=()=>async (dispatch)=>{
    dispatch({type:GET_ALL_REELS_REQUEST})
    try {

        const {data} = await api.get("/api/reels")

        dispatch({type:GET_ALL_REELS_SUCCESS,payload:data})

    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:GET_ALL_REELS_FAILUER,payload:error})
    }
}

export const getUsersReels=(userId)=>async (dispatch)=>{
    dispatch({type:GET_USERS_REEL_REQUEST})
    try {

        const {data} = await api.get(`/api/reels/user/${userId}`)

        dispatch({type:GET_USERS_REEL_SUCCESS,payload:data})

    } catch (error) {
        console.log("catch error ",error)
        dispatch({type:GET_USERS_REEL_FAILUER,payload:error})
    }
}

// export const likePost=(postId)=>async (dispatch)=>{
//     dispatch({type:LIKE_POST_REQUEST})
//     try {

//         const {data} = await api.put(`/api/posts/like/${postId}`)

//         dispatch({type:LIKE_POST_SUCCESS,payload:data})

//     } catch (error) {

//         console.log("catch error ",error)
//         dispatch({type:LIKE_POST_FAILUER,payload:error})
//     }
// }

// export const savePost=(postId)=>async (dispatch)=>{
//     dispatch({type:SAVE_POST_REQUEST})
//     try {

//         const {data} = await api.put(`/api/posts/${postId}/save`)

//         dispatch({type:SAVE_POST_SUCCESS,payload:data})
        
//     } catch (error) {
//         console.log("catch error ",error)
//         dispatch({type:SAVE_POST_FAILUER,payload:error})
//     }
// }