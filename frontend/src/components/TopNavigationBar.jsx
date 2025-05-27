import '../styles/TopNavigationBar.scss'
import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ isFavPhotoExist, topics }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />

      <FavBadge isFavPhotoExist={isFavPhotoExist} />

      
    </div>
  );
};

export default TopNavigation;
