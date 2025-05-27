import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';
//import React from "react";

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}
         selected={!!isFavPhotoExist} 

      />

      
    </div>
  ) 
};

export default FavBadge;
