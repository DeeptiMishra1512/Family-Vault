window.onload = fetchProfileData;

function fetchProfileData() {
    fetch('http://localhost:8080/GetUserProfile?userId=deepti15')
        .then(response => response.json())
        .then(data => {
            const rightPanel = document.getElementById('right-panel');

            // Set styles for the right panel
            rightPanel.style.width = "300px";
            rightPanel.style.height = "auto";
            rightPanel.style.padding = "15px";
            rightPanel.style.border = "1px solid #ccc";
            rightPanel.style.borderRadius = "8px";
            rightPanel.style.backgroundColor = "#f9f9f9";
            rightPanel.style.fontFamily = "'Arial', sans-serif";

            // Create a container div for the profile data
            const div = document.createElement("div");
            div.style.display = "flex";
            div.style.flexDirection = "column";
            div.style.gap = "10px"; // Space between labels

            // Helper function to create a styled label-value pair
            function createLabelValue(labelText, valueText) {
                const container = document.createElement("div");
                container.style.display = "flex";
                container.style.justifyContent = " ";
                container.style.borderBottom = "1px solid #ddd";
                container.style.padding = "5px 0";

                const label = document.createElement("label");
                label.textContent = labelText;
                label.style.fontWeight = "bold";
                label.style.marginRight = "10px";

                const value = document.createElement("span");
                value.textContent = valueText;
                value.style.color = "#333";

                container.appendChild(label);
                container.appendChild(value);
                return container;
            }

            // Add each label-value pair to the container div
            div.appendChild(createLabelValue("First Name:", data.firstName));
            div.appendChild(createLabelValue("Last Name:", data.lastName));
            div.appendChild(createLabelValue("Birth Date:", data.birthDate));

            // Append the container div to the right panel
            rightPanel.appendChild(div);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });



}
