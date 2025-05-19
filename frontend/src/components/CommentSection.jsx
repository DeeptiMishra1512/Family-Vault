import React, { useEffect, useState } from 'react';

const CommentSection = ({ mediaId, userId }) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/getAllPostTrackerByMediaId?mediaId=${mediaId}`)
      .then((res) => res.json())
      .then((data) => setCommentsList(data))
      .catch((err) => console.error('Error fetching comments:', err));
  }, [mediaId]);

  const handleComment = () => {
    if (comment.trim() === '') return;

    // You'd typically POST the comment to the backend here
    const newComment = {
      userId,
      comment,
      activityTime: Date.now(), // just for key in frontend
    };

    setCommentsList([...commentsList, newComment]);
    setComment('');
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        style={styles.input}
      />
      <button onClick={handleComment} style={styles.button}>
        Add Comment
      </button>

      <div style={styles.commentsContainer}>
        {commentsList.map((c, index) => (
          c.comment && (
            <div key={c.activityTime || index} style={styles.commentBox}>
              <img src="/logos/profileLogo.png" alt="User" style={styles.profilePic} />
              <span style={styles.commentText}>{c.comment}</span>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '20px',
  },
  input: {
    padding: '8px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    marginTop: '8px',
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  commentsContainer: {
    marginTop: '15px',
  },
  commentBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  profilePic: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },
  commentText: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default CommentSection;
