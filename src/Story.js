import React from 'react';
import { Avatar } from '@mui/material';
import "./Story.css";
import "./StoryReel";
function Story ({Image, profileSrc, title}) {
  return (
    <div style={{ backgroundImage: `url(${Image})` }} className='story'>
    <Avatar className='story_avatar' src={profileSrc}/>
    <h3>{title}</h3>

    </div>
  );
}

export default Story;