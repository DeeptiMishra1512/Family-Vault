import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    // Use the functional form to safely update the state based on previous values
    setLiked(prevLiked => {
      setLikes(prevLikes => prevLiked ? prevLikes - 1 : prevLikes + 1);
      return !prevLiked;
    });
  };

  return (
    <div style={styles.container}>
      <button onClick={handleLike} style={styles.button}>
        {liked ? 'Liked' : 'Like'}
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
