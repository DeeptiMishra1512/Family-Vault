import React, { useEffect, useState } from 'react';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';

const CreatePost = ({ post, userId }) => {
  const [mediaUrl, setMediaUrl] = useState('');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(`http://localhost:8081/S3streamMedia?key=${post.filePath}`);
        if (!response.ok) throw new Error('Failed to fetch media');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setMediaUrl(url);
      } catch (err) {
        console.error('Error loading media:', err);
      }
    };

    fetchMedia();
  }, [post.filePath]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
  };

  const renderMedia = () => {
    if (!mediaUrl) return <p>Loading media...</p>;

    if (post.type?.toLowerCase().includes('video')) {
      return (
        <video controls style={styles.media}>
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
  //Note: post.type changed from image to photo
  //because in table media type is being saved as photo and not image
    } else if (post.type?.toLowerCase().includes('photo')) {
      return <img src={mediaUrl} alt="Post media" style={styles.media} />;
    }

    return <p>Unsupported media type</p>;
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
