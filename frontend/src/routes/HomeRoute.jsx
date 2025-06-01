import '../styles/HomeRoute.scss';
import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


const HomeRoute = ({ photos, topics, favouritePhotos, toggleFavourite,  onPhotoClick }) => {
  return (
    <div className="home-route">

      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        onPhotoClick={onPhotoClick} 
      />
    </div>
  );
};

export default HomeRoute;
