import { useState, useReducer, useEffect} from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';
import axios from 'axios';

export const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  TOGGLE_FAV_PHOTO: "TOGGLE_FAV_PHOTO",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL"
};

const initialState = {
  photos: [],          
  topics: [],          
  topicData: [],       
  favouritePhotos: [],
  selectedPhoto: null,
  similarPhotos: [] 
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { 
        ...state, 
        photos: action.payload,       
        photoData: action.payload 
      };
    
    case ACTIONS.SET_TOPIC_DATA:
      return { 
        ...state, 
        topics: action.payload,      
        topicData: action.payload 
      };

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
      return {
        ...state, 
        selectedPhoto: action.payload,
        similarPhotos: []  
      };


    case ACTIONS.CLOSE_MODAL:
      return {
         ...state, 
         selectedPhoto: null,
         similarPhotos: [] 
        };


    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:8001/api/photos")
      .then(res => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
      })
      .catch(err => console.error("Error fetching photos:", err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8001/api/topics")
      .then(res => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res.data });
      })
      .catch(err => console.error("Error fetching topics:", err));
  }, []);

  const updateToFavPhotoIds = (id) => {    
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, payload: { id } });
  };

  const setPhotoSelected = (photo) => {    
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo });

    // if (photo && photo.id) {
    //   fetchSimilarPhotos(photo.id);
    // }
  };

  const onClosePhotoDetailsModal = () => { 
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const GET_PHOTOS_BY_TOPICS = (topic_id) => {
    axios.get(`http://localhost:8001/api/topics/${topic_id}/photos`)
    .then((res) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
    })
    .catch((err) => {
      console.error("Error fetching topic photos:", err);
    });
  };

  // const fetchSimilarPhotos = (photo_id) => {

  //   axios.get(`http://localhost:8001/api/photos/${photo_id}/similar`)
  //     .then(res => {
  //       dispatch({ type: ACTIONS.SET_SIMILAR_PHOTOS, payload: res.data });
  //     })
  //   };
    
    
  return {
    state,
    updateToFavPhotoIds,        
    setPhotoSelected,           
    onClosePhotoDetailsModal,   
    GET_PHOTOS_BY_TOPICS
  };
};

export default useApplicationData;