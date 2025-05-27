import React from 'react';
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';




const PhotoList = ({ photos, favouritePhotos, toggleFavourite, onPhotoClick }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorited={favouritePhotos.includes(photo.id)}
          toggleFavourite={toggleFavourite}

          onPhotoClick={onPhotoClick}
        />
      ))}
    </div>
  );
};

export default PhotoList;
