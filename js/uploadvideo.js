document.getElementById("uploadButton").addEventListener("click", function () {
    const videoElement = document.getElementById("recordedVideo");

    if (!videoElement.src) {
        alert("No video to upload");
        return;
    }

    // Get the video file from the video element
    const videoFile = videoElement.src;

    // Get the session token from localStorage
    const sessionToken = localStorage.getItem("session_id");

    // if (!sessionToken) {
    //     alert("Session token not found. Please log in.");
    //     return;
    // }

    // Create a FormData object to send the file and headers
    const formData = new FormData();
    formData.append("video", videoFile);

    // Define the API endpoint
    const apiUrl = "https://api.dreampotential.org/storage/video-upload/";

    // Make a fetch request to upload the video with error handling
    fetch(apiUrl, {
        method: "POST",
        body: formData,
        // headers: {
        //     "Authorization": "Token " + sessionToken
        // }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Assuming the server returns JSON data on success
        } else {
            throw new Error("Failed to upload video");
        }
    })
    .then(data => {
        alert("Video uploaded successfully");
        console.log(data); // Log the response data from the server
    })
    .catch(error => {
        alert("An error occurred: " + error.message);
        console.error(error); // Log the error for debugging
    });
});
