import { useState } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: photos,
    topics: topics,
    favouritePhotos: [],
    selectedPhoto: null,
  });

  const updateToFavPhotoIds = (photoId) => {
    setState((prevState) => {
      const isFavourited = prevState.favouritePhotos.includes(photoId);
      const updatedFavourites = isFavourited
        ? prevState.favouritePhotos.filter(id => id !== photoId)
        : [...prevState.favouritePhotos, photoId];

      return {
        ...prevState,
        favouritePhotos: updatedFavourites
      };
    });
  };

  const setPhotoSelected = (photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photo
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: null
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
