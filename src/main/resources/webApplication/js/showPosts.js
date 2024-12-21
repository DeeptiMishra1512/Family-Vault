
     function fetchData() {
         fetch('http://localhost:8080/getMedia?mediaId=MD001')
             .then(response => response.json())
             .then(data => {
                 // Create a div element
                 var div = document.createElement("div");
                 // Create an image element
                 var img = document.createElement("img");
                 // Set width and height
                 div.style.width = "200px"; // Set width to 200 pixels
                 div.style.height = "150px"; // Set height to 150 pixels

                 var text = document.createElement("label");
                 document.getElementById('right-panel').style.width = "150px"; // Set width to 200 pixels
                 document.getElementById('right-panel').style.height = "600px"; // Set height to 150 pixels

                 text.textContent = " "
                 // Add image src property
                 img.src = data.filePath;
                 // Append div as a child to #result
                 document.getElementById('right-panel').appendChild(div);
                 // Append image as a child to the div
                 div.appendChild(text);
                 div.appendChild(img);
             })
             .catch(error => {
                 console.error('Error fetching data:', error);
             });
     }

function fetchAllPosts() {
       const userId = "deepti15";
       fetch(`http://localhost:8080/getAllMediaByUserId?userId=${userId}`)
           .then(response => response.json())
           .then(data => {
               const rightPanel = document.getElementById('right-panel');

               // Set the styles for the right panel
               rightPanel.style.width = "100%";
               rightPanel.style.height = "auto";
               rightPanel.style.overflowY = "auto"; // Enable vertical scrolling if content overflows
               rightPanel.style.display = "flex";
               rightPanel.style.flexDirection = "column"; // Arrange items vertically
               rightPanel.style.gap = "20px"; // Add spacing between items

               // Loop through the list of data
               data.forEach(item => {
                   // Create a div element for each record
                   const div = document.createElement("div");
                   div.style.width = "100%";
                   div.style.maxWidth = "1500px"; // Optional: Limit the width of each post
                   div.style.margin = "0 auto"; // Center the post horizontally
                   div.style.border = "1px solid #ccc"; // Add a border
                   div.style.padding = "10px";
                   div.style.boxSizing = "border-box";
                   div.style.display = "flex";
                   div.style.flexDirection = "column"; // Arrange items vertically
                   div.style.alignItems = "flex-start"; // Left-align content
                   div.style.backgroundColor = "#f9f9f9"; // Optional: Add a background color

                   // Create a container for the user icon and label
                   const userContainer = document.createElement("div");
                   userContainer.style.display = "flex";
                   userContainer.style.alignItems = "center";
                   userContainer.style.marginBottom = "10px";

                   // Create a user icon element
                   const userIcon = document.createElement("img");
                   userIcon.src = "../logos/UserImage.png"; // Replace with actual user icon URL
                   userIcon.alt = "User Icon";
                   userIcon.style.width = "40px";
                   userIcon.style.height = "40px";
                   userIcon.style.borderRadius = "50%"; // Make the icon circular
                   userIcon.style.marginRight = "10px"; // Add spacing between icon and label

                   // Create a label for the user
                   const userLabel = document.createElement("label");
                   userLabel.textContent = item.userId || "Anonymous User"; // Use userId or fallback
                   userLabel.style.textAlign = "left";
                   userLabel.style.fontSize = "1rem";

                   // Append user icon and label to the user container
                   userContainer.appendChild(userIcon);
                   userContainer.appendChild(userLabel);

                   // Create a label for text
                   const text = document.createElement("label");
                   text.textContent = item.description || "No description available"; // Use 'description' property or fallback
                   text.style.textAlign = "left";
                   text.style.fontSize = "1rem";
                   text.style.marginTop = "10px";

                   // Create an image element
                   const img = document.createElement("img");
                   img.src = item.filePath;
                   img.alt = item.title || "Image";
                   img.style.width = "100%"; // Make the image fill the div's width
                   img.style.height = "auto"; // Maintain aspect ratio
                   img.style.maxWidth = "700px"; // Optional: Limit max image size
                   img.style.borderRadius = "8px"; // Optional: Add rounded corners for the image

                   // Append user container, image, and text to the div
                   div.appendChild(userContainer);
                   div.appendChild(img);
                   div.appendChild(text);

                   // Append the div to the right panel
                   rightPanel.appendChild(div);
               });
           })
           .catch(error => {
               console.error('Error fetching data:', error);
           });

     }







