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


  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };


  const similarPhotos = photos.filter(p => p.id !== selectedPhoto?.id);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        onPhotoClick={openModal}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={closeModal}
          similarPhotos={similarPhotos}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
          onPhotoClick={openModal}
        />
      )}
    </div>
  );
};

export default App;
