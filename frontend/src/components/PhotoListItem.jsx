import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ imageSource, username, profile, location }) => {
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`${username}'s photo`} className="photo-list__image" />
      
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        
        <div className="photo-list__user-info">
          <h3 className="photo-list__user-name">{username}</h3>
          <p className="photo-list__location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};



export default PhotoListItem;
