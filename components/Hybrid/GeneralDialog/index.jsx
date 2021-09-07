/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import dialogStyles from './generalDialog.module.scss';

function GeneralDialog({ children, containerClassName, closeHandler }) {
  return (
    <div className={`${dialogStyles['general-dialog']} ${containerClassName}`}>
      <div className={dialogStyles['close-overlay']} onClick={() => closeHandler(false)} />
      {children}
    </div>
  );
}

GeneralDialog.propTypes = {
  children: PropTypes.node,
  containerClassName: PropTypes.string,
};
GeneralDialog.defaultProps = {
  containerClassName: '',
};

export default GeneralDialog;
