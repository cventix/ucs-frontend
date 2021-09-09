import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './Testimonial.module.scss';

const Testimonial = ({ title, description, writer }) => {
  return (
    <Fragment>
      <div className={style.Container}>
        <h2 className={style.Title}>{title}</h2>
        <p className={style.Description}>{description}</p>
        <div className={style.Writer}>{writer}</div>
      </div>
    </Fragment>
  );
};

Testimonial.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  writer: PropTypes.string,
};

Testimonial.defaultProps = {
  title: '',
  description: '',
  writer: '',
};

export default Testimonial;
