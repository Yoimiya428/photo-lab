import '../styles/HomeRoute.scss';
import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favouritePhotos, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={favouritePhotos.length > 0} topics={topics} />
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};


export default HomeRoute;
