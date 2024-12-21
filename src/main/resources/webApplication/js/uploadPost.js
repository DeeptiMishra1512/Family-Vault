
     function uploadData() {
                 // Get elements
                 const fileInput = document.getElementById('file-upload');
                 const fileNameDisplay = document.getElementById('file-name');
                 const uploadButton = document.getElementById('upload-button');
                 const uploadStatus = document.getElementById('upload-status');

                 // Display file name when file is selected
                 fileInput.addEventListener('change', function() {
                     const file = fileInput.files[0];
                     if (file) {
                         fileNameDisplay.textContent = `Selected file: ${file.name}`;
                     } else {
                         fileNameDisplay.textContent = 'No file selected';
                     }
                 });

                 /*********###########################################################################********/
                /*********######## CHECK THE ERROR MESSAGE DISPLAY AND UPLOAD STATUS DISPLAY#########********/
                 /*********#########################################################################********/
                 // Handle file upload via JavaScript
                 uploadButton.addEventListener('click', function() {
                     const file = fileInput.files[0];

                     if (!file) {
                         uploadStatus.textContent = 'Please select a file first.';
                         return;
                     }

                     // Validate file type (optional)
                     const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
                     if (!allowedTypes.includes(file.type)) {
                         uploadStatus.textContent = 'Invalid file type. Please select an image, PDF, DOCX, or text file.';
                         return;
                     }

                     // Create FormData object for sending the file
                     const formData = new FormData();
                     formData.append('file-upload', file);

                     // Create AJAX request to send the file to the server
                     const xhr = new XMLHttpRequest();
                     xhr.open('POST', '/upload', true); // Replace with your actual server URL

                     // Update status during upload
                     xhr.upload.addEventListener('progress', function(event) {
                         if (event.lengthComputable) {
                             const percent = (event.loaded / event.total) * 100;
                             uploadStatus.textContent = `Uploading: ${Math.round(percent)}%`;
                         }
                     });

                     // On completion (either success or failure)
                     xhr.onload = function() {
                         if (xhr.status === 200) {
                             uploadStatus.textContent = 'Upload successful!';
                         } else {
                             uploadStatus.textContent = 'Error uploading the file.';
                         }
                     };

                     // Send the form data (file) to the server
                     xhr.send(formData);

                     // Show uploading status
                     uploadStatus.textContent = 'Uploading...';
                 });
     }







