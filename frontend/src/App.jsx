// frontend/src/App.jsx
import React, { useState } from 'react';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
// import photos from "./mocks/photos";
// import topics from "./mocks/topics";

import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

import TopNavigation from './components/TopNavigationBar';
// Note: Rendering a single component to build components in isolation
//import PhotoList from './components/PhotoList';
//import TopicList from './components/TopicList';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    GET_PHOTOS_BY_TOPICS
  } = useApplicationData();

  return (
    <div className="App">

      <TopNavigation
        topics={state.topicData}
        isFavPhotoExist={state.favouritePhotos.length > 0}
        onTopicSelect={GET_PHOTOS_BY_TOPICS}

   
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
        onPhotoClick={setPhotoSelected}
        similarPhotos={state.selectedPhoto.similar_photos || []} 
      />
      )}
    </div>
  );
};

export default App;