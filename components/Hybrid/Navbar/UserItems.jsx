import React from 'react';
import style from './navbar.module.scss';
import Button from '../../Infrastructure/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const UserItems = (props) => {
  const { user } = props;

  const logOut = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <>
      <div className={style['popover-wrapper']}>
        <div className={style['popover-holder']}>
          <span>{user.name}</span>
          <ul className={style['popover']}>
            <li className={`${style['popover-item-wrapper']} ${style['logout']}`}>
              <Button className={style['popover-item']} handleClick={logOut}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>logout</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserItems;
