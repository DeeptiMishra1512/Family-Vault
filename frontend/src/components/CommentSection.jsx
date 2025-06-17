import React, { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const CommentSection = ({ mediaId, userId }) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojiButtonRef = useRef(null);
  const inputRef = useRef(null);
  const pickerRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:8081/getAllPostTrackerByMediaId?mediaId=${mediaId}`)
      .then((res) => res.json())
      .then((data) => setCommentsList(data))
      .catch((err) => console.error('Error fetching comments:', err));
  }, [mediaId]);

  // Prevent scroll-to-top
  useEffect(() => {
    if (showEmojiPicker && pickerRef.current) {
      const activeElement = document.activeElement;
      if (activeElement && typeof activeElement.blur === 'function') {
        activeElement.blur();
      }

      const observer = new MutationObserver(() => {
        const focused = pickerRef.current.querySelector('input:focus, button:focus, [tabindex]:focus');
        if (focused) focused.blur();
      });

      observer.observe(pickerRef.current, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    }
  }, [showEmojiPicker]);

  const handleEmojiClick = (emojiData) => {
    setComment(prev => prev + emojiData.emoji);
  };

  //Added function to calculate day and display as 1 Day ago...1 week ago and so on.
  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
    if (diffHours < 12) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;

    // Same calendar day
    const isToday = now.toDateString() === date.toDateString();
    if (isToday) return "Today";

    // Yesterday
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (yesterday.toDateString() === date.toDateString()) return "Yesterday";

    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 60) return "1 month ago";
    return `${Math.floor(diffDays / 30)} months ago`;
  };


  const handleComment = () => {
    if (comment.trim() === '') return;

    const newComment = {
      userId,
      comment,
      mediaId,
      activityTime: new Date().toISOString()
    };

    fetch('http://localhost:8081/savePostTracker', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save comment');
        return res.json();
      })
      .then(savedComment => {
        setCommentsList(prev => [...prev, savedComment]);
        setComment('');
      })
      .catch(err => {
        console.error('Error saving comment:', err);
      });
  };

  const handleInputClick = () => {
    if (showEmojiPicker) setShowEmojiPicker(false);
  };

  return (
    <div style={styles.container}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={comment}
          ref={inputRef}
          onClick={handleInputClick}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          style={styles.input}
        />
        <button
          ref={emojiButtonRef}
          onClick={() => setShowEmojiPicker(prev => !prev)}
          style={styles.emojiButton}
        >
          😊
        </button>

        {showEmojiPicker && (
          <div
            ref={pickerRef}
            style={{
              ...styles.picker,
              scrollMarginTop: '100vh' // prevents scroll jump
            }}
            tabIndex={-1}
          >
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>

      <button onClick={handleComment} style={styles.button}>
        Add Comment
      </button>

      <div style={styles.commentsList}>
        {commentsList.length === 0 ? (
          <p style={styles.noComments}>No comments yet.</p>
        ) : (
          commentsList.map((c, userId) => (
           <div key={c.userId} style={styles.commentItem}>
             <div style={styles.commentContent}>
               <img src="/logos/profileLogo.png" alt="User" style={styles.profilePic} />
               <div style={styles.commentText}>
                 <strong>{c.userId}:</strong> {c.comment}
               </div>
             </div>
             <div style={styles.timestamp}>{getRelativeTime(c.activityTime)}</div>
           </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '0px',
  },
  input: {
    padding: '12px 3px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
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
  emojiButton: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    fontSize: '1.3rem',
    cursor: 'pointer',
  },
  picker: {
       position: 'absolute',
       right: '10px',
       bottom: '40px', // always appears above the emoji button
       width: '320px',
       height: '300px',
       backgroundColor: '#fff',
       boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
       borderRadius: '8px',
       zIndex: 10,
       overflow: 'hidden',
       outline: 'none',
     },
 commentItem: {
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: '6px 0'
   },
   commentContent: {
     display: 'flex',
     alignItems: 'center',
   },
   commentText: {
     marginLeft: '8px',
   },
   timestamp: {
     fontSize: '0.8rem',
     color: '#888',
     whiteSpace: 'nowrap',
     marginLeft: '12px',
   },
   profilePic: {
     width: '30px',
     height: '30px',
     borderRadius: '50%',
   },

  noComments: {
    fontStyle: 'italic',
    color: '#666',
  },

};

export default CommentSection;
