// frontend/src/App.jsx
import React, { useState } from 'react';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from "./mocks/photos";
import topics from "./mocks/topics";

import PhotoDetailsModal from './routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation


const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    setFavouritePhotos((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => setSelectedPhoto(null);


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
      />
      
      {selectedPhoto && <PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} />}
    </div>
  );
};

export default App;
