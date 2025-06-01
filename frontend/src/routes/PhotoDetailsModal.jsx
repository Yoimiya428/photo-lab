

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from "../components/PhotoFavButton";

import React from "react";

const PhotoDetailsModal = ({ photo, closeModal, similarPhotos, favouritePhotos, toggleFavourite, onPhotoClick }) => {
  if (!photo) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image-container">
          <div className="photo-details-modal__fav-button">
            <PhotoFavButton
              isFavorited={favouritePhotos.includes(photo.id)}
              onClick={() => {
                console.log(`Toggling favourite for photo ID: ${photo.id}`);
                toggleFavourite(photo.id);
              }}
            />
          </div>

          <img
            className="photo-details-modal__image"
            src={photo.urls.full}
            alt={photo.alt_description}
          />
        </div>

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
            alt={`${photo.user.name}'s profile`}
          />

          <div className="photo-details-modal__photographer-info">
            <span>{photo.user.name}</span>
            {photo.location && (
              <div className="photo-details-modal__photographer-location">
                <span>{photo.location.city}, {photo.location.country}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="photo-details-modal__header">
        Similar Photos
      </div>

      <div className="photo-details-modal__images">
        <PhotoList
          photos={similarPhotos}
          favouritePhotos={favouritePhotos}
          toggleFavourite={toggleFavourite}
          onPhotoClick={onPhotoClick}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;