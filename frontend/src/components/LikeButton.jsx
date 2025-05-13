import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    liked ? setLikes(prev => prev - 1) : setLikes(prev => prev + 1);
       setLiked(!liked);
  };

  return (
    <div style={styles.container}>
      <button onClick={handleLike} style={styles.button}>
          <FaThumbsUp color={liked ? 'navy' : '#fff'} />
{/*         {liked ? 'Unlike' : 'Like'} */}
      </button>
      <p>{likes} {likes === 1 ? 'Like' : 'Likes'}</p>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '10px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default LikeButton;
