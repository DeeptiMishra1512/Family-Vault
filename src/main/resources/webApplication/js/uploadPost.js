 function uploadData() {
        // Get elements
        const fileInput = document.getElementById('file-upload');
        const fileNameDisplay = document.getElementById('file-name');
        const uploadButton = document.getElementById('upload-button');
        const uploadStatus = document.getElementById('upload-status');
        const descriptionInput = document.getElementById('profile-description');

        // Display file name when file is selected
        fileInput.addEventListener('change', function () {
            const file = fileInput.files[0];
            if (file) {
                fileNameDisplay.textContent = `Selected file: ${file.name}`;
            } else {
                fileNameDisplay.textContent = 'No file selected';
            }
        });

        // Handle file upload
        uploadButton.addEventListener('click', function () {
            const file = fileInput.files[0];
            const description = descriptionInput.value.trim();

            if (!file) {
                uploadStatus.textContent = 'Please select a file first.';
                return;
            }

            if (!description) {
                uploadStatus.textContent = 'Please enter a profile description.';
                return;
            }

            // Validate file type
            const allowedTypes = ['image/jpeg', 'image/png', 'video/quicktime','video/mp4','application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
            if (!allowedTypes.includes(file.type)) {
                uploadStatus.textContent = 'Invalid file type. Please select an image, PDF, DOCX, or text file.';
                return;
            }

            // Create FormData object
            const formData = new FormData();
            formData.append('description', description);
            if(file.type === 'video/mp4' || file.type === 'video/quicktime'){
               formData.append('video', file);
            }else{
               formData.append('image', file);
            }


            formData.append('userId', 'deepti15');

            // AJAX request to server
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:8081/UploadPost', true);

            xhr.upload.addEventListener('progress', function (event) {
                if (event.lengthComputable) {
                    const percent = (event.loaded / event.total) * 100;
                    uploadStatus.textContent = `Uploading: ${Math.round(percent)}%`;
                }
            });

            xhr.onload = function () {
                if (xhr.status === 200) {
                    uploadStatus.textContent = 'Upload successful!';
                } else {
                    uploadStatus.textContent = 'Error uploading the file.';
                }
            };

            // Send form data
            xhr.send(formData);

            // Show uploading status
            uploadStatus.textContent = 'Uploading...';
        });
    }

    // Call the uploadData function on page load
    window.onload = uploadData;