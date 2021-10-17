import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/imageGalleryItem.module.css';

export default function GalleryItem({ image, onImageClick }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={s.ImageGalleryItem_image}
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
