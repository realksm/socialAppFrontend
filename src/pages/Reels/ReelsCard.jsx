import React from 'react'

const ReelsCard = ({video}) => {
  return (
    <div>
        <div className="w-[25rem] h-[43rem] p-2">
        {video.endsWith('.mp4') ? (
          <video className="w-full h-full rounded-md" controls>
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img className="w-full h-full" src={video} alt="Reel" />
        )}
      </div>
    </div>
  )
}

export default ReelsCard