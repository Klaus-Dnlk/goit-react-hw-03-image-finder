import PropTypes from 'prop-types';
import s from '../Button/button.module.css';

const Button = ({ onClick }) => {
  return (
    <div>
      <button type="button" className={s.Button} onClick={onClick}>
        Load more images
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
