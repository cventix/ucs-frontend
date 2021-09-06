import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { type, className, text, handleClick } = props;
  return (
    <button className={className} type={type} onClick={handleClick}>
      {text}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  type: 'button',
  className: '',
  text: 'ok',
  handleClick: () => {},
};
export default Button;
