import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({ type, className, children, handleClick, ...props }) {
  return (
    <button className={`${className} ${styles['w-button']}`} type={type} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  type: 'button',
  className: '',
  children: 'ok',
  handleClick: () => {},
};
export default Button;
