import PropTypes from 'prop-types';

function Button({ type, className, children, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: 'btn btn-primary'
}

Button.prototype = {
  onClick: PropTypes.func.isRequired,
}

export default Button;