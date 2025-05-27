// frontend/src/App.jsx
import React, { useState } from 'react';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
// import photos from "./mocks/photos";
// import topics from "./mocks/topics";

import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
//import PhotoList from './components/PhotoList';
//import TopicList from './components/TopicList';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
      />

      {state.selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          favouritePhotos={state.favouritePhotos}
          toggleFavourite={updateToFavPhotoIds}
          onPhotoClick={setPhotoSelected}
          similarPhotos={state.photos.filter(
            (p) =>
              p.id !== state.selectedPhoto.id &&
              p.topic === state.selectedPhoto.topic
          )}
        />
      )}
    </div>
  );
};

export default App;