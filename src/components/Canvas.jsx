import React, { useState, useEffect } from "react";
import axios from "axios";
import { createCanvas } from "canvas";

function ImageModificationComponent() {
  const [imageData, setImageData] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  useEffect(() => {
    // Set the content type and other request headers for the GET request
    const config = {
      headers: {
        "Content-Type": "image/jpeg",
        Authorization: "Bearer your-api-key",
      },
    };

    // Send the GET request to the API endpoint
    axios
      .get("https://api.example.com/get-image", config)
      .then((response) => {
        // Retrieve the image data from the response and set it in state
        setImageData(response.data);
      })
      .catch((error) => {
        console.log("Failed to retrieve image:", error);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    // Use canvas to manipulate the image data
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageData, 0, 0, 200, 200);

    // Set the content type and other request headers for the POST request
    const config = {
      headers: {
        "Content-Type": "image/jpeg",
        Authorization: "Bearer your-api-key",
      },
    };

    // Send the POST request to the API endpoint, including the modified image data in the body
    axios
      .post("https://api.example.com/upload-image", canvas.toBuffer(), config)
      .then((response) => {
        setUploadStatus("Success");
      })
      .catch((error) => {
        setUploadStatus("Error");
        console.log("Failed to upload image:", error);
      });
  }

  return (
    <div>
      {imageData && <img src={imageData} alt="Retrieved image" />}
      <form onSubmit={handleSubmit}>
        <button type="submit">Modify and Upload Image</button>
      </form>
      {uploadStatus === "Success" && <p>Image was successfully uploaded</p>}
      {uploadStatus === "Error" && (
        <p>An error occurred while uploading the image</p>
      )}
    </div>
  );
}

export default ImageModificationComponent;
