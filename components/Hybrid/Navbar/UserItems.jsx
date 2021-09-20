import React from 'react';
import style from './navbar.module.scss';
import Button from '../../Infrastructure/Button';

const UserItems = (props) => {
  const { user } = props;

  const logOut = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div className={style['popover-wrapper']}>
      <div className={style['popover-holder']}>
        <span>{user.name}</span>
        <div className={style['popover']}>
          <div className={style['popover-wrapper']}>
            <Button className={style['popover-item']} handleClick={logOut}>
              logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItems;
