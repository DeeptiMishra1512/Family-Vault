window.onload = fetchAllPosts();

function fetchAllPosts() {
    const userId = "Deepti Mishra";
    const rightPanel = document.getElementById('right-panel');
    rightPanel.innerHTML = ""; // Clear existing content to avoid duplication

    // Add a loading message if the process
    const loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Loading posts...";
    loadingMessage.style.textAlign = "center";
    loadingMessage.style.color = "#666";
    rightPanel.appendChild(loadingMessage);

    fetch(`http://localhost:8081/getAllMediaByUserId?userId=${userId}`)
        .then(response => response.json())
        .then(data => {

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

            // Style the right panel
            rightPanel.style.cssText = `
                width: 100%;
                height: auto;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 20px;
            `;

            data.forEach(item => {
                const div = createPostElement(item, userId);
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

function createPostElement(item, userId) {
    const div = document.createElement("div");
    div.style.cssText = `
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        border: 1px solid #ccc;
        padding: 15px;
        border-radius: 8px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: #f9f9f9;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `;

    // User Container
    const userContainer = createUserContainer(item.userId);
    div.appendChild(userContainer);

// Description
     const description = document.createElement("label");
     description.textContent = item.description || "No description available";
     description.style.cssText = "font-size: 1rem; color: #555;";
     div.appendChild(description);

    // Media Element
    const mediaElement = createMediaElement(item);
    if (mediaElement) div.appendChild(mediaElement);

 // Upload Date
         const uploadDate = document.createElement("label");
         uploadDate.textContent = item.uploadDate;
         uploadDate.style.cssText = "font-size: 1rem; color: #555;";
         div.appendChild(uploadDate);

    // Fetch and display likes
    const LikeContainer = createLikeButton(item, userId);
    div.appendChild(LikeContainer);

    // Fetch and display comments
    fetchComments(item.mediaId, div);


    // Comment Section
    const commentContainer = createCommentSection(item.mediaId, userId);
    div.appendChild(commentContainer);


    return div;
}


function createUserContainer(userId) {
    const userContainer = document.createElement("div");
    userContainer.style.cssText = `
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    `;

    const userIcon = document.createElement("img");
    userIcon.src = "../logos/profileLogo.png";
    userIcon.alt = "User Icon";
    userIcon.style.cssText = `
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    `;

    const userLabel = document.createElement("label");
    userLabel.textContent = userId || "Anonymous User";
    userLabel.style.cssText = "font-size: 1rem; color: #333;";

    userContainer.appendChild(userIcon);
    userContainer.appendChild(userLabel);

    return userContainer;
}

// Function to format the date to MON-DD
function formatDate(dateString) {
    const date = new Date(dateString);

    // Get the month in short format (e.g., Jan, Feb, Mar)
    const options = { month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

function createMediaElement(item) {
    let mediaElement;

    if (item.type === "Video") {
        mediaElement = document.createElement("video");
        mediaElement.controls = true;
        mediaElement.style.cssText = `
            width: 100%;
           // height: auto;
            max-width: 800px;
            border-radius: 8px;
            margin-bottom: 10px;
            height: 400px; /* Fixed height */

        `;

        const source = document.createElement("source");
        source.src = item.filePath;
        source.type = "video/mp4";
        mediaElement.appendChild(source);
    } else if (item.type === "photo") {
        mediaElement = document.createElement("img");
        mediaElement.src = item.filePath;
        mediaElement.alt = item.title || "Image";
        mediaElement.style.cssText = `
            width: 100%;
         //   height: auto;
            max-width: 700px;
            border-radius: 8px;
            margin-bottom: 10px;
            height: 400px; /* Fixed height */
        `;
    }

    return mediaElement;
}

     /* ######## Fetch COMMENTS for Each Post ######### */
function fetchComments(mediaId, parentDiv) {
    fetch(`http://localhost:8081/getAllPostTrackerByMediaId?mediaId=${mediaId}`)
        .then(response => response.json())
        .then(commentsData => {
            if (commentsData.length > 0) {
                const commentsContainer = document.createElement("div");
                commentsContainer.style.marginTop = "10px";

                commentsData.forEach(commentItem => {
                    const commentDisplayContainer = document.createElement("div");
                    commentDisplayContainer.style.cssText = `
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 10px;
                    `;

                    const commentProfilePicture = document.createElement("img");
                    commentProfilePicture.src = "../logos/profileLogo.png";
                    commentProfilePicture.alt = "User Profile";
                    commentProfilePicture.style.cssText = `
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    `;

                    const commentDisplay = document.createElement("label");
                    commentDisplay.textContent = commentItem.comment || "No comment text available";
                    commentDisplay.style.cssText = "font-size: 1rem; color: #555;";

                    commentDisplayContainer.appendChild(commentProfilePicture);
                    commentDisplayContainer.appendChild(commentDisplay);
                    if(commentItem.comment !== null){
                    commentsContainer.appendChild(commentDisplayContainer);
                    }
                });

                parentDiv.appendChild(commentsContainer);
            }
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
        });
}

function createCommentSection(mediaId, userId) {
    const commentContainer = document.createElement("div");
    commentContainer.style.marginTop = "10px";

    const commentInput = document.createElement("textarea");
    commentInput.placeholder = "Write a comment...";
    commentInput.style.cssText = `
        width: 90%;
        height: 60px;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
    `;

    const commentSubmitButton = document.createElement("button");
    commentSubmitButton.textContent = "Submit Comment";
    commentSubmitButton.style.cssText = `
        padding: 10px 15px;
        border: none;
        background-color: #28a745;
        color: #fff;
        cursor: pointer;
        border-radius: 4px;
    `;

    commentSubmitButton.addEventListener("click", () => {
        const comment = commentInput.value;
        if (comment) {
            commentInput.value = ""; // Clear the text box
            const data = {
                mediaId,
                userId,
                likesCount: 0,
                comment,
                activityTime: Date.now(),
            };

            fetch('http://localhost:8081/savePostTracker', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(() => {
                    fetchAllPosts(); // Refresh posts
                })
                .catch(error => console.error('Error:', error));
        }
    });

    commentContainer.appendChild(commentInput);
    commentContainer.appendChild(commentSubmitButton);

    return commentContainer;
}

//Creating Likes Button and methods to fetch total likes and saving like each time user hits like Button.
function createLikeButton(item, userId) {
    const likeContainer = document.createElement("div");
    likeContainer.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    `;

    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.style.cssText = `
        padding: 10px 15px;
        border: none;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
        border-radius: 4px;
    `;

    const likeCount = document.createElement("span");
    likeCount.textContent = "Likes: 0"; // Default initial text
    likeCount.style.cssText = `
        font-size: 1rem;
        color: #555;
    `;

    // Fetch likes count from the API -----
        function fetchLikesCount(mediaId) {
            fetch(`http://localhost:8081/getAllPostLikesByMediaId?mediaId=${mediaId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch likes count');
                    }
                    return response.json();
                })
                .then(count => {
                    console.log('Fetched likes count:', count); // Debugging log
                    // Update the UI with the fetched likes count
                    likeCount.textContent = `Likes: ${count}`;
                })
                .catch(error => {
                    console.error('Error fetching likes count:', error);
                });
        }

        // Fetch the initial likes count when rendering the button
        fetchLikesCount(item.mediaId);

    likeButton.addEventListener("click", () => {
        const data = {
            mediaId: item.mediaId,
            userId,
            likes: 1, // Increment like count
            activityTime: Date.now(),
        };

//Save the likes count each time user hits the like button.
        fetch('http://localhost:8081/savePostLikes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(() => {
                // Refresh the like count after a successful like
                fetchLikesCount(item.mediaId);
            })
            .catch(error => console.error('Error saving like:', error));
    });

    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likeCount);

    return likeContainer;
}
