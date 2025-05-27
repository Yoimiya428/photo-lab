// import '../styles/PhotoDetailsModal.scss'
// import closeSymbol from '../assets/closeSymbol.svg';

// const PhotoDetailsModal = () => {
//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button">
//         <img src={closeSymbol} alt="close symbol" />
//       </button>
//     </div>
//   )
// };

// export default PhotoDetailsModal;


import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

import React from "react";

const PhotoDetailsModal = ({ photo, onClose, similarPhotos, favouritePhotos, toggleFavourite, onPhotoClick }) => {
  if (!photo) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          alt={photo.alt_description}
        />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
            alt={`${photo.user.name}'s profile`}
          />
          <div className="photo-details-modal__photographer-info">
            <span>{photo.user.name}</span>
            <span className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </span>
          </div>
        </div>
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