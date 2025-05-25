import React, { useState } from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, isFavorited, toggleFavourite }) => {
  const handleClick = () => toggleFavourite(photo.id);

  return (
    <div className="photo-list__item">
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <PhotoFavButton isFavorited={isFavorited} onClick={handleClick} />
    </div>
  );
};


export default PhotoListItem;
