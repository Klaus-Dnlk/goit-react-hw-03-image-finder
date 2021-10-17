import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  <div>
    <button type="button" onClick={onClick}>
      Load more
    </button>
  </div>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
