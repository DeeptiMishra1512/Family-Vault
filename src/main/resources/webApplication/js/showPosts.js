window.onload = fetchAllPosts();


//     function fetchData() {
//         fetch('http://localhost:8080/getMedia?mediaId=MD001')
//             .then(response => response.json())
//             .then(data => {
//                 // Create a div element
//                 var div = document.createElement("div");
//                 // Create an image element
//                 var img = document.createElement("img");
//                 // Set width and height
//                 div.style.width = "200px"; // Set width to 200 pixels
//                 div.style.height = "150px"; // Set height to 150 pixels
//
//                 var text = document.createElement("label");
//                 document.getElementById('right-panel').style.width = "150px"; // Set width to 200 pixels
//                 document.getElementById('right-panel').style.height = "600px"; // Set height to 150 pixels
//
//                 text.textContent = " "
//                 // Add image src property
//                 img.src = data.filePath;
//                 // Append div as a child to #result
//                 document.getElementById('right-panel').appendChild(div);
//                 // Append image as a child to the div
//                 div.appendChild(text);
//                 div.appendChild(img);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }

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

                // Dynamically create media element (video or image)
                let mediaElement;
                if (item.type === "Video") {
                    // Create video element
                    mediaElement = document.createElement("video");
                    mediaElement.controls = true;
                    mediaElement.style.width = "100%";
                    mediaElement.style.height = "auto";
                    mediaElement.style.maxWidth = "800px";
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

                // Description
                const description = document.createElement("label");
                description.textContent = item.description || "No description available";
                description.style.fontSize = "1rem";
                description.style.color = "#555";

                // Date
                const uploadDate = document.createElement("label");
                uploadDate.textContent = item.uploadDate;
                uploadDate.style.fontSize = "1rem";
                uploadDate.style.color = "#555";

                // Append all elements to the div
                div.appendChild(userContainer);
                if (mediaElement) {
                    div.appendChild(mediaElement);
                }
                div.appendChild(description);
                div.appendChild(uploadDate);

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








