//################## Fetch User Name to display under profile picture #####################//
        function fetchUserProfile(userId) {
            fetch('http://localhost:8081/GetUserProfile?userId=Deepti Mishra')
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

                    const profileImage = zipLink.querySelector("img");
                    if (profile.profilePictureUrl) {
                        profileImage.src = profile.profilePictureUrl;
                    }
                })
                .catch(error => {
                    console.error("Error fetching user profile:", error);
                });


        // Call the function with the user's ID
        const userId = "Deepti Mishra";
        fetchUserProfile(userId);

}