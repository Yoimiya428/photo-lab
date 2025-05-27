import React, { useState } from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = ({ photo, isFavorited, toggleFavourite, onPhotoClick }) => {

  const handleFavClick = () => toggleFavourite(photo.id);

  return (
    
    <div className="photo-list__item">

      <div className="photo-list__fav-button-container">
        <PhotoFavButton isFavorited={isFavorited} onClick={handleFavClick} />
      </div>

      
      <img 
        className="photo-list__image" 
        src={photo.urls.regular} 
        alt={photo.alt_description} 

        onClick={() => onPhotoClick(photo)}

        
      />
      
      

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
      
      
    </div>
  );
};


export default PhotoListItem;
