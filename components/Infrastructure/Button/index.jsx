import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({ type, className, children, handleClick }) {
  return (
    <button className={`${className} ${styles['w-button']}`} type={type} onClick={handleClick}>
      {children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  innerText: PropTypes.string,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  type: 'button',
  className: '',
  innerText: 'ok',
  handleClick: () => {},
};
export default Button;
