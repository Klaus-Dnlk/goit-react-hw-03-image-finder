import PropTypes from 'prop-types';

export default function GalleryItem({ image, onImageClick }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={() => onImageClick(image.largeImageURL)}
      />
    </li>
  );
}

GalleryItem.propType = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func,
};
