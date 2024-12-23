window.onload = fetchAllPosts();

function fetchAllPosts() {
    const userId = "deepti15";

    const rightPanel = document.getElementById('right-panel');
    rightPanel.innerHTML = ""; // Clear existing content to avoid duplication

    // Add a loading message or spinner
    const loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Loading posts...";
    loadingMessage.style.textAlign = "center";
    loadingMessage.style.color = "#666";
    rightPanel.appendChild(loadingMessage);

    fetch(`http://localhost:8080/getAllMediaByUserId?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            // Clear the loading message
            rightPanel.innerHTML = "";

            // Handle case where no posts are returned
            if (data.length === 0) {
                const noPostsMessage = document.createElement("p");
                noPostsMessage.textContent = "No posts available.";
                noPostsMessage.style.textAlign = "center";
                noPostsMessage.style.color = "#999";
                rightPanel.appendChild(noPostsMessage);
                return;
            }

            // Add styles and populate the right panel
            rightPanel.style.width = "100%";
            rightPanel.style.height = "auto";
            rightPanel.style.overflowY = "auto";
            rightPanel.style.display = "flex";
            rightPanel.style.flexDirection = "column";
            rightPanel.style.gap = "20px";

            data.forEach(item => {
                const div = document.createElement("div");
                div.style.width = "100%";
                div.style.maxWidth = "900px";
                div.style.margin = "0 auto";
                div.style.border = "1px solid #ccc";
                div.style.padding = "15px";
                div.style.borderRadius = "8px";
                div.style.boxSizing = "border-box";
                div.style.display = "flex";
                div.style.flexDirection = "column";
                div.style.backgroundColor = "#f9f9f9";
                div.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

                // User Container
                const userContainer = document.createElement("div");
                userContainer.style.display = "flex";
                userContainer.style.alignItems = "center";
                userContainer.style.marginBottom = "10px";

                const userIcon = document.createElement("img");
                userIcon.src = "../logos/UserImage.png";
                userIcon.alt = "User Icon";
                userIcon.style.width = "40px";
                userIcon.style.height = "40px";
                userIcon.style.borderRadius = "50%";
                userIcon.style.marginRight = "10px";

                const userLabel = document.createElement("label");
                userLabel.textContent = item.userId || "Anonymous User";
                userLabel.style.fontSize = "1rem";
                userLabel.style.color = "#333";

                userContainer.appendChild(userIcon);
                userContainer.appendChild(userLabel);

                //############ Dynamically create media element (video or image) #################//
                let mediaElement;
                if (item.type === "Video") {
                    // Create video element
                    mediaElement = document.createElement("video");
                    mediaElement.controls = true;
                    mediaElement.style.width = "100%";
                    mediaElement.style.height = "auto";
                    mediaElement.style.maxWidth = "600px";
                    mediaElement.style.borderRadius = "8px";
                    mediaElement.style.marginBottom = "10px";

                    const source = document.createElement("source");
                    source.src = item.filePath;
                    source.type = "video/mp4"; // Use the correct media type
                    mediaElement.appendChild(source);
                } else if (item.type === "photo") {
                    // Create image element
                    mediaElement = document.createElement("img");
                    mediaElement.src = item.filePath;
                    mediaElement.alt = item.title || "Image";
                    mediaElement.style.width = "100%";
                    mediaElement.style.height = "auto";
                    mediaElement.style.maxWidth = "800px";
                    mediaElement.style.borderRadius = "8px";
                    mediaElement.style.marginBottom = "10px";
                }

                //################## Description #######################//
                const description = document.createElement("label");
                description.textContent = item.description || "No description available";
                description.style.fontSize = "1rem";
                description.style.color = "#555";

                //#################### Date ##########################//
                const uploadDate = document.createElement("label");
                uploadDate.textContent = item.uploadDate;
                uploadDate.style.fontSize = "1rem";
                uploadDate.style.color = "#555";


               // Fetch existing comments against media
               fetch(`http://localhost:8080/getAllPostTrackerByMediaId?mediaId=${item.mediaId}`)
                   .then(response => response.json())
                   .then(commentsData => {
                       // Check if there are any comments
                       if (commentsData.length > 0) {
                           // Container for existing comments
                           const commentsContainer = document.createElement("div");
                           commentsContainer.style.marginTop = "10px";

                           commentsData.forEach(commentItem => {
                               // Container for each comment with profile picture and comment text
                               const commentDisplayContainer = document.createElement("div");
                               commentDisplayContainer.style.display = "flex";
                               commentDisplayContainer.style.alignItems = "center";
                               commentDisplayContainer.style.gap = "10px";
                               commentDisplayContainer.style.marginBottom = "10px";

                               // Comment profile picture
                               const commentProfilePicture = document.createElement("img");
                               commentProfilePicture.src = "../logos/profileLogo.png"; // Update path as needed
                               commentProfilePicture.alt = "User Profile";
                               commentProfilePicture.style.width = "40px";
                               commentProfilePicture.style.height = "40px";
                               commentProfilePicture.style.borderRadius = "50%";

                               // Comment text
                               const commentDisplay = document.createElement("label");
                               commentDisplay.textContent = commentItem.comment || "No comment text available";
                               commentDisplay.style.fontSize = "1rem";
                               commentDisplay.style.color = "#555";

                               // Append profile picture and comment text to the container
                               commentDisplayContainer.appendChild(commentProfilePicture);
                               commentDisplayContainer.appendChild(commentDisplay);

                               // Append the comment display container to the comments container
                               commentsContainer.appendChild(commentDisplayContainer);
                           });

                           // Append the comments container to the main div
                           div.appendChild(commentsContainer);
                       }
                   })
                   .catch(error => {
                       console.error('Error fetching comments:', error);
                   });

                //################## Comment Section ####################//
                //Comment Display field //
                 const commentDisplay = document.createElement("label");

                 const commentContainer = document.createElement("div");
                 commentContainer.style.marginTop = "10px";

                 const commentInput = document.createElement("textarea");
                 commentInput.placeholder = "Write a comment...";
                 commentInput.style.width = "90%";
                 commentInput.style.height = "60px";
                 commentInput.style.marginBottom = "10px";
                 commentInput.style.padding = "10px";
                 commentInput.style.borderRadius = "4px";
                 commentInput.style.border = "1px solid #ccc";

                 const commentSubmitButton = document.createElement("button");
                 commentSubmitButton.textContent = "Submit Comment";
                 commentSubmitButton.style.padding = "10px 15px";
                 commentSubmitButton.style.border = "none";
                 commentSubmitButton.style.backgroundColor = "#28a745";
                 commentSubmitButton.style.color = "#fff";
                 commentSubmitButton.style.cursor = "pointer";
                 commentSubmitButton.style.borderRadius = "4px";

                 commentSubmitButton.addEventListener("click", function () {
                 const comment = commentInput.value;
                      if (comment) {
                           // Clear the text box immediately
                           commentInput.value = "";
                           const data = {
                             mediaId: item.mediaId,
                             userId: userId,
                             likesCount: 0,
                             comment: comment,
                             activityTime: Date.now()
                           };

                           fetch('http://localhost:8080/savePostTracker', {
                             method: 'POST',
                             headers: {
                               'Content-Type': 'application/json'
                             },
                             body: JSON.stringify(data)
                           })
                           .then(response => response.json())
                           .then(data => {
                             //################## Comments display #######################//
                                //refresh the screen to show the latest comments
                               fetchAllPosts()

                             console.log('Success:', data);
                           })
                           .catch(error => {
                             console.error('Error:', error);
                           });

                          }
                      });

                 commentContainer.appendChild(commentInput);
                 commentContainer.appendChild(commentSubmitButton);

                //################## Append all elements to the div ################//
                div.appendChild(userContainer);
                if (mediaElement) {
                    div.appendChild(mediaElement);
                }
                div.appendChild(description);
                div.appendChild(uploadDate);
                // Container for profile picture and comment display
                const commentDisplayContainer = document.createElement("div");
                commentDisplayContainer.style.display = "flex";
                commentDisplayContainer.style.alignItems = "center";
                commentDisplayContainer.style.gap = "10px";
                commentDisplayContainer.style.marginTop = "10px";
                commentDisplayContainer.appendChild(commentDisplay);

                // Append the container to the main div
                div.appendChild(commentDisplayContainer);

                div.appendChild(commentContainer);


                // Append the div to the right panel
                rightPanel.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);

            // Show error message
            rightPanel.innerHTML = "";
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Failed to load posts. Please try again later.";
            errorMessage.style.textAlign = "center";
            errorMessage.style.color = "red";
            rightPanel.appendChild(errorMessage);
        });
}








