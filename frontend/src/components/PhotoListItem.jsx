import React, { useState } from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = ({ photo, isFavorited, toggleFavourite }) => {
  const handleClick = () => toggleFavourite(photo.id);

  return (
    <div className="photo-list__item">
      {/* Main photo with proper class name */}
      <img 
        className="photo-list__image" 
        src={photo.urls.regular} 
        alt={photo.alt_description} 
      />
      
      {/* User details section - this was missing! */}
      <div className="photo-list__user-details">
        <img 
          className="photo-list__user-profile"
          src={photo.user.profile} 
          alt={`${photo.user.name} profile`}
        />
        <div className="photo-list__user-info">
          <div>{photo.user.name}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
      
      {/* Favorite button */}
      <PhotoFavButton isFavorited={isFavorited} onClick={handleClick} />
    </div>
  );
};


export default PhotoListItem;
