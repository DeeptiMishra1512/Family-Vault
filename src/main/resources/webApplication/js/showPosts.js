
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


//      function myFunction() {
//                    //create a div element
//                    var div = document.createElement("div");
//                    //create an image element
//                    var img = document.createElement("img");
//                    //add image src property
//                    img.src="../logos/First Post.png";
//                    //append div as a child to body
//                    document.getElementById('result').appendChild(div);
//                    //append image as a child to div
//                    div.appendChild(img);
//                  }






