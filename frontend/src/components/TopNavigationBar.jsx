import '../styles/TopNavigationBar.scss'
import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      {/* Topics section */}
      <TopicList />

      {/* Favorite Badge section */}
      <FavBadge isFavorited={true} />
    </div>
  );
};

export default TopNavigation;
