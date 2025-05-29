import { useState, useReducer, useEffect} from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

//new imported
import axios from "axios";


export const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  TOGGLE_FAV_PHOTO: "TOGGLE_FAV_PHOTO",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL"
};


const initialState = {
  photoData: [],
  topicData: [],
  favouritePhotos: [],
  selectedPhoto: null
};

const reducer = (state, action) => {
  switch (action.type) {
    
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    
      case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.TOGGLE_FAV_PHOTO:
      const { id } = action.payload;
      const isFavourite = state.favouritePhotos.includes(id);
    
      return {
        ...state,
        favouritePhotos: isFavourite
          ? state.favouritePhotos.filter(photoId => photoId !== id)
          : [...state.favouritePhotos, id]
      };
    case ACTIONS.SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, selectedPhoto: null };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    axios.get("/api/photos")
      .then(res => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
      })
      .catch(err => console.error("Error fetching photos:", err));
  }, []);


  useEffect(() => {
    axios.get("/api/topics")
      .then(res => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res.data });
      })
      .catch(err => console.error("Error fetching topics:", err));
  }, []);


  const toggleFavPhoto = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, payload: { id } });
  };

  const setSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    state,
    toggleFavPhoto,
    setSelectedPhoto,
    closeModal
  };
};



export default useApplicationData;