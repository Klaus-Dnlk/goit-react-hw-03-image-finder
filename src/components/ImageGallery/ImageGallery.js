import PropTypes from 'prop-types';
import GalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from '../ImageGallery/imageGallery.module.css';

const ImageGallery = ({ data, onImageClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {data.map(el => {
        return (
          <GalleryItem key={el.id} image={el} onImageClick={onImageClick} />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })),
  onImageClick: PropTypes.func,
};

export default ImageGallery;
