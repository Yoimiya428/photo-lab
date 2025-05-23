import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo }) => {
  const { imageSource, username, profile, location } = photo;

  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`${username}'s photo`} className="photo" />
      <div className="photo-details">
        <img src={profile} alt={`${username}'s profile`} className="profile" />
        <div className="info">
          <h3>{username}</h3>
          <p>{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
