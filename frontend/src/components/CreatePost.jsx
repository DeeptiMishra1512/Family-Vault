import React from 'react';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';


//This Jsx file is used to create each post block(media + comment box + like button)
//CreatePost is used in Post.Jsx to show posts when page loads for the first time.
const CreatePost = ({ post, userId }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
  };

  const renderMedia = () => {
    if (post.type === 'Video') {
      return (
        <video controls style={styles.media}>
          <source src={post.filePath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (post.type === 'photo') {
      return <img src={post.filePath} alt="Post media" style={styles.media} />;
    }

    return null;
  };

  return (
    <div style={styles.card}>
      <div style={styles.userInfo}>
        <img src="/logos/profileLogo.png" alt="User" style={styles.profilePic} />
        <span style={styles.username}>{post.userId || 'Anonymous User'}</span>
      </div>

      <label style={styles.text}>{post.description || 'No description available'}</label>

      {renderMedia()}

      <label style={styles.text}>{formatDate(post.uploadDate)}</label>

      <LikeButton mediaId={post.mediaId} userId={userId} />

      {/* Use the unified CommentSection */}
      <CommentSection mediaId={post.mediaId} userId={userId} />
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    boxSizing: 'border-box',
  },
  media: {
    width: '100%',
   // maxWidth: '900px',
    maxHeight: '600px',
    borderRadius: '10px',
    objectFit: 'contain',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  profilePic: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  username: {
    fontSize: '1rem',
    color: '#333',
  },
  text: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default CreatePost;
