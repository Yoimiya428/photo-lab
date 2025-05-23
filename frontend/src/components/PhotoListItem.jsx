import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { imageSource, username, profile, location } = props;

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
