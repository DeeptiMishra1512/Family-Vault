import React, { useEffect, useState } from 'react';
import CreatePost from './CreatePost';


//This file works for fetching all the posts when the page loads
//Check App.jsx where Posts.jsx is being rendered as the nested component of MainLayout
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const userId = 'Deepti Mishra';

  useEffect(() => {
    fetch(`http://localhost:8081/getAllMediaByUserId?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', color: '#666' }}>Loading posts...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
  }

  if (posts.length === 0) {
    return <p style={{ textAlign: 'center', color: '#999' }}>No posts available.</p>;
  }

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <CreatePost key={post.mediaId} post={post} userId={userId} />
      ))}
    </div>
  );
};

export default Posts;
