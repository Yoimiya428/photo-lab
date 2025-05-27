// import '../styles/PhotoDetailsModal.scss'
// import closeSymbol from '../assets/closeSymbol.svg';

// const PhotoDetailsModal = () => {
//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button">
//         <img src={closeSymbol} alt="close symbol" />
//       </button>
//     </div>
//   )
// };

// export default PhotoDetailsModal;


import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose }) => {
  console.log("Photo data:", photo);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={onClose}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;