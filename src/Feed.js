import React from 'react';
import "./Feed.css";
import Post from './Post';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
function Feed() {
  return (
    <div className='feed'>
    <StoryReel />
    <MessageSender />
    <Post
    profilePic="https://scontent.fdel5-1.fna.fbcdn.net/v/t39.30808-6/271796965_4200781526687932_2761109758431936136_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qRYm-Wy-63kAX-afx6L&tn=i6Gr8Y-QxEvbb8ag&_nc_ht=scontent.fdel5-1.fna&oh=00_AT-QDtrQo3LPxtY4ue8JiqKfI8h-udPOtwkWJUTL3rKnlw&oe=62D33619"
    message="Wow it works"
    timestamp="this is a timestamp"
    username="Soumyank padhy"
    image="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ"
     />
     <Post
    profilePic="https://scontent.fdel5-1.fna.fbcdn.net/v/t39.30808-6/271796965_4200781526687932_2761109758431936136_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qRYm-Wy-63kAX-afx6L&tn=i6Gr8Y-QxEvbb8ag&_nc_ht=scontent.fdel5-1.fna&oh=00_AT-QDtrQo3LPxtY4ue8JiqKfI8h-udPOtwkWJUTL3rKnlw&oe=62D33619"
    message="Wow it works"
    timestamp="this is a timestamp"
    username="Soumyank padhy"
    image="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ"
     />
    

    </div>
  );
}

export default Feed;