// frontend/src/App.jsx
import React, { useState } from 'react';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from "./mocks/photos";
import topics from "./mocks/topics";


// Note: Rendering a single component to build components in isolation


const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    setFavouritePhotos((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;
