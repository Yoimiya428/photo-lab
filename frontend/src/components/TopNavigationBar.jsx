import '../styles/TopNavigationBar.scss'
import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ isFavPhotoExist, topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      <TopicList topics={topics} onTopicSelect={onTopicSelect} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />

      
    </div>
  );
};

export default TopNavigation;
