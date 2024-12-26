//################## Fetch User Name to display under profile picture #####################//
        function fetchUserProfile(userId) {
            fetch('http://localhost:8080/GetUserProfile?userId=deepti15')
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch user profile");
                    }
                    return response.json();
                })
                .then(profile => {
                    // Display the user's name under the profile picture
                    const userNameElement = document.createElement("p");
                    userNameElement.textContent = profile.name || "Anonymous User";
                    userNameElement.style.fontSize = "1rem";
                    userNameElement.style.color = "#333";
                    userNameElement.style.textAlign = "center";
                    userNameElement.style.marginTop = "5px";

                    const zipLink = document.querySelector(".zip-link");
                    zipLink.appendChild(userNameElement);

                    // Optional: Use profilePictureUrl if you have profile images
                    const profileImage = zipLink.querySelector("img");
                    if (profile.profilePictureUrl) {
                        profileImage.src = profile.profilePictureUrl;
                    }
                })
                .catch(error => {
                    console.error("Error fetching user profile:", error);
                });


        // Call the function with the user's ID
        const userId = "deepti15"; // Replace with dynamic userId as needed
        fetchUserProfile(userId);

}