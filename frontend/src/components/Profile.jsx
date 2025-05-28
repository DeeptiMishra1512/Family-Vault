import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const userId = 'Deepti Mishra';
    fetch(`http://localhost:8081/GetUserProfile?userId=${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user profile');
        return res.json();
      })
      .then((data) => setProfile(data))
      .catch((err) => setError(err.message));
  }, []);

  return (

      <div style={styles.profileCard}>
        <img
          src="/logos/profileLogo.png"
          alt="User"
          style={styles.profilePic}
        />
        <h2 style={styles.name}>
          {profile ? `${profile.firstName} ${profile.lastName}` : 'Anonymous User'}
        </h2>

        {error && <p style={styles.error}>{error}</p>}

        {profile && (
          <div style={styles.profileInfo}>
            <div style={styles.profileItem}>
              <span style={styles.label}>Birthdate:</span>
              <span>{new Date(profile.birthDate).toLocaleDateString()}</span>
            </div>
            <div style={styles.profileItem}>
              <span style={styles.label}>About:</span>
              <span>{profile.profileDesc || 'N/A'}</span>
            </div>
          </div>
        )}
      </div>

  );
};

const styles = {
    profileCard: {
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
        marginTop: '50px',
        fontFamily: 'Arial, sans-serif',
        justifyContent: 'center',
        boxSizing: 'border-box',
      },

  profilePic: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  name: {
    fontSize: '1.5rem',
    margin: '10px 0',
    color: '#064d61',
  },
  profileInfo: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  profileItem: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
    padding: '5px 0',
  },
  label: {
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default UserProfile;
