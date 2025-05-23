// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = ({ isFavorited, onClick }) => (
  <div className="photo-list__fav-icon" onClick={onClick}>
    <FavIcon selected={isFavorited} />
  </div>
);

export default PhotoFavButton;
