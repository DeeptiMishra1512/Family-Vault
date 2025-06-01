import React, { useEffect, useState } from 'react';

const MediaViewer = ({ mediaKey, mediaType = 'image/jpeg' }) => {
  const [mediaUrl, setMediaUrl] = useState(null);

  useEffect(() => {
    const fetchPreSignedUrl = async () => {
      try {
        const response = await fetch(`/getPreSignedUrl?key=${encodeURIComponent(mediaKey)}`);
        if (!response.ok) {
          throw new Error('Failed to get media URL');
        }
        const url = await response.text();
        setMediaUrl(url);
      } catch (error) {
        console.error('Error fetching media URL:', error);
      }
    };

    if (mediaKey) {
      fetchPreSignedUrl();
    }
  }, [mediaKey]);

  if (!mediaUrl) {
    return <p>Loading media...</p>;
  }

  // Determine how to render based on media type
  if (mediaType.startsWith('image/')) {
    return <img src={mediaUrl} alt="Media content" style={{ maxWidth: '100%' }} />;
  }

  if (mediaType.startsWith('video/')) {
    return (
      <video controls style={{ maxWidth: '100%' }}>
        <source src={mediaUrl} alt="Video content" type={mediaType} />
        Your browser does not support the video tag.
      </video>
    );
  }

  return <a href={mediaUrl} target="_blank" rel="noOpener noReferrer">Download Media</a>;
};

export default MediaViewer;
