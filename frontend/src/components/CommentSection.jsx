import React, { useState } from 'react';

function CommentSection() {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleComment = () => {
    if (comment.trim() !== '') {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
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
          <p key={index} style={styles.comment}>
            {c}
          </p>
        ))}
      </div>
    </div>
  );
}


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
  comment: {
    padding: '6px 0',
    borderBottom: '1px solid #eee',
  },
};

export default CommentSection;
