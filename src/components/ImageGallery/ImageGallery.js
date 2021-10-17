import PropTypes from 'prop-types';
import GalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data, onImageClick }) => {
  <ul className="ImageGallery">
    {data.map(el => {
      return <GalleryItem key={el.id} image={el} onImageClick={onImageClick} />;
    })}
  </ul>;
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })),
  onImageClick: PropTypes.func,
};

export default ImageGallery;
