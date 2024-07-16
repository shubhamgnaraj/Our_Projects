import React, { useState } from 'react';

const PhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(image);
    }
  };

  return (
    <div className="photo-upload">
      <button onClick={() => document.getElementById('fileInput').click()}>
        Add Photo
      </button>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" style={{ width: '300px', height: '300px' }} />
          <p>Image selected!</p>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;