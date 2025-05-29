// frontend/src/App.jsx
import React, { useState } from 'react';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
// import photos from "./mocks/photos";
// import topics from "./mocks/topics";

import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

import TopNavigation from './components/TopNavigation';
// Note: Rendering a single component to build components in isolation
//import PhotoList from './components/PhotoList';
//import TopicList from './components/TopicList';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">

      <TopNavigation
        topics={state.topicData}
        onTopicSelect={fetchPhotosByTopic}
      />

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
        closeModal={onClosePhotoDetailsModal} 
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={updateToFavPhotoIds} 
      />
      )}
    </div>
  );
};

export default App;