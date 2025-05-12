import React, { useState } from 'react';

const UploadPost = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [fileName, setFileName] = useState('No file selected');

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setFileName(selected ? `Selected file: ${selected.name}` : 'No file selected');
  };

  const handleUpload = () => {
    if (!file) {
      setUploadStatus('Please select a file first.');
      return;
    }

    if (!description.trim()) {
      setUploadStatus('Please enter a profile description.');
      return;
    }

    const allowedTypes = [
      'image/jpeg', 'image/png',
      'video/quicktime', 'video/mp4',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];

    if (!allowedTypes.includes(file.type)) {
      setUploadStatus('Invalid file type. Please select a valid file.');
      return;
    }

    const formData = new FormData();
    formData.append('description', description);
    if (file.type.includes('video')) {
      formData.append('video', file);
    } else {
      formData.append('image', file);
    }
    formData.append('userId', 'Deepti Mishra');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8081/UploadPost', true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setUploadStatus(`Uploading: ${percent}%`);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        setUploadStatus('Upload successful!');
        setFile(null);
        setDescription('');
        setFileName('No file selected');
      } else {
        setUploadStatus('Error uploading the file.');
      }
    };

    xhr.send(formData);
    setUploadStatus('Uploading...');
  };

  return (
    <div style={styles.container}>
      <h2>Upload Post</h2>
      <div style={styles.formGroup}>
        <label>Profile Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
          placeholder="Enter a description"
        />
      </div>
      <div style={styles.formGroup}>
        <label>Select a File</label>
        <input type="file" onChange={handleFileChange} style={styles.input} />
        <p style={styles.fileName}>{fileName}</p>
      </div>
      <button style={styles.button} onClick={handleUpload}>Upload</button>
      <p style={styles.status}>{uploadStatus}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  fileName: {
    marginTop: '5px',
    fontSize: '0.9rem',
    color: '#666',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  status: {
    marginTop: '15px',
    fontWeight: 'bold',
  }
};

export default UploadPost;
